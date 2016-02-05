 mainAppModule.config(['$provide', function($provide) {
	
	$provide.factory('dialogBox', ['$rootScope', function ($rootScope) {

		return function () {
		
			this.count = 0;
		
			this.show = function () {			
				alert("show dialog box!!" + this.count);
				this.count++;
				return this;
			}
			
			this.hide = function () {
				alert("hide dialog box!!" + this.count);
				this.count--;
				return this;
			}
			
			return this;
			
		}
	
	}]);
	
}])