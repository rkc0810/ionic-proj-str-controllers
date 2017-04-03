'use strict';

  
projStrApp.controller('HomeCtrl',['$scope','$rootScope','$location','$state','$stateParams','AppService','util','$localStorage','$timeout',function ($scope, $rootScope, $location, $state, $stateParams, AppService, util, $localStorage, $timeout) {
	if($location.path()=='/home'){
		$scope.user = $localStorage.user;
	}
	if($location.path()=='/temp'){
		$timeout(function() {
	          $scope.getTempDetails();  
	    }, 0);
	}
  
	$scope.getTempDetails = function(){
    var onResponse = function (response) {
        if(typeof response == 'undefined' || response == null) {
                console.log("onResponse error");               
            } else {         
              $scope.tempDetails = response;
              console.log("onResponse success");                                  
            }
      }
      AppService.getTempDetails(onResponse, onResponse);
    }
	$scope.logOut = function(){
		    util.showAlertDialog("Alert","You will be logged out", function(){
				util.showConfirmationDialog("Log out", "Are you sure you want to log out?", function(resp){
					if(resp) {
						$state.go('login');
						$localStorage.$reset();
					} else console.log("staying logged in");
				})
			});
	}
	$scope.showTemp = function(){
		   $state.go('temp');
	}

}])