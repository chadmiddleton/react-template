angular.module('app').config(['$routeProvider', 'baseRoute', function config($routeProvider, baseRoute) {
        $routeProvider.when('/home', {
            templateUrl: baseRoute + "home/homeTemplate.html",
            controller: 'HomeController',
            controllerAs: 'homeController'
        }).when('/help/register', {
            templateUrl: baseRoute + "initialRegistration/initRegistrationTemplate.html",
            controller: 'InitialRegistrationController',
            controllerAs: 'initialRegistrationController'
        }).when('/service/register', {
            templateUrl: baseRoute + "company-register/company-template.html",
            controller: 'company-register-controller',
            controllerAs: 'companyRegisterController'
        }).otherwise('/home');
    }
]);