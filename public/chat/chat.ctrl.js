angular.module('simo')
	.controller('DropdownCtrl', function ($scope, $log) {
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
});
//  .controller('ChatCtrl', ['Message', function(Message){
//  		const chat = this
// 			chat.user = "Guest";

// 			chat.messages = Message.all;

// 			chat.messageIn = function(message){
// 				Message.create(message);
// 			};
// 	}])

// 	.factory('Message',() => {
// 		// const messages = firebase.database().ref('/').child('messages').$asArray();
// 		const messages = null

// 		const Message = {
// 			all: messages,
// 			create: function (message) {
// 				return messages.add(message);
// 			},

// 			get: function (messageId) {
// 				return firebase.database().ref('messages').child(messageId).asObject();
// 			},

// 			delete: function (message) {
// 				return messages.$remove(message);
// 			}
// 		};

// 		return Message;

// 	})
