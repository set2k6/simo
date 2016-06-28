angular.module('simo')
	.controller('LoginCtrl', function (AuthFactory, $timeout, $http, $location, $scope, $uibModal) {
		const auth = this;
		// $scope.user = firebase.auth().currentUser.uid

		auth.login = function () {
			AuthFactory.login(auth.user.email, auth.user.password)
				// .then((loginInfo) => auth.currentUser = loginInfo.uid)
				// .then(() => $location.path('/'))
				.then((loginInfo) => $location.path('/classes'))
		}
		  auth.register = function () {
      AuthFactory.register(auth.user.email, auth.user.password)
        .then (() => {
					$timeout(() => {
						AuthFactory.login(email, password)
						.then((res) => {
							var obj = {
                  uid: res.uid,
                  email: email
                }
                console.log("myobj", obj)
							 $http.post("https://simo-b6ffe.firebaseio.com", obj)
					})
        })
        $location.path('/login')
		})
 		auth.register = function() {
      registerMod = $uibModal.open({
        templateUrl: "auth/register.html",
        controller: "LoginCtrl",
        controllerAs: "auth"
    })

		AuthFactory.curUser().then(function (user){

		})


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
	}
}
}
})
