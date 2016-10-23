angular.module('app').service('providerService', ['$http', function($http) {

    this.provider = {};
    var url = "http://globalhack.0x3f8.com:32039/provider/";

    this.update = function(provider) {
        this.provider = provider;
        return $http.put(url, provider).then(function(result) {
            return result;
        });
    };

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