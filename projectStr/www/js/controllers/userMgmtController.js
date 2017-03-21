'use strict';
  
projStrApp.controller('UserMgmtCtrl', function ($scope, $rootScope, $location, $state, $stateParams, AppService, $timeout) {
	if($location.path()=='/login'){
		$scope.allCategories = [];
		$timeout(function() {
			$scope.getBNumber();
			$scope.getCategories();
		}, 0);
		
	}

	$scope.getBNumber = function(){
	  var onResponse = function (response) {
        if(typeof response == 'undefined' || response == null) {
                console.log("onResponse error");               
            } else {         
              console.log("onResponse success");                            
            }
      }
      AppService.getBNumber(onResponse, onResponse);
	}

	 /**
     * @method to get categories
     */
    $scope.getCategories = function () {
      AppService.getCategories(function (response) {
        for (var i = 0; i < response.d.results.length; i++) {
          var imgPath = 'img/' + response.d.results[i].Title + '.png';
          $scope.allCategories.push({
            'categoryId': response.d.results[i].Id,
            'catTitle': response.d.results[i].Title,
            'catPic': imgPath,
          });
        }
        console.log($scope.allCategories)        
      });

    }

	$scope.home = function(){
		$state.go('home');
	}


	
})