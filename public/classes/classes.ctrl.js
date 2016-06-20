angular.module('simo')
 .controller('AddClassCtrl', function ($scope, $location) {
 	const classes = this

		classes.addClass = function () {
			AuthFactory.addClass()
				.then(() => $location.path('/classes'))
		}
	})

.controller("TodoCtrl", ($scope, $http) => {

  $scope.title = 'Angular Todo - PFM!';
  $scope.filter2 = '';
  $scope.potato = '';
  $scope.variableName = '';

  $scope.newTodo = '';
  $scope.taskType = 'home';

  $scope.selectedTodo = 'nothing';

  $scope.tasks = [
    { name: "Make the bed", type: "home"},
    { name: "Eat breakfast", type: "home"},
    { name: "Check the network", type: "work"},
    { name: "Start up Slack", type: "work"},
    { name: "Feed the cats", type: "home"}
  ];

  $http({
    method: 'GET',
    url: '/data/tasks.json'
  }).then((response) => {
    $scope.tasks = response.data.tasks;
  })

  $http.get('/data/tasks.json')
    .then((response) => {
      $scope.tasks = response.data.tasks;
    })

  $http.post('/data/tasks.json', {data: "what I'm sending"})
    .then((response) => {
      console.log("response", response);
      $scope.tasks = response.data.tasks;
  })

  $scope.addTodo = () => {
    $scope.tasks.push({ name: $scope.newTodo, type: $scope.taskType});
    $scope.newTodo = '';
  }

  $scope.removeTodo = (task) => {
    const taskIndex = $scope.tasks.indexOf(task);
    if (taskIndex >= 0) { // eslint-disable-line no-magic-numbers
      $scope.tasks.splice(taskIndex, 1); // eslint-disable-line no-magic-numbers
    }
  }
})
