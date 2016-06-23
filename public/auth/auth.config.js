angular.module('simo')
	.config(($routeProvider) => {
		$routeProvider
			.when('/', {
				controller: 'LoginCtrl',
				controllerAs: 'auth',
				templateUrl: '/auth/login.html'
			})
				.when('/chat', {
				controller: 'ChatCtrl',
				controllerAs: 'chat',
				templateUrl: '/chat/chat.html'
			})
					.when('/classes', {
				controller: 'AddClassCtrl',
				controllerAs: 'classes',
				templateUrl: '/classes/classes.html'
			})
			.when('/study_groups', {
				controller: 'SGCtrl',
				controllerAs: 'sg',
				templateUrl: '/study_groups/study.html'
			})
			.otherwise('/classes')
	})
