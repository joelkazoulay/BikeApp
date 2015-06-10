angular
    .module('app',[])
    .controller('addBikeCtrl', AddBikeCtrl)
    .directive('directive', Directive);

function AddBikeCtrl(){
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


    mod.addBike = function(data){
        mod.bikes.push(data);
        mod.data = null;
    };
}

function Directive(){
}
