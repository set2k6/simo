angular.module('simo')
angular.module('simo')
	.config(($routeProvider) => {
		$routeProvider
			.when('/study_groups', {
				controller: 'SGCtrl',
				controllerAs: 'sg',
				templateUrl: '/study_groups/study.html'
			})
			.otherwise('/')
	})
