angular.module('apiApp').controller('swctrl', function($scope, swSvc){
  var promise = swSvc.getStarships()
  promise.then(function(starships){
    $scope.starships = starships;
  })

})
