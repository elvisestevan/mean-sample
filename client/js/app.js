var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngResource', 'ngAnimate', 'btford.socket-io']);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeController'});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'aboutController'});
    $routeProvider.when('/projects', {templateUrl: 'partials/projects.html', controller: 'projectController'});
    $routeProvider.when('/projects/customerapi', {templateUrl: '/partials/projects/customerapi.html', controller: 'customerApiController'});
    $routeProvider.when('/projects/chat', {templateUrl: '/partials/projects/chat.html', controller: 'chatController'});
    $routeProvider.otherwise({redirectTo: '/home'});
    
    $locationProvider.html5Mode({enabled: true, requireBase: false});
}]);

myApp.filter('startFrom', function(){
    return function(data, start){
        return data.slice(start);
    }
});