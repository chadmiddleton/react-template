angular.module('app').service('providerService', ['$http', function($http) {
    
    var url = "http://globalhack.0x3f8.com:32039/provider/";
    
    this.getProviders = function() {
        return $http.get(url).then(function(result) {
            return result;
        });
    };

    this.getProvidersByService = function (service) {
        return $http.get(url + '?service=' + service + '&available=1').then(function(result) {
            return result;
        });
    };
}]);