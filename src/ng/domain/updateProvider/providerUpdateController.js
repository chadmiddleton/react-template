angular.module('app').controller('providerUpdateController',
                                ['$route', '$scope', '$location', 'providerService',
                                function($route, $scope, $location, providerService)
{
    $scope.provider = providerService.provider;
    console.log($scope.provider)
    if ($scope.provider.available === null || $scope.provider.available === undefined) {
        $location.path('/home/')
    }
    $scope.data = {};
    $scope.data.available = $scope.provider.available[1].amount;
    $scope.data.inUse = $scope.provider.inUse[1].amount;
    $scope.data.offer = $scope.provider.offer[1].amount;

    this.updateAmounts = function() {
        $scope.provider.available[1].amount = $scope.provider.offer[1].amount - $scope.provider.inUse[1].amount;
        if ($scope.provider.available[1].amount < 0) {
            $scope.provider.offer[1].amount = $scope.data.offer;
            $scope.provider.inUse[1].amount = $scope.data.inUse;
            $scope.provider.available[1].amount = $scope.data.available;
        } else {
            $scope.data.offer = $scope.provider.offer[1].amount;
            $scope.data.inUse = $scope.provider.inUse[1].amount
            $scope.data.available = $scope.provider.available[1].amount;
        }
        $scope.$apply();

        if ($location.path() != '/provider/update') {
            clearInterval(this.interval);
        }
    }

    this.interval = setInterval(this.updateAmounts, 1000);

    this.update = function(provider) {
        $scope.provider.available[1].amount = $scope.provider.offer[1].amount - $scope.provider.inUse[1].amount;
        if ($scope.provider.available[1].amount < 0) {
            $scope.provider.offer[1].amount = $scope.data.offer;
            $scope.provider.inUse[1].amount = $scope.data.inUse;
            $scope.provider.available[1].amount = $scope.data.available;
        } else {
            $scope.data.offer = $scope.provider.offer[1].amount;
            $scope.data.inUse = $scope.provider.inUse[1].amount
            $scope.data.available = $scope.provider.available[1].amount;
        }
        providerService.update(provider).then(function(result) {
            providerService.provider = result.data;
            console.log(result.data);
        })
    }

    this.goBack = function() {
        $location.path('provider/list/')
    }
}]);