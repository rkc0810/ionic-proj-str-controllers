'use strict';
projStrApp.factory('util',function(AppConfig,$ionicPopup){
	 return {
		 	/*
		 	 * @method Logs text based on verbose level
		 	 * @param logLevel: log level value
		 	 * @param logText: string to be logged
		 	 */
	        log: function (logLevel, logText) {
	            if (appConfig.logLevel >= logLevel) {
	                console.log(logText);
	            }
	        },
	        /*
	         * @method Logs only verbose text
	         * @param logText: string to be logged
	         */	
	        logVerbose: function (logText) {
	            this.log(3, logText);
	        },
	        /*
	         * @method Logs only warning text
	         * @param logText: string to be logged
	         */	
	        logWarning: function (logText) {
	            this.log(2, logText);
	        },
	        /*
	         * @method Logs only error text
	         * @param logText: string to be logged
	         */	
	        logError: function (logText) {
	            this.log(1, logText);
	        },
	        /*
	         * @method to find a index of a value in a json array
	         * @param obj: json array
	         * @param key: key to be looked for
	         * @param value: value to be compared for
	         */
	        findIndex: function (obj, key, value) {
	            for (var index = 0; index < obj.length; index++) {
	                if (obj[index][key] == value) {
	                    return index;
	                }
	            }
	            return -1;
	        },
	        /*
	         * @method to show confirmation dialog
	         * @param title: string
             * @param content: string
             * @param responseCallback: callback function
	         */	
	        showConfirmationDialog: function (title,content,responseCallback) {
	            var confirmPopup = $ionicPopup.confirm({
                    title: title,
                    template: content
                });

                confirmPopup.then(responseCallback);
	        },
	        /*
	         * @method to show alert dialog
	         * @param title: string
             * @param content: string
             * @param responseCallback: callback function
	         */	
	        showAlertDialog: function (title,content,responseCallback) {
	            var alertPopup = $ionicPopup.alert({
                    title: title,
                    template: content
                });

                alertPopup.then(responseCallback);
	        }	        
	    };
});