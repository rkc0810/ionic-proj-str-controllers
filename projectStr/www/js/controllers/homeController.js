'use strict';

  
projStrApp.controller('HomeCtrl', function ($scope, $rootScope, $location, $state, $stateParams, AppService, util) {
	if($location.path()=='/home'){
		
	}
	$scope.logOut = function(){
		    util.showAlertDialog("Alert","You will be logged out", function(){
				util.showConfirmationDialog("Log out", "Are you sure you want to log out?", function(resp){
					if(resp) $state.go('login'); else console.log("staying logged in");
				})
			});
	}

})