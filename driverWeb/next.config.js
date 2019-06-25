const compose = require('ramda').compose;

const withTypescript = require('@zeit/next-typescript');
const withLess = require('@zeit/next-less');
const withFonts = require('next-fonts');
const withImages = require('next-images');

// WARNING:
//   This is a JavaScript file, so:
//   Please manually match to the config.ts
//   (The {Public|Server}RuntimeConfig interfaces)
//   Documentation of the options also goes there

const config = {
  serverRuntimeConfig: {
    apiBaseUrlOverride: process.env.INTERNAL_API_BASE_URL,
    apiPathOverride: process.env.INTERNAL_API_PATH,
  },
  publicRuntimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL,
    apiPath: process.env.API_PATH,
    playStoreUrl: process.env.PLAY_STORE_APP_URL,
    appStoreUrl: process.env.APPLE_STORE_APP_URL,
  },
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  env: {
    OPERATIONS: {
      MANILA: 'en-US',
      HAMBURG: 'de-DE'
    }
  }
};

module.exports = compose(withFonts, withLess, withImages, withTypescript)(config);
