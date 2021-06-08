/* eslint-disable */

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '@xstyled/util': '@xstyled/util/dist/index.js',
      '@xstyled/core': '@xstyled/core/dist/index.js',
      '@xstyled/system': '@xstyled/system/dist/index.js',
      '@xstyled/styled-components': '@xstyled/styled-components/dist/index.js',
    };

    return config;
  },
};
