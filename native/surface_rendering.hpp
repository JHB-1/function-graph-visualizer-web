#pragma once

#include <algorithm>
#include <array>
#include <cmath>
#include <cstddef>
#include <limits>
#include <set>
#include <stdexcept>
#include <string>
#include <vector>

#include <nlohmann/json.hpp>

#include <fgv/core.hpp>

namespace fgv_plugin
{
	// 표시선 수와 샘플 수 분리, 양 끝 포함과 중복 없는 균등 인덱스 선택
	inline std::vector<std::size_t> select_tracks(std::size_t size, std::size_t count)
	{
		if (size < 2 or count < 2)
			throw std::invalid_argument("surface tracks require at least two samples and tracks");

		count = std::min(size, count);
		std::vector<std::size_t> result;
		for (std::size_t index = 0; index < count; ++index)
			result.push_back(index * (size - 1) / (count - 1));

		return result;
	}

	inline nlohmann::json surface_rendering
	(
		const fgv::graph_geometry& geometry,
		std::size_t u_count,
		std::size_t v_count,
		const nlohmann::json& settings
	)
	{
		using nlohmann::json;
		const bool regular = u_count != 0 and v_count != 0;
		const std::string mode = settings.value("wireframe", regular ? "grid" : "triangles");
		const std::array<std::size_t, 2> counts = settings.value("wireframe_lines", std::array<std::size_t, 2> { 11, 11 });
		const json lod = settings.value("lod", json::object());
		json result =
		{
			{ "wireframe_indices", json::array() }, { "levels", json::array() },
			{ "lod_enabled", lod.value("enabled", true) }, { "max_error_pixels", lod.value("max_error_pixels", 1.0) }
		};
		const double pixel_error = result["max_error_pixels"];
		if ((mode != "grid" and mode != "triangles" and mode != "none") or
			counts[0] < 2 or counts[0] > 1000 or counts[1] < 2 or counts[1] > 1000 or
			not std::isfinite(pixel_error) or pixel_error <= 0 or 20 < pixel_error)
			throw std::invalid_argument("invalid surface rendering settings");

		std::set<std::array<std::size_t, 2>> edges;
		for (const auto& triangle : geometry.triangles)
			for (std::size_t index = 0; index < 3; ++index)
			{
				const auto [lower, upper] = std::minmax(triangle[index], triangle[(index + 1) % 3]);
				edges.insert({ lower, upper });
			}

		std::vector<std::size_t> indices(regular ? u_count * v_count : 0, std::numeric_limits<std::size_t>::max());
		if (regular)
			for (std::size_t index = 0; index < geometry.vertices.size(); ++index)
				indices.at(geometry.vertices[index].source_index) = index;

		if (mode == "triangles")
			result["wireframe_indices"] = edges;
		else if (mode == "grid" and regular)
		{
			// 기존 셀 모서리만 선택, 결측/퇴화 셀을 가로지르는 새 연결 금지
			const auto append = [&edges, &indices, &result](std::size_t begin, std::size_t end) -> void
			{
				const auto [lower, upper] = std::minmax(indices[begin], indices[end]);
				if (edges.contains({ lower, upper }))
					result["wireframe_indices"].push_back({ lower, upper });
			};
			for (const std::size_t u : select_tracks(u_count, counts[0]))
				for (std::size_t v = 1; v < v_count; ++v)
					append((v - 1) * u_count + u, v * u_count + u);

			for (const std::size_t v : select_tracks(v_count, counts[1]))
				for (std::size_t u = 1; u < u_count; ++u)
					append(v * u_count + u - 1, v * u_count + u);
		}

		// 결측/퇴화가 없는 정규 곡면만 LOD 후보 구성, 원본 기하/인덱스/범위 보존
		if (not regular or not result["lod_enabled"].get<bool>() or geometry.vertices.size() != indices.size() or
			geometry.triangles.size() != 2 * (u_count - 1) * (v_count - 1))
			return result;

		fgv::dataset data;
		data.dimension_count = 3;
		for (const auto& vertex : geometry.vertices)
			data.values.insert(data.values.end(), { vertex.position.x, vertex.position.y, vertex.position.z });

		const auto position = [&geometry, &indices, u_count](std::size_t u, std::size_t v) -> fgv::point3
		{
			return geometry.vertices[indices[v * u_count + u]].position;
		};
		const auto norm = [](fgv::point3 value) -> double
		{
			const double length = std::hypot(value.x, value.y, value.z);

			return std::isfinite(length) ? length : std::numeric_limits<double>::infinity();
		};
		const auto difference = [](fgv::point3 left, fgv::point3 right) -> fgv::point3
		{
			return { left.x - right.x, left.y - right.y, left.z - right.z };
		};
		const auto mixed = [&difference, &norm](fgv::point3 a, fgv::point3 b, fgv::point3 c, fgv::point3 d) -> double
		{
			return norm(difference(difference(a, b), difference(c, d))) / 4;
		};
		for (std::size_t step = 2; step < std::max(u_count, v_count) * 2; step *= 2)
		{
			std::vector<std::size_t> us;
			std::vector<std::size_t> vs;
			for (std::size_t u = 0; u < u_count - 1; u += step)
				us.push_back(u);

			for (std::size_t v = 0; v < v_count - 1; v += step)
				vs.push_back(v);

			us.push_back(u_count - 1);
			vs.push_back(v_count - 1);
			fgv::grid_topology grid { us.size(), vs.size(), { } };
			for (const std::size_t v : vs)
				for (const std::size_t u : us)
					grid.row_indices.push_back(indices[v * u_count + u]);

			const auto coarse = fgv::make_surface(data, std::array<std::size_t, 3> { 0, 1, 2 }, grid);
			if (coarse.triangles.size() != 2 * (us.size() - 1) * (vs.size() - 1))
				continue;

			json triangles = json::array();
			for (const auto& triangle : coarse.triangles)
				triangles.push_back
				(
					{ coarse.vertices[triangle[0]].source_index, coarse.vertices[triangle[1]].source_index,
						coarse.vertices[triangle[2]].source_index }
				);

			double error = 0;
			for (std::size_t j = 1; j < vs.size(); ++j)
				for (std::size_t i = 1; i < us.size(); ++i)
				{
					const std::size_t left = us[i - 1], right = us[i], bottom = vs[j - 1], top = vs[j];
					const fgv::point3 a = position(left, bottom), b = position(right, bottom);
					const fgv::point3 c = position(left, top), d = position(right, top);
					double deviation = 0;
					double fine_mixed = 0;
					for (std::size_t v = bottom; v <= top; ++v)
						for (std::size_t u = left; u <= right; ++u)
						{
							const double x = static_cast<double>(u - left) / (right - left);
							const double y = static_cast<double>(v - bottom) / (top - bottom);
							const fgv::point3 bilinear =
							{
								std::lerp(std::lerp(a.x, b.x, x), std::lerp(c.x, d.x, x), y),
								std::lerp(std::lerp(a.y, b.y, x), std::lerp(c.y, d.y, x), y),
								std::lerp(std::lerp(a.z, b.z, x), std::lerp(c.z, d.z, x), y)
							};
							deviation = std::max(deviation, norm(difference(position(u, v), bilinear)));
							if (u < right and v < top)
								fine_mixed = std::max
								(
									fine_mixed, mixed(position(u, v), position(u + 1, v), position(u, v + 1), position(u + 1, v + 1))
								);
							}

					// 쌍선형 보간과 삼각형의 차이는 혼합항 노름/4 이하, 원본/후보 차이의 보수적 상한
					error = std::max(error, deviation + mixed(a, b, c, d) + fine_mixed);
				}

			if (not std::isfinite(error))
				break;

			result["levels"].push_back({ { "triangles", std::move(triangles) }, { "max_error_world", error } });
			if (us.size() == 2 and vs.size() == 2)
				break;
		}

		return result;
	}
}
