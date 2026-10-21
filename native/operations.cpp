#include <cmath>
#include <stdexcept>
#include <string>

#include <fgv/theme.hpp>

#include "bridge.hpp"

namespace fgv_web
{
	using nlohmann::json;
	fgv::point3 point(const json& value);
	fgv::view2d view(const json& value);
	fgv::camera3d camera(const json& value);
	json encode(fgv::point3 value);

	void validate_tree(const json& node, std::size_t dimensions, std::size_t depth, std::size_t& count)
	{
		if (depth > 64 or ++count > 512 or not node.is_array() or node.empty() or not node.at(0).is_string())
			throw std::invalid_argument("expression exceeds AST limits");

		const std::string operation = node.at(0);
		if (operation == "number")
		{
			if (node.size() != 2 or not node.at(1).is_number() or not std::isfinite(node.at(1).get<double>()))
				throw std::invalid_argument("invalid numeric literal");

			return;
		}

		if (operation == "variable")
		{
			if (node.size() != 2 or not node.at(1).is_number_unsigned() or node.at(1).get<std::size_t>() >= dimensions)
				throw std::invalid_argument("invalid variable index");

			return;
		}

		const bool unary = operation == "neg" or operation == "pos" or operation == "sin" or operation == "cos" or
			operation == "tan" or operation == "exp" or operation == "log" or operation == "sqrt" or operation == "abs";
		const bool binary = operation == "add" or operation == "sub" or operation == "mul" or operation == "div" or
			operation == "pow" or operation == "min" or operation == "max";
		if ((not unary and not binary) or node.size() != (unary ? 2 : 3))
			throw std::invalid_argument("unsupported expression operation/arity");

		for (std::size_t index = 1; index < node.size(); ++index)
			validate_tree(node.at(index), dimensions, depth + 1, count);
	}

	void validate_rows(const json& rows, std::size_t dimensions)
	{
		if (not rows.is_array() or rows.size() > 10000)
			throw std::invalid_argument("rows must be an array with at most 10000 entries");

		for (const json& row : rows)
		{
			if (not row.is_array() or row.size() != dimensions)
				throw std::invalid_argument("each row must match dimension_count");

			for (const json& value : row)
				if (not value.is_null() and (not value.is_number() or not std::isfinite(value.get<double>())))
					throw std::invalid_argument("row values must be finite numbers or null");
		}
	}

	json dispatch(const json& input)
	{
		const std::string operation = input.value("operation", "scene");
		if (operation == "theme")
		{
			const auto profile = fgv::parse_theme_profile(input.at("text").get<std::string>());

			return { { "text", fgv::serialize_theme_profile(profile) }, { "name", profile.name } };
		}

		if (operation == "transform")
		{
			const json& area = input.at("viewport");
			const fgv::viewport viewport { area.at(0), area.at(1), area.at(2), area.at(3) };
			const json& screen = input.at("screen");
			const fgv::point2 pixel { screen.at(0), screen.at(1) };
			const fgv::point3 world = point(input.at("world"));
			const fgv::line3 line { point(input.at("line").at("origin")), point(input.at("line").at("direction")) };
			const auto encode_segment = [](const auto& segment) -> json
			{
				if (not segment) return nullptr;

				const auto& points = *segment;

				return json::array
				(
					{ { points[0].position.x, points[0].position.y, points[0].depth },
					  { points[1].position.x, points[1].position.y, points[1].depth } }
				);
			};
			if (input.at("dimension") == 2)
			{
				const auto state = view(input.at("view"));
				const auto projected = fgv::project(state, viewport, { world.x, world.y });
				const auto unprojected = fgv::unproject(state, viewport, pixel);

				return { { "project", { projected.x, projected.y } }, { "unproject", { unprojected.x, unprojected.y } },
					{ "line", encode_segment(fgv::project_line(state, viewport, line)) },
					{ "segment", encode_segment(fgv::project_segment(state, viewport, world, point(input.at("end")))) } };
			}

			const auto state = camera(input.at("camera"));
			const auto projected = fgv::project(state, viewport, world);
			const auto ray = fgv::make_view_ray(state, viewport, pixel);

			return
			{
				{ "project", projected ? json({ projected->position.x, projected->position.y, projected->depth }) : json(nullptr) },
				{ "ray", { { "origin", encode(ray.origin) }, { "direction", encode(ray.direction) } } },
				{ "line", encode_segment(fgv::project_line(state, viewport, line)) },
				{ "segment", encode_segment(fgv::project_segment(state, viewport, world, point(input.at("end")))) }
			};
		}

		if (operation != "scene") throw std::invalid_argument("unknown operation");

		const json& spec = input.at("spec");
		const std::size_t dimensions = spec.at("dimension_count");
		if (dimensions == 0 or dimensions > 64) throw std::invalid_argument("dimension_count must be within 1..64");

		const std::string kind = spec.at("kind");
		if (kind != "function" and kind != "dataset" and kind != "histogram")
			throw std::invalid_argument("unknown plot kind");

		if (kind == "function")
		{
			std::size_t count = 0;
			validate_tree(input.at("expression_ast"), dimensions, 0, count);
		}
		else validate_rows(spec.at("rows"), dimensions);

		const json& history = input.at("history");
		if (not history.is_array() or history.size() > 128)
			throw std::invalid_argument("demo history limit: 128 batches, export document before starting a new session");

		for (const json& batch : history)
		{
			validate_rows(batch.value("append", json::array()), dimensions);
			for (const json& replacement : batch.value("replace", json::array()))
				validate_rows(json::array({ replacement.at("values") }), dimensions);
		}

		return run(input);
	}
}
