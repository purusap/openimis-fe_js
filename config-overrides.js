const path = require('path');

module.exports = function override(config, env) {
  config.resolve = {
    alias: {
      'react':  path.resolve('./node_modules/react'),
      'react-redux':  path.resolve('./node_modules/react-redux'),
    }
  };
  return config;
};