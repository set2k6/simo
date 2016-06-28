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
					)).then((loginInfo) => $location.path('/login'))
			},

			curUser () {
				const user = firebase.auth().currentUser
				return $timeout().then (() => {
				if (user) {
    			// User is signed in.
    			 return user
    			 $scope.user = curUser.user.uid
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

