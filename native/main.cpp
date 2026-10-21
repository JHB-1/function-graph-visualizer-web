#include <iostream>
#include <string>

#include "bridge.hpp"

int main()
{
	std::string line;
	while (std::getline(std::cin, line))
		try
		{
			std::cout << fgv_web::dispatch(nlohmann::json::parse(line)).dump() << '\n';
		}
		catch (const std::exception& error)
		{
			std::cout << nlohmann::json({ { "native_error", error.what() } }).dump() << '\n';
		}
}
