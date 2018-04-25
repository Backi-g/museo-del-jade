angular.module('app').controller('ElRecorridoCtrl', [ '$scope', '$compile', function($scope, $compile) {
    
    $scope.h3_template="Bienvenido a El Recorrido";
    $scope.p_template="Seleccione un nivel para conocer los detalles de las diferentes salas que ofrece el museo";
    $scope.img_template = "src/images/elRecorrido.jpg";
    $scope.style_thumbnailParagraph="font-family: 'Montserrat-Regular', sans-serif;font-style: normal;";
    $scope.containerVisibility="visibility:visible;display:block;";

    $scope.changeContent = function(planta) {
		var img = "img_"+planta;
		var h3="h3_"+planta;
		var p="p_"+planta;

		$scope.img_template = document.getElementById(img).src;
		$scope.h3_template = document.getElementById(h3).textContent;
		$scope.p_template = document.getElementById(p).textContent;
		$scope.containerVisibility="visibility:visible;display:block;";
	}
	$scope.changeContentMobile=function(planta) {
		var modalImage="modalImg_"+planta;
		var h5="title_"+planta;
		var modalParagraph="modalP_"+planta;

	    $scope.modal_title=document.getElementById(h5).textContent;
	    $scope.modal_img=document.getElementById(modalImage).src;
	    $scope.modalVisibility="visibility:visible !important;display:block !important;";
	    $scope.style_modalParagraph="font-family: 'Montserrat-Regular', sans-serif;font-style: normal;";
	    $scope.modal_paragraph=document.getElementById(modalParagraph).textContent;

	}
}]);