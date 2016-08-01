angular.module('simo', [])
	.factory('InitializeFirebaseFactory', () => {
		var config = {
			apiKey: "AIzaSyCcqIfV5WqHbjdLBwYENErYX9bwb0DXomA",
			authDomain: "simo-b6ffe.firebaseapp.com",
			databaseURL: "https://simo-b6ffe.firebaseio.com",
			storageBucket: "simo-b6ffe.appspot.com",
			};
			firebase.initializeApp(config);
		return {
			firebaseReference () {
				return firebase;
			}
		};
	})

	.factory('AuthFactory', ($timeout) => {
		let currentUser = null;

		return {
			login (email, password) {
				return $timeout().then(() => (
					firebase.auth().signInWithEmailAndPassword(email, password)
				)).then((loginResponse) => currentUser = loginResponse.uid);
			},

			logout () {
			 return $timeout().then(() => (
					firebase.auth().signOut().then(function() {
						// Sign-out successful.
						currentUser = null;
					}, function(error) {
						// An error happened.
						alert('Error Loggin Out');
					})
				))
			},

			getUser () {
				return currentUser;
			}
		};
	})


	.factory('UserFactory', ($http) => {


		return {
			submitInfo (type, noteInfo) {
				return $http.post(`https://simo-b6ffe.firebaseio.com/.json`, noteInfo)
			}
		}
	})

