 todoControllers.controller('ChildController', ['$scope', '$location', 'testFilter', 'dialogBox', function ($scope, $location, testFilter, dialogBox) {

	console.log("ChildController loaded");
	
	$scope.childModelData = {
		"test": "123"
	};
	
	$scope.name = "Test child controller name";
	
	$scope.add = function (model) {
		$scope.name = testFilter($scope.name);
		dialogBox().show();
		alert("childController done");
	}
	
	$scope.$parent.childControl = $scope;

}])



	