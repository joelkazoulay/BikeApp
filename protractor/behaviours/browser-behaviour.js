(function () {
    'use strict';

    var q = require('q');

    function BrowserBehaviour() {

        function setBrowserWindow () {
            return browser.driver.manage().window().maximize();
        }

        //HotTowel
        function getBA () {
            return browser.get('');
        }

        function setup () {
            return q.all([
                setBrowserWindow(),
                getBA()
            ]);
        }

        return  {
            setup: setup
        };
    }

    module.exports = new BrowserBehaviour();
})();
