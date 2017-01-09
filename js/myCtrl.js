var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
	$scope.edit = true;
	$scope.logo = function(id){
		if (id == 'in') {
			if (!$scope.name.$valid && !$scope.passw.valid) {
			$scope.edit = false;
			}
		}
		else{
			$scope.edit = true;
		}
	};
});