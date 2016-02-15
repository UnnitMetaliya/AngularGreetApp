var greetapp = angular.module('greetapp',[]);

greetapp.controller('GreetingController',['$scope',function($scope){
	$scope.greeting = 'Hello Unnit';
}]);

// var myApp = angular.module('myApp',[]);

// myApp.controller('GreetingController', ['$scope', function($scope) {
//   $scope.greeting = 'Hola!';
// }]);