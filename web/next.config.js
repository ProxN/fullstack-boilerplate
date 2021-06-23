/* eslint-disable */
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';

  const SENTRY_DSN = '';
  const API_URL = isProd
    ? 'http://localhost:5000/graphql'
    : 'http://localhost:5000/graphql';

  const env = {
    SENTRY_DSN,
    API_URL,
    isDev,
    isProd,
  };

  return {
    env,
    future: {
      webpack5: true,
    },
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
        '@xstyled/styled-components':
          '@xstyled/styled-components/dist/index.js',
      };

      return config;
    },
  };
};
