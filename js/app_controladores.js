
var App = angular.module('Listado_Materias', []);

    App.controller('Controlador_GET', function($scope, $http){
        
        var url_carreras  = 'http://gcu-api.herokuapp.com:80/carreras/1/planes';
        var url_planMaterias = 'http://gcu-api.herokuapp.com:80/planes/1/materias';
        var url_posiblesCursantes = 'http://gcu-api.herokuapp.com:80/planes/1/materias/probables-cursantes'
        var url_planificacion_primer_cuatri = 'http://localhost:8080/gcu/planificacion/1/1'
        var url_planificacion_segundo_cuatri = 'http://localhost:8080/gcu/planificacion/1/2'
        var url_planificacion_tercer_cuatri = 'http://localhost:8080/gcu/planificacion/2/1'
        var url_planificacion_cuarto_cuatri = 'http://localhost:8080/gcu/planificacion/2/2'
        var url_planificacion_quinto_cuatri = 'http://localhost:8080/gcu/planificacion/3/1'
        var url_planificacion_sexto_cuatri = 'http://localhost:8080/gcu/planificacion/3/2'
        var url_planificacion_septimo_cuatri = 'http://localhost:8080/gcu/planificacion/4/1'
        var url_planificacion_octavo_cuatri = 'http://localhost:8080/gcu/planificacion/4/2'
        var url_planificacion_noveno_cuatri = 'http://localhost:8080/gcu/planificacion/5/1'
        var url_planificacion_decimo_cuatri = 'http://localhost:8080/gcu/planificacion/5/2'
        
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
               url: url_planificacion_primer_cuatri
         }).success(function(data){
           
            $scope.planificacionPrimerCuatri = data;
        });
        
        $http({method: 'GET', 
               url: url_planificacion_segundo_cuatri
         }).success(function(data){
           
            $scope.planificacionSegundoCuatri = data;
        });

        $http({method: 'GET',
            url: url_planificacion_tercer_cuatri
        }).success(function(data){

            $scope.planificacionTercerCuatri = data;
        });

        $http({method: 'GET',
            url: url_planificacion_cuarto_cuatri
        }).success(function(data){

            $scope.planificacionCuartoCuatri = data;
        });

        $http({method: 'GET',
            url: url_planificacion_quinto_cuatri
        }).success(function(data){

            $scope.planificacionQuintoCuatri = data;
        });

        $http({method: 'GET',
            url: url_planificacion_sexto_cuatri
        }).success(function(data){

            $scope.planificacionSextoCuatri = data;
        });

        $http({method: 'GET',
            url: url_planificacion_septimo_cuatri
        }).success(function(data){

            $scope.planificacionSeptimoCuatri = data;
        });

        $http({method: 'GET',
            url: url_planificacion_octavo_cuatri
        }).success(function(data){

            $scope.planificacionOctavoCuatri = data;
        });

        $http({method: 'GET',
            url: url_planificacion_noveno_cuatri
        }).success(function(data){

            $scope.planificacionNovenoCuatri = data;
        });

        $http({method: 'GET',
            url: url_planificacion_decimo_cuatri
        }).success(function(data){

            $scope.planificacionDecimoCuatri = data;
        });
        

    });