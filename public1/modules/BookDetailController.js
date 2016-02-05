bookControllers.controller('BookDetailController', [ '$scope', '$routeParams',  '$http', 'dialogBox', 'testFilter'
, function ($scope, $routeParams, $http, dialogBox, testFilter) {

	$scope.bookDetailModel = {};
	
	$scope.bookId = $routeParams.bookId;
	
	$http.get('responses/book-' + $routeParams.bookId + '.json').success(function(data) {
      $scope.bookDetailModel = data;
    });
		 

}]);



	