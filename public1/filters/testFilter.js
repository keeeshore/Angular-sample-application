 mainAppModule.filter('test', [function () {
	
	return function (input) {
		return input + "::filtered!!";
	}
	
}]);