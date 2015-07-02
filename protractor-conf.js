exports.config = {
    directConnect: true,
    framework: 'jasmine2',

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['protractor/specs/*-protractor-spec.js'],

    multiCapabilities: [
        //{
        //  name: 'Firefox',
        //  browserName: 'firefox'
        //}
        {
            name: 'Chrome',
            browserName: 'chrome'
        }
//        {
//            name: 'Internet Explorer',
//            browserName: 'internet explorer'
//        }
    ],

    baseUrl: 'http://localhost:63342/BikeApp2/index.html',
    jasmineNodeOpts: {defaultTimeoutInterval: 100000},

    onPrepare: function() {
        var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

        jasmine.getEnv().addReporter(
            new HtmlScreenshotReporter({
                dest: 'tmp',
                filename: 'my-report.html'
            }));
    }
};
