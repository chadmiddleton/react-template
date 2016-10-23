angular.module('app').controller('InitialRegistrationController',
                                ['$route', '$scope', '$location', 'NeedRegistrationService',
                                function($route, $scope, $location, NeedRegistrationService)
{
    $scope.person = NeedRegistrationService.person;
    console.log($scope.person)

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
        "Don't now",
        "Prefer not to specify"
    ];

    var mapvals = {
        "Non-Hispanic/Non-Latino": "Non_Hispanic_Non_Latino",
        "Hispanic/Latino": "Hispanic_Latino",
        "American Indian/Alaskan Native": "AmIndAKNative",
        "Asian": "Asian",
        "Black or African American": "Black",
        "Native Hawaiian or Other Pacific Islander": "NativeHIOtherPacific",
        "White": "White",
        "Female": "Female",
        "Male": "Male",
        "Transgender (Male to Female)": "Transgender_male_to_female",
        "Transgender (Female to Male)": "Transgender_female_to_male",
        "Dont' know": "Client_Does_Not_Know",
        "Prefer not to specify": "Client_Refused",
    };

    var reversemap = {
        "Non_Hispanic_Non_Latino": "Non-Hispanic/Non-Latino",
        "Hispanic_Latino": "Hispanic/Latino",
        "AmIndAKNative": "American Indian/Alaskan Native",
        "Asian": "Asian",
        "Black": "Black or African American",
        "NativeHIOtherPacific": "Native Hawaiian or Other Pacific Islander",
        "White": "White",
        "Female": "Female",
        "Male": "Male",
        "Transgender_male_to_female": "Transgender (Male to Female)",
        "Transgender_female_to_male": "Transgender (Female to Male)",
        "Client_Does_Not_Know": "Dont' know",
        "Client_Refused": "Prefer not to specify"
    };

    if ($scope.person.race === undefined || $scope.person.race === "" || $scope.person.race === null) {
        $scope.currentRace = "Prefer not to specify";
    } else {
        $scope.currentRace = reversemap[$scope.person.race];
    }
    if ($scope.person.ethnicity === undefined || $scope.person.ethnicity === "" || $scope.person.ethnicity === null) {
        $scope.currentEthnicity = "Prefer not to specify";
    } else {
        $scope.currentEthnicity = reversemap[$scope.person.ethnicity];
    }
    if ($scope.person.gender === undefined || $scope.person.gender === "" || $scope.person.gender === null) {
        $scope.currentGender = "Prefer not to specify";
    } else {
        $scope.currentGender = reversemap[$scope.person.gender];
    }

    this.returnHome = function() {
        $location.path('/home')
    };

    this.register = function(person) {
        NeedRegistrationService.person = person;
        $scope.person = NeedRegistrationService.addUser(person);
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