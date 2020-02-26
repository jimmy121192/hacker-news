// next.config.js
const withSass = require('@zeit/next-sass')

const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
module.exports = withSass({
  cssModules: true,
  webpack: config => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        minify: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching:[
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    )
    return config;
  }
})