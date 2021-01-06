import fs from "fs";
import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";

const pkg = JSON.parse(
  fs.readFileSync("./package.json", { encoding: "utf-8" })
);

const extensions = [".ts"];

export default {
  input: pkg.source,
  plugins: [
    babel({
      exclude: "node_modules/**",
      extensions,
    }),
    resolve({ extensions }),
    commonjs(),
    terser(),
    json({
      compact: true,
    }),
  ],
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
    {
      name: "ng-streets",
      file: pkg.umd,
      format: "umd",
      sourcemap: true,
    },
  ],
};
