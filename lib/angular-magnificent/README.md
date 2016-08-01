# angular-magnificent

Angular directive - A fullscreen background slider

Angular Magnificent will take an array of images and display them in a fullscreen background slideshow.
Inspired on the [Supersized jQuery plugin](http://buildinternet.com/project/supersized) by [Sam Dunn](http://twitter.com/samddunn).

## Features
* Pure AngularJS, no jQuery dependency!
* Image preload
* Images are resized to fill up the entire view port
* Images will keep aspect ratio
* Images will be always centered
* Smooth fade-in / Fade-out effect
* Optional mousemove event

## Table of Contents

- [Demo](#demo)
- [Settings](#settings)
- [Installation](#installation)
- [How To Use](#how-to-use)
- [Known issues](#known-issues)
- [Contributing](#contributing)
- [Change Logs](#change-logs)
- [License](#license)

## Demo
_(coming soon)_

## Settings
- **slides** 			Array of objects, one object for each slide
	- **src**			string required, the source url of the slide image
	- **title** 		string optional, image title, (comming soon)
	- **description** 	string optional, image description, (comming soon)
	- **Author**		string optional, image author, (comming soon)
	- **copyright**		string optional, image copyright, (comming soon)
	- **url**			string optional, a link to visit when the user clicks the image, (comming soon)
- **settings** 			Array of objects, one object for each slide
	- **enabled**		boolean optional, controls if the slider is enabled (true: play, false: stop), default true
	- **interval**		integer optional, time in seconds between each slide, default 30
- **current**			integer optional, the index of the current slide, default 0


## Installation
### Bower
	bower install angular-magnificent --save

### NPM
	(comming soon)

## How To Use
Magnificent is a fullscreen background image slider, it will expand the background image to fill the entire viewport, so we recommend to add the directive right after the body tag and before your ng-view div:

	<body ng-controller="MainController">
		<magnificent magnificent="mySettings"></body>magnificent>
		<div ng-view="" class="main-container"></div>
		...
	
This is to keep the slider always working in your SPA.

As you may have noticed, we passed a 'magnificent' attribute to the directive, this is the $scope variable where we put our slider configuration (our directive is child to our MainController).

In our 'MainController', we define a $scope variable called '$scope.magnificent' with the following structure:

	$scope.mySettings = {
		current: 0,	// Current slide, the starup slide as well, use it to change the current slide to another (the zero-based index array)
	  	slides: [
	  		{
	  			// Only src is required, the meta-data is reserved for future implementations
		  		src: '{url}',
	  			title: "Example slide title",
	  			description: "Somewhere in the world...",
	  			author: "Example author",
	  			copyright: "copyright (c) owner 2015",
	  			url: "#"
		  	},
	  		{
		  		src: '{url}',
	  			title: "Example slide title",
	  			description: "Somewhere in the world...",
	  			author: "Example author",
	  			copyright: "copyright (c) owner 2015",
	  			url: "#"
		  	},
		  	{
		  		src: '{url}',
	  			title: "Example slide title",
	  			description: "Somewhere in the world...",
	  			author: "Example author",
	  			copyright: "copyright (c) owner 2015",
	  			url: "#"
		  	}
  		],
	  	settings: {
	  		enabled: true,
	        interval: 10,
	  	}
  	};

> **PLEASE NOTE**: Our $scope variable is the same that we are passing under the 'magnificent' attribute in our directive html, this variable can be called whatever you want as long as you update the directive attribute.

That's it! you now have a beautiful background slider for your SPA.

## Known Issues
Sometimes, the stylesheet is not linked by the GruntJS tasks (serve/dist/etc), so the directive is been updated to check if the css has been linked, if not, it will link it right away.

## Contributing
Any contributions will be greatly appreciated, please fork the project, make your improvement/fixes and file a pull request over the 'improvement' or 'hotfix' branches.


#Change Logs
### v0.1.1
- Fix typos and update documentation - Development stage

### v0.1.0
- Initial commit - Development stage

## License
Copyright (c) 2016 Manuel Ramirez - Pixeleur, 
Licensed under the MIT license.