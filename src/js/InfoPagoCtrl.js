angular.module('app').controller('InfoPagoCtrl', [ '$scope', '$compile', '$location', function($scope, $compile, $location) {

    $('[data-toggle="tooltip"]').tooltip();


    $("#updateBoleteria").on('click', function(event) {
        event.preventDefault();
        window.history.back();
    });

    $scope.submit = function () {
        $location.url('/pagoexitoso');
    };

}]);

