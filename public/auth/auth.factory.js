angular.module('simo')
	// .factory('InitializeFirebaseFactory', () => {

	// 	return {
	// 		firebaseReference () {
	// 			return firebase;
	// 		}
	// 	};
	// })
	.factory('AuthFactory', ($timeout, $http) => {
		let currentUser = null;

		return {
			login (email, password) {
				return $timeout().then(() => (
					firebase.auth().signInWithEmailAndPassword(email, password)
				)).then((loginResponse) => currentUser = loginResponse.uid);
			},

			register (email, password) {
				return $timeout().then(() => (
					firebase.auth().createUserWithEmailAndPassword(email, password)
					)).then((loginInfo) => $location.path('/classes'))
			},

			curUser () {
				return $timeout().then (() => {
				const user = firebase.auth().currentUser
				if (user) {
    			// User is signed in.
    			 return user
  				} else {
   			 // No user is signed in.
   			 return null
  				}
			})
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

// $('.navmenu').offcanvas()



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

