/**
 * @file  List of config properties of the app
 * @copyright
 * @author
 */
projStrApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  
.state('login', {
    url: '/login',
    cache: false,
    templateUrl: 'templates/login.html',
    controller: 'UserMgmtCtrl'
  }) 

.state('home', {
    url: '/home',
    cache: false,
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  }) 
.state('temp', {
    url: '/temp',
    cache: false,
    templateUrl: 'templates/temp.html',
    controller: 'HomeCtrl'
  }) 



  $urlRouterProvider.otherwise('/temp');
})
.config(function ($httpProvider) {
   $httpProvider.interceptors.push('myHttpInterceptor');

})