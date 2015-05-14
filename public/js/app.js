// initial anguar module
var app = angular.module('Homeworks',['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
        $routeProvider

        // route for the home page
        .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'MainController'
         })

         // route for the about page
         .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'AboutController'
          });
		
    });



