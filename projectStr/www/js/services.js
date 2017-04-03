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

    service.getTempDetails = function(responseCallback){
            var URI = "http://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b1b15e88fa797225412429c1c50c122a1";
            var method = 'GET';
            var req = {'method': method,'url': URI};
            $http(req).then(
            /*SUCCESS*/
            function(response) {
               console.log("getTempDetails response success")
               responseCallback(response.data);
            },
            /*ERROR*/
            function(response) {
             console.log("getTempDetails response error")
             responseCallback(response.data);
            });
    };
    service.getCategories = function(responseCallback){
            var URI = AppConfig.demoModeEnabled?AppConst.MOCK_URI_ALL_CATEGORIES:AppConst.BASE_URI+AppConst.URI_ALL_CATEGORIES;
            var method = 'GET';
            var req = {'method': method,'url': URI};
            $http(req).then(
            /*SUCCESS*/
            function(response) {
               console.log("getCategories response success")
               responseCallback(response.data);
            },
            /*ERROR*/
            function(response) {
             console.log("getCategories response error")
             responseCallback(response.data);
            });
    };

    /*
    * @method to get BNumber
    * @param successCallback:
    * @param errorCallback:
    */ 

    service.getBNumber = function(successCallback, errorCallback) {
         var URI = AppConfig.demoModeEnabled?AppConst.MOCK_URI_GET_B_NUMBER:AppConst.URI_GET_B_NUMBER;
         var method = 'GET';
         var req = {'method': method,'url': URI};
         $http(req).then(
        /*SUCCESS*/
        function(response) {
            //console.log(response,"getuploaded")
            console.log('getBNumber:SUCCESS')
            if (successCallback && typeof (successCallback) === "function") {
                successCallback(response.data);

            } else {
                 console.log('getBNumber: successCallback not defined.');
            }
            
        },
        /*ERROR*/
        function(response) {
            console.log("getBNumber:ERROR");
            if (errorCallback && typeof (errorCallback) === "function") {
                errorCallback(response.data);
            } else {
                console.log('getBNumber: errorCallback not defined.');                        
            }
            
        });
    };

	return service;
});
