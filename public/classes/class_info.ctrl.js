angular.module('simo')
 .controller('classInfoCtrl', function ($scope, $routeParams) {
 	var name = $routeParams.className;
 	$scope.className = name;
});
