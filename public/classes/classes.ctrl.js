angular.module('simo')
 .controller('AddClassCtrl', function ($scope, $location, AuthFactory, classService, $window) {
 	const classes = this;
  this.service = classService
  $scope.classesList = this.service.classesList

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
    this.service.addClass(classObj).then(() => {
      $scope.alert = {
        type: "success",
        message: "Class successfully added."
      }
      
      $scope.classObj = {}
      $scope.$digest()
    })
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

  $scope.closeAlert = function() {
    $scope.alert = null;
  }
})


