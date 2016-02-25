angular.module('arrApp').controller('arrController', function($scope, service) {
  $scope.showData = function() {
    return service.getData();
  }
})
