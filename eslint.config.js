import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default tseslint.config(
    {
        // Note: there should be no other properties in this object
        ignores: ["**/dist", "**/node_modules", "**/.astro", "**/.github", "**/.changeset"],
    },
    // JavaScript
    eslint.configs.recommended,

    // TypeScript
    tseslint.configs.recommended,
    // {
    // rules: {
    //     "@typescript-eslint/no-explicit-any": "off",
    // },
    // },
    {
        files: ["**/*.d.ts", "cypress/support/**/*.ts"],
        rules: {
            "@typescript-eslint/triple-slash-reference": "off",
        },
    },

    // Astro
    ...eslintPluginAstro.configs.recommended,
    {
        plugins: {
            prettier: eslintPluginPrettier,
        },
    }
);
