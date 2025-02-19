import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs"; 
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve"; 
import json from "@rollup/plugin-json"; 
import postcss from "rollup-plugin-postcss";

import pkg from "./package.json";

export default {
    input: "src/index.tsx",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            exports: "named",
            sourcemap: true
        },
        {
            file: pkg.module,
            format: "es",
            exports: "named",
            sourcemap: true
        }
    ],
    plugins: [
        external(),
        resolve(),
        json(),
        postcss({ 
            extract: true,
            minimize: true, 
            modules: true 
        }),
        typescript({
            rollupCommonJSResolveHack: true,
            exclude: ["**/__tests__", "**/*.test.tsx"],
            clean: true,
            tsconfigOverride: {
                declaration: true,
                exclude: ["**/__tests__", "**/*.test.tsx"]
            },
            tsconfigDefaults: {
                declaration: true
            }
        }),
        commonjs({
            include: ["node_modules/**"]
        })
    ]
};
