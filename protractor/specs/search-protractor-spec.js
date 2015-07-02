(function () {

    var searchWorkflow = require('../workflows/search-workflow.js'),
        searchPage = require('../pages/search-page.js');

    describe('When: searching for Trek', function() {
        beforeAll(function(done) {
            searchWorkflow.setupSearchTest()
                .then(function() {
                    done();
                }, function() {
                    done();
                });
        });

        it('Should: only show one result', function() {
            expect(searchPage.returnBikesCount()).toBe(1);
        });
    })
})();