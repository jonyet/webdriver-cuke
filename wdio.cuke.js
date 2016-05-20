exports.config = {

    /**
     * server configurations
     */
    host: '0.0.0.0',
    port: 4444,

    /**
     * specify test files
     */
    specs: [
        './features/*.feature'
    ],
    exclude: [
      //
    ],

    /**
     * capabilities
     */
    capabilities: [{
    //     browserName: 'phantomjs'
    // }, {
        browserName: 'chrome'
    // }, {
    //     browserName: 'firefox'
    }],

    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: 'shots',
    waitforTimeout: 60000,
    framework: 'cucumber',

    reporters: ['dot'],
    reporterOptions: {
        outputDir: './'
    },

    cucumberOpts: {
      timeout: 20000,
      require: ['./features/step_definitions/step-definitions.js']
    }
};
