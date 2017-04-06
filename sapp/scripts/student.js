angular.module('mlg_student')
.factory('loginHttpService',['$http','urlParams',function($http,urlParams){
	
	var loginHttpResponse={};	
	
	
	loginHttpResponse.login=function(data){
		return $http({
			method:'POST',
			data  : data,
			url   : urlParams.baseURL+urlParams.login
		});
	}

	loginHttpResponse.getCourseByGrade=function(grade_id){		
		return $http({
			method:'GET',					
			url   : urlParams.baseURL+urlParams.getCourseByGrade+'/'+grade_id
		});
	}

	loginHttpResponse.getStudentCourses=function(uid){		
		return $http({
			method:'GET',				
			url   : urlParams.baseURL+urlParams.getStudentCourses+'/'+uid
		});
	}

	
    
	return loginHttpResponse;
	
}])
.factory('commonActions',['$http','urlParams','loginHttpService',function($http,urlParams,loginHttpService){
//.factory('commonActions',['$rootScope','$scope','loginHttpService','$location' function($rootScope, $scope,loginHttpService,$location) {
		var commonActions={};
		var counter = Array; 


		// get cookies
		function getCookie(cname) {
		    var name = cname + "=";
	    	var decodedCookie = decodeURIComponent(document.cookie);
	    	var ca = decodedCookie.split(';');
	    	for(var i = 0; i <ca.length; i++) {
	        	var c = ca[i];
	        	while (c.charAt(0) == ' ') {
	            	c = c.substring(1);
	        	}
	        	if (c.indexOf(name) == 0) {
	            	return c.substring(name.length, c.length);
	        	}
	    	}
	    	return "";
		}

		// To get user id that is set at time of login in cookie
		commonActions.getcookies=function(uid){
				var get_uid=getCookie('uid');
				return get_uid;
		}

			return commonActions;
	}]).controller('journeyCtrl',['$rootScope','$scope','$filter','loginHttpService','commonActions','$location','urlParams','$http','user_roles',function($rootScope,$scope,$filter, loginHttpService,commonActions,$location,urlParams,$http,user_roles) {
	  //alert('kkk');
	  var get_uid=commonActions.getcookies(get_uid);
	  $scope.frm = {};
	  

	  loginHttpService.getStudentCourses(get_uid).success(function(studentcoursesresult) {

	  	if (studentcoursesresult.response.status == "TRUE") {
	  			$scope.frm.childcourses=studentcoursesresult.response.student_courses;
	  			$scope.frm.childclass=studentcoursesresult.response.student_class;

	  			// API to call all courses of a class
		  		loginHttpService.getCourseByGrade(studentcoursesresult.response.student_class).success(function(courseslistresult) {
		  		console.log(courseslistresult);
		        if(!courseslistresult.response.courses){  // value is null, empty
		    	    $scope.msg=courseslistresult.response.message; 
		        	$scope.records=courseslistresult.response.course_list;        
		        }else{
		        	$scope.cousesListByGrade= courseslistresult.response.courses;
		          	$scope.msg=courseslistresult.response.message;
		          	$scope.courserecords=courseslistresult.response.course_list; 
		        }         
	    	});

	  	}
	  	


	  	console.log(studentcoursesresult.response.student_class);

		  	


	  });



    	
}])



.controller('helpCtrl',['$rootScope','$scope','$filter','loginHttpService','commonActions','$location','urlParams','$http','user_roles',function($rootScope,$scope,$filter, loginHttpService,commonActions,$location,urlParams,$http,user_roles) {
	 // alert('kkkk');
	  var get_uid=commonActions.getcookies(get_uid);
}])

.controller('quizCtrl',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles) {
	  //alert('kkkk');
}])

;


