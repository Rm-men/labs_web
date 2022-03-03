export default {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        //parser: "@typescript-eslint/parser",
        parser: "vue-eslint-parser",
        sourceType: "module",
    },
    plugins: ["vue", "@typescript-eslint"],
    rules: {},
};