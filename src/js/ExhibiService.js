angular.module('app').service('ExhibiService', function(){

    var ex = {};

    this.getExhibicion = function () {
        return ex;
    }

    this.setExhibicion = function(pNombre,pIntro,pDescripcion,pPics){
        ex = {
            nombre: pNombre,
            intro: pIntro,
            descripcion: pDescripcion,
            pics: pPics
        };
    }
});