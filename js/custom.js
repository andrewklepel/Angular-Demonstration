(function() {
	var demo = angular.module('mainModule', []);

	demo.controller("viewModel", function ($scope, $http) {
		$scope.demo1text = "Replaced text";
		
		$scope.demo2items = [
			{ text: 'first item', href: 'https://www.google.com' },
			{ text: 'second item', href: 'https://www.facebook.com' },
			{ text: 'third item', href: 'https://www.youtube.com' }
		];
		
		$scope.demo3function = function () {
			alert("Function for demo 3 has run.");
		};
	
		var demo5JsonObject = '{"colors": [' +
			'{ "value": "red" }, ' +
			'{ "value": "orange" }, ' +
			'{ "value": "yellow" }, ' +
			'{ "value": "green" }, ' +
			'{ "value": "blue" }, ' +
			'{ "value": "purple" }]}';
	
		// a URL to a JSON file could be used here, but let's keep it simple
		$scope.demo5List = angular.fromJson(demo5JsonObject).colors;
	});
})();