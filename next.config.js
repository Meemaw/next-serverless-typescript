const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  webpack(config, options) {
    if (options.isServer && !process.env.IN_LAMBDA) {
      const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }
    return config;
  },
});
