angular.module('app').config(['$routeProvider', 'baseRoute', function config($routeProvider, baseRoute) {
    $routeProvider.when('/home', {
        templateUrl: baseRoute + "home/homeTemplate.html",
        controller: 'HomeController',
        controllerAs: 'homeController'
    }).when('/help/register', {
        templateUrl: baseRoute + "initialRegistration/initRegistrationTemplate.html",
        controller: 'InitialRegistrationController',
        controllerAs: 'initialRegistrationController'
    }).when('/help/register-name', {
        templateUrl: baseRoute + "initialRegistration/registerName.html",
        controller: 'InitialRegistrationController',
        controllerAs: 'initialRegistrationController'
    }).when('/help/register-personal', {
        templateUrl: baseRoute + "initialRegistration/registerPersonal.html",
        controller: 'InitialRegistrationController',
        controllerAs: 'initialRegistrationController'
    }).when('/provider/register', {
        templateUrl: baseRoute + "company-register/company-template.html",
        controller: 'company-register-controller',
        controllerAs: 'companyRegisterController'
    }).when('/provider/update', {
        templateUrl: baseRoute + "updateProvider/updateProvider.html",
        controller: 'providerUpdateController',
        controllerAs: 'providerUpdateController'
    }).when('/provider/list', {
        templateUrl: baseRoute + "providerList/providerListTemplate.html",
        controller: 'providerListController',
        controllerAs: 'providerListController',
        resolve: {
            providerList: function(providerService){
                return providerService.getProviders();
            }
        }
    }).when('/help/list', {
        templateUrl: baseRoute + "clientList/clientListTemplate.html",
        controller: 'clientListController',
        controllerAs: 'clientListController',
        resolve: {
            clientList: function(ClientService){
                return ClientService.getClients();
            }
        }
    }).when('/help/inNeedProfile/:id', {
        templateUrl: baseRoute + "inNeedProfile/inNeedProfileTemplate.html",
        controller: 'inNeedProfileController',
        controllerAs: 'inNeedProfileController',
        resolve: {
            profile: function(inNeedProfileService, $route){
                return inNeedProfileService.getProfile($route.current.params.id);
            }
        }
    }).otherwise('/home');
}
]);