angular.module('app').service('NeedRegistrationService', ['$http', function($http) {

    this.person = {};
    this.previous = "/home/";

    var url = "http://globalhack.0x3f8.com:32039/personInNeed/"
    var svc = this;

    this.addUser = function(person) {
        person.phoneNumbers = [];
        person.phoneNumbers.push(person.phone);

        if (person.ethnicity === undefined || person.ethnicity === "") { person.ethnicity = "Data_Not_Collected"}
        if (person.race === undefined || person.race === "") { person.race = "Data_Not_Collected"}
        if (person.gender === undefined || person.gender === "") { person.gender = "Data_Not_Collected"}

        return $http.put(url, person).then(function(result) {
            svc.person = result;
            return result;
        });
    }
}]);