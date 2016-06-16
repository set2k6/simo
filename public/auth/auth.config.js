angular.module('simo')
	.config(($routeProvider) => {
		$routeProvider
			.when('/', {
				controller: 'LoginCtrl',
				controllerAs: 'auth',
				templateUrl: '/auth/login.html'
			})
	})
