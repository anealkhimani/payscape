<?php
	// Require configurations and autoloader
	require_once "config.php";
	require_once "vendor/autoload.php";

	// Initialize variables
	$return_variable = array();
	
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

	// Retrieve credits for ID passed in via GET
	$credits = isset($_GET['id']) ? $client->getPeopleApi()->getCredits($_GET['id']) : null;

	// We're only interested in movies here, so filter out anything other than movies
	if($credits) {
		foreach($credits['cast'] as $p) {
			if($p['media_type']=="movie") {
				array_push($return_variable, $p);
			}
		}
	}

	die(json_encode($return_variable));
