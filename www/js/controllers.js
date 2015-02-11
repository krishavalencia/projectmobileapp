angular.module('starter.controllers', [])




  .controller("AccountCtrl", function($scope, $cordovaBarcodeScanner, $http){
  $scope.insertdatako = function(){
    $cordovaBarcodeScanner.scan().then(function(imageData){

var json = imageData.text;

     $http.post(
    'https://api.mongolab.com/api/1/databases/testmobile/collections/savehere?apiKey=X8645ILWJXiV_Rmu4gZVn1URuu1WF1Ey', 
    obj = JSON.parse(json)
  

  )
  .success(function(){
    alert("yes we're working!");
    console.log(arguments);
    console.log("yes naman!");
  })
  .error(function(){
    console.log(arguments);
    console.log("awwww");
  });

});
}
});
