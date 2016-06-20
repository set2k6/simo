angular.module('simo')
	// .factory('InitializeFirebaseFactory', () => {

	// 	return {
	// 		firebaseReference () {
	// 			return firebase;
	// 		}
	// 	};
	// })
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
					firebase.auth().signOut()).then(function() {
						// Sign-out successful.
						alert('Successfully Signed Out')
						currentUser = null;
					}, function(error) {
						// An error happened.
						alert('Error Loggin Out');
					})
				)
			}
		}
	})

$('.navmenu').offcanvas()



	// 		getUser () {
	// 			return currentUser;
	// 		}
	// 	};
	// })


	// .factory('UserFactory', ($http) => {


	// 	return {
	// 		submitInfo (type, noteInfo) {
	// 			return $http.post(`https://simo-b6ffe.firebaseio.com/.json`, noteInfo)
	// 		}
	// 	}
	// })

