angular.module('app').service('NeedRegistrationService', ['$http', function($http) {

    this.person = {};
    this.previous = "/home/";

    var svc = this;

    this.addUser = function(person) {
        return $http.put(url, person).then(function(result) {
            svc.person = result;
            return result;
        });
    }
}]);