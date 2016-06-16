angular.module('simo')
 .controller('AddClassCtrl', function ($scope, $location) {

		$scope.addClass = function () {
			AuthFactory.addClass()
				.then(() => $location.path('/classes'))
		}
	})
