angular
    .module('app',[])
    .controller('addBikeCtrl', AddBikeCtrl)
    .directive('directive', Directive);

function AddBikeCtrl(){
    var mod = this;
    mod.data = null;
    mod.bikes = ['Justin\'s Bike', 'Craig\'s Bike',
        'Bill\'s amazing Bike','David\'s awesome bike'];

    mod.addBike = function(data){
        mod.bikes.push(data);
        mod.data = null;
    };
}

function Directive(){
}
