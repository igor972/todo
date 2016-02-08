// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('index', function($scope, $ionicListDelegate, $cordovaDialogs) {
  $scope.items = [
    {name: "item 1"},
    {name: "item 2"},
    {name: "item 3"},
    {name: "item 4"}
  ];

  $scope.addItem = function() {
    var item = prompt();
    $scope.items.push({name: item});
  }

  $scope.remove = function(item) {
    var index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1);
  }

  $scope.finished = function(item){
    item.done = true;
    var index = $scope.items.indexOf(item);
    $scope.items[index] = item;
    $ionicListDelegate.closeOptionButtons();
  }
})