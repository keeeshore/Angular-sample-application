 todoControllers.controller('TodoListController', [ '$scope', '$location',  '$http', 'dialogBox', 'testFilter'
, function ($scope, $location, $http, dialogBox, testFilter) {

	console.log("TodoListController loaded");

	$scope.name = "TodoList Controller name";
	
	$scope.childControl = null;
	
	$scope.query = "";
	
	$scope.todoModel = [];
	
	$http.get('responses/todoList.json').success(function(data) {
		$scope.todoModel = data;
	});
	
	$scope.newTodo = null;
	
	$scope.addTodo = function () {
		dialogBox().show();
		$scope.childControl.add("!23");

		if ($scope.newTodo) {		
			$scope.todoModel.push({"text": $scope.newTodo, "done": false, "removed": false});
			$scope.newTodo = "";
		}
	}
	
	$scope.isDone = function (indexId, todoObj) {	
		todoObj.removed = false;
	}
	
	$scope.removeTodo = function (indexId, todoObj) {
		todoObj.done = false;
		todoObj.removed = true;			
		//$location.path('/newValue');
	}

	
	$scope.undoTodo = function (indexId, todoObj) {
		todoObj.done = false;
		todoObj.removed = false;
	}

}]);



	