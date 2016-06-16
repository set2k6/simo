angular.module('simo')
 .controller('Chat', ['$scope','Message','firebase', function($scope, Message){

			$scope.user = "Guest";

			$scope.messages = Message.all;

			$scope.newMessage = function(message){
				Message.create(message);
			};
	}])

	.factory('Message',() => {
		const messages = $firebase(ref.child('messages')).$asArray();

		const Message = {
			all: messages,
			create: function (message) {
				return messages.add(message);
			},

			get: function (messageId) {
				return firebase.database().ref('messages').child(messageId).asObject();
			},

			delete: function (message) {
				return messages.$remove(message);
			}
		};

		return Message;

	})
