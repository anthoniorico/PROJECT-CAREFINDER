module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    plugins: ['simple-import-sort', 'prettier'],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
    },
};