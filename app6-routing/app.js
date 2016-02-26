angular.module('signUp', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){
  $stateProvider
  .state ('home',{
    url: "/",
    templateUrl: 'views/home.html'
  })
  .state('signUp', {
    url: "/signup",
    templateUrl: "views/signup.html"
  })
  .state('details', {
    url:'/details',
    templateUrl: "views/details.html"
  })
  $urlRouterProvider.otherwise('/');
})
