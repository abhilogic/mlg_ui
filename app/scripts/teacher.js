angular.module('mlg')
  .factory('loginHttpService',['$http','urlParams',function($http,urlParams){
  
        return loginHttpResponse;
	
}])
.controller('loginCtrl',['$rootScope','$scope','loginHttpService',function($rootScope,$scope,loginHttpService) {
  
}]);