// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ngCordova', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

//   .controller("ourController", function($scope, $cordovaBarcodeScanner, $http){
//   $scope.scanBarcode = function(){
//     $cordovaBarcodeScanner.scan().then(function(imageData){



//      $http.post(
//     'https://api.mongolab.com/api/1/databases/testmobile/collections/savehere?apiKey=X8645ILWJXiV_Rmu4gZVn1URuu1WF1Ey', 
//     $scope.data = JSON.stringify(imageData.text)
  
//   )
//   .success(function(){
//     console.log(arguments);
//     console.log("yes naman!");
//   })
//   .error(function(){
//     console.log(arguments);
//     console.log("awwww");
//   });

//   });

// }
// });