// const withPlugins = require('next-compose-plugins');
// const withImages = require('next-images');
// const withFonts = require('next-fonts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  https: true,
  // env: {
  //   NEXT_PUBLIC_ENV: 'sdfsdfsdfds',
  // },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/trial',
      },
    ];
  },
};

// module.exports = withPlugins([[withImages]], {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     });
//     return config;
//   },
//   babelConfigFile: './.babelrc',
// });

module.exports = nextConfig;
