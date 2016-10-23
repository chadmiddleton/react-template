angular.module('app').controller('inNeedProfileController',
    ['$route', '$scope', '$location', 'profile', 'inNeedProfileService',
        function($route, $scope, $location, profile, inNeedProfileService) {

            $scope.profile = profile.data;

            console.log($scope.profile);
}]);