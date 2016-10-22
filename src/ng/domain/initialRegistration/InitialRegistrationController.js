angular.module('app').controller('InitialRegistrationController',
                                ['$route', '$scope', '$location', 'NeedRegistrationService',
                                function($route, $scope, $location, NeedRegistrationService)
{
    $scope.person = NeedRegistrationService.person;
    $scope.radValue = 0;
    $scope.otherVal = "";
    $scope.currentRace = "Prefer not to specify";
    $scope.currentEthnicity = "Prefer not to specify";
    $scope.currentGender = "Prefer not to specify";
    $scope.possibleEthOptions = [
        "Non-Hispanic/Non-Latino",
        "Hispanic/Latino",
        "Dont' know",
        "Prefer not to specify"
    ];
    $scope.possibleRaceOptions = [
        "American Indian/Alaskan Native",
        "Asian",
        "Black or African American",
        "Native Hawaiian or Other Pacific Islander",
        "White",
        "Dont' know",
        "Prefer not to specify"
   ];
    $scope.possibleGenOptions = [
        "Female",
        "Male",
        "Transgender (Male to Female)",
        "Transgender (Female to Male)",
        "Don't Know",
        "Prefer not to specify"
    ];

    var mapvals = {
        "Non-Hispanic/Non-Latino": 0,
        "Hispanic/Latino": 1,
        "American Indian/Alaskan Native": 1,
        "Asian": 2,
        "Black or African American": 3,
        "Native Hawaiian or Other Pacific Islander": 4,
        "White": 5,
        "Female": 0,
        "Male": 1,
        "Transgender (Male to Female)": 2,
        "Transgender (Female to Male)": 3,
        "Dont' know": 8,
        "Prefer not to specify": 99
    };

    this.returnHome = function() {
        $location.path('/home')
    };

    this.register = function(option) {
        switch (option) {
            case 0:
                this.addContact($scope.person);
                break;
            case 1:
                this.addName($scope.person);
                break;
            default:
                this.addPersonal();
        }
        console.log(NeedRegistrationService.person);
        NeedRegistrationService.person = {};
    };

    this.addContact = function(person) {
        NeedRegistrationService.person.phone = person.phone;
        NeedRegistrationService.person.location = person.location;
        if($scope.radValue == "") {
            $scope.radValue = $scope.otherVal;
        }
        NeedRegistrationService.person.message = $scope.radValue;
    };

    this.addName = function(person) {
        NeedRegistrationService.person.firstname = person.firstname;
        NeedRegistrationService.person.midname = person.midname;
        NeedRegistrationService.person.lastname = person.lastname;
    };

    this.addPersonal = function() {
        NeedRegistrationService.person.gender = mapvals[$scope.currentGender];
        NeedRegistrationService.person.ethnicity = mapvals[$scope.currentEthnicity];
        NeedRegistrationService.person.race = mapvals[$scope.currentRace];
    };

    this.goToName = function() {
        this.addContact($scope.person);
        $location.path("help/register-name/");
    };

    this.goToPersonal = function() {
        this.addName($scope.person);
        $location.path("help/register-personal/");
    };

    $scope.selectEthnicityOption = function(ethnicity) {
        $scope.currentEthnicity = ethnicity;
    };

    $scope.selectRaceOption = function(race) {
        $scope.currentRace = race;
    };

    $scope.selectGenderOption = function(gender) {
        $scope.currentGender = gender;
    }

}]);