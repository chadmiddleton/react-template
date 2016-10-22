angular.module('app').controller('InitialRegistrationController',
                                ['$route', '$scope',
                                function($route, $scope)
{
    // $('#userdiv').hide();
    // $('#react').hide();


    $scope.person = {};
    $scope.gender = 0;
    $scope.radValue = 0;
    $scope.currentEthnicity = "";
    $scope.currentGender = "";
    $scope.possibleEthOptions = [
       "American Indian/Alaskan Native",
       "Asian",
       "Black",
       "Native Hawaiian or Other Pacific Islander",
       "White",
       "Prefer not to specify"
   ];

    $scope.possibleGenOptions = [
        "Female",
        "Male",
        "Transgender (Male to Female)",
        "Transgender (Female to Male)",
        "Don't Know",
        "Prefer not to specify",
        ""
    ];

    this.returnHome = function() {
       $location.path('/home')
    }

    this.register = function(person) {
       person.helpNeeded = $scope.radValue;
       person.gender = $scope.gender;
       console.log(person);
    }
}]);