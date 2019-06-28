exports.config = {
    directConnect: true,

    framework: 'custom',

    frameworkPath: require.resolve('serenity-js'),

    allScriptsTimeout: 110000,

    specs: [ 'features/**/*.feature' ],
    
    cucumberOpts: {
        require:    [ 'features/**/*.js' ],
        format:     'pretty'
    },

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                // 'incognito',
                // 'disable-extensions',
                // 'show-fps-counter=true'
                '--headless'
                //'--disable-gpu'
            ]
        },

        // execute tests using 2 browsers running in parallel
        shardTestFiles: false,
        maxInstances: 5
    },

     //restartBrowserBetweenTests: true
};
