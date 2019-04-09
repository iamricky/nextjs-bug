const path = require('path');
const withCSS = require('@zeit/next-css');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

module.exports = withCSS({
  webpack(config, options) {
    const aliases = config.resolve.alias;
    const more = {
      ['modules']: path.resolve(
        __dirname,
        'shared/modules/'
      ),
    };

    config.resolve.alias = Object.assign({}, aliases, more);

    return config;
  },
});
