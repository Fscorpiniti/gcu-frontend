
var App = angular.module('Listado_Materias', []);

    App.controller('Controlador_GET', function($scope, $http){
        
        var url_carreras  = 'http://gcu-api.herokuapp.com:80/carreras/1/planes';
        var url_planMaterias = 'http://gcu-api.herokuapp.com:80/planes/1/materias';
        var url_posiblesCursantes = 'http://gcu-api.herokuapp.com:80/planes/1/materias/probables-cursantes'
        var url_planificacion_cuatri_par = 'http://gcu-api.herokuapp.com:80/planificacion/par'
        var url_planificacion_cuatri_impar = 'http://gcu-api.herokuapp.com:80/planificacion/impar'

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
            $scope.scoreFinalPar = data.scoreFinal;
            $scope.planificacionSegundoCuatri = data.nivelesSegundoCuatri;
            $scope.planificacionCuartoCuatri = data.nivelesCuartoCuatri;
            $scope.planificacionSextoCuatri = data.nivelesSextoCuatri;
            $scope.planificacionOctavoCuatri = data.nivelesOctavoCuatri;
            $scope.planificacionDecimoCuatri = data.nivelesDecimoCuatri;
        });
        
        $http({method: 'GET', 
               url: url_planificacion_cuatri_impar
         }).success(function(data){
            $scope.scoreFinalImpar = data.scoreFinal;
            $scope.planificacionPrimerCuatri = data.nivelesPrimerCuatri;
            $scope.planificacionTercerCuatri = data.nivelesTercerCuatri;
            $scope.planificacionQuintoCuatri = data.nivelesQuintoCuatri;
            $scope.planificacionSeptimoCuatri = data.nivelesSeptimoCuatri;
            $scope.planificacionNovenoCuatri = data.nivelesNovenoCuatri;
        });

    });