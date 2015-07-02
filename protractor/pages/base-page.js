(function() {
    'use strict';

    function BasePage() {

        var BasePage = {
            setInputField: setInputField
        };

        function setInputField(input, value) {
            return input.clear()
                .then(function () {
                    input.sendKeys(value)
                });
        }

        return BasePage;
    }

    module.exports = new BasePage();
})();