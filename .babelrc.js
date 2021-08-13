const { plugins, ...config } = require('babel-config-atomikui');

module.exports = {
  ...config,
  plugins: [
    ...plugins,
    [
      'module-resolver',
      {
        root: './',
        alias: {
          '@atomikui-core': './node_modules/@atomikui/core/dist/components',
        },
      },
    ],
  ],
};
