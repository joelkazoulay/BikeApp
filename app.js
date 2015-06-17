angular
    .module('app',[])
    .controller('bikesCtrl', BikesCtrl)
    .controller('addBikeCtrl', AddBikeCtrl)
    .directive('headerBikes', HeaderBikes)
    .directive('addBike', AddBike);

function BikesCtrl(){
    var mod = this;
    mod.data = null;
    mod.bikes = [
        {
            Name: 'Trek',
            Owner: 'David',
            Price: 15000,
            Date: '1922-02-12T02:12:33'
        },
        {
            Name: 'Motorcycle',
            Owner: 'Justin',
            Price: 30000,
            Date: '2010-03-22'
        },
        {
            Name: 'SpecializZed(tm)',
            Owner: 'Nate',
            Price: 100,
            Date: '2014-04-21'
        }
    ];
}



function HeaderBikes(){
    return {
        restrict:'EA',
        templateUrl: 'templates/bikeheader.html'
    }
}

function AddBike(){
    return{
        restrict: 'E',
        templateUrl: 'templates/addbike.html',
        controller: 'addBikesCtrl',
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {
            bikes: '='
        }
    }
}

function AddBikeCtrl(){
    var ctrl = this;
    ctrl.addBike = function(data){
        ctrl.bikes.push(data);
        ctrl.data = null;
    };
}
