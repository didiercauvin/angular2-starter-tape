var webpack = require('webpack');

module.exports = function(config) { 

  config.set({ 
    plugins: [       
      require('karma-webpack'),
      require('karma-tap'), 
      require('karma-phantomjs-launcher'),
      require('karma-tape-reporter')
    ], 
 
    basePath: './', 
    frameworks: [ 'tap' ], 
    files: [ 
        'node_modules/es6-shim/es6-shim.js',
        'karma.entry.js'
     ], 

    preprocessors: { 
        'karma.entry.js' : [ 'webpack' ] 
    }, 

    webpack: require('./webpack.test.config'),

    webpackServer: {
        noInfo: true
    },

    webpackMiddleware: {
        noInfo: true,
        stats: 'errors-only'
    },
 
    reporters: [ 'dots' ], 
    port: 9876, 
    colors: true, 
    logLevel: config.LOG_INFO, 
    autoWatch: true, 
    browsers: ['PhantomJS'], 
    singleRun: false 
  }) 
}; 
