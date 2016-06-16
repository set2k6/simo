angular.module('simo')
	.config(($routeProvider) => {
		$routeProvider
			.when('/file_upload', {
				controller: 'FileUpCtrl',
				controllerAs: 'fileUp',
				templateUrl: '/file_upload/file_upload.html'
			})
	})
