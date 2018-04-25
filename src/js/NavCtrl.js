angular.module('app').controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };

    $scope.loadHome = function () {
        $location.url('/home');
    };

    $scope.loadExhibiciones = function () {
        $location.url('/exhibiciones');
    };

    $scope.loadElRecorrido = function () {
        $location.url('/elrecorrido');
    };

    $scope.loadBoleteria = function () {
        $location.url('/boleteria');
    };

}]);