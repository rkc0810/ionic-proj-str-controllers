'use strict';

  
projStrApp.controller('HomeCtrl', function ($scope, $rootScope, $location, $state, $stateParams) {
	if($location.path()=='/home'){
		console.log("arriving at home");
	}

})