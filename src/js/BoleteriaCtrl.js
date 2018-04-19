angular.module('app').controller('BoleteriaCtrl', [ '$scope', '$compile', '$location', function($scope, $compile, $location) {

    $scope.nacionales = 10;
    $scope.extranjeros = 8;
    $scope.mySpinners = [];

    $("input[type='number']").InputSpinner();

    // document.getElementById('spinner2').addEventListener('change', function (evt) {
    //     console.log("viene");
    //     console.log(this.value);
    // });

    // var spinners = document.getElementsByClassName('spinners');
    //
    // angular.forEach(spinners, function (value,key) {
    //
    //     $scope.mySpinners.push(value) ;
    //
    // })
    //
    // console.log($scope.mySpinners.length);
    //
    // $scope.jsFunction = function () {
    //     console.log("ajaaa");
    // }

    // $( ".spinners" ).change(function() {
    //     alert( "Handler for .change() called." );
    // });
    //
    // console.log(document.getElementById('spin').value);


     // $scope.mySpinners[0].addEventListener('onchange', $scope.jsFunction, false)

    $scope.updateInput = function (val) {
        console.log("hizo click");
        console.log(val);
    };

    $scope.loadPaymentInfo = function () {
        $location.url('/infopago');
    };


}]);

