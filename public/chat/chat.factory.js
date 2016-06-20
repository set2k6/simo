angular.module('simo')
.factory('DataModel', function() {
	var Service = {};

	return Service;
})

.controller('ChatCtrl', function($scope) {
	$scope.chatMessages = [];

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
			const chat = $scope.formatChat(//"icon will go here"//,
			"John",
			$scope.newChatMsg,
			new Date());

			$scope.chatMessages.push(chat);
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
