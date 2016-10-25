class ClassService {
	constructor($timeout) {
		this.classesList = [];
		firebase.database().ref('classArr').on('child_added', (snapshot) => {
			let c = snapshot.val()
			c.key = snapshot.key
    		this.classesList.push(c)
    		$timeout()
    	});
    }

	addClass(classObj) {
		return firebase.database().ref('classArr').push(classObj);
	} 

	getClassByRouteParams(routeParams) {
		return _.find(this.classesList, (c) => c.professor == routeParams.professor && c.className == routeParams.className && c.schoolName == routeParams.schoolName);
	}
}

angular.module('simo').service('classService', ($timeout) => new ClassService($timeout));
