#include <algorithm>
#include <array>
#include <cmath>
#include <cstddef>
#include <iostream>
#include <limits>
#include <optional>
#include <span>
#include <stdexcept>
#include <string>
#include <utility>
#include <vector>

#include <nlohmann/json.hpp>

#include <fgv/stream.hpp>
#include <fgv/theme.hpp>

#include "surface_rendering.hpp"

namespace fgv_web
{
	using nlohmann::json;

	fgv::point3 point(const json& value)
	{
		return { value.at(0), value.at(1), value.at(2) };
	}

	json encode(fgv::point3 value)
	{
		return { value.x, value.y, value.z };
	}

	json encode(fgv::color value)
	{
		return { value.r, value.g, value.b, value.a };
	}

	json encode(const fgv::bounds3& value)
	{
		return { { "lower", encode(value.lower) }, { "upper", encode(value.upper) } };
	}

	fgv::color color(const json& value)
	{
		if (not value.is_array() or value.size() != 4) throw std::invalid_argument("RGBA requires four integer channels");

		for (const json& channel : value)
			if (not channel.is_number_unsigned() or 255 < channel.get<std::size_t>())
				throw std::invalid_argument("RGBA channels must be integers within 0..255");

		return { value.at(0), value.at(1), value.at(2), value.at(3) };
	}

	fgv::view2d view(const json& value)
	{
		return { { value.at("lower").at(0), value.at("lower").at(1) },
			     { value.at("upper").at(0), value.at("upper").at(1) },
			     value.value("preserve_aspect", true) };
	}

	fgv::camera3d camera(const json& value)
	{
		if (value.contains("projection") and value.at("projection") != "orthographic" and value.at("projection") != "perspective")
			throw std::invalid_argument("camera projection must be orthographic or perspective");

		fgv::camera3d result;
		if (value.contains("eye")) result.eye = point(value.at("eye"));
		if (value.contains("target")) result.target = point(value.at("target"));
		if (value.contains("up")) result.up = point(value.at("up"));
		if (value.contains("projection"))
			result.projection =
			    value.at("projection") == "orthographic" ? fgv::projection_kind::orthographic : fgv::projection_kind::perspective;
		result.fov_y = value.value("fov_y", result.fov_y);
		result.near_distance = value.value("near_distance", result.near_distance);
		result.far_distance = value.value("far_distance", result.far_distance);
		result.orthographic_width = value.value("orthographic_width", result.orthographic_width);
		result.orthographic_height = value.value("orthographic_height", result.orthographic_height);

		return result;
	}

	// 동일 멤버 표로 일반 문서와 명시 override의 해석 유지
	const std::array<std::pair<const char*, fgv::color fgv::graph_style::*>, 5> colors { { { "stroke", &fgv::graph_style::stroke },
		                                                                                   { "fill", &fgv::graph_style::fill },
		                                                                                   { "background", &fgv::graph_style::background },
		                                                                                   { "grid", &fgv::graph_style::grid },
		                                                                                   { "axes", &fgv::graph_style::axes } } };
	const std::array<std::pair<const char*, std::optional<fgv::color> fgv::graph_style::*>, 5> optional_colors {
		{ { "points", &fgv::graph_style::points },
		  { "surface", &fgv::graph_style::surface },
		  { "bars", &fgv::graph_style::bars },
		  { "wireframe", &fgv::graph_style::wireframe },
		  { "text", &fgv::graph_style::text } }
	};
	const std::array<std::pair<const char*, double fgv::graph_style::*>, 7> numbers { { { "line_width", &fgv::graph_style::line_width },
		                                                                                { "point_radius", &fgv::graph_style::point_radius },
		                                                                                { "grid_width", &fgv::graph_style::grid_width },
		                                                                                { "axis_width", &fgv::graph_style::axis_width },
		                                                                                { "arrow_length", &fgv::graph_style::arrow_length },
		                                                                                { "arrow_width", &fgv::graph_style::arrow_width },
		                                                                                { "bar_gap", &fgv::graph_style::bar_gap } } };

	void read_style(fgv::graph_style& result, const json& value)
	{
		for (const auto& [name, member] : colors)
			if (value.contains(name)) result.*member = color(value.at(name));
		for (const auto& [name, member] : optional_colors)
			if (member and value.contains(name)) result.*member = color(value.at(name));
		for (const auto& [name, member] : numbers)
			if (member and value.contains(name)) result.*member = value.at(name);
		if (value.contains("axis_colors"))
			for (std::size_t index = 0; index < 3; ++index)
				if (not value.at("axis_colors").at(index).is_null()) result.axis_colors[index] = color(value.at("axis_colors").at(index));
	}

	void read_patch(fgv::presentation_patch& patch, const json& value)
	{
		// sparse style_patch 구성, 명시 기본값도 보존
		if (value.contains("style"))
		{
			const json& style = value.at("style");
			auto assign_color = [&style](const char* name, std::optional<fgv::color>& target) -> void
			{
				if (style.contains(name)) target = color(style.at(name));
			};
			assign_color("stroke", patch.style.stroke);
			assign_color("fill", patch.style.fill);
			assign_color("background", patch.style.background);
			assign_color("grid", patch.style.grid);
			assign_color("axes", patch.style.axes);
			assign_color("points", patch.style.points);
			assign_color("surface", patch.style.surface);
			assign_color("bars", patch.style.bars);
			assign_color("wireframe", patch.style.wireframe);
			assign_color("text", patch.style.text);
			if (style.contains("axis_colors"))
				for (std::size_t index = 0; index < 3; ++index)
					if (not style.at("axis_colors").at(index).is_null())
						patch.style.axis_colors[index] = color(style.at("axis_colors").at(index));
			if (style.contains("line_width")) patch.style.line_width = style.at("line_width");
			if (style.contains("point_radius")) patch.style.point_radius = style.at("point_radius");
			if (style.contains("grid_width")) patch.style.grid_width = style.at("grid_width");
			if (style.contains("axis_width")) patch.style.axis_width = style.at("axis_width");
			if (style.contains("arrow_length")) patch.style.arrow_length = style.at("arrow_length");
			if (style.contains("arrow_width")) patch.style.arrow_width = style.at("arrow_width");
			if (style.contains("bar_gap")) patch.style.bar_gap = style.at("bar_gap");
		}
		if (value.contains("show_grid")) patch.show_grid = value.at("show_grid");
		if (value.contains("show_axes")) patch.show_axes = value.at("show_axes");
		if (value.contains("show_axis_arrows")) patch.show_axis_arrows = value.at("show_axis_arrows");
		if (value.contains("display_range") and not value.at("display_range").is_null())
			patch.display_range = { point(value.at("display_range").at("lower")), point(value.at("display_range").at("upper")) };
		if (value.contains("view") and not value.at("view").is_null()) patch.view = view(value.at("view"));
		if (value.contains("camera") and not value.at("camera").is_null()) patch.camera = camera(value.at("camera"));
		patch.automatic_range = value.value("automatic_range", false);
		patch.automatic_view = value.value("automatic_view", false);
		patch.automatic_camera = value.value("automatic_camera", false);
		for (const std::string name : { "grid_spacing", "axis_lengths" })
			if (value.contains(name))
				for (std::size_t index = 0; index < 3; ++index)
					if (not value.at(name).at(index).is_null())
						(name == "grid_spacing" ? patch.grid_spacing : patch.axis_lengths)[index] = value.at(name).at(index);
		if (value.contains("grid_origin")) patch.grid_origin = point(value.at("grid_origin"));
		if (value.contains("axis_origin")) patch.axis_origin = point(value.at("axis_origin"));
	}

	fgv::axis_info axis_info(const json& value)
	{
		return { value.value("label", ""), value.value("unit", "") };
	}

	fgv::graph_presentation presentation(const json& value)
	{
		fgv::graph_presentation result;
		result.title = value.value("title", "");
		if (value.contains("axes"))
			for (std::size_t index = 0; index < value.at("axes").size(); ++index)
				result.axes.at(index) = axis_info(value.at("axes").at(index));
		if (value.contains("style")) read_style(result.style, value.at("style"));
		if (value.contains("show_grid")) result.show_grid = value.at("show_grid");
		if (value.contains("show_axes")) result.show_axes = value.at("show_axes");
		if (value.contains("show_axis_arrows")) result.show_axis_arrows = value.at("show_axis_arrows");
		if (value.contains("view")) result.view = view(value.at("view"));
		if (value.contains("camera")) result.camera = camera(value.at("camera"));
		if (value.contains("display_range"))
			result.display_range = { point(value.at("display_range").at("lower")), point(value.at("display_range").at("upper")) };
		for (const std::string name : { "grid_spacing", "axis_lengths" })
			if (value.contains(name))
				for (std::size_t index = 0; index < 3; ++index)
					if (not value.at(name).at(index).is_null())
						(name == "grid_spacing" ? result.grid_spacing : result.axis_lengths)[index] = value.at(name).at(index);
		if (value.contains("grid_origin")) result.grid_origin = point(value.at("grid_origin"));
		if (value.contains("axis_origin")) result.axis_origin = point(value.at("axis_origin"));
		if (value.contains("overrides")) read_patch(result.overrides, value.at("overrides"));

		return result;
	}

	// Python에서 검증한 제한 AST만 해석, 코드 실행/파서 콜백 보관 없음
	double evaluate(const json& node, std::span<const double> values)
	{
		const std::string op = node.at(0);
		if (op == "number") return node.at(1);
		if (op == "variable") 
		{
			const std::size_t index = node.at(1);
			if (index >= values.size()) throw std::invalid_argument("variable index exceeds dimensions");

			return values[index];
		}
		const double left = evaluate(node.at(1), values);
		if (op == "neg") return -left;
		if (op == "pos") return left;
		if (op == "sin") return std::sin(left);
		if (op == "cos") return std::cos(left);
		if (op == "tan") return std::tan(left);
		if (op == "exp") return std::exp(left);
		if (op == "log") return std::log(left);
		if (op == "sqrt") return std::sqrt(left);
		if (op == "abs") return std::abs(left);
		const double right = evaluate(node.at(2), values);
		if (op == "add") return left + right;
		if (op == "sub") return left - right;
		if (op == "mul") return left * right;
		if (op == "div") return left / right;
		if (op == "pow") return std::pow(left, right);
		if (op == "min") return std::min(left, right);
		if (op == "max") return std::max(left, right);

		throw std::invalid_argument("unsupported expression operation");
	}

	std::vector<double> flatten(const json& rows)
	{
		std::vector<double> result;
		for (const json& row : rows)
			for (const json& value : row)
				result.push_back(value.is_null() ? std::numeric_limits<double>::quiet_NaN() : value.get<double>());

		return result;
	}

	json encode(const fgv::geometry_delta& delta)
	{
		json vertices = json::array();
		for (const fgv::vertex& vertex : delta.upserted_vertices)
			vertices.push_back({ { "row_id", vertex.source_index }, { "position", encode(vertex.position) } });

		return
		{
			{ "previous_revision", delta.previous_revision }, { "revision", delta.revision },
			{ "inserted_rows", delta.inserted_rows }, { "removed_vertices", delta.removed_vertices },
			{ "upserted_vertices", vertices }, { "removed_segments", delta.removed_segments },
			{ "upserted_segments", delta.upserted_segments }
		};
	}

	json encode(const fgv::histogram_delta& delta)
	{
		json cells = json::array();
		for (const auto& changed : delta.changed_cells)
			cells.push_back
			(
				{ { "cell_index", changed.cell_index }, { "count", changed.cell.count },
				  { "value", changed.cell.value ? json(*changed.cell.value) : json(nullptr) } }
			);

		return
		{
			{ "previous_revision", delta.previous_revision }, { "revision", delta.revision },
			{ "inserted_rows", delta.inserted_rows }, { "changed_cells", cells }
		};
	}

	template <class Cache> json apply(Cache& cache, const json& changes)
	{
		const std::vector<double> appended = flatten(changes.value("append", json::array()));
		std::vector<std::vector<double>> storage;
		std::vector<fgv::row_replacement> replaced;
		for (const json& row : changes.value("replace", json::array()))
			storage.push_back(flatten(json::array({ row.at("values") })));
		std::size_t index = 0;
		for (const json& row : changes.value("replace", json::array()))
			replaced.push_back({ row.at("row_id"), storage.at(index++) });
		const std::vector<std::size_t> erased = changes.value("erase", std::vector<std::size_t>());
		
		return encode(cache.update({ appended, replaced, erased }));
	}

	fgv::histogram_request histogram(const json& spec)
	{
		fgv::histogram_request result;
		const json& config = spec.at("histogram");
		for (const json& axis : config.at("axes"))
		{
			fgv::bin_axis bin;
			bin.column_index = axis.at("column");
			if (axis.contains("uniform"))
			{
				const json& uniform = axis.at("uniform");
				bin.intervals = fgv::make_uniform_intervals
				(
					uniform.at("lower"), uniform.at("upper"), uniform.at("step"), 1000
				);
			}
			else for (const json& interval : axis.at("intervals"))
				bin.intervals.push_back({ interval.at("lower"), interval.at("upper"), interval.value("include_upper", false) });
			result.axes.push_back(std::move(bin));
		}
		const std::string mode = config.at("mode");
		result.mode = mode == "count" ? fgv::aggregation::count : mode == "sum" ? fgv::aggregation::sum : fgv::aggregation::mean;
		if (config.contains("value_column")) result.value_column = config.at("value_column");
		result.invalid_values =
		    spec.value("invalid_values", "reject") == "skip" ? fgv::invalid_value_policy::skip : fgv::invalid_value_policy::reject;

		return result;
	}

	json run(const json& input)
	{
		const json& spec = input.at("spec");
		const std::string kind = spec.at("kind");
		const std::size_t dimensions = spec.at("dimension_count");
		const fgv::build_limits limits { 50'000, 100'000, 100'000, 1'000 };
		const fgv::stream_limits stream_limits { 10'000, 160'000, limits };
		const auto profile = fgv::parse_theme_profile(spec.value("theme", "fgv-theme 1\n"));
		fgv::graph_presentation display = presentation(spec.value("presentation", json::object()));
		const json navigation = input.value("navigation", json::object());
		if (not navigation.empty())
		{
			const double zoom = navigation.value("zoom", 1.0);
			const json pan = navigation.value("pan", json::array({ 0, 0, 0 }));
			if (display.overrides.view)
				display.overrides.view = fgv::pan_view(fgv::zoom_view(*display.overrides.view, zoom), { pan.at(0), pan.at(1) });
			if (display.overrides.camera)
				display.overrides.camera = fgv::pan_camera(fgv::zoom_camera(*display.overrides.camera, zoom), point(pan));
		}
		fgv::dataset_document document;
		document.presentation = display;
		for (const json& entry : spec.value("dimensions", json::array()))
			document.dimensions.push_back(axis_info(entry));
		fgv::graph_scene scene;
		json row_ids = json::array();
		json cells = json::array();
		json sampling_axes = json::array();
		std::size_t cache_revision = 0;
		json last_delta = nullptr;
		if (kind == "function")
		{
			const json& tree = input.at("expression_ast");
			const fgv::raw_function function { dimensions,
				                               [&tree](std::span<const double> values) -> double { return evaluate(tree, values); } };
			fgv::function_sampling sampling;
			for (const json& axis : spec.at("sampling").at("axes"))
				sampling.axes.push_back({ axis.at("variable"), axis.at("lower"), axis.at("upper"), axis.at("count") });
			for (const json& value : spec.at("sampling").at("fixed"))
				sampling.fixed_values.push_back(value.is_null() ? std::nullopt : std::optional<double>(value.get<double>()));
			sampling.invalid_values =
			    spec.value("invalid_values", "reject") == "skip" ? fgv::invalid_value_policy::skip : fgv::invalid_value_policy::reject;
			if (sampling.axes.size() == 2 and not navigation.empty())
			{
				const auto effective = fgv::resolve_theme(display, profile, 3);
				const fgv::bounds3 domain_bounds = effective.display_range.value_or
				(
					fgv::bounds3 { { sampling.axes[0].lower, sampling.axes[1].lower, 0 },
						          { sampling.axes[0].upper, sampling.axes[1].upper, 0 } }
				);
				const fgv::view2d domain { { domain_bounds.lower.x, domain_bounds.lower.y },
					                       { domain_bounds.upper.x, domain_bounds.upper.y }, false };
				const json pan = navigation.value("pan", json::array({ 0, 0, 0 }));
				const auto changed = fgv::pan_view(fgv::zoom_view(domain, navigation.value("zoom", 1.0)), { pan.at(0), pan.at(1) });
				sampling.axes[0].lower = changed.lower.x;
				sampling.axes[0].upper = changed.upper.x;
				sampling.axes[1].lower = changed.lower.y;
				sampling.axes[1].upper = changed.upper.y;
				display.overrides.automatic_range = true;
				display.overrides.display_range.reset();
			}
			const fgv::function_document function_document {
				function, document.dimensions, axis_info(spec.value("output", json::object())), display
			};
			scene = fgv::make_scene(profile, function_document, sampling, limits);

			// 실제 해석된 입력 범위 반환, 결측/퇴화 기하의 bounds와 독립
			for (std::size_t index = 0; index < sampling.axes.size(); ++index)
			{
				fgv::sample_axis axis = sampling.axes[index];
				if (scene.presentation.display_range)
				{
					const fgv::bounds3& range = *scene.presentation.display_range;
					axis.lower = index == 0 ? range.lower.x : range.lower.y;
					axis.upper = index == 0 ? range.upper.x : range.upper.y;
				}
				else if (sampling.axes.size() == 1 and scene.presentation.view)
				{
					const fgv::view2d& view = *scene.presentation.view;
					axis.lower = view.lower.x;
					axis.upper = view.upper.x;
				}

				sampling_axes.push_back
				(
					{ { "variable", axis.variable_index }, { "lower", axis.lower },
					  { "upper", axis.upper }, { "count", axis.sample_count } }
				);
			}
		}
		else
		{
			document.data = { dimensions, flatten(spec.at("rows")) };
			if (kind == "histogram")
			{
				const auto request = histogram(spec);
				// 설정/행/ID를 후보 캐시에 재현, 프레임까지 성공해야 호스트가 교체
				fgv::incremental_histogram cache(dimensions, request, stream_limits);
				last_delta = encode(cache.update({ document.data.values }));
				for (const json& batch : input.at("history"))
					last_delta = apply(cache, batch);
				document.data = cache.snapshot_data();
				row_ids = cache.row_ids();
				cache_revision = cache.revision();
				const auto snapshot = cache.snapshot();
				for (const auto& cell : snapshot.cells)
					cells.push_back({ { "count", cell.count }, { "value", cell.value ? json(*cell.value) : json(nullptr) } });
				scene = fgv::make_histogram_scene(profile, document, request, limits);
			}
			else
			{
				fgv::dataset_plot plot;
				plot.columns = spec.at("columns").get<std::vector<std::size_t>>();
				plot.kind = spec.value("plot", "curve") == "points" ? fgv::plot_kind::points : fgv::plot_kind::curve;
				plot.invalid_values =
				    spec.value("invalid_values", "reject") == "skip" ? fgv::invalid_value_policy::skip : fgv::invalid_value_policy::reject;
				if (spec.value("plot", "curve") == "surface") plot.kind = fgv::plot_kind::surface;
				if (spec.contains("paths")) plot.paths = spec.at("paths").get<std::vector<std::vector<std::size_t>>>();
				if (spec.contains("grid"))
				{
					const json& grid = spec.at("grid");
					plot.grid = fgv::grid_topology
					{
						grid.at("u_count"), grid.at("v_count"),
						grid.value("row_indices", std::vector<std::size_t>())
					};
					if (not grid.contains("row_indices"))
						for (std::size_t index = 0; index < spec.at("rows").size(); ++index)
							plot.grid->row_indices.push_back(index);
				}

				if (plot.kind == fgv::plot_kind::surface or plot.paths)
				{
					if (not input.at("history").empty())
						throw std::invalid_argument("incremental updates support points and input-order curves only");

					for (std::size_t index = 0; index < spec.at("rows").size(); ++index) row_ids.push_back(index);
				}
				else
				{
					fgv::incremental_plot cache(dimensions, plot, stream_limits);
					last_delta = encode(cache.update({ document.data.values }));
					for (const json& batch : input.at("history")) last_delta = apply(cache, batch);
					document.data = cache.snapshot_data();
					row_ids = cache.row_ids();
					cache_revision = cache.revision();
				}

				scene = fgv::make_scene(profile, document, plot, limits);
				// 압축 snapshot과 고정 행 ID의 구별 유지
				for (auto& vertex : scene.geometry.vertices)
					vertex.source_index = row_ids.at(vertex.source_index);
			}
		}

		// 플러그인 기본 축 표현, 문서/프로파일의 명시 값은 기본값과 같아도 보존
		const json legacy_style = spec.value("presentation", json::object()).value("style", json::object());
		const bool host_axes = not profile.defaults.style.axes and not display.overrides.style.axes and
			not legacy_style.contains("axes");
		std::array<bool, 3> host_axis_colors = {};
		const std::array<fgv::color, 3> spatial_colors =
		{
			fgv::color { 255, 0, 0, 255 }, fgv::color { 0, 255, 0, 255 }, fgv::color { 0, 0, 255, 255 }
		};
		for (std::size_t index = 0; index < host_axis_colors.size(); ++index)
		{
			host_axis_colors[index] = host_axes and not profile.defaults.style.axis_colors[index] and
				not display.overrides.style.axis_colors[index] and
				(not legacy_style.contains("axis_colors") or legacy_style.at("axis_colors").at(index).is_null());
			if (host_axis_colors[index])
				scene.presentation.style.axis_colors[index] = scene.geometry.display_dimension == 3 ?
					spatial_colors[index] : fgv::color { 0, 0, 0, 255 };
		}

		if (not profile.defaults.style.axis_width and not display.overrides.style.axis_width and
			not legacy_style.contains("axis_width"))
			scene.presentation.style.axis_width *= 1.5;

		// 초기 자동 범위/카메라를 월드 좌표에서 결정, 코어 투영/절단만 사용
		const bool use_view = not scene.presentation.display_range and scene.presentation.view.has_value();
		if (scene.geometry.display_dimension == 2 and use_view)
		{
			// 후보 수 검사 전 표시 뷰 적용, 히스토그램 원본 집계 구간은 유지
			const fgv::view2d& view = *scene.presentation.view;
			scene.presentation.display_range =
			{
				{ view.lower.x, view.lower.y, 0 }, { view.upper.x, view.upper.y, 0 }
			};
		}

		const fgv::plot_frame frame = fgv::make_plot_frame(scene, 1000);
		const fgv::bounds3 bounds = frame.range;
		fgv::view2d resolved_view { { bounds.lower.x, bounds.lower.y }, { bounds.upper.x, bounds.upper.y }, false };
		if (use_view) resolved_view = *scene.presentation.view;
		fgv::camera3d resolved_camera;
		const fgv::point3 center { (bounds.lower.x + bounds.upper.x) / 2,
			                       (bounds.lower.y + bounds.upper.y) / 2,
			                       (bounds.lower.z + bounds.upper.z) / 2 };
		const double extent =
		    std::max({ bounds.upper.x - bounds.lower.x, bounds.upper.y - bounds.lower.y, bounds.upper.z - bounds.lower.z, 1.0 });
		const json canvas_size = input.value("canvas_size", json::array({ 1000, 700 }));
		const double width = canvas_size.at(0);
		const double height = canvas_size.at(1);
		if (not std::isfinite(width) or not std::isfinite(height) or width < 64 or height < 64 or
			4096 < width or 4096 < height)
			throw std::invalid_argument("canvas dimensions must be within 64..4096");

		const fgv::viewport area = input.contains("canvas_size") ?
			fgv::viewport { 0, 0, width, height } : fgv::viewport { 75, 45, 850, 585 };
		resolved_camera.target = center;

		// 양의 세 축 방향에서 보는 등각 정투상, 화면 축척 일치로 투영 축 사이 120도 유지
		resolved_camera.eye = { center.x + extent * 2, center.y + extent * 2, center.z + extent * 2 };
		resolved_camera.projection = fgv::projection_kind::orthographic;
		resolved_camera.fov_y = 0.75;
		resolved_camera.far_distance = extent * 100;
		resolved_camera.near_distance = extent * 0.001;

		// 투영된 데이터 경계에 초기 화면 맞춤, 등각 축척/여유 공간 유지
		const auto basis = fgv::make_view_matrix(resolved_camera);
		const std::array<double, 3> spans =
		{
			bounds.upper.x - bounds.lower.x, bounds.upper.y - bounds.lower.y, bounds.upper.z - bounds.lower.z
		};
		double projected_width = 0;
		double projected_height = 0;
		for (std::size_t index = 0; index < spans.size(); ++index)
		{
			projected_width += std::abs(basis[index]) * spans[index];
			projected_height += std::abs(basis[4 + index]) * spans[index];
		}

		resolved_camera.orthographic_height = 1.18 * std::max(projected_height, projected_width * area.height / area.width);
		resolved_camera.orthographic_width = resolved_camera.orthographic_height * area.width / area.height;
		resolved_camera = scene.presentation.camera.value_or(resolved_camera);
		fgv::camera3d render_camera = resolved_camera;
		if (scene.geometry.display_dimension == 2)
		{
			// 2D 종횡비 해석도 코어 투영 결과 사용, GPU에는 코어 행렬 전달
			const fgv::point2 low = fgv::project(resolved_view, area, resolved_view.lower);
			const fgv::point2 high = fgv::project(resolved_view, area, resolved_view.upper);
			const double x = (resolved_view.lower.x + resolved_view.upper.x) / 2;
			const double y = (resolved_view.lower.y + resolved_view.upper.y) / 2;
			render_camera.eye = { x, y, 1 };
			render_camera.target = { x, y, 0 };
			render_camera.up = { 0, 1, 0 };
			render_camera.projection = fgv::projection_kind::orthographic;
			render_camera.near_distance = 0.01;
			render_camera.far_distance = 10;
			render_camera.orthographic_width = (resolved_view.upper.x - resolved_view.lower.x) * area.width / (high.x - low.x);
			render_camera.orthographic_height = (resolved_view.upper.y - resolved_view.lower.y) * area.height / (low.y - high.y);
		}

		const auto project_point = [&scene, &resolved_view, &resolved_camera, &area](fgv::point3 p) -> json
		{
			if (scene.geometry.display_dimension == 2)
			{
				const fgv::point2 screen = fgv::project(resolved_view, area, { p.x, p.y });

				return { screen.x, screen.y, 0 };
			}
			const auto screen = fgv::project(resolved_camera, area, p);
			if (not screen) return nullptr;
			const fgv::screen_point& value = *screen;

			return { value.position.x, value.position.y, value.depth };
		};
		const auto project_line = [&scene, &resolved_view, &resolved_camera, &area](const fgv::line3& line) -> json
		{
			const auto projected = scene.geometry.display_dimension == 2 ? fgv::project_line(resolved_view, area, line)
			                                                             : fgv::project_line(resolved_camera, area, line);
			if (not projected) return nullptr;
			const auto& value = *projected;

			return { { value[0].position.x, value[0].position.y }, { value[1].position.x, value[1].position.y } };
		};
		const auto project_segment = [&scene, &resolved_view, &resolved_camera, &area](fgv::point3 begin, fgv::point3 end) -> json
		{
			if (begin == end) return nullptr;
			const auto projected = scene.geometry.display_dimension == 2 ? fgv::project_segment(resolved_view, area, begin, end)
			                                                             : fgv::project_segment(resolved_camera, area, begin, end);
			if (not projected) return nullptr;
			const auto& value = *projected;

			return { { value[0].position.x, value[0].position.y }, { value[1].position.x, value[1].position.y } };
		};
		json style = json::object();
		for (const auto& [name, member] : colors)
			style[name] = encode(scene.presentation.style.*member);
		for (const auto& [name, member] : optional_colors)
			if (member) style[name] = encode((scene.presentation.style.*member).value_or(scene.presentation.style.stroke));
		style["surface"] = encode(scene.presentation.style.surface.value_or(scene.presentation.style.fill));
		style["bars"] = encode(scene.presentation.style.bars.value_or(scene.presentation.style.fill));
		for (const auto& [name, member] : numbers)
			if (member) style[name] = scene.presentation.style.*member;
		style["axis_colors"] = json::array();
		for (const auto& axis_color : frame.axis_colors)
			style["axis_colors"].push_back(encode(axis_color));
		json result {
			{ "title", scene.presentation.title },
			{ "dimension", scene.geometry.display_dimension },
			{ "style", style },
			{ "range", encode(frame.range) },
			{ "bounds", scene.geometry.bounds ? encode(*scene.geometry.bounds) : json(nullptr) },
			{ "view",
			  { { "lower", { resolved_view.lower.x, resolved_view.lower.y } },
			    { "upper", { resolved_view.upper.x, resolved_view.upper.y } },
			    { "preserve_aspect", resolved_view.preserve_aspect } } },
			{ "camera",
			  { { "eye", encode(resolved_camera.eye) },
			    { "target", encode(resolved_camera.target) },
			    { "up", encode(resolved_camera.up) },
			    { "projection", resolved_camera.projection == fgv::projection_kind::perspective ? "perspective" : "orthographic" },
			    { "fov_y", resolved_camera.fov_y },
			    { "near_distance", resolved_camera.near_distance },
			    { "far_distance", resolved_camera.far_distance },
			    { "orthographic_width", resolved_camera.orthographic_width },
			    { "orthographic_height", resolved_camera.orthographic_height } } },
			{ "show_grid", scene.presentation.show_grid },
			{ "show_axes", scene.presentation.show_axes },
			{ "show_axis_arrows", scene.presentation.show_axis_arrows },
			{ "theme", profile.name },
			{ "row_ids", row_ids },
			{ "cells", cells },
			{ "cache_revision", cache_revision },
			{ "last_delta", last_delta },
			{ "stats",
			  { { "skipped_values", scene.geometry.stats.skipped_values },
			    { "outside_rows", scene.geometry.stats.outside_rows },
			    { "degenerate_triangles", scene.geometry.stats.degenerate_triangles } } },
			{ "vertices", json::array() },
			{ "points", scene.geometry.points },
			{ "segments", json::array() },
			{ "triangles", scene.geometry.triangles },
			{ "grid", json::array() },
			{ "axes", json::array() }
		};
		result["sampling_axes"] = sampling_axes;

		// 렌더러 전용 원본 연결/무한 직선과 행렬, 기존 PNG 화면 좌표 계약 유지
		result["rendering"] =
		{
			{ "version", 1 },
			{ "canvas_size", canvas_size },

			// 값 비교로 명시 여부 추정 금지, 문서/프로파일 배경 지정은 호스트 테마보다 우선
			{
				"host_background",
				not profile.defaults.style.background and not display.overrides.style.background and
				not legacy_style.contains("background")
			},
			{ "host_axis_colors", host_axis_colors },
			{ "view_matrix", fgv::make_view_matrix(render_camera) },
			{ "projection_matrix", fgv::make_projection_matrix(render_camera, area) },
			{ "segment_indices", scene.geometry.segments },
			{ "grid_lines", json::array() },
			{ "viewport", { area.x, area.y, area.width, area.height } }
		};
		for (const fgv::line3& line : frame.grid_lines)
			result["rendering"]["grid_lines"].push_back({ { "origin", encode(line.origin) }, { "direction", encode(line.direction) } });

		const bool surface = kind == "function" and sampling_axes.size() == 2;
		result["rendering"]["surface"] = fgv_plugin::surface_rendering
		(
			scene.geometry,
			surface ? sampling_axes[0].at("count").get<std::size_t>() : 0,
			surface ? sampling_axes[1].at("count").get<std::size_t>() : 0,
			spec.value("surface_rendering", json::object())
		);
		if (surface)
		{
			result["wireframe"] = json::array();
			for (const auto& segment : result["rendering"]["surface"]["wireframe_indices"])
				result["wireframe"].push_back
				(
					project_segment
					(
						scene.geometry.vertices.at(segment[0].get<std::size_t>()).position,
						scene.geometry.vertices.at(segment[1].get<std::size_t>()).position
					)
				);
		}

		result["rows"] = json::array();
		if (kind != "function")
			for (std::size_t offset = 0; offset < document.data.values.size(); offset += dimensions)
			{
				json row = json::array();
				for (std::size_t column = 0; column < dimensions; ++column)
					row.push_back(document.data.values.at(offset + column));
				result["rows"].push_back(std::move(row));
			}
		for (const auto& vertex : scene.geometry.vertices)
			result["vertices"].push_back({ { "position", encode(vertex.position) },
			                               { "source_index", vertex.source_index },
			                               { "screen", project_point(vertex.position) } });
		for (const auto& segment : scene.geometry.segments)
			result["segments"].push_back(
			    project_segment(scene.geometry.vertices.at(segment[0]).position, scene.geometry.vertices.at(segment[1]).position)
			);
		for (const auto& line : frame.grid_lines)
			result["grid"].push_back(project_line(line));
		for (std::size_t index = 0; index < scene.geometry.display_dimension; ++index)
		{
			json ticks = json::array();
			for (const double tick : frame.ticks[index])
			{
				fgv::point3 position = frame.axes[index].begin;
				if (index == 0) position.x = tick;
				if (index == 1) position.y = tick;
				if (index == 2) position.z = tick;
				ticks.push_back({ { "value", tick }, { "position", encode(position) }, { "screen", project_point(position) } });
			}
			result["axes"].push_back({ { "label", scene.presentation.axes[index].label },
			                           { "unit", scene.presentation.axes[index].unit },
			                           { "color", encode(frame.axis_colors[index]) },
			                           { "begin", encode(frame.axes[index].begin) },
			                           { "end", encode(frame.axes[index].end) },
			                           { "screen", project_segment(frame.axes[index].begin, frame.axes[index].end) },
			                           { "label_screen", project_point(frame.axes[index].end) },
			                           { "ticks", ticks } });
		}

		return result;
	}
} // namespace
