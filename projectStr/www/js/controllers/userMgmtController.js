'use strict';
projStrApp.controller('UserMgmtCtrl' ,function ($scope, $rootScope, $location, $state, $stateParams, AppService, $timeout, AppConst, util, testService, $localStorage, $ionicHistory) {
	if($location.path()=='/login'){
    $scope.allCategories = [];
    $timeout(function() {
      $scope.getBNumber();
      $scope.getCategories();
    }, 0);
    // AngularJS Controller that uses the service
      testService.sayHello("Calling to testService");
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

    $rootScope.myGoBack = function () {
      $ionicHistory.goBack();
    };

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

	$scope.home = function(user){
    // if(user == undefined || user.lastName == undefined || user.firstName == undefined || user.comments == undefined) {
    //   util.showAlertDialog("Alert", "Please fill all the details",function(){});
    // } else{
      $localStorage.user = user;
      $state.go('home');
    // }
    
	}


	
})