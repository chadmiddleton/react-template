angular.module('app').controller('InitialRegistrationController',
                                ['$route', '$scope', '$location', 'NeedRegistrationService',
                                function($route, $scope, $location, NeedRegistrationService)
{
    $scope.person = NeedRegistrationService.person;

    switch ($scope.person.message) {
        case "Housing Help":
            $scope.radValue = "Housing Help";
            $scope.otherVal = "";
            break;
        case "Medical Help":
            $scope.radValue = "Medical Help";
            $scope.otherVal = "";
            break;
        case "Mental Help":
            $scope.radValue = "Mental Help";
            $scope.otherVal = "";
            break;
        default:
            $scope.otherVal = $scope.person.message;
            $scope.radValue = 0;
    }

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
        "Prefer not to specify": 99,
    };

    this.returnHome = function() {
        $location.path('/home')
    };

    this.register = function(person) {
        NeedRegistrationService.person = person;
        $scope.person = NeedRegistrationService.addUser(person);
        console.log(person);
        console.log(NeedRegistrationService.person);
    };

    this.goPrev = function() {
        NeedRegistrationService.person = $scope.person;
        $location.path(NeedRegistrationService.previous);
        NeedRegistrationService.previous = "help/register/";
    }

    this.goToName = function() {
        if($scope.radValue == "")
            $scope.radValue = $scope.otherVal;
        NeedRegistrationService.person.message = $scope.radValue;

        NeedRegistrationService.person = $scope.person;
        NeedRegistrationService.previous = "help/register/";
        $location.path("help/register-name/");
    };

    this.goToPersonal = function() {
        NeedRegistrationService.person = $scope.person;
        NeedRegistrationService.previous = "help/register-name/";
        $location.path("help/register-personal/");
    };

    $scope.selectEthnicityOption = function(ethnicity) {
        $scope.currentEthnicity = ethnicity;
        NeedRegistrationService.person.ethnicity = mapvals[ethnicity];
        $scope.person.ethnicity = mapvals[ethnicity];
    };

    $scope.selectRaceOption = function(race) {
        $scope.currentRace = race;
        NeedRegistrationService.person.race = mapvals[race];
        $scope.person.race = mapvals[race];

    };

    $scope.selectGenderOption = function(gender) {
        $scope.currentGender = gender;
        NeedRegistrationService.person.gender = mapvals[gender];
        $scope.person.gender = mapvals[gender];
    }

}]);