angular.module('apiApp').controller('mainCtrl', function($scope, mainService){
  $scope.players = function() {
    mainService.getPlayers().then(function(results){
      $scope.people = results
    })
  }
  $scope.players();
})
