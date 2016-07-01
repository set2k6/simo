angular.module('simo')
 .controller('AddClassCtrl', function ($scope, $location, $timeout, AuthFactory) {
 	const classes = this;
  $scope.classesList = [];

  $scope.user = null;

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
       $scope.user = user.email;
        console.log("working user",user)
      } else {
        console.log("no user");
      }
    })

		classes.addClass = function (classObj) {
        firebase.database().ref('classArr').push(classObj);
      /*
			AuthFactory.addClass()
				.then(() => $location.path('/classes'))*/
		}

  firebase.database().ref('classArr').on('child_added', function (snapshot) {
    $scope.classesList.push(snapshot.val())
    $timeout()
  })

$scope.addClassesList = function() {
    if ($scope.newClass != "") {

      $scope.newClass,


      // $scope.classesList.push(classesList);
      $http.post("https://simo-b6ffe.firebaseio.com/classesList.json", classesList)
      $scope.newClass = "";
    }
    else {
    }


	}
})


