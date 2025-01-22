import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	clean: true,
	minify: true,
	format: ["cjs", "esm"],
	dts: true,
});
