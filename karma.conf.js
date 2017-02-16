var webpack = require('webpack');

module.exports = function(config) { 

  config.set({ 
    plugins: [       
      require('karma-webpack'),
      require('karma-tap'), 
      require('karma-phantomjs-launcher')
    ], 
 
    basePath: './', 
    frameworks: [ 'tap' ], 
    files: [
        'karma.libs.js',
        'src/tests/**/*.ts'
     ], 

    preprocessors: { 
        'karma.libs.js'     : [ 'webpack' ],
        'src/tests/**/*.ts' : [ 'webpack' ]
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
