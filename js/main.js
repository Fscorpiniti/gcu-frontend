/** * Main AngularJS Web Application */ 
var app = angular.module('gcu', [ 'ngRoute' ]);
  app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider 
	.when("/", {templateUrl: "home.html", controller: "PageCtrl"}) 
	.when("/carreras", {templateUrl: "carreras.html", controller: "PageCtrl"}) 
	.when("/materias", {templateUrl: "materias.html", controller: "PageCtrl"})  }]);
