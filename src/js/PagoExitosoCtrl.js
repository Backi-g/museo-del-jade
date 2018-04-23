angular.module('app').controller('PagoExitosoCtrl', [ '$scope', '$compile', '$location', 'BoleteriaService', function($scope, $compile, $location, BoleteriaService) {


    $scope.total = BoleteriaService.getTotal();
    $scope.nacionales = BoleteriaService.getNacionales();
    $scope.extranjeros = BoleteriaService.getExtranjeros();

    $scope.loadHome = function () {
        $location.url('/home');
    };

}]);

