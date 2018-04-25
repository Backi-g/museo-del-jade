angular.module('app').service('BoleteriaService', function() {

    this.total = 0;
    this.nacionales = 0;
    this.extranjeros = 0;

    this.getTotal = function() {
        return this.total;
    }

     this.setTotal = function(value) {
        this.total = value;
    }

    this.getNacionales = function() {
        return this.nacionales;
    }

    this.setNacionales = function(value) {
        this.nacionales = value;
    }

    this.getExtranjeros = function() {
        return this.extranjeros;
    }

    this.setExtranjeros = function(value) {
        this.extranjeros = value;
    }
});