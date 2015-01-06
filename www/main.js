var app = angular.module('manage', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		redirectTo: 'check-in'
	});
	$routeProvider.when('/check-in', {
		templateUrl: 'check.html', 
		controller: checkInCtrl
	});
	$routeProvider.when('/transactions', {
		templateUrl: 'trans.html', 
		controller: transCtrl
	});
	$routeProvider.when('/info', {
		templateUrl: 'info.html', 
		controller: infoCtrl
	});
});

$(document).ready(function() {
	$('.page a').click(function(event){
		event.preventDefault();
		window.location = $(this).attr('href');
	});
	refreshStuff = function() {
		$('.varItem').val('');
	};
})

function mainCtrl($scope) {
	
}

function homeCtrl($scope) {

}

function checkInCtrl($scope) {

}

function transCtrl($scope) {

}

function infoCtrl($scope) {

}