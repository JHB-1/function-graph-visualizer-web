#include <exception>
#include <string>

#include "bridge.hpp"

// 동기 호출 결과 버퍼, 다음 호출 전까지 유효
extern "C" const char* fgv_request(const char* source)
{
	static std::string output;
	try
	{
		output = fgv_web::dispatch(nlohmann::json::parse(source)).dump();
	}
	catch (const std::exception& error)
	{
		output = nlohmann::json({ { "native_error", error.what() } }).dump();
	}

	return output.c_str();
}
