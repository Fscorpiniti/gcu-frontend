
var App = angular.module('Listado_Materias', []);

    App.controller('Controlador_GET', function($scope, $http){
        
        var url_carreras  = 'http://localhost:8080/gcu/carreras/1/planes';
        var url_planMaterias = 'http://localhost:8080/gcu/planes_estudio/1/plan_materias';
        var url_materias = 'http://localhost:8080/gcu/materias';
        
         $http({method: 'GET', 
               url: url_carreras,
              })
        
        .success(function(data){
           
            $scope.carreras = data; 
        });
        
        $http({method: 'GET', 
               url: url_planMaterias,
              })
        
        .success(function(data){
           
            $scope.planMaterias = data; 
        });
        
        $http({method: 'GET', 
               url: url_materias,
              })
        
        .success(function(data){
           
            $scope.materias = data; 
        });
    });