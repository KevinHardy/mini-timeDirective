var app = angular.module('timeApp');

app.directive('showTime', function() {

	return {
		restrict: 'E',//element
		template: '<div> The current Time is {{time}} </div>',
		link: function(scope, element, attr) {
			var currentTime = new Date();
			scope.time = currentTime.toString();
		}
	}

});

/* example portion of code to explain &, example code for directives
//so the best way to explain directives, is if you have a piece of html code that
//you plan to use over and over, like a specific type of button, you can use directives to 
//simply plop a small piece of html code down and it will run that code every time.
app.controller('mainCtrl', function(scope) {
	$scope.sayHi = function() {
		alert('Hello World!');
	};
});*/


/*  example code for directives
app.directive('speak', function() {

	return {
		restrict: 'A',
		scope: {
			action: '&'//telling angular that this property is going to accept function as argument, & is a gate, and it is telling us what can come through that gate
		},
		template:; '<div> <button ng-click="action()">Click Me</button> </div>'
	}

});

app.directive('speak', function() {

	return {
		restrict: 'A',
		scope: {
			action: '='
		},
		template:; '<div> {{item}} </div>'
	}

});

//no JQuery should be used with directives
*/