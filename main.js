var app = angular.module('manage', ['ngRoute']);
window.checkSub = false;

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
});

function mainCtrl($scope) {
	
}

function homeCtrl($scope) {

}

function checkInCtrl($scope) {
	function checkUnlisted() {
		if (document.querySelector('.unlisted').value.length > 0) {
			$scope.unlisted = true;
		} else {
			$scope.unlisted = false;
		}
	}

	/*var disableUnlisted = function disableUnlisted(e) {
		console.log(e.target.value.length);
		if (e.target.value.length > 0) {
			$scope.listed = true;
		} else {
			$scope.listed = false;
		}
	};*/
	
	document.querySelector('.managerDropdown').addEventListener('change', disableUnlisted);

	document.querySelector('.unlisted').addEventListener('keydown', checkUnlisted);
	document.querySelector('.unlisted').addEventListener('keyup', checkUnlisted);
	document.querySelector('.unlisted').addEventListener('blur', checkUnlisted);
	document.querySelector('.unlisted').addEventListener('focus', checkUnlisted);
	//$scope.unlisted = true;
}

function transCtrl($scope) {

}

function infoCtrl($scope) {

}
