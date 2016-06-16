angular.module('simo')
  .controller('LogoutCtrl', function (AuthFactory, $scope, $location) {

    $scope.logout = function () {
      AuthFactory.logout()
        .then(() => $location.path('/'))
    }
  })
