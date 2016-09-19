var app = angular.module('myapp', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
 
  
  $scope.chekcer= function(favfood){
    $scope.message = favfood;
     var returnvalue = favfood;
     if(returnvalue == undefined){
        $scope.message = "please enter the data";
     }
     var newarr = returnvalue.split(",");
     if(newarr.length > 3 ){
       $scope.message = "Too much"
     }
     else if(newarr.length == 0 ){
        $scope.message = "please enter the data as empty is not accepted";
     }
    else {
      $scope.message = "Enjoy!"+favfood ;
    }
  };
});
