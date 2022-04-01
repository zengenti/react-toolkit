import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

import packageJson from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      { dir: "./", entryFileNames: packageJson.main, format: "cjs" },
      { file: packageJson.module, format: "esm" },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      postcss(),
      typescript({
        declaration: true,
        declarationDir: "./lib",
        rootDir: "src/",
        exclude: [
          "node_modules",
          "lib",
          "public",
          "**/stories",
          "**/*.stories.ts",
          "**/__tests__",
          "**/*.test.ts",
        ],
      }),
    ],
    external: [
      ...Object.keys(packageJson.dependencies),
      ...Object.keys(packageJson.devDependencies),
      "react-helmet",
    ],
  },
];
