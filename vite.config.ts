import { defineConfig } from "vite";
import { identity } from "./tools/build_identity.mts";
import manifest from "./package.json";
export default defineConfig({ base: "./", worker: { format: "es" }, build: { target: "es2022" },
	define: { __FGV_BUILD_ID__: JSON.stringify(identity()), __FGV_VERSION__: JSON.stringify(manifest.version) } });
