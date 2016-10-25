angular.module('simo')
 .controller('AddClassCtrl', function ($scope, $location, AuthFactory, classService) {
 	const classes = this;
  const service = classService
  $scope.classesList = service.classesList

  $scope.user = null;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
     $scope.user = user.email;
      console.log("working user",user)
    } else {
      console.log("no user");
    }
  })

  this.addClass = (classObj) => {
    this.service.addClass(classObj)
  }

  $scope.addClassesList = () => {
    if ($scope.newClass != "") {
      $scope.newClass,
      this.service.classesList.push(classesList);
      $http.post("https://simo-b6ffe.firebaseio.com/classesList.json", this.service.classesList)
      $scope.newClass = "";
    }
    else {
    }
	}
})


