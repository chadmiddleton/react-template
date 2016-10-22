angular.module('app').service('NeedRegistrationService', ['$http', function($http) {

    this.person = {};

    // this.getFlightDetails = function(params, displayMessage) {
    //     return $http.get(url, {params: { to : params.dest, from: params.source }}).then(function(result) {
    //         var resultChk = result.data
    //         if ((resultChk === null || resultChk === undefined || resultChk === "") && displayMessage) {
    //             swal("Flight Unavailable", "We're sorry, there seems to have been a problem. The flight is no longer available.", "error");
    //         }
    //         return result;
    //     });
    // }
    // this.getFlightById = function(id) { return $http.get(url + 'id') }

}]);