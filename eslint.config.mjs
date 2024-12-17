import stylisticJs from '@stylistic/eslint-plugin-js'
import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    languageOptions: { globals: globals.node },
    rules: {
      '@stylistic/js/indent': ['error', 2],
    }
  },
  pluginJs.configs.recommended,
];
