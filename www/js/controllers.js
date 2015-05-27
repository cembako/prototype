angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicSideMenuDelegate, Sembakos) {
  $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.sembakos = Sembakos.all();
  console.log($scope.sembakos)

  $scope.selectedSembako=$scope.sembakos[2]
  console.log('di controller, di luar drawChart')

  $scope.drawChart = function() {
    console.log('drawChart')
    console.log($scope.selectedSembako)
    
    var data = {
        labels: [2, 5, 6, 9, 10, 11, 12, 13, 16, 17, 18, 20, 23, 24, 25, 26, 27],
        datasets: [{
          fillColor: "rgba(220,0,0,0.2)",
          strokeColor: "rgba(220,0,0,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }]
    };


    var dataArray = []
    for(var o in $scope.selectedSembako.prices) 
      dataArray.push($scope.selectedSembako.prices[o]);
    data.datasets[0].data=dataArray;
    console.log(data.datasets[0].data)

    var ctx = document.getElementById("myChart").getContext("2d");
    var myLineChart = new Chart(ctx).Line(data);
  }

  $scope.drawChart();

})

.controller('PantauansCtrl', function($scope, Pantauans, Sembakos) {
    $scope.pantauans = Pantauans.all();
    $scope.remove = function(pantauan) {
        Pantauans.remove(pantauan);
    }
    $scope.sembakos = Sembakos.all();
})

.controller('PantauanDetailCtrl', function($scope, $stateParams, Pantauans, Sembakos) {
    $scope.pantauan = Pantauans.get($stateParams.pantauanId);
    $scope.sembakos = Sembakos.all();
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
