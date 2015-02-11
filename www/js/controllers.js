angular.module('starter.controllers', [])




 

// for the scanner --------------------------------------------------------------------------------------------------------------------

  .controller("AccountCtrl", function($scope, $cordovaBarcodeScanner, $http){

   $scope.stationchoice = function(){
    var iputteddata = inputstation.text;
}

  $scope.insertdatako = function(){



    $cordovaBarcodeScanner.scan().then(function(imageData){

var json = imageData.text;
var date = new Date;
// var json = image.concat(date)

var obj = JSON.parse(json);
obj['Runners'].push({"Date": date, "Station" : inputstation.text});
var json = JSON.stringify(obj);





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
