angular.module('app').service('ClientService', ['$http', function($http) {

    var url = "http://globalhack.0x3f8.com:32039/personInNeed/"

    this.getClients = function() {
        return $http.get(url).then(function(result) {
            return result;
        });
    }
}]);