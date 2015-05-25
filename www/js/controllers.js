angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('PantauansCtrl', function($scope, Pantauans) {
  $scope.pantauans = Pantauans.all();
  $scope.remove = function(pantauan) {
    Pantauans.remove(pantauan);
  }
})

.controller('PantauanDetailCtrl', function($scope, $stateParams, Pantauans) {
  $scope.pantauan = Pantauans.get($stateParams.pantauanId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
