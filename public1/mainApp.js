 var mainAppModule = angular.module('mainApp', ['ngRoute', 'bookControllers', 'todoControllers' ]);
var bookControllers = angular.module('bookControllers', []);
var todoControllers = angular.module('todoControllers', []);

	mainAppModule.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partial-views/todo-list.html',
				controller: 'TodoListController'
			}).
			when('/books', {
				templateUrl: 'partial-views/book-list.html',
				controller: 'BookListController'
			}).
			when('/books/:bookId', {
				templateUrl: 'partial-views/book-detail.html',
				controller: 'BookDetailController'
			})
	}]);