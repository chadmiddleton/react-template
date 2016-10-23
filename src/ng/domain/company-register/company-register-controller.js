angular.module('app').controller('company-register-controller',
    ['$route', '$scope', '$http', function ($route, $scope, $http) {
        
        $scope.provider = {};
        // setInterval(function () {
        //     console.log($scope.provider)
        // }, 5000);
        $scope.provider.agencyName = "";
        $scope.provider.agencyStreet = "";
        $scope.provider.agencyCity = "";
        $scope.provider.agenctyState = "";
        $scope.provider.agencyZip = "";
        $scope.provider.agencyPhone = "";
        $scope.provider.agencyWebsite = "";

        $scope.provider.nonProfitStatus = "";
        $scope.provider.governmentEntity = "";
        $scope.provider.faithBased = "";

        $scope.provider.agencyExecName = "";
        $scope.provider.agencyExecNumber = "";
        $scope.provider.agencyExecEmail = "";

        $scope.provider.eligibilityCriteria = "";
        $scope.provider.admissionContactName = "";
        $scope.provider.admissionContactNumber = "";
        $scope.provider.admissionContactEmail = "";

        $scope.provider.hoursOfOperation = "";
        $scope.provider.bedNumber = 0;
        $scope.provider.unitNumber = 0;
        $scope.provider.peopleServed = 0;

        $scope.provider.popServed = {
            "Male": false,
            "Female": false,
            "Adolescents": false,
            "Families": false,
            "Women_Children": false,
            "Veterans": false,
            "Dually_Diagnosed": false,
            "Domestic_Violence": false,
            "Pregnant_Women": false,
            "HIV_AIDS": false,
            "Homeless": false,
            "Substance_Abuse": false,
            "Mental_Illness": false,
            "Developmentally_Delayed": false,
            "Disabled": false,
            "Other": false
        };

        this.returnHome = function () {
            $location.path('/home')
        };

        const url = 'http://globalhack.0x3f8.com:32039/provider';

        this.register = function (provider) {
            return $http.put(url, provider).then(function (result) {
                console.log(provider);
                console.log(result);
                return result;
            })
        }


    }]);