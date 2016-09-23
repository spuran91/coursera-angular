/**
 * Created by spuran on 9/21/2016.
 */
var app = angular.module('myapp', []);

app.controller('shopCtrl', function($scope) {
    $scope.newobjects =[];
    $scope.objects =  [ { name: "cookies",
        quantity: 10},
        { name: "chocolates",
            quantity: 20},
        { name: "Vegetables",
            quantity: 5},
        { name: "cereals",
            quantity: 5},
        { name: "Milk",
            quantity: 6},
        { name: "Water",
            quantity: 10},
        { name: "cookies",
            quantity: 13},
        { name: "Bounties",
            quantity: 25},
        { name: "Spreadsheets",
            quantity: 10}
    ]

    $scope.addToList = function($index){
        var num = $index;
        var toBeAdded = $scope.objects[num];
        $scope.objects.splice(num,1);
        $scope.newobjects.push(toBeAdded);
    }
    $scope.show =function(){
        if($scope.newobjects.length == 0 || $scope.objects.length == 0){
            return true;
        }
        else {
            return false;
        }
    }
});
