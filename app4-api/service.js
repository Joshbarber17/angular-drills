angular.module('apiApp').service('mainService', function($http){
  this.getPlayers = function() {
    return $http ({
      method: "GET",
      url: 'http://swapi.co/api/people/'
    }).then(function(response){
      return response.data.results
    })
  }
});
