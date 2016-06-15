angular.module("simo")
.controller("FileUpCtrl", function ($timeout, fileUpFactory) {
		const fileUp = this

		fileUp.heading = "Upload your notes!"
		// fileUp.photoURLs = []

		 $timeout()
      .then(() => firebase.database().ref('/images').once('value'))
      .then(snap => snap.val())
      .then(data => fileUp.photos = data)


		fileUp.submit = function () {
			const input = document.querySelector('[type="file"]')
			const file = input.files[0]
			// console.dir(input.file)
			const randomInteger = Math.random() * 1e17
			const getFileExtension = file.type.split("/").slice(-1)[0]
			const randomPath = `${randomInteger}.${getFileExtension}`
			// const uploadTask = firebase.storage().ref().child("funnypic1.jpg").put(file)

			 fileUpFactory.send(file, randomPath)
				.then(res => {
					fileUp.photoURLs.push(res.downloadURL)
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
		send (file, path = file.name) {
			return $timeout().then(() => (
				new Promise ((resolve, reject) => {
					const uploadTask = firebase.storage().ref()
						.child(path).put(file)
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
