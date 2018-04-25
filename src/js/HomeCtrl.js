angular.module('app').controller('HomeCtrl', [ '$scope', '$compile', '$location', function($scope, $compile, $location) {

    $scope.myInterval = 1000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'http://placekitten.com/' + newWidth + '/300',
            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
            ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };

    for (var i=0; i<3; i++) {
        $scope.addSlide();
    }

    $scope.goToExhibiciones = function() {
        $location.url('/exhibiciones');
    }

    $scope.goToElRecorrido = function() {
        $location.url('/elrecorrido');
    }

    $scope.goToBoleteria = function() {
        $location.url('/boleteria');
    }


}]);