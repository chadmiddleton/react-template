angular.module('app').controller('inNeedProfileController',
    ['$route', '$scope', '$location', 'profile', 'inNeedProfileService',
        function($route, $scope, $location, profile, inNeedProfileService) {

            $scope.profile = profile.data;

            this.returnHome = function() {
                $location.path('/home')
            };

            console.log($scope.profile);
}]);