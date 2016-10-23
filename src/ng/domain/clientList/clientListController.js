angular.module('app').controller('clientListController',
    ['$route', '$scope', '$location', 'clientList',
        function($route, $scope, $location, clientList)
{
    $scope.clientList = clientList.data;

    for (var i = 0; i < clientList.length; i++) {
        var d = new Date(0);
        d.setUTCSeconds(clientList[i].dateUpdated);
        clientList[i].dateUpdated = d;
    }

}]);