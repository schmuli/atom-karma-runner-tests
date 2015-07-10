module.exports = function (config) {
    config.set({

        files: [
            'specs/**/*.js'
        ],

        frameworks: ['jasmine'],

        plugins: [
            'karma-*'
        ],

        browsers: [
            'Chrome'
        ],

        singleRun: true
    });
}
