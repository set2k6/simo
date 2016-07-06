angular.module('simo')
 .controller('classInfoCtrl', function ($scope, $routeParams, $location, AuthFactory, $timeout, $http, $uibModal) {
 	var cname = $routeParams.className;
 	var sname = $routeParams.schoolName;
 	var pname = $routeParams.professor;

 	$scope.className = cname;
 	$scope.schoolName = sname;
 	$scope.professor = pname;
});
