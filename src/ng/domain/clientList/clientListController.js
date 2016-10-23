angular.module('app').controller('clientListController',
    ['$route', '$scope', '$location', 'clientList', 'NeedRegistrationService',
        function($route, $scope, $location, clientList, NeedRegistrationService)
{
    $scope.clientList = clientList.data;

    this.returnHome = function() {
        $location.path('/home')
    };

    for (var i = 0; i < $scope.clientList.length; i++) {
        $scope.clientList[i].num = i + 1;
        var d = new Date(0);
        d.setUTCSeconds($scope.clientList[i].dateUpdated/1000);
        if ($scope.clientList[i].dateUpdated/1000 > 1) {
            $scope.clientList[i].dateUpdated = d.toDateString();
        }
    }

    this.updateClient = function(person) {
        NeedRegistrationService.person = person;
        NeedRegistrationService.person.phone = person.phoneNumbers[0];
        $location.path('/help/register/');
    }
}]);