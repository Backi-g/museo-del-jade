
angular.module('app', [
    'ngRoute',
    'ui.bootstrap'
    ]
)

    .config(function ($routeProvider) {

    $routeProvider.when('/home',
        {
            templateUrl:    '/museo-del-jade/src/www/home.html',
            controllerUrl:  '/museo-del-jade/src/js/HomeCtrl.js'
        });
    $routeProvider.when('/exhibiciones',
        {
            templateUrl:    '/museo-del-jade/src/www/exhibiciones.html',
            controllerUrl:  '/museo-del-jade/src/js/ExhibicionesCtrl.js'
        });
    $routeProvider.when('/elrecorrido',
        {
            templateUrl:    '/museo-del-jade/src/www/elrecorrido.html',
            controllerUrl:  '/museo-del-jade/src/js/ElRecorridoCtrl.js'
        });

    $routeProvider.when('/boleteria',
        {
            templateUrl:    '/museo-del-jade/src/www/boleteria.html',
            controllerUrl:     '/museo-del-jade/src/js/BoleteriaCtrl.js'
        });

    $routeProvider.when('/infopago',
        {
            templateUrl:    '/museo-del-jade/src/www/infopago.html',
            controllerUrl:     '/museo-del-jade/src/js/InfoPagoCtrl.js'
        });

    $routeProvider.when('/pagoexitoso',
        {
            templateUrl:    '/museo-del-jade/src/www/pagoexitoso.html',
            controllerUrl:     '/museo-del-jade/src/js/PagoExitosoCtrl.js'
        });
    $routeProvider.otherwise(
        {
            redirectTo:     '/home',
            controllerUrl:   '/museo-del-jade/src/js/HomeCtrl.js'
        }
    );

});







