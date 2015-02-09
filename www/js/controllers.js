angular.module('starter.controllers', [])


.controller('AccountCtrl', function($scope, $http) {
  $scope.insertdatako = function(){
 $http.post(
    'https://api.mongolab.com/api/1/databases/testmobile/collections/savehere?apiKey=X8645ILWJXiV_Rmu4gZVn1URuu1WF1Ey', 
    { "x" : "CCS" },
    alert("we work!")
  )
  .success(function(){
    console.log(arguments);
    console.log("yes naman!");
  })
  .error(function(){
    console.log(arguments);
    console.log("awwww");
  });


}
});
