(function() {

    var searchPage = require('../pages/search-page.js'),
        browserBehaviour = require('../behaviours/browser-behaviour.js');

    function SearchWorkflow() {

        var SearchWorkflow = {
            setupSearchTest: setupSearchTest
        };

        function setupSearchTest() {
            return browserBehaviour.setup()
                .then(function() {
                    return searchPage.sendKeysToSearchInput('Trek');
                });
        }

        return SearchWorkflow;
    }

    module.exports = new SearchWorkflow();
})();