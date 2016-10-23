angular.module('app').controller('HomeController',
                                ['$route', '$scope', '$location', 'NeedRegistrationService',
                                function($route, $scope, $location, NeedRegistrationService)
{
    this.goRegister = function() {
        NeedRegistrationService.person = {};
        $location.path('/help/register/')
    };

}]);