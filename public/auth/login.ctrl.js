angular.module('simo')
	.controller('LoginCtrl', function (AuthFactory, $location) {
		const auth = this;

		auth.login = function () {
			AuthFactory.login(auth.user.email, auth.user.password)
				// .then((loginInfo) => auth.currentUser = loginInfo.uid)
				// .then(() => $location.path('/'))
				.then((loginInfo) => $location.path('/file_upload'))
		}

	auth.oneAtATime = true;

	auth.groups = [
		{
			title: 'Dynamic Group Header - 1',
			content: 'Dynamic Group Body - 1'
		},
		{
			title: 'Dynamic Group Header - 2',
			content: 'Dynamic Group Body - 2'
		}
	];

	auth.items = ['Item 1', 'Item 2', 'Item 3'];

	auth.addItem = function() {
		var newItemNo = auth.items.length + 1;
		auth.items.push('Item ' + newItemNo);
	};

	auth.status = {
		isCustomHeaderOpen: false,
		isFirstOpen: true,
		isFirstDisabled: false
	};
});
