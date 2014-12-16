var App = angular.module('Listado_Materias', []);

App.controller('PlanEstudioController', function($scope, $http, $window){
        
   var url_carreras  = 'http://gcu-api.herokuapp.com:80/carreras/1/planes';

   $http({method: 'GET',
         url: url_carreras + '?access_token=' + $window.sessionStorage.token
   }).success(function(data){
         $scope.planes = data;
   })

});

App.controller('MateriasController', function($scope, $http, $window){

    var url_posiblesCursantes = 'http://gcu-api.herokuapp.com:80/planes/1/materias/probables-cursantes'

    $http({method: 'GET',
        url: url_posiblesCursantes + '?access_token=' + $window.sessionStorage.token
    }).success(function(data){
        $scope.posiblesCursantes = data;
    });

});

App.controller('PlanificacionParController', function($scope, $http, $window){

    var url_planificacion_cuatri_par = 'http://gcu-api.herokuapp.com:80/planificacion/par'
    var url_planificacion_cuatri_par_refresh = 'http://gcu-api.herokuapp.com:80/planificacion/par/refresh'
    var url_planificacion_cuatri_par_change = 'http://gcu-api.herokuapp.com:80/planificacion/par/change'

    var controlador=this;
    controlador.fdatos = {};

    $http({method: 'GET',
        url: url_planificacion_cuatri_par + '?access_token=' + $window.sessionStorage.token
    }).success(function(data){
        $scope.scoresPares = data.scores;
        $scope.scoreUnificadoPar = data.score;
        $scope.scoreSegundoCuatri = data.scoreCuatrimestre1;
        $scope.scoreCuartoCuatri = data.scoreCuatrimestre2;
        $scope.scoreSextoCuatri = data.scoreCuatrimestre3;
        $scope.scoreOctavoCuatri = data.scoreCuatrimestre4;
        $scope.scoreDecimoCuatri = data.scoreCuatrimestre5;
        $scope.fechaActualizacion = data.fechaActualizacion;
        $scope.planificacionSegundoCuatri = data.cuatrimestre1;
        $scope.planificacionCuartoCuatri = data.cuatrimestre2;
        $scope.planificacionSextoCuatri = data.cuatrimestre3;
        $scope.planificacionOctavoCuatri = data.cuatrimestre4;
        $scope.planificacionDecimoCuatri = data.cuatrimestre5;
    });

    controlador.refresh = function(){
        $http({method: 'GET',
            url: url_planificacion_cuatri_par_refresh + '?access_token=' + $window.sessionStorage.token
        }).success(function(data){
            $scope.scoresPares = data.scores;
            $scope.scoreUnificadoPar = data.score;
            $scope.scoreSegundoCuatri = data.scoreCuatrimestre1;
            $scope.scoreCuartoCuatri = data.scoreCuatrimestre2;
            $scope.scoreSextoCuatri = data.scoreCuatrimestre3;
            $scope.scoreOctavoCuatri = data.scoreCuatrimestre4;
            $scope.scoreDecimoCuatri = data.scoreCuatrimestre5;
            $scope.fechaActualizacion = data.fechaActualizacion;
            $scope.planificacionSegundoCuatri = data.cuatrimestre1;
            $scope.planificacionCuartoCuatri = data.cuatrimestre2;
            $scope.planificacionSextoCuatri = data.cuatrimestre3;
            $scope.planificacionOctavoCuatri = data.cuatrimestre4;
            $scope.planificacionDecimoCuatri = data.cuatrimestre5;
        });
    }

    controlador.change = function(){
        $http.post(url_planificacion_cuatri_par_change+ '?access_token=' + $window.sessionStorage.token, controlador.fdatos)
            .success(function(data){
                $scope.scoresPares = data.scores;
                $scope.scoreUnificadoPar = data.score;
                $scope.scoreSegundoCuatri = data.scoreCuatrimestre1;
                $scope.scoreCuartoCuatri = data.scoreCuatrimestre2;
                $scope.scoreSextoCuatri = data.scoreCuatrimestre3;
                $scope.scoreOctavoCuatri = data.scoreCuatrimestre4;
                $scope.scoreDecimoCuatri = data.scoreCuatrimestre5;
                $scope.fechaActualizacion = data.fechaActualizacion;
                $scope.planificacionSegundoCuatri = data.cuatrimestre1;
                $scope.planificacionCuartoCuatri = data.cuatrimestre2;
                $scope.planificacionSextoCuatri = data.cuatrimestre3;
                $scope.planificacionOctavoCuatri = data.cuatrimestre4;
                $scope.planificacionDecimoCuatri = data.cuatrimestre5;
            });
    }

});

App.controller('PlanificacionImparController', function($scope, $http, $window){

    var url_planificacion_cuatri_impar = 'http://gcu-api.herokuapp.com:80/planificacion/impar'
    var url_planificacion_cuatri_impar_refresh = 'http://gcu-api.herokuapp.com:80/planificacion/impar/refresh'
    var url_planificacion_cuatri_impar_change = 'http://gcu-api.herokuapp.com:80/planificacion/impar/change'

    var controlador=this;
    controlador.fdatos = {};

    $http({method: 'GET',
        url: url_planificacion_cuatri_impar + '?access_token=' + $window.sessionStorage.token
    }).success(function(data){
        $scope.scoresImpares = data.scores;
        $scope.scoreUnificadoImpar = data.score;
        $scope.scorePrimerCuatri = data.scoreCuatrimestre1;
        $scope.scoreTercerCuatri = data.scoreCuatrimestre2;
        $scope.scoreQuintoCuatri = data.scoreCuatrimestre3;
        $scope.scoreSeptimoCuatri = data.scoreCuatrimestre4;
        $scope.scoreNovenoCuatri = data.scoreCuatrimestre5;
        $scope.fechaActualizacion = data.fechaActualizacion;
        $scope.planificacionPrimerCuatri = data.cuatrimestre1;
        $scope.planificacionTercerCuatri = data.cuatrimestre2;
        $scope.planificacionQuintoCuatri = data.cuatrimestre3;
        $scope.planificacionSeptimoCuatri = data.cuatrimestre4;
        $scope.planificacionNovenoCuatri = data.cuatrimestre5;
    });

    controlador.refresh = function(){
        $http({method: 'GET',
            url: url_planificacion_cuatri_impar_refresh + '?access_token=' + $window.sessionStorage.token
        }).success(function(data){
            $scope.scoresImpares = data.scores;
            $scope.scoreUnificadoImpar = data.score;
            $scope.scorePrimerCuatri = data.scoreCuatrimestre1;
            $scope.scoreTercerCuatri = data.scoreCuatrimestre2;
            $scope.scoreQuintoCuatri = data.scoreCuatrimestre3;
            $scope.scoreSeptimoCuatri = data.scoreCuatrimestre4;
            $scope.scoreNovenoCuatri = data.scoreCuatrimestre5;
            $scope.fechaActualizacion = data.fechaActualizacion;
            $scope.planificacionPrimerCuatri = data.cuatrimestre1;
            $scope.planificacionTercerCuatri = data.cuatrimestre2;
            $scope.planificacionQuintoCuatri = data.cuatrimestre3;
            $scope.planificacionSeptimoCuatri = data.cuatrimestre4;
            $scope.planificacionNovenoCuatri = data.cuatrimestre5;
        });
    }

    controlador.change = function(){
        $http.post(url_planificacion_cuatri_impar_change+ '?access_token=' + $window.sessionStorage.token, controlador.fdatos)
            .success(function(data){
            $scope.scoresImpares = data.scores;
            $scope.scoreUnificadoImpar = data.score;
            $scope.scorePrimerCuatri = data.scoreCuatrimestre1;
            $scope.scoreTercerCuatri = data.scoreCuatrimestre2;
            $scope.scoreQuintoCuatri = data.scoreCuatrimestre3;
            $scope.scoreSeptimoCuatri = data.scoreCuatrimestre4;
            $scope.scoreNovenoCuatri = data.scoreCuatrimestre5;
            $scope.fechaActualizacion = data.fechaActualizacion;
            $scope.planificacionPrimerCuatri = data.cuatrimestre1;
            $scope.planificacionTercerCuatri = data.cuatrimestre2;
            $scope.planificacionQuintoCuatri = data.cuatrimestre3;
            $scope.planificacionSeptimoCuatri = data.cuatrimestre4;
            $scope.planificacionNovenoCuatri = data.cuatrimestre5;
        });
    }

});