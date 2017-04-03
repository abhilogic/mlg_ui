angular.module('mlg')
  .factory('teacherHttpService',['$http','urlParams',function($http,urlParams){
     var teacherHttpResponse={};
     teacherHttpResponse.signUpTeacher=function(teacherdata){
        return $http({
          method:'POST',	
          data : teacherdata,		
          url  : urlParams.baseURL+urlParams.signUpTeacher
        });  
      }

      teacherHttpResponse.teacherPayment=function(id){
        return $http({
          method:'POST',	
          data : id,		
          url  : urlParams.baseURL+urlParams.teacherPayment
        });  
      }
        return teacherHttpResponse;
	
}])
/**
 *Controller for Teacher 
 **/
.controller('teacherOnBoardingCtrl',['$rootScope','$scope','teacherHttpService','loginHttpService','$location','user_roles','commonActions','card_months','card_years',
  function($rootScope,$scope,teacherHttpService,loginHttpService,$location,user_roles,commonActions,card_months,card_years) {
  
/* Start-  Step-1 for Onboarding */
  $scope.tch = {};
  var get_uid=commonActions.getcookies(get_uid);
  $scope.submitTeacherDetail = function(data){
    var teacherDetail = {};
    var get_uid=commonActions.getcookies(get_uid);
    teacherDetail = {
       user_id : get_uid,
       school_name : data.school,
       country : data.country,
       state : data.state,
       city : data.city,
       district : data.district,
    };
    teacherHttpService.signUpTeacher(teacherDetail).success(function(response) {
      if(response.status == true) {
        $location.url('teacher/select_courses');
      }else{
        $scope.msg= response.message;
      }     		
		}).error(function(error) {
		  $scope.msg= 'Some technical error occured.'
	   }); 
  };
  /* end-  Step-1 for Onboarding */
  /* Start - step-2 for onBoarding */
	// call API to get grades
     loginHttpService.gradeList().success(function(response) {
  		  $scope.grades = response.response.Grades;  
  	});

     //show courses on change on class/grade
      //call API to getCourseList for a level on change of grade
     $scope.changeCourseList = function(grade_id) {
	   	loginHttpService.getCourseByGrade(grade_id).success(function(courseslistresult) {
	        if(!courseslistresult.response.courses){  // value is null, empty
	    	    $scope.msg=courseslistresult.response.message; 
	        	$scope.records=courseslistresult.response.course_list;        
	        }else{
	        	$scope.cousesListByGrade= courseslistresult.response.courses;
	          	$scope.msg=courseslistresult.response.message;
	          	$scope.courserecords=courseslistresult.response.course_list; 
	        }         
    	})
    }

  /* end- step-2 for onBoarding */ 
  /* Start - step-3 for onBoarding */
  //teacher payment page
    var user_id ={};
    var get_uid=commonActions.getcookies(get_uid);
    user_id = { uid : get_uid }; 
    teacherHttpService.teacherPayment(user_id).success(function(response) {
      if(response.data.length > 0) {
         $scope.student = response.data;
         $scope.totalAmount = response.total;
      }else{
        $scope.student= 0;
        if(response.message == '') {
          $scope.message = response.message;
        }
      }     		
    }).error(function(error) {
      $scope.message= 'Some technical error occured.'
    });
    $scope.frm = {};
    $scope.card_months = card_months;
    $scope.card_years = card_years;
    $scope.frm.expiry_month = card_months['1'];
    $scope.frm.expiry_year = card_years['2018'];
    $scope.submitCardDetail = function(data) {
      data.user_id = get_uid;
      data.amount = $scope.totalAmount;
      loginHttpService.saveCardToPaypal(data).success(function(response) {
        if (response.status == true) {
          $location.url('/teacher/dashboard');
        } else {
          $scope.msg = response.message;
        }
      });
    };
    $scope.submitSkip = function(data) {
      $location.url('/teacher/dashboard');   
    };
    /* end- step-3 for onBoarding */
}]);