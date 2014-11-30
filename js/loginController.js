angular.module('app', []).controller('appCtrl', ['$http', '$window',controladorPrincipal]);

function controladorPrincipal($http, $window){
    var userLogin=this;

    //inicializo un objeto en los datos de formulario
    userLogin.fdatos = {};

    var url_login = 'http://localhost:8080/gcu/login'

    // declaro la función enviar
    userLogin.enviar = function(){
      $http.post(url_login, userLogin.fdatos).success(function(res){
          $window.sessionStorage.token = res;
          $window.location.href = 'dashboard.html';
      });

    }
}