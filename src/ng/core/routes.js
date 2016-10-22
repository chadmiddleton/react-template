angular.module('app').config(['$routeProvider', 'baseRoute', function config($routeProvider, baseRoute) {
        $routeProvider.when('/home', {
            templateUrl: baseRoute + "home/homeTemplate.html",
            controller: 'HomeController',
            controllerAs: 'homeController'
        }).otherwise('/home');
    }
]);