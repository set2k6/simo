angular.module('simo')
 .controller('classInfoCtrl', function ($scope, $routeParams, $location, AuthFactory, $timeout, $http, $uibModal, classService, $log) {
 	const service = classService;
 	$scope.classesList = service.classesList;

 	$scope.className = $routeParams.className;
 	$scope.schoolName = $routeParams.schoolName;
 	$scope.professor = $routeParams.professor;

    $log.info(service.getClassByRouteParams($routeParams));
});
