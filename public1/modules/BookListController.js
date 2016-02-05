 bookControllers.controller('BookListController', [ '$scope', '$http', 'dialogBox', 'testFilter'
, function ($scope, $http, dialogBox, testFilter) {
		
		console.log("BookListController loaded");
		
		$scope.bookListModel = [];
		
		$http.get('responses/bookList.json').success(function(data) {
			$scope.bookListModel = data;
		});

	}])
	.directive('bookInfo', [function () {
		return {
			
			templateUrl: 'partial-views/book-list-1.html',
			
			//restrict: 'E',
			
			replace: true,
			
			transclude: true,
			
			link: function (scope, element, attrs) {
				debugger;
			}
			
		}
	}]);



	