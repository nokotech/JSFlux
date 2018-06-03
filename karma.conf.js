var webpack = require('webpack');
var isparta = require('isparta');

// Karma configuration
// Generated on Wed May 30 2018 17:01:05 GMT+0900 (JST)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha'],


        // list of files / patterns to load in the browser
        files: [
            'dist/**/*.js',
            'test/**/*.js'
        ],


        // [Add babel] plugins
        plugins: [
            'karma-phantomjs-launcher',
            'karma-phantomjs-shim',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-coverage',
            'karma-mocha-reporter',
            'karma-chrome-launcher',
            'karma-coverage-istanbul-reporter',
            'karma-remap-istanbul',
            'istanbul-instrumenter-loader'
        ],


        // list of files / patterns to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'dist/**/*.js': ['coverage'],
            'test/**/*.js': ['webpack']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage', 'karma-remap-istanbul'],
        remapIstanbulReporter: {
            remapOptions: {},
            reportOptions: {},
            reports: {
                html: 'coverage/remap/html',
                lcovonly: 'coverage/remap/lcov/lcov.info',
                cobertura: 'coverage/remap/cobertura/cobertura.xml'
            }
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [/*'PhantomJS',*/ 'Chrome',/* 'Firefox', 'Safari'*/ ],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,


        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,


        coverageReporter: {
            reporters: [{ type: 'lcov' }]
        },

        webpack: require('./.config/webpack.config'),
    })
}