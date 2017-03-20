'use strict';
  
projStrApp.controller('UserMgmtCtrl', function ($scope, $rootScope, $location, $state, $stateParams) {
	if($location.path()=='/login'){
		console.log("arriving at login");
	}
	$scope.home = function(){
		$state.go('home');
	}
})