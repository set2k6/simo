angular.module("simo")
.controller("FileUpCtrl", function ($timeout, fileUpFactory) {
		const fileUp = this

		fileUp.heading = "Share Your Class Notes"
		// fileUp.photoURLs = []

		firebase.database().ref('/images').on('value', snap => (
			$timeout()
				.then(() => snap.val())
				.then(data => {
					fileUp.photos = data;
					console.log(data.getMetadata);
					console.log(fileUp.photos);

					// fileUp.photos.forEach(function(photo) {
					// 		photo.getMetadata().then(function(data) {
					// 			photo.comment = data.comment;
					// 		});
					// });
				})
		))

		fileUp.submit = function (upload) {
			console.log("submit")
			const input = document.querySelector('[type="file"]')
			const file = input.files[0]
			// console.dir(input.file)
			const randomInteger = Math.random() * 1e17
			const getFileExtension = file.type.split("/").slice(-1)[0]
			const randomPath = `${randomInteger}.${getFileExtension}`
			// const uploadTask = firebase.storage().ref().child("funnypic1.jpg").put(file)

			 fileUpFactory.send(file, randomPath, upload.comment)
				.then(res => {
					return res.downloadURL
				})
				.then((url) => {
					firebase.database().ref('/images').push({url})
				})
			// uploadTask.on('state_changed', null, null, () => {
			// 	up.photoURLs.push(uploadTask.snapshot.downloadURL)
			// 	$scope.$apply(
		}
	})
 .factory('fileUpFactory', ($timeout) => ({
		send (file, path = file.name, comment = '') {
			return $timeout().then(() => (
				new Promise ((resolve, reject) => {
					const uploadTask = firebase.storage().ref()
						.child(path).put(file, { comment: comment })
// function uploadFile (file, path) {
// 	return new Promise ((resolve, reject) => {
// 		const uploadTask = firebase.storage().ref()
// 			.child(path).put(file)

					uploadTask.on("state_changed",
						null,
						reject,
						() => resolve(uploadTask.snapshot)
					)
				})
			))
		}
}))
