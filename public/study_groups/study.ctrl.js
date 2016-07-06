angular.module('simo')
 .controller('SGCtrl', function ($scope, $location) {
	const sg = this

		sg.addStudyG = function () {
			AuthFactory.addStudyG()
				.then(() => $location.path('/study_groups'))
		}
	})
