(function() {
    'use strict';

    var basePage = require('./base-page.js');

    function SearchPage() {

        var SearchPage = {
            sendKeysToSearchInput: sendKeysToSearchInput,
            returnBikesCount: returnBikesCount
        };

        var searchInput = element(by.model('simpleFilter')),
            bikesResults = element.all(by.repeater('bike in bikeCtrl.bikes')),
            sortDropdown = element(by.model('simpleFilter'));

        function sendKeysToSearchInput(value) {
            return basePage.setInputField(searchInput, value);
        }

        function returnBikesCount() {
            return bikesResults.count();
        }

        return SearchPage;
    }

    module.exports = new SearchPage();
})();