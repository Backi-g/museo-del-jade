angular.module('app').controller('BoleteriaCtrl', [ '$scope', '$compile', '$location', 'BoleteriaService', function($scope, $compile, $location, BoleteriaService) {

    $scope.total = BoleteriaService.getTotal();
    $scope.nacionales = BoleteriaService.getNacionales();
    $scope.extranjeros = BoleteriaService.getExtranjeros();

    $scope.loadPaymentInfo = function () {
        $location.url('/infopago');
    };


    $(document).on('click', '.btn-nacional ', function () {
        var btn = $(this),
            oldValue = btn.closest('.number-spinner').find('input').val().trim(),
            newVal = 0;

        if (btn.attr('data-dir') == 'up') {
            newVal = parseInt(oldValue) + 1;
        } else {
            if (oldValue > 1) {
                newVal = parseInt(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        btn.closest('.number-spinner').find('input').val(newVal);

        $scope.nacionales = newVal;
        BoleteriaService.setNacionales($scope.nacionales);

        calcularTotal();

    });


    $(document).on('click', '.btn-extranjeros ', function () {
        var btn = $(this),
            oldValue = btn.closest('.number-spinner').find('input').val().trim(),
            newVal = 0;

        if (btn.attr('data-dir') == 'up') {
            newVal = parseInt(oldValue) + 1;
        } else {
            if (oldValue > 1) {
                newVal = parseInt(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        btn.closest('.number-spinner').find('input').val(newVal);

        $scope.extranjeros = newVal;
        BoleteriaService.setExtranjeros($scope.extranjeros);

        calcularTotal();

    });

    function calcularTotal() {
        $scope.total = ($scope.nacionales * 5) + ($scope.extranjeros * 15);
        BoleteriaService.setTotal($scope.total);
        $scope.$apply();
    };


}]);

