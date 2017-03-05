module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['source-map-support', 'browserify', 'jasmine'],
    files: [
      './test.js',
    ],
    preprocessors: {
      '*.js': ['browserify']
    },
    browserify: {
      debug: true,
      extensions: ['.js']
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    browserConsoleLogOptions: {
      level: 'log',
      terminal: true
    },
    browserDisconnectTolerance: 30
  })
}