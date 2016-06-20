// angular.module('simo')
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
