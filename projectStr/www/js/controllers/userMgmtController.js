'use strict';
  
projStrApp.controller('UserMgmtCtrl', function ($scope, $rootScope, $location, $state, $stateParams, AppService) {
	if($location.path()=='/login'){
		console.log(AppService.getIsCalOpen());
	}
	$scope.home = function(){
		$state.go('home');
	}
})