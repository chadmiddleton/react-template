angular.module('app').controller('providerListController',
    ['$route', '$scope', '$location', 'providerList', 'providerService',
        function($route, $scope, $location, providerList, providerService)
{
        $scope.providerList = providerList.data;

        this.returnHome = function() {
                $location.path('/home')
        };
        
        $scope.getProviderBy = function(service){
                providerService.getProvidersByService(service).then(function(result) {
                        console.log(result.data);
                        $scope.providerList = result.data;
                })
        };

        this.updateProvider = function(provider) {
                providerService.provider = provider;
                $location.path('provider/update/');
        }
}]);