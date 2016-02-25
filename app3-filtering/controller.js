angular.module('app3').controller('mainCtrl', function($scope, service){
  $scope.showData = service.getData();
})
