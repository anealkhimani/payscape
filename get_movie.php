<?php
	// Require configurations and autoloader
	require_once "config.php";
	require_once "vendor/autoload.php";

	// Setup and configuration of api wrapper (you'll need to provide your own API_KEY here)
	$token = new \Tmdb\ApiToken(API_KEY);
	$client = new \Tmdb\Client($token,
		[
			'secure' => false,
			'cache' => [
				'path' => 'tmp/tmdb'
			]
		]
	);

	// Retrieve movie for ID passed in via GET
	$movie = isset($_GET['id']) ? $client->getMoviesApi()->getMovie($_GET['id']) : null;

	die(json_encode($movie));
