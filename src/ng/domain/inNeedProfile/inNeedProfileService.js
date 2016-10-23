angular.module('app').service('inNeedProfileService', ['$http', function($http) {

    var url = "http://globalhack.0x3f8.com:32039/personInNeed?id=";

    this.getProfile = function(id) {
        return $http.get(url + id).then(function(result) {
            return result;
        });
    }
    
}]);