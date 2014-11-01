
var App = angular.module('Listado_Materias', []);

    App.controller('Controlador_GET', function($scope, $http){
        
        var url_carreras  = 'http://gcu-api.herokuapp.com:80/carreras/1/planes';
        var url_planMaterias = 'http://gcu-api.herokuapp.com:80/planes/1/materias';
        var url_posiblesCursantes = 'http://gcu-api.herokuapp.com:80/planes/1/materias/probables-cursantes'
        var url_planificacionPares = 'http://gcu-api.herokuapp.com:80/par/planificacion'
        var url_planificacionImpares = 'http://gcu-api.herokuapp.com:80/impar/planificacion'
        
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
               url: url_planificacionPares
         }).success(function(data){
           
            $scope.planificacionSemana = data; 
        });
        
        $http({method: 'GET', 
               url: url_planificacionImpares
         }).success(function(data){
           
            $scope.planificacionSemana = data; 
        });
        

    });