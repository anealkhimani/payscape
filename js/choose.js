var app = angular.module("someApp",[]);

app.controller("someCtrl", function($scope, $http) {
	// Actors array
	$scope.actors = [
		{
			'name' : 'Chris Pine',
			'id' : 62064,
			'image' : 'images/chris.jpg'
		},
		{
			'name' : 'Scott Bakula',
			'id' : 2154,
			'image' : 'images/scott.jpg'
		},
		{
			'name' : 'Avery Brooks',
			'id' :  822,
			'image' : 'images/avery.jpg'
		},
		{
			'name' : 'Kate Mulgrew',
			'id' : 35317,
			'image' : 'images/kate.jpg'
		},
		{
			'name' : 'Patrick Stewart',
			'id' : 2387,
			'image' : 'images/pat.jpg'
		},
		{
			'name' : 'William Shatner',
			'id' : 1748,
			'image' : 'images/shat.jpg'
		}
	];

	// Function to grab actor credits for a passed in id
	$scope.loadCredits = function(id) {
		$http.get("get_credits.php?id=" + id).success(function(data) {
			// console.log(data);
			$scope.credits = data;
		}).error(function() {
			alert("something broke, you should make a better error handler");
		});
	}

	// function to grab a movie data for a passed in id
	$scope.loadMovie = function(id) {
		$http.get("get_movie.php?id=" + id).success(function(data) {
			// console.log(data);
			alert("Overview: " + data.overview);
		}).error(function() {
			alert("something broke, you should make a better error handler");
		});
	}

});