// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var projStrApp = angular.module('starter', ['ionic','ngStorage']);


projStrApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

/**
* @method progress indicator during background request and page load.
*
*/
projStrApp.factory('myHttpInterceptor',
        function ($q, $rootScope, $injector, $timeout) {
        $rootScope.isDeviceOffline = false;
        $rootScope.showSpinner = false;
        $rootScope.http = null;
        $rootScope.notificationView='';
        $rootScope.initiateSpinner = undefined;
        return {
            'request': function (config) {
                $timeout.cancel($rootScope.initiateSpinner);
                $rootScope.initiateSpinner=$timeout(function(){$rootScope.showSpinner = true;},750);
                return config || $q.when(config);
            },
            'requestError': function (rejection) {
                $rootScope.http = $rootScope.http || $injector.get('$http');
                if ($rootScope.http.pendingRequests.length < 1) {
                    $rootScope.showSpinner = false;
                    $timeout.cancel($rootScope.initiateSpinner);

                }
               /* if (canRecover(rejection)) {
                    return responseOrNewPromise;
                }*/
                return $q.reject(rejection);
            },
            'response': function (response) {
                $rootScope.http = $rootScope.http || $injector.get('$http');
                if ($rootScope.http.pendingRequests.length < 1) {
                    $rootScope.showSpinner = false;
                    $timeout.cancel($rootScope.initiateSpinner);
                }
                $rootScope.isDeviceOffline = false;
                return response || $q.when(response);
            },
            'responseError': function (rejection) {
                $rootScope.http = $rootScope.http || $injector.get('$http');
                if ($rootScope.http.pendingRequests.length < 1) {
                    $rootScope.showSpinner = false;
                    $timeout.cancel($rootScope.initiateSpinner);
                }
                if(rejection.status == 0){
                  /* if(!$rootScope.isDeviceOffline)$rootScope.showOffline();
                   $rootScope.isDeviceOffline = true;*/
                }else{
                  $rootScope.isDeviceOffline = false;
                }
                /*if (canRecover(rejection)) {
                    return responseOrNewPromise;
                }*/
                return $q.reject(rejection);
                }
            }
        }
  );



