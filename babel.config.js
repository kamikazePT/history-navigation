module.exports = {
  presets: [
    '@babel/env',
    {
      plugins: [
        [
          '@babel/plugin-proposal-decorators',
          {
            decoratorsBeforeExport: true,
          },
        ],
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-throw-expressions',
        '@babel/plugin-proposal-function-bind',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-dynamic-import',
      ],
    },
    '@babel/preset-react',
  ],
  env: {
    test: {
      plugins: ['babel-plugin-dynamic-import-node', 'require-context-hook'],
    },
  },
};
