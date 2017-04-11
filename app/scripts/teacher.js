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
      teacherHttpResponse.getStudentDetail=function(grade,subject,type){
        return $http({
          method:'GET',			
          url  : urlParams.baseURL+urlParams.getStudentDetail+'/'+grade+'/'+subject+'/'+type
        });
      }
       teacherHttpResponse.getTeacherGrades=function(tid,type){
        return $http({
          method:'GET',			
          url  : urlParams.baseURL+urlParams.getTeacherGrades+'/'+tid+'/'+type
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
  /* Start - step-4 for onBoarding teacher dasboard*/
  var grade = '';
  var subjectName = '';
  var subjectCode = '';
  // Get teacher class and subjects. 
  teacherHttpService.getTeacherGrades(get_uid,user_roles['teacher']).success(function(response) {
    if (response.status == true) {
      $scope.subject_grade = response.response;
      $scope.level = (response.grade.level_id).split(',');
      $scope.subject = (response.subject.course_name).split(',');
      grade = response.urlData.level_id;
      subjectName = response.urlData.course_Name;
      subjectCode = response.urlData.course_id;
      var urlString = $location.url();
      var splitString = urlString.split('#');
      if (splitString[1] != undefined) {
        var splitResult = splitString[1].split('%2F')
        if(splitResult[0] != undefined && splitResult[1] != undefined 
                && splitResult[2] != undefined ) {
          grade = splitResult[0];
          subjectName = splitResult[1];
          subjectCode = splitResult[2];
        }
      }
      //this function call for show student for first class in teacher class.
      teacherHttpService.getStudentDetail(grade,subjectCode,user_roles['student']).success(function(response) {
      if(response.data.length >0) {
        $scope.detail_student = response.data;
      }else{
        $scope.detail_student = 0;
      }
    });
    }
  });
  $scope.events = [
          { date: moment('2017-04-8').add(0, 'days').format(), title: "Maths Test" }
      ];
  $scope.showEvents = function(events) {
      alert(events.map(function(e) { return e.title }).join("\n"));
  };
/* end - step-4 for onBoarding teacher dasboard*/
  
}])
.controller('teacherLessonCtrl',['$rootScope','$scope','teacherHttpService','loginHttpService','$location','user_roles','commonActions','$routeParams',
  function($rootScope,$scope,teacherHttpService,loginHttpService,$location,user_roles,commonActions,$routeParams) {
    var get_uid=commonActions.getcookies(get_uid);
//    var urlData = '';
//    var grade_text = "---Select Text----";
//    $scope.location = $location.absUrl();
//    urlData =  ($location.hash()).split('/');
//
//    if (urlData[0] != '') {
//       grade_text = grade;
//    }
//    $scope.grade_text = grade_text;
    teacherHttpService.getTeacherGrades(get_uid,user_roles['teacher']).success(function(response) {
      if (response.status == true) {
      $scope.subject_grade = response.response;
      $scope.level = (response.grade.level_id).split(',');
      $scope.subject = (response.subject.course_name).split(',');
    }
    });
  }]);