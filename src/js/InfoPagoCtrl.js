angular.module('app').controller('InfoPagoCtrl', [ '$scope', '$compile', '$location', 'BoleteriaService', function($scope, $compile, $location, BoleteriaService) {

    $('[data-toggle="tooltip"]').tooltip()

    $scope.total = BoleteriaService.getTotal();
    $scope.nacionales = BoleteriaService.getNacionales();
    $scope.extranjeros = BoleteriaService.getExtranjeros();
    $scope.isSelected = false;
    $scope.isSelectedFirst = false;


    $("#updateBoleteria").on('click', function(event) {
        event.preventDefault();
        window.history.back();
    });

    $scope.submit = function (event) {
        var form = document.getElementById('formInfoPago');

        event.preventDefault();
        event.stopPropagation();

            if (form.checkValidity() === true) {

                if($scope.isSelected) {
                    $scope.isSelectedFirst = false;
                    $location.url('/pagoexitoso');
                }else{
                    $scope.isSelectedFirst = true;
                }

            }
            form.classList.add('was-validated');


        //
    };

    $scope.setSelected = function () {
        $scope.isSelectedFirst =  !$scope.isSelected ? true : false;
    }


}]);

