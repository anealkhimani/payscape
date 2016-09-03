var app = angular.module("someApp",[]);

app.controller("someCtrl", function($scope, $http) {
	$scope.loadCredits = function(id) {
		$http.get("get_credits.php?id=" + id).success(function(data) {
			$scope.credits = data;
			console.log(data);
		}).error(function() {
			alert("something broke, you should make a better error handler");
		});
	}
});