angular.module('app').controller('clientListController',
    ['$route', '$scope', '$location', 'clientList',
        function($route, $scope, $location, clientList)
{
    $scope.clientList = clientList.data;

    for (var i = 0; i < $scope.clientList.length; i++) {
        $scope.clientList[i].num = i + 1;
        var d = new Date(0);
        d.setUTCSeconds($scope.clientList[i].dateUpdated/1000);
        if ($scope.clientList[i].dateUpdated/1000 > 1) {
            $scope.clientList[i].dateUpdated = d.toDateString();
        }
    }
}]);