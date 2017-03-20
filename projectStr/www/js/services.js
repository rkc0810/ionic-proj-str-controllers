projStrApp
.factory('AppService', function($http,AppConst,AppConfig){
	
	var service = {};
    var isCalOpen = false;
    
    service.setIsCalOpen = function(value){
       isCalOpen = value;
    }
    service.getIsCalOpen = function(){
       return isCalOpen;
    }
    // service.getCategories = function(responseCallback){
    //         var URI = AppConfig.demoModeEnabled?AppConst.MOCK_URI_ALL_CATEGORIES:AppConst.BASE_URI+AppConst.URI_ALL_CATEGORIES;
    //         var method = 'GET';
    //         var req = {'method': method,'url': URI};
    //         $http(req).then(
    //         /*SUCCESS*/
    //         function(response) {
    //            responseCallback(response.data);
    //         },
    //         /*ERROR*/
    //         function(response) {
    //          responseCallback(response.data);
    //         });
    // };

    /*
    * @method to get BNumber
    * @param successCallback:
    * @param errorCallback:
    */ 

    // service.getBNumber = function(successCallback, errorCallback) {
    //      var URI = AppConfig.demoModeEnabled?AppConst.MOCK_URI_GET_B_NUMBER:AppConst.URI_GET_B_NUMBER;
    //      var method = 'GET';
    //      var req = {'method': method,'url': URI};
    //      $http(req).then(
    //     /*SUCCESS*/
    //     function(response) {
    //         //console.log(response,"getuploaded")
    //         console.log('getBNumber:SUCCESS');
    //         if (successCallback && typeof (successCallback) === "function") {
    //             successCallback(response.data);

    //         } else {
    //              console.log('getBNumber: successCallback not defined.');
    //         }
            
    //     },
    //     /*ERROR*/
    //     function(response) {
    //         console.log("getBNumber:ERROR");
    //         if (errorCallback && typeof (errorCallback) === "function") {
    //             errorCallback(response.data);
    //         } else {
    //             console.log('getBNumber: errorCallback not defined.');                        
    //         }
            
    //     });
    // };

	return service;
});
