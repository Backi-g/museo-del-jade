angular.module('app').controller('ExhibicionesCtrl', ['$scope', '$compile', '$location', 'ExhibiService', function($scope, $compile, $location, ExhibiService) {
    $scope.tituloPagina = "Exhibiciones";

    $scope.goToDetail = function(pNombre,pIntro,pDescripcion,pPics) {
        ExhibiService.setExhibicion(pNombre,pIntro,pDescripcion,pPics);
        $location.url('/detalleExhibiciones');

    };

    $scope.exhibList = [
    {nombre:'Limite', tipo:"Permanente", pics:['Limite-01.jpg','Limite-02.jpg','Limite-03.jpg','Limite-04.jpg'], intro:"Espacio que presenta los escenarios culturales y ecológicos donde se desarrollaron las sociedades elaboradoras de jade.", descripcion:'El umbral se puede disfrutar a través de un efecto museográfico: las maravillosas piezas de los objetos de la colección de jade se muestran en una gran vitrina en forma de serpiente. Del mismo modo, y como icono del museo, es un bloque de jade en su estado natural antes de que se trabaje.'},
    {nombre:'El Jade', tipo:"Permanente", pics:['El Jade-01.jpg','El Jade-02.jpg','El Jade-03.jpg','El Jade-04.jpg'], intro:"Esta sala presenta temas relacionados con el proceso de elaboración de jade, así como las rutas de comercio, el simbolismo, el uso social y el chamanismo, utilizando grupos de objetos relacionados con estos temas.",  descripcion:' Podrás viajar por las rutas utilizadas para comercializar jade en un mapa; también, aprenda cómo se trabajó el jade en la época precolombina, los rituales y las ceremonias asociadas a él.'},
    {nombre:'El Día', tipo:"Temporal", pics:['El Dia-01.jpg','El Dia-02.jpg','El Dia-03.jpg','El Dia-04.jpg'], intro:"Este espacio muestra actividades relacionadas con la vida cotidiana de las personas: organización social, relacionada con su entorno natural y los animales representados en los objetos de la colección.",  descripcion:'Los temas incluidos son arquitectura, navegación, así como pesca, caza y agricultura. Los recursos tridimensionales se utilizan para recrear la vida cotidiana de una comunidad.'}];

}]);