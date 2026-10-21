#pragma once

#include <nlohmann/json.hpp>

namespace fgv_web
{
	nlohmann::json run(const nlohmann::json& input);
	nlohmann::json dispatch(const nlohmann::json& input);
}
