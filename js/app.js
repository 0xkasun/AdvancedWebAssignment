angular.module('players',[])
	.config(playerRouter);

function playerRouter ($routeProvider) {
	$routeProvider
	.when('/', { templateUrl: 'partials/bobby.html'})
	.when('/magnus',{templateUrl: 'partials/magnus.html' });
	//.when('/destination', { templateUrl: '/partials/flightInfo.html'});

}