angular.module('app', []).controller('appCtrl', ['$http', '$window',controladorPrincipal]);

function controladorPrincipal($http, $window){
    var userLogin=this;
    userLogin.fdatos = {};

    var url_login = 'http://gcu-api.herokuapp.com:80/login'

    userLogin.enviar = function(){
      $http.post(url_login, userLogin.fdatos).success(function(res){
          $window.sessionStorage.token = res;
          $window.location.href = 'dashboard.html';
      }).error(function(data, status, headers, config) {
          $window.alert('Nombre de usuario o password incorrecto, vuelva a ingresarlos');
      });
    }
}