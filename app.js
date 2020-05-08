'use strict';
angular.module('LunchCheck', [])
.controller("LunchCheckController", LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
  //$scope.name="";
  //var str = strcpy(str,$scope.name);
  //console.log(str);
  const str="";
  

  $scope.abc=function()
  {
    if($scope.name=="")
      {
       $scope.len=0;
      }
    else{
    const str=angular.copy($scope.name); 
    const words = str.split(',');
    console.log(words);
    const len=words.length;
    console.log(len);
    $scope.len=angular.copy(len);
    $scope.str=angular.copy(str);
    
    }
    
  };
}
