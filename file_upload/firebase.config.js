angular.module('simo')
	.config(() => (
		firebase.initializeApp({
		apiKey: "AIzaSyCcqIfV5WqHbjdLBwYENErYX9bwb0DXomA",
		authDomain: "simo-b6ffe.firebaseapp.com",
		databaseURL: "https://simo-b6ffe.firebaseio.com",
		storageBucket: "simo-b6ffe.appspot.com",
	})))
