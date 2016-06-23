angular.module('simo')
.factory('DataModel', function() {
	var Service = {};

	return Service;
})

.controller('ChatCtrl', function($scope, $http, $timeout) {
	$scope.chatMessages = [];

	firebase.database().ref('chat').on('child_added', function (snapshot) {
		$scope.chatMessages.push(snapshot.val())
		$timeout()
	})

	$scope.formatChat = function(icon,username,text,origDt) {
		const chat = {};
		chat.icon = icon;
		chat.username = username;
		chat.text = text;
		chat.origDt = origDt;
		return chat;
	}

	$scope.addChat = function() {
		if ($scope.newChatMsg != "") {
			const chat = $scope.formatChat("icon will go here",
			"John",
			$scope.newChatMsg,
			new Date());

			// $scope.chatMessages.push(chat);
			$http.post("https://simo-b6ffe.firebaseio.com/chat.json", chat)
			$scope.newChatMsg = "";
		}
		else {

		}
	}

})

.filter('reverse', function() {
	return function(items) {
		return items.slice().reverse();
	};
});

$('.navmenu').offcanvas()
