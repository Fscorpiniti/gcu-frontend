
var App = angular.module('Listado_Materias', []);

    App.controller('Controlador_GET', function($scope, $http){

        var url_carreras  = 'http://localhost:8080/gcu/carreras/1/planes';
        var url_planMaterias = 'http://localhost:8080/gcu/planes/1/materias';
        var url_posiblesCursantes = 'http://localhost:8080/gcu/planes/1/materias/probables-cursantes'
        var url_planificacion_cuatri_par = 'http://localhost:8080/gcu/planificacion/par'
        var url_planificacion_cuatri_impar = 'http://localhost:8080/gcu/planificacion/impar'
        
        $http({method: 'GET',
               url: url_carreras
          }).success(function(data){
             $scope.planes = data;
        })

        $http({method: 'GET', 
               url: url_planMaterias
         }).success(function(data){
           
            $scope.materias = data;
        });
                
        $http({method: 'GET', 
               url: url_posiblesCursantes
         }).success(function(data){
           
            $scope.posiblesCursantes = data; 
        });
        
        $http({method: 'GET', 
               url: url_planificacion_cuatri_par
         }).success(function(data){
            $scope.scoresPares = data.scores;
            $scope.scoreUnificadoPar = data.score;
            $scope.scoreSegundoCuatri = data.scoreSegundoCuatri;
            $scope.scoreCuartoCuatri = data.scoreCuartoCuatri;
            $scope.scoreSextoCuatri = data.scoreSextoCuatri;
            $scope.scoreOctavoCuatri = data.scoreOctavoCuatri;
            $scope.scoreDecimoCuatri = data.scoreDecimoCuatri;
            $scope.planificacionSegundoCuatri = data.nivelesSegundoCuatri;
            $scope.planificacionCuartoCuatri = data.nivelesCuartoCuatri;
            $scope.planificacionSextoCuatri = data.nivelesSextoCuatri;
            $scope.planificacionOctavoCuatri = data.nivelesOctavoCuatri;
            $scope.planificacionDecimoCuatri = data.nivelesDecimoCuatri;
        });
        
        $http({method: 'GET', 
               url: url_planificacion_cuatri_impar
         }).success(function(data){
            $scope.scoresImpares = data.scores;
            $scope.scoreUnificadoImpar = data.score;
            $scope.scorePrimerCuatri = data.scorePrimerCuatri;
            $scope.scoreTercerCuatri = data.scoreTercerCuatri;
            $scope.scoreQuintoCuatri = data.scoreQuintoCuatri;
            $scope.scoreSeptimoCuatri = data.scoreSeptimoCuatri;
            $scope.scoreNovenoCuatri = data.scoreNovenoCuatri;
            $scope.planificacionPrimerCuatri = data.nivelesPrimerCuatri;
            $scope.planificacionTercerCuatri = data.nivelesTercerCuatri;
            $scope.planificacionQuintoCuatri = data.nivelesQuintoCuatri;
            $scope.planificacionSeptimoCuatri = data.nivelesSeptimoCuatri;
            $scope.planificacionNovenoCuatri = data.nivelesNovenoCuatri;
        });

    });