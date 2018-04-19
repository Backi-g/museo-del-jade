angular.module('app').controller('PagoExitosoCtrl', [ '$scope', '$compile', '$location', function($scope, $compile, $location) {

    $scope.loadHome = function () {
        $location.url('/home');
    };

}]);

