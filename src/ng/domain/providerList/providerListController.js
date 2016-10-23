angular.module('app').controller('providerListController',
    ['$route', '$scope', '$location', 'providerList', 'providerService',
        function($route, $scope, $location, providerList, providerService)
{
        $scope.providerList = providerList.data;
        $scope.queryOptions = [
            "beds",
            "units"
        ]
        
        $scope.getProviderBy = function(service){
                providerService.getProvidersByService(service).then(function(result) {
                        console.log(result.data);
                        $scope.providerList = result.data;
                })
        };
}]);