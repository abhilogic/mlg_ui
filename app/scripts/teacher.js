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
 teacherHttpResponse.gradeList=function(){
  return $http({
   method:'GET',     
   url   : urlParams.baseURL+urlParams.gradeList
 });
}

teacherHttpResponse.getCourseByGrade=function(gradeid){    
  return $http({
    method:'GET', 
    data : gradeid,    
    url   : urlParams.baseURL+urlParams.getCourseByGrade+'/'+gradeid
  });
}

teacherHttpResponse.setTeacherSubjects=function(selected_courses){    
  return $http({
    method:'POST', 
    data : selected_courses,    
    url   : urlParams.baseURL+urlParams.setTeacherSubjects
  });
}
teacherHttpResponse.getTeacherDetailsForContent=function(tid,grade,subject,type){
 return $http({
   method:'GET',			
   url  : urlParams.baseURL+urlParams.getTeacherDetailsForContent+'/'+tid+'/'+grade+'/'+subject+'/'+type
 });
}
teacherHttpResponse.getAllCourseList=function(parent_id,type,course,uid){
 return $http({
   method:'GET',			
   url  : urlParams.baseURL+urlParams.getAllCourseList+'/'+parent_id+'/'+type+'/'+course+'/'+uid
 });
}
teacherHttpResponse.setContentForLesson=function(lessonDetail){
 return $http({
   method:'post',
   data : lessonDetail,
   url  : urlParams.baseURL+urlParams.setContentForLesson
 });
}
teacherHttpResponse.setTemplateDetail=function(lessonDetail){
 return $http({
   method:'post',
   data : lessonDetail,
   url  : urlParams.baseURL+urlParams.setTemplateDetail
 });
}
teacherHttpResponse.getTemplateDetail=function(uid,type){
 return $http({
   method:'GET',
   url  : urlParams.baseURL+urlParams.getTemplateDetail+'/'+uid+'/'+type
 });
}
teacherHttpResponse.delContent=function(id){
 return $http({
   method:'GET',
   url  : urlParams.baseURL+urlParams.delContent+'/'+id
 });
}
teacherHttpResponse.getDifficultyLevel=function(){
 return $http({
   method:'GET',
   url  : urlParams.baseURL+urlParams.getDifficultyLevel
 });
}
teacherHttpResponse.questionType=function(){
 return $http({
   method:'GET',
   url  : urlParams.baseURL+urlParams.questionType
 });
}
teacherHttpResponse.getUserContent=function(subSkill){
 return $http({
   method:'POST',
   data : subSkill,
   url  : urlParams.baseURL+urlParams.getUserContent
 });
}
teacherHttpResponse.setUserContents=function(subSkill){
 return $http({
   method:'GET',
   url  : urlParams.baseURL+urlParams.setUserContents+'/'+subSkill
 });
}

teacherHttpResponse.addStudent=function(childdata){
 return $http({
   method:'POST',  
   data : childdata,   
   url  : urlParams.baseURL+urlParams.addStudent
 });
}

teacherHttpResponse.getStudentsOfSubjectForTeacher=function(tid,course_id){
 return $http({
   method:'GET',            
   url  : urlParams.baseURL+urlParams.getStudentsOfSubjectForTeacher+'?teacher_id='+tid+'&course_id='+course_id
 });
}

teacherHttpResponse.getDashboardStudentsOfTeacher=function(tid,course_id,skill_id=null,subskill_id=null){
  if(skill_id!=null && subskill_id!=null){
    var URLstr = '?teacher_id='+tid+'&subject_id='+course_id+'&skill_id='+skill_id+'&subskill_id='+subskill_id;
  }else if (skill_id!=null && subskill_id==null){
      var URLstr ='?teacher_id='+tid+'&subject_id='+course_id+'&skill_id='+skill_id;
  }else{
      var URLstr ='?teacher_id='+tid+'&subject_id='+course_id;
  }

  return $http({
   method:'GET',            
   url  : urlParams.baseURL+urlParams.getDashboardStudentsOfTeacher+URLstr
 });
}

teacherHttpResponse.updateStudent=function(stUpdate){
 return $http({
   method:'POST', 
   data : stUpdate,           
   url  : urlParams.baseURL+urlParams.updateStudent
 });
}

teacherHttpResponse.deleteStudent=function(stdelete){
 return $http({
   method:'GET',                     
   url  : urlParams.baseURL+urlParams.deleteStudent+'?id='+stdelete.id
 });
}

teacherHttpResponse.sendMeMail=function(selectd_students, get_uid){
 return $http({
   method:'POST', 
   data :  selectd_students,                  
   url  : urlParams.baseURL+urlParams.sendMeMail+'?teacher_id='+get_uid
 });
}

teacherHttpResponse.getStudentOfTeacher=function(get_uid){
 return $http({
   method:'GET',                            
   url  : urlParams.baseURL+urlParams.getStudentOfTeacher+'?teacher_id='+get_uid
 });
}

teacherHttpResponse.createGroup=function(selected_students,get_uid,course_id,grade_id){
 return $http({
   method:'POST', 
   data :  selected_students,                           
   url  : urlParams.baseURL+urlParams.createGroupInSubjectByTeacher+'?teacher_id='+get_uid+'&course_id='+course_id +'&grade_id='+grade_id
 });
}


teacherHttpResponse.getGroupsOfSubjectForTeacher=function(get_uid, course_id){
 return $http({
   method:'GET',                                  
   url  : urlParams.baseURL+urlParams.getGroupsOfSubjectForTeacher+'?teacher_id='+get_uid+'&course_id='+course_id
 });
}

teacherHttpResponse.getStudentsOfGroup=function(group_id){
 return $http({
   method:'GET',                                  
   url  : urlParams.baseURL+urlParams.getStudentsOfGroup+'?group_id='+group_id
 });
}

teacherHttpResponse.updateContent=function(lessonDetail){
 return $http({
   method:'POST',
   data : lessonDetail,
   url  : urlParams.baseURL+urlParams.updateContent
 });
}
teacherHttpResponse.uploadQuestion=function(question){
 return $http({
   method:'POST',
   data : question,
   url  : urlParams.baseURL+urlParams.uploadQuestion
 });
} 

teacherHttpResponse.editGroupOfSubject=function(slected_stRecords, group_id){
 return $http({
   method:'POST',
   data : slected_stRecords,
   url  : urlParams.baseURL+urlParams.editGroupOfSubject+'?group_id='+group_id
 });
}
teacherHttpResponse.uploadEvent=function(eventDetails){
 return $http({
   method:'POST',
   data : eventDetails,
   url  : urlParams.baseURL+urlParams.uploadEvent
 });
}
teacherHttpResponse.getEvent=function(uid){
 return $http({
   method:'get',
   url  : urlParams.baseURL+urlParams.getEvent+'/'+uid
 });
}


teacherHttpResponse.getCourseSkillSubskills=function(grade_id,parent_id){
 return $http({
   method:'GET',         
   url  : urlParams.baseURL+urlParams.getCourseSkillSubskills+'?grade_id='+grade_id+'&parent_id='+parent_id
 });
}

teacherHttpResponse.saveCardToPaypalForTeacher=function(data){
 return $http({
   method:'POST',
   data  : data,
   url   : urlParams.baseURL+urlParams.saveCardToPaypalForTeacher
 });
}
teacherHttpResponse.generateAssignQuestions=function(data){
 return $http({
   method:'POST',
   data  : data,
   url   : urlParams.baseURL+urlParams.generateAssignQuestions
 });
}

teacherHttpResponse.getQuestionsListForAssg=function(data){
 return $http({
   method:'POST',
   data  : data,
   url   : urlParams.baseURL+urlParams.getQuestionsListForAssg
 });
}

teacherHttpResponse.setCustomAssignmentByTeacher=function(data,teacher_id){
 return $http({
   method:'POST',
   data  : data,
   url   : urlParams.baseURL+urlParams.setCustomAssignmentByTeacher
 });
}

teacherHttpResponse.setStepNum=function(uid,step_num){
 return $http({
   method:'GET',
   url   : urlParams.baseURL+urlParams.setStepNum+'?user_id='+uid+'&step_num='+step_num
 });
}
teacherHttpResponse.setStepNum=function(uid,step_num){
  return $http({
    method:'GET',
    url   : urlParams.baseURL+urlParams.setStepNum+'?user_id='+uid+'&step_num='+step_num
  });
}
teacherHttpResponse.getQuestions=function(uid,pnum){
  return $http({
    method:'GET',
    url   : urlParams.baseURL+urlParams.getQuestions+'/'+uid+'/'+pnum
  });
}
teacherHttpResponse.deleteQuestions=function(quesId){
  return $http({
    method:'post',
    data : quesId,
    url   : urlParams.baseURL+urlParams.deleteQuestions
  });
}
teacherHttpResponse.getEditQuestion=function(uid,QId){
  return $http({
    method:'GET',
    url   : urlParams.baseURL+urlParams.getEditQuestion+'/'+uid+'/'+QId
  });
}

teacherHttpResponse.getStudentCourses = function(uid){
  return $http({
    method:'GET',
    url   : urlParams.baseURL+urlParams.getStudentCourses + '/' + uid
  });
}

teacherHttpResponse.getRewards=function(data){
  return $http({
    method:'POST',
    data  : data,
    url   : urlParams.baseURL+urlParams.getRewards
  });
}

teacherHttpResponse.getTeacherPoints=function(data){
  return $http({
    method:'POST',
    data  : data,
    url   : urlParams.baseURL+urlParams.getTeacherPoints
  });
}

teacherHttpResponse.timeSpentOnPlatform = function(data) {
  return $http({
    method:'POST',
    data  : data,
    url   : urlParams.baseURL+urlParams.timeSpentOnPlatform
  });
  }

  teacherHttpResponse.timeSpentByClassOnPlatform = function(data) {
  return $http({
    method:'POST',
    data  : data,
    url   : urlParams.baseURL+urlParams.timeSpentByClassOnPlatform
  });
}

teacherHttpResponse.setAvailableRewards=function(data){
  return $http({
    method:'POST',
    data  : data,
    url   : urlParams.baseURL+urlParams.setAvailableRewards
  });
}
teacherHttpResponse.updateQuestion=function(data){
  return $http({
    method:'POST',
    data  : data,
    url   : urlParams.baseURL+urlParams.updateQuestion
  });
}
teacherHttpResponse.setQuotation=function(data){
  return $http({
    method:'POST',
    data  : data,
    url   : urlParams.baseURL+urlParams.setQuotation
  });
}
teacherHttpResponse.getLessonForList=function(uid,pnum){
  return $http({
    method:'GET',
    url   : urlParams.baseURL+urlParams.getLessonForList+'/'+uid+'/'+pnum
  });
}
teacherHttpResponse.getFilterdQuestion=function(uid,pnum,grade,course,skill){
  return $http({
    method:'GET',
    url   : urlParams.baseURL+urlParams.getFilterdQuestion+'/'+uid+'/'+pnum+'/'+grade+'/'+course+'/'+skill
  });
}
teacherHttpResponse.getFilterdLesson=function(uid,pnum,grade,course,skill){
  return $http({
    method:'GET',
    url   : urlParams.baseURL+urlParams.getFilterdLesson+'/'+uid+'/'+pnum+'/'+grade+'/'+course+'/'+skill
  });
}
teacherHttpResponse.setTeacherSettings = function(data){
  return $http({
    method: 'POST',
    data  : data,
    url   : urlParams.baseURL+urlParams.setTeacherSettings
  });
}
teacherHttpResponse.getTeacherSettings = function(data){
  return $http({
    method: 'POST',
    data  : data,
    url   : urlParams.baseURL+urlParams.getTeacherSettings
 });
 }
teacherHttpResponse.deleteImage=function(uid,id){
  return $http({
    method:'GET',
    url   : urlParams.baseURL+urlParams.deleteImage+'/'+uid+'/'+id
  });
}
teacherHttpResponse.addNewScope=function(data){
  return $http({
    method:'POST',
    data  : data,
    url   : urlParams.baseURL+urlParams.addNewScope
  });
}
teacherHttpResponse.teacherScope=function(uid,parent_id,type,id){
  return $http({
    method:'GET',
    url   : urlParams.baseURL+urlParams.teacherScope+'/'+uid+'/'+parent_id+'/'+type+'/'+id
  });
}
teacherHttpResponse.scopeAndSequenceTemplate=function(data){
  return $http({
    method:'POST',
    data  : data,
    url   : urlParams.baseURL+urlParams.scopeAndSequenceTemplate
  });
}
teacherHttpResponse.scopeAndSequence=function(data){
  return $http({
    method:'POST',
    data  : data,
    url   : urlParams.baseURL+urlParams.scopeAndSequence
  });
}
teacherHttpResponse.getScopeTemplates=function(uid,type){
  return $http({
    method:'GET',
    url   : urlParams.baseURL+urlParams.getScopeTemplates+'/'+uid+'/'+type
  });
}
teacherHttpResponse.getNeedAttentionForTeacher=function(teacher_id, subject_id){
  return $http({
    method:'GET',
    url   : urlParams.baseURL+urlParams.getNeedAttentionForTeacher+'?teacher_id='+teacher_id+'&subject_id='+subject_id
  });
}

teacherHttpResponse.getNeedAttentionOFStudent=function(student_id){
  return $http({
    method:'GET',
    url   : urlParams.baseURL+urlParams.getNeedAttentionOFStudent+'?student_id='+student_id
  });
}

teacherHttpResponse.getSubskillAnalytic=function(teacher_id,subject_id,subskill_id){
  return $http({
    method:'GET',
    url   : urlParams.baseURL+urlParams.getSubskillAnalytic+'?teacher_id='+teacher_id+'&subject_id='+subject_id+'&subskill_id='+subskill_id
  });
}

teacherHttpResponse.getStudentProgress=function(student_id){
  return $http({
    method:'GET',
    url   : urlParams.baseURL+urlParams.getStudentProgress+'/'+student_id
  });
}

teacherHttpResponse.getTeacherStudentReport=function(user_id,grade,course,pgnum){
  return $http({
    method:'GET',
    url   : urlParams.baseURL+urlParams.getTeacherStudentReport+'/'+user_id+'/'+grade+'/'+course+'/'+pgnum
  });
}
teacherHttpResponse.getTeacherStudentGap=function(user_id,grade,course,pgnum,studentId,type){
  var url =  urlParams.baseURL+urlParams.getTeacherStudentGap+'/'+user_id+'/'+grade+'/'+course+'/'+pgnum;
  if((studentId != null) && (type != 'all') ){
    url = url+'/'+studentId+'/'+type
  }
  return $http({
    method:'GET',
    url   : url,
  });
}


teacherHttpResponse.getStudentScoreForSubskills=function(student_id,subject_id){
  return $http({
    method:'GET',
    url   : urlParams.baseURL+urlParams.getStudentScoreForSubskills+'/'+student_id+'/'+subject_id
  });
}



return teacherHttpResponse;

}])
/**
 *Controller for Teacher 
 **/
 .controller('teacherOnBoardingCtrl',['$rootScope','$scope','teacherHttpService','loginHttpService','$location','user_roles','commonActions','card_months','card_years',
  function($rootScope,$scope,teacherHttpService,loginHttpService,$location,user_roles,commonActions,card_months,card_years) {
    /* Start-  Step-1 Add School details-for Onboarding */
    $scope.tch = {};
    var get_uid=commonActions.getcookies(get_uid);
    $scope.submitTeacherDetail = function(data){
      var teacherDetail = {};
      var get_uid=commonActions.getcookies(get_uid);
      teacherDetail = {
       user_id : get_uid,
       school_name : data.school,
       school_address : data.school_address,
       country : data.country,
       state : data.state,
       city : data.city,
       district : data.district,
       zip : data.zip,
       step_completed:1,
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


  /* Start - step-2: Select Courses by teacher- on onBoarding */
	// call API to get grades
 teacherHttpService.gradeList().success(function(response) {
  $scope.grades = response.response.Grades;
});


      //show courses on change on class/grade--call API to getCourseList for a level on change of grade
      $scope.changeCourseList = function(grade_id) {
        $scope.message=''; 
        teacherHttpService.getCourseByGrade(grade_id).success(function(courseslistresult) {        
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


    // selected course
    $scope.onchangeSelectedcourse = function(selected_courses) { 
      $scope.message='';      
      var selected_cour=[];
      angular.forEach(selected_courses, function(value, key) {           
        if(value){
          selected_cour.push({id:key,name:value.split(',')[0],level_id:value.split(',')[1] });
        } 

      });

      $scope.stcourses=selected_cour;

        /*var selectedcourses={
              'user_id'     :get_uid,              
              'selected_courses':selected_cour
            };
        
        teacherHttpService.setTeacherSubjects(selectedcourses).success(function(response) {
        })*/   
}



     // Submit teacher selected courses
     $scope.submitSelectedCourses = function(selectedcourses) {       
      selectedcourses.user_id=get_uid;
      teacherHttpService.setTeacherSubjects(selectedcourses).success(function(savedataResult) {

        if (savedataResult.response.status == "TRUE") {
          $scope.message=savedataResult.response.message;
          window.location.href='teacher/payment_page';

        }else{
          $scope.message=savedataResult.response.message;
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
  teacherHttpService.saveCardToPaypalForTeacher(data).success(function(response) {
    if (response.status == true) {
         // $location.url('/teacher/dashboard'); 
         //$location.url('/teacher/dashboard/class/1/English/4');

         teacherHttpService.getTeacherGrades(response.user.id,user_roles['teacher']).success(function(response) {
          if (response.status == true) {
            $scope.subject_grade = response.response;
            $scope.level = response.grade;
            $scope.subject = (response.subject.course_name).split(',');
            var grade = response.urlData.level_id;
            var subjectName = response.urlData.course_name;
            var subjectCode = response.urlData.course_id;

            $location.url('teacher/dashboard/class/'+grade+'/'+subjectName+'/'+subjectCode);
          }else{
            $location.url('teacher/dashboard/class/'+grade+'/'+subjectName+'/'+subjectCode);
          }
        });


       } else {
        $scope.msg = response.message;
      }
    });
};

$scope.submitSkip = function(){
  var step_num =3;
  teacherHttpService.setStepNum(get_uid,step_num).success(function(resp) { 
    if (resp.response.status == "True") {                 
      teacherHttpService.getTeacherGrades(get_uid,user_roles['teacher']).success(function(response) {
        if (response.status == true) {              
          var grade = response.urlData.level_id;
          var subjectName = response.urlData.course_name;
          var subjectCode = response.urlData.course_id;
          $location.url('teacher/dashboard/class/'+grade+'/'+subjectName+'/'+subjectCode);
        }
      });
    }else{
      $location.url('journey');
    } 
  });






}


/* end- step-3 for onBoarding */
//  /* Start - step-4 for onBoarding teacher dasboard*/
//  var grade = '';
//  var subjectName = '';
//  var subjectCode = '';
//  // Get teacher class and subjects. 
//  teacherHttpService.getTeacherGrades(get_uid,user_roles['teacher']).success(function(response) {
//    if (response.status == true) {
//      $scope.subject_grade = response.response;
//      $scope.level = response.grade;
//      $scope.subject = (response.subject.course_name).split(',');
//      grade = response.urlData.level_id;
//      subjectName = response.urlData.course_Name;
//      subjectCode = response.urlData.course_id;
//      var urlString = $location.url();
//      var splitString = urlString.split('#');
//      if (splitString[1] != undefined) {
//        var splitResult = splitString[1].split('%2F')
//        if(splitResult[0] != undefined && splitResult[1] != undefined 
//                && splitResult[2] != undefined ) {
//          grade = splitResult[0];
//          subjectName = splitResult[1];
//          subjectCode = splitResult[2];
//        }
//      }
//      //this function call for show student for first class in teacher class.
//      teacherHttpService.getStudentDetail(grade,subjectCode,user_roles['student']).success(function(response) {
//      if(response.data.length >0) {
//        $scope.detail_student = response.data;
//      }else{
//        $scope.detail_student = 0;
//      }
//    });
//    }
//  });
/* end - step-4 for onBoarding teacher dasboard*/

	/*$scope.deleteCustomer = function (customer) {
		var index = $scope.stcourses.indexOf(customer);
		$scope.stcourses.splice(index, 1);
		// $scope.stcourses.splice($index, 1);
		$scope.$emit('customerDeleted', customer); 
	};*/
    

}])

.controller('teacherDashboardViewCtrl',['$rootScope','$scope','teacherHttpService','loginHttpService','$location','urlParams','$routeParams','user_roles','class_students_classification','commonActions','$filter','$localStorage',
  function($rootScope,$scope,teacherHttpService,loginHttpService,$location,urlParams,$routeParams,user_roles,class_students_classification,commonActions,$filter,$localStorage) {
      //Step- 1 check students of teacher to show empty / non-empty dashboard
      var get_uid=commonActions.getcookies(get_uid);
       $scope.baseURL= urlParams.baseURL;
       $scope.grade_id = $routeParams.gradeid ;
       $scope.course_id = $routeParams.courseid ;
       $scope.subject_name = $routeParams.subject_name ;
       $scope.frm={};




      // API to call LIST of skills and subskills
      //API to call skill
       var parent_id = $routeParams.courseid;
       teacherHttpService.getCourseSkillSubskills($routeParams.gradeid,parent_id).success(function(rescourse) {
         if (rescourse.response.status == "True") {                       
          $scope.skills = rescourse.response.courses;
        }

      });


       //API to call subskill
       $scope.onChangeSkill = function(slctSkill){
        var parentid = slctSkill;
        $scope.subskills={}; 
        $scope.selected_skill_id=slctSkill;
        teacherHttpService.getCourseSkillSubskills($scope.grade_id,parentid).success(function(rescourse) {
           if (rescourse.response.status == "True") {
            $scope.subskills = rescourse.response.courses;
          }         
        });

        // get students
        teacherHttpService.getDashboardStudentsOfTeacher(get_uid,$scope.course_id,slctSkill).success(function(response_students) { 
         if (response_students.response.status == true) {
           $scope.students=response_students.response.students; 
           $scope.students_count=  $scope.students.length;
         }else{
           $scope.student_Errormessage=response_students.response.message;
           $scope.students_count =null;
         } 
       });

      };

      $scope.onChangeSubSkill = function(slctsubSkill){
        teacherHttpService.getDashboardStudentsOfTeacher(get_uid,$scope.course_id,$scope.selected_skill_id,slctsubSkill).success(function(response_students) { 
         if (response_students.response.status == true) {
           $scope.students=response_students.response.students; 
           $scope.students_count=  $scope.students.length;
         }else{
           $scope.student_Errormessage=response_students.response.message;
           $scope.students_count =null;
         } 
       });


      };






       // Api to call all students of a teacher       
       teacherHttpService.getDashboardStudentsOfTeacher(get_uid,$scope.course_id).success(function(response_students) { 
         if (response_students.response.status == true) {
           $scope.students=response_students.response.students; 
           $scope.students_count=  $scope.students.length;
         }else{
           $scope.student_Errormessage=response_students.response.message;
           $scope.students_count =null;
         } 
       });
       // API to call teacher setting

      var data = {user_id : get_uid, level_id: $scope.grade_id, course_id: $scope.course_id}
      teacherHttpService.getTeacherSettings(data).success(function(response) {
        if (response.status == true) {
          var result = response.result;
          var settings = JSON.parse(result.settings);
          $scope.group_builder = (settings.group_builder == true) ? 'true' : 'false';
        }
      });
      // API to call all groups of a teacher
      teacherHttpService.getGroupsOfSubjectForTeacher(get_uid,$scope.course_id).success(function(respGroup) {
       if (respGroup.response.status == "true") {
         $scope.groups = respGroup.response.groups;
       }
     });
     //alert when add group is disable
      $scope.alertgroup = function() {
        alert('');
      }
      // calender event show
      $scope.event = 'all';
      var date = new Date();
      $scope.ddMMyyyy = $filter('date')(new Date(), 'dd');
      $scope.weak = $filter('date')(new Date(), 'EEEE');
      $scope.assignmentEvent = function() {
        $scope.event = 'assignment';
      }
      $scope.pTMEvent = function() {
        $scope.event = 'ptm';
      }
      $scope.toDoEvent = function() {
        $scope.event = 'todo';
      }
      $scope.getTime = function(){
        $('#time').bootstrapMaterialDatePicker({
          date: false,
          shortTime: false,
          format: 'HH:mm'
        });
      };
      var gradeName = '';
      $scope.grade = $routeParams.gradeid;
      loginHttpService.gradeList().success(function(response) {
        angular.forEach(response.response.Grades,function(value,key){
          if(value['id'] == $scope.grade){
            gradeName = value['name'];
          }
        });
      });
      teacherHttpService.getEvent(get_uid).success(function(response) {
        var ptm = 'NO EVENT. \n';
        var todo = 'NOTHING FOR TODAY. \n';
        var ptmCount = 1;
        var todoCount = 1;
        if(response.status == true) {
          var currentDate = $filter('date')(Date.now(), 'yyyy-MM-dd ');
          currentDate = moment(currentDate).format('YYYY-MM-DD');
//          if($localStorage.event !=1) {
//            if(response.response[0].event_date == currentDate) {
//              ptm = '';
//              todo = '';
//              if(response.response[0].event_type == 'ptm') {
//                ptm = ptmCount+'. '+'You have a ptm with '+response.response[0].event_for+' of '+response.response[0].grade_name +' today.\n ';
//                ptmCount++;
//              }else if(response.response[0].event_type == 'todo') {
//                todo = todoCount+'. '+response.response[0].event_title+'.\n';
//                todoCount++;
//              }
//            } 
//          }
          $scope.events = ([{
           date: moment(response.response[0].event_date).add(0, 'days').format(), 
           title: response.response[0].event_title,
           time: response.response[0].event_time,
           eventFor : response.response[0].event_for,
           grade : response.response[0].grade_name,
           eventType : response.response[0].event_type,
         }]);
          angular.forEach(response.response,function(value,key){
            if(key > 0) {
              $scope.events.push({
                date: moment(value.event_date).add(0, 'days').format(), 
                title: value.event_title,
                time: value.event_time,
                eventFor : value.event_for,
                grade : value.grade_name,
                eventType : value.event_type,
              });
              // if($localStorage.event != 1) {
              //   if(value.event_date == currentDate) {
              //     if(value.event_type == 'ptm') {
              //       ptm += ptmCount+'. '+'You have a ptm with '+value.event_for+' of '+value.grade_name+' today. \n';
              //       ptmCount++;
              //     }else if(value.event_type == 'todo') {
              //       todo += todoCount+'. '+value.event_title+'.\n';
              //       todoCount++;
              //     }
              //   } 
              // }
            }
          });
//          if($localStorage.event != 1) {
//            alert('\t\tPARENT TEACHER MEETING \n\t\t'+ ptm+
//              '\n\t\t\t\t\tTODO\n\t\t'+todo);
//            $localStorage.event = '1';
//          }
        }
      });
$scope.showEvents = function(events) {
  var message = events.map(function(e) {
    var ptm = '';
    var todo ='';
    var msg = '';
    if(e.eventType == 'ptm') {
      ptm += 'you have '+e.title+' at'+e.time+' with '+e.eventFor+' of '+e.grade;
    }else if(e.eventType == 'todo') {
      todo += 'you have to do '+e.title;
    }
    if(todo != ''){
      msg = '\n\t\t\t\t\tTODO\n\t\t'+todo 
    }else if(ptm != '') {
      msg = '\n\t\tPARENT TEACHER MEETING \n\t\t'+ ptm;
    }else{
      msg = '\n\t\tPARENT TEACHER MEETING \n\t\t'+ ptm+'\n\t\t\t\t\tTODO\n\t\t'+todo;
    }
    return msg;
  });
  alert(message).join("\n");
}
      //calender event create.
      $scope.userDate = '';
      $scope.getUserSelectedDate = function(day){

        var temp = day.classes;
        var selectedDate = '';
        var tempData = temp.split(' ');
        if(tempData['1'] == 'past'){
          selectedDate = tempData['2'].split('day-');
        }else if(tempData['1'] == 'today'){
          if(tempData['2'] == 'event') {
            selectedDate = tempData['3'].split('day-'); 
          }else{
            selectedDate = tempData['2'].split('day-');  
          }
        }else if(tempData['1'] == 'event'){
          selectedDate = tempData['2'].split('day-');
        }else{
          selectedDate = tempData['1'].split('day-');
        }
        $scope.userDate = selectedDate[1];
        $scope.ddMMyyyy = $filter('date')($scope.userDate, 'dd');
        $scope.weak = $filter('date')($scope.userDate, 'EEEE');
      }
      $scope.calender = {};
      $scope.calndr = {};
      //event for paytm
      $scope.EventUpload = function(data) {
        var id = [];
        var eventFor = '';
        if($scope.calender.checkedType == 'all') {
          angular.forEach($scope.students,function(stud,key) {
            id.push(stud['id']);
          });
          eventFor = 'class';
        }else if($scope.calender.checkedType == 'group') {
          var groupId = $scope.calender.selectedGroupModel;
          angular.forEach($scope.groups,function(grp,key) {
            if(grp['id'] == groupId) {
              id = grp['student_id'];
            }
          });
          eventFor = 'group';         
        }else if($scope.calender.checkedType == 'people') {
          id = $scope.calender.selectedPeopleModel;
          eventFor = 'people';
        }
        var eventDetails = {};
        eventDetails = {
          event_type : 'ptm',
          user_id : get_uid,
          user_type : user_roles['teacher'],
          event_date : $scope.userDate,
          event_time : data.time,
          event_for : eventFor,
          grade : $scope.grade,
          grade_name : gradeName, 
          course_id : $scope.course_id,
          event_for_id : id      
        };
        teacherHttpService.uploadEvent(eventDetails).success(function(response) {
          if(response.status == true) {
            $scope.msg = '';
            $scope.message = response.message;
            $scope.calender.selectedTimeModel = '';
            $scope.calender.selectedPeopleModel = '';
            $scope.calender.selectedGroupModel = '';
            $scope.calender.checkedType = '';
            $scope.userDate = '';
            $scope.ddMMyyyy = $filter('date')(new Date(), 'dd');
            $scope.weak = $filter('date')(new Date(), 'EEEE');
          }else{
            $scope.message = '';
            $scope.msg = response.message;
          }
        });
      }
       //event for todo
       $scope.CreateTodo = function(data) {
        var eventDetails = {};
        eventDetails = {
          event_type : 'todo',
          event_title : data.todo,
          user_id : get_uid,
          event_date : $scope.userDate,
          grade : $scope.grade,
          grade_name : gradeName, 
          course_id : $scope.course_id,     
        };
        teacherHttpService.uploadEvent(eventDetails).success(function(response) {
          if(response.status == true) {
            $scope.msg = '';
            $scope.message = response.message;
            $scope.userDate = '';
            calndr.todo = '';
          }else{
            $scope.message = '';
            $scope.msg = response.message;
          }
        });
      }


      // start-  NEEDS YOUR ATTENTION
      teacherHttpService.getNeedAttentionForTeacher(get_uid,$routeParams.courseid).success(function(resAtn) {
          if(resAtn.response.status==true){
            $scope.strecords= resAtn.response.attention_records;
            var first_subskill_id =resAtn.response.attention_records[0].course_id;
            
            teacherHttpService.getSubskillAnalytic(get_uid,$routeParams.courseid,first_subskill_id).success(function(resAna) {
           
               //$scope.data = [30,10,20,20,15,5];
            if(resAna.response.status==true){
                var stAnalyticResults= resAna.response.student_result;
                $scope.attention_message ="";
                $scope.data =[];
                angular.forEach(stAnalyticResults, function(value, key) {               
                   $scope.data.push(value);    
                });
                $("#menu1").addClass('in active');
                console.log($scope.data);
          }
          else{
            $scope.analytic_message = resAna.response.message;                      
          }
        });

       }
       else{
           $scope.attention_message = resAtn.response.message;
           $scope.data = [100,0,0,0,0,0]; 
         }
    });
    // end-  NEEDS YOUR ATTENTION


    // Start-  Analytic Class Graph    
    $scope.clickNeedAttention= function(indx, subskillid){
        $(".tab-pane.in.active").removeClass('in active'); 
        $("#menu"+indx).addClass('in active');

        teacherHttpService.getSubskillAnalytic(get_uid,$routeParams.courseid,subskillid).success(function(resAna) {
            console.log();
            //$scope.data = [30,10,20,20,15,5];
            if(resAna.response.status==true){
                var stAnalyticResults= resAna.response.student_result;
                $scope.data =[];
                angular.forEach(stAnalyticResults, function(value, key) {               
                   $scope.data.push(value);    
                });                
          }
          else{
            $scope.analytic_message = resAna.response.message;            
          }
        });

    };
   /*  $scope.labels = [];
     angular.forEach(class_students_classification, function(value, key) {               
        $scope.labels.push(key); 
        console.log($scope.labels);   
      });*/
      $scope.labels =["NO_ATTACK", "REMEDIAL", "STRUGGLING", "ON_TARGET", "OUTSTANDING", "GIFTED"];
      $scope.colors = ['#e8e8e8','#db4a4a','#f1c40f','#69e59d','#249626','#8a81e8'];
      //$scope.data = [30,10,20,20,15,5];

      
      
      $scope.datasetOverride = [{ label: 'Bar chart', borderWidth: 1,  type: 'bar'  }];
      $scope.options = { 
          animation: {duration: 1000 },
          legend: { 
                    display: true, position: 'right',
                    labels: {  fontColor: '#333', fontSize: 14, boxWidth: 15, },
                  },

          tooltips: {
              callbacks: {
                    label: function(tooltipItem, data) {
                        var allData = data.datasets[tooltipItem.datasetIndex].data;
                        var tooltipLabel = data.labels[tooltipItem.index];
                        var tooltipData = allData[tooltipItem.index];
                        var total = 0;
                        for (var i in allData) {
                              total += allData[i];
                        }
                        var tooltipPercentage = Math.round((tooltipData / total) * 100);
                        return tooltipLabel + ': ' + tooltipData + '%';
          
                    }
              }
          }
      };

   // end-  Analytic Class Graph


    }])

.controller('teacherCreateClassCtrl',['$rootScope','$scope', '$filter','$timeout', 'teacherHttpService','loginHttpService','$location','user_roles','commonActions','$routeParams',
  function($rootScope,$scope, $filter, $timeout,teacherHttpService,loginHttpService,$location,user_roles,commonActions,$routeParams) {

    var get_uid=commonActions.getcookies(get_uid);
    $scope.students = [];

      // Get teacher class and subjects. 
      teacherHttpService.getTeacherGrades(get_uid,user_roles['teacher']).success(function(response) {   
       if (response.status == true) {
        $scope.subject_grade = response.response;    
      }
    });

    // Display the students in a class for a course
    $scope.onChangeGetStudents = function(stcourse){
        var stcourseid=stcourse.split(',')[0];
        teacherHttpService.getStudentsOfSubjectForTeacher(get_uid,stcourseid).success(function(student_response) {
            //console.log(student_response);
            if(student_response.response.status=="true"){
              $scope.students=student_response.response.students;
            }else{
              $scope.students=[];
              $scope.err_message = "No Record Found. Please add student for this class";
              $timeout(function () { $scope.err_message = ""; }, 3000);
            }

            //to edit the data
            $scope.selected={};
            $scope.editStudent=function(sid){
              $scope.selected.id=sid;
            }
          });
        }
      

  // start:- To add the student in class
  $scope.submitStudentDetails = function(frmdata){
    if(typeof frmdata.selectedcourse !='undefined'){
      console.log(frmdata.selectedcourse);
          //$scope.today = $filter('date')(new Date(), 'yyyy-mm-dd HH:mm:ss');
          var slct_courseid=frmdata.selectedcourse.split(',')[0];
          var slct_courname=frmdata.selectedcourse.split(',')[1];
          var slct_level_id=frmdata.selectedcourse.split(',')[2];
          var select_course={[slct_courseid]:slct_courname};          
          var d = new Date();
          var sec = d.getSeconds();   
          
          var studentdata={};
          studentdata={
            username    : frmdata.Fname+get_uid+sec,
            first_name  : frmdata.Fname,
            last_name   : frmdata.Lname,
            password    : frmdata.pass,
            level_id    : slct_level_id,
            grade_id    : slct_level_id,
            course_id    : slct_courseid,
            dob         : '',
            created     : $scope.today,
            emailchoice : '',
            email       : frmdata.email,
            school      : '',
            teacher_id   : get_uid,
            role_id     : 4, 
            status      : 1,            
            plan_id     : '',
            package_id  : '',
            courses     : select_course,
            vcode       : '',
            subscription_days : '',
          }

          teacherHttpService.addStudent(studentdata).success(function(response_childadd) {
            if (response_childadd.response.status == "True") {
              $scope.success_message="Student is added";                         
              
              teacherHttpService.getStudentsOfSubjectForTeacher(get_uid,slct_courseid).success(function(student_response) {
                $scope.students={};
                $scope.students=student_response.response.students;
                $scope.frm.Fname=$scope.frm.Lname=$scope.frm.email=$scope.frm.pass="";
              });
              $scope.student_Errormessage="";
                    $timeout(function () { $scope.success_message = ""; }, 3000); // to fadeup message
                    //$timeout(function () { $scope.message = true; }, 3000);
                  }else{
                   $scope.student_Errormessage=response_childadd.response.message;
                 }
               });
        }
        else{      
          $scope.course_Errormessage="Please select course";
        }
      }
// end- add student in class



// Start- edit a student

  // to show input box to edit
  $scope.editStudent=function(stdata){
    $scope.selected.id=stdata.id; 
  }


  // To update the record
  $scope.updateStudent=function(upstdata){    
   var upstudent={};
   upstudent={
    id          : upstdata.id,
    username    : upstdata.username,
    first_name  : upstdata.first_name,
    last_name   : upstdata.last_name,
    password    : upstdata.open_key,                  
    email       : upstdata.email,                 
    parent_id   : get_uid,
    role_id     : 3, 

  }

  teacherHttpService.updateStudent(upstudent).success(function(response_upstudent) {
    if (response_upstudent.response.status == "true") {
      $scope.success_message="Student is Updated";
      $scope.selected.id="";

    }else{
     $scope.upstudent_Errormessage=response_upstudent.response.message;
                        $timeout(function () { $scope.upstudent_Errormessage = ""; }, 4000); // to fadeup message
                        $timeout(function () { $scope.success_message = ""; }, 3000);
                      }
                    });
}
//end- edit a student


// Delete the records
$scope.delete_Student=function(dtstudent,index){     
  teacherHttpService.deleteStudent(dtstudent).success(function(response_dtstudent) {
    if (response_dtstudent.response.status == "true") {
     $scope.success_message="Student is deleted";            
     $scope.students.splice(index, 1);
   }else{
    $scope.student_Errormessage=response_dtstudent.response.message;
  }     

});
}


// Send Me Mail functionlity
$scope.sendEmailMe=function(selected_students){  
  teacherHttpService.sendMeMail(selected_students, get_uid).success(function(response) { 
    console.log(selectd_students);
  });

}


$scope.currentPage = 0;
$scope.pageSize = 100;
//$scope.data = [];
$scope.q = '';

$scope.getData = function () {
  return $filter('filter')($scope.students, $scope.q)
}

$scope.numberOfPages=function(){
	return Math.ceil($scope.getData().length/$scope.pageSize);                
}

}])

.controller('teacherGroupCtrl',['$rootScope','$scope','$timeout', 'teacherHttpService','loginHttpService','$routeParams','$location','user_roles','commonActions','$routeParams','urlParams',
  function($rootScope,$scope,$timeout,teacherHttpService,loginHttpService,$routeParams,$location,user_roles,commonActions,$routeParams,urlParams) {

    var get_uid=commonActions.getcookies(get_uid);
    $scope.grade_id = $routeParams.grade_id ;
    $scope.subject_id = $routeParams.course_id ;
    $scope.subject_name = $routeParams.subject_name ;
    $scope.baseURL= urlParams.baseURL;

    $scope.frm={};

    // step 1 - To create group
    if( $routeParams.subject_name ){
      console.log($routeParams);
        // Api to call all students of a teacher
        teacherHttpService.getStudentsOfSubjectForTeacher(get_uid, $scope.subject_id, $scope.grade_id).success(function(response_students) { 
          if (response_students.response.status == "true") {                 
            $scope.students=response_students.response.students;
          }else{
            $scope.student_Errormessage=response_students.response.message;
          } 
        });


        // API to show existing groups List
        teacherHttpService.getGroupsOfSubjectForTeacher(get_uid, $scope.subject_id).success(function(response_getgp) {
          if (response_getgp.response.status == "true") {
            $scope.groups = response_getgp.response.groups;            
          }
          else{
            $scope.errorMessage = response_getgp.response.message;
          }
        });



        // To add the group in database
        $scope.onSubmitCreateGroup= function(frms){ 
          //console.log($scope.img); 
          frms.group_image = $scope.img;
          teacherHttpService.createGroup(frms,get_uid,$scope.subject_id, $scope.grade_id).success(function(response_addgp) {
           if (response_addgp.response.status == "true") {
            $scope.successMessage = response_addgp.response.message;
            $scope.frm={};


                    // API to show all created group
                    teacherHttpService.getGroupsOfSubjectForTeacher(get_uid,$scope.subject_id).success(function(response_getgp) {
                      if (response_getgp.response.status == "true") {
                        $scope.groups = response_getgp.response.groups;
                        $scope.img ={};
                        window.location.href='teacher/create-group/class/'+$routeParams.grade_id+'/'+$routeParams.subject_name+'/'+$routeParams.course_id;

                      }
                      else{ 
                        $scope.errorMessage = response_getgp.response.message;
                      }
                    });

                  }else{
                    $scope.errorMessage = response_addgp.response.message;

                  }

                  $timeout(function () { $scope.successMessage = ""; }, 4000);
                  $timeout(function () { $scope.errorMessage = ""; }, 4000);
                  //$route.reload(); 
                });
}
}



    // Step 2 - Edit group
    if( $routeParams.group_title_inURL){
      var group_id = $routeParams.group_id ;

        // Get students of group
        teacherHttpService.getStudentsOfGroup( group_id).success(function(resp) {         
          if (resp.response.status == "True") {
            $scope.gp_students = resp.response.students ; 
            var gp_studnts = resp.response.students ;
            $scope.group_icon =  resp.response.group_icon ;
            $scope.frm.group_title =  resp.response.group_title ;
            $scope.gp_course_id =  resp.response.course_id ;

                  // Get Student of Class/Subject  
                  teacherHttpService.getStudentsOfSubjectForTeacher(get_uid, $scope.gp_course_id).success(function(respstudents) { 
                   if (respstudents.response.status == "true") {               
                         //$scope.class_students=respstudents.response.students;
                         var cls_students = respstudents.response.students;

                         for( var i=cls_students.length - 1; i>=0; i--){
                          for( var j=0; j<gp_studnts.length; j++){
                            if(cls_students[i] && (cls_students[i].id === gp_studnts[j].id)){
                              cls_students.splice(i, 1);
                            }
                          }
                        }
                        $scope.remain_CLstudents = respstudents.response.students; 
                      }
                    });
                }
              });
        // remove existing students from group        
        $scope.removeStInGp = function(index) {           
          $scope.gp_students.splice(index, 1);
        }


        $scope.submitEditGroup = function(frmdata) {          
         var frm_record = {};
         angular.forEach(frmdata.selectedst, function(value, key) {               
          frm_record[key] = value;           
        });

         angular.forEach($scope.gp_students, function(value, key) {
          var st_id = value['id'];
          var st_username= value['username'];               
          frm_record[st_id] = st_username;           
        });


         var editgprecords={
          groupname : frmdata.group_title,
          group_id  : group_id,
          students  : frm_record 
        }

           // Call API to update the records of group
            // Call API to update the records of group
            teacherHttpService.editGroupOfSubject(editgprecords,group_id).success(function(resp) {
              if (resp.response.status == "True") {
                $scope.succ_message = resp.response.message;
                window.location.href='teacher/edit-group/'+$routeParams.group_title_inURL+'/'+group_id;
              }else{
                $scope.err_message = resp.response.message;
              }
            });

            $scope.onSkipClick=function(){     
              window.location.href='teacher/edit-group/'+$routeParams.group_title_inURL+'/'+group_id;
            };

          } 

        }
      }])


 //let's make a startFrom filter
 .filter('startFrom', function() {
  return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
      }
    })

 .controller('teacherLessonCtrl',['$rootScope','$scope','teacherHttpService','loginHttpService','$location','user_roles','commonActions','$routeParams','$compile','mlg_points','$timeout',
  function($rootScope,$scope,teacherHttpService,loginHttpService,$location,user_roles,commonActions,$routeParams,$compile,mlg_points,$timeout) {
    var get_uid=commonActions.getcookies(get_uid);
    var grade = '';
    var standard = [];
    var standardType = [];
    var course = '-1';
    var skills = '';
    var parentId = '';
    var skillId = [];
    var skillName = '';
    var subSkills = [];
    var subSkils = [];
    var tempStatus = 0;
    var subStatus = 0;
    var countImg = 0;
    var countDoc = 0;
    var countVideo = 0;
    $scope.frm = {};

//    $scope.close_modal=function(){
//      $(".modal-backdrop").remove();
//      window.location.href='teacher/add-content';
//   }  
//    $scope.doc = {};
//    $scope.img = {};
$scope.temp = {};
$scope.skillmodel = [];
$scope.subSkillmodel = [];
$scope.skill = [];
$scope.subSkill = [];
$scope.selectedTemplateModel = [];       
$scope.userContentModel = [];
$scope.template = [];
$scope.userContent =[];
$scope.templateDetail = [];
$scope.type = 'ALL';
$scope.textClass = 'active';
$scope.docClass = '';
$scope.imgClass = '';
$scope.videoClass = '';
var mlg = '';
    // template detail show
    teacherHttpService.getTemplateDetail(get_uid,'lesson').success(function(response) {
      if (response.status == true) {
        var temp = response.data;
        $scope.templateDetail = response.data;
        $scope.template = temp;
        $scope.template.splice(0,0,{'id' :'','template_name' :'---Select template---'});
        $scope.selectedTemplateModel = $scope.template[0][0];
      }else{
        $scope.msg = 'unable to find template';
        $timeout(function () {$scope.msg = ""; }, 3000);
      }
    });
    
    teacherHttpService.getTeacherGrades(get_uid,user_roles['teacher']).success(function(response) {
      if (response.status == true) {          
        $scope.level = response.grade;
        mlg = response.url;
//        $scope.level.splice(0,0, '---Select Grade---');
//        $scope.gradeSelected = $scope.level[0];
      }else{
        $scope.msg = 'unable to find class';
        $timeout(function () {$scope.msg = ""; }, 3000);
      }
      });	
    // on the basis of grade fetch the coursr list.
    $scope.getGradeVal = function(){
      if($scope.gradeSelected != '---Select Grade---') {
        grade = $scope.gradeSelected;
        teacherHttpService.getTeacherDetailsForContent(get_uid,grade,-1,user_roles['teacher']).success(function(response) {
          $scope.subject = response.response;
//          $scope.subject.splice(0,0,{'level_id' :'','course_id' :'','course_name' :'---Select Course---'});
            $scope.courseSelected = $scope.subject[0][0];
     }).error(function(error) {
        $scope.msg= 'Some technical error occured.';
        $timeout(function () {$scope.msg = ""; }, 3000);
     });
   }  
  }
    // on the basis of courseid fetch skill
    $scope.getCourseVal = function(){
      if($scope.gradeSelected != '---Select Subject---') {
       course = $scope.courseSelected;
       $scope.subSkill = [];
       $scope.skill = [];
       if(tempStatus == 0) {
        teacherHttpService.getAllCourseList(course,'lesson','-1',get_uid).success(function(response) {
          var data = response.response.course_details;
          angular.forEach(data, function(value, key) {
            $scope.skill.push({
              'id' : value['course_id'],
              'label': value['name']
            });
          });
        }).error(function(error) {
          $scope.msg= 'Some technical error occured.';
          $timeout(function () {$scope.msg = ""; }, 3000);
        });
      }
    }  
  }
  $scope.skillEvents = {
    onItemSelect: function(item) {
      parentId = item['id'];
      skillId.push(parentId);
      var count = 0;
      teacherHttpService.getAllCourseList(parentId,'lesson','-1',get_uid).success(function(response) {
        angular.forEach(response.response.course_details, function(value, key) {
          $scope.subSkill.push({
            'id' : value['course_id'],
            'label': value['name']
          });
          subSkils.push(value['course_id']);
          count++;
          if(count >= (response.response.course_details).length) {
            var subSkillDetail = {};
            subSkillDetail= {
              uid : get_uid,
              subskills :subSkils,
            }
            $scope.tempsubskil= subSkils;
            teacherHttpService.getUserContent(subSkillDetail).success(function(response) {
              if (response.status == true) {
                $scope.userContent = response.data;
                mlg = response.url;
              }else{
                $scope.msg = 'unable to find content.';
                $timeout(function () {$scope.msg = ""; }, 3000);
              }
            }); 
          }
        });
      }).error(function(error) {
       $scope.msg= 'Some technical error occured.';
       $timeout(function () {$scope.msg = ""; }, 3000);
      });
    },
    onItemDeselect: function(item) {
        var Id = item['id'];
        var count = 0;
        angular.forEach(skillId,function(value, key) {
          if (value == Id) {
           skillId.splice(key);         
           teacherHttpService.getAllCourseList(Id,'lesson','-1',get_uid).success(function(response) {
            angular.forEach(response.response.course_details, function(value, key) {
              angular.forEach($scope.subSkill, function(val, ki) {
                if(value['course_id'] == val['id']) {
                  $scope.subSkill.splice(ki,1); 
                  subSkils.splice(ki,1);
                  $scope.tempsubskil= subSkils;
                  count++;
                  console.log(count);
                  if(count >=(response.response.course_details).length) {
                    var subSkillDetail = {};
                    subSkillDetail= {
                      uid : get_uid,
                      subskills :subSkils,
                    }
                    teacherHttpService.getUserContent(subSkillDetail).success(function(response) {
                      if (response.status == true) {
                        $scope.userContent = response.data;
                        mlg = response.url;
                      }else{
                       $scope.userContent = [];
                     }
                   }); 
                  }   
                } 
              }); 
            });
          }).error(function(error) {
           $scope.msg= 'Some technical error occured.';
           $timeout(function () {$scope.msg = ""; }, 3000);
         });
        }
      });
      }
  };
$scope.subSkillEvents = {
  onItemSelect: function(item) {   
    if(item != '') {
      subSkills.push(item['id']);
    }
    var subSkillDetail = {};
    subSkillDetail= {
      uid : get_uid,
      subskills :subSkills,
    }
    teacherHttpService.getUserContent(subSkillDetail).success(function(response) {
      if (response.status == true) {
        $scope.userContent = response.data;
        mlg = response.url;
      }else{
        $scope.msg = 'unable to find content.';
        $timeout(function () {$scope.msg = ""; }, 3000);
      }
    });    
  },
  onItemDeselect: function(item) {
    angular.forEach(subSkills,function(value, key) {
      if (value == item['id']) {
       subSkills.splice(key);
     }
   });
    var subSkillDetail = {};
    subSkillDetail= {
      uid : get_uid,   
      subskills :subSkills,
    }
    if(subSkills == ''){
      subSkillDetail= {
        uid : get_uid,
        subskills :$scope.tempsubskil,
      }
    }
    teacherHttpService.getUserContent(subSkillDetail).success(function(response) {
      if (response.status == true) {
        $scope.userContent = response.data;
        mlg = response.url;
      }else{
        $scope.userContent = [];
      }
    });
  }
};
$scope.standardmodel = [];
$scope.standard = [
{id:"Alabama", label: "Alabama"},
{id:"Alaska", label: "Alaska"},
{id:"Arizona", label: "Arizona"},
{id:"Arkansas", label: "Arkansas"},
{id:"California", label: "California"},
{id:"Colorado", label: "Colorado"},
{id:"Connecticut", label: "Connecticut"},
{id:"D.C.", label: "D.C."},
{id:"Massachusetts", label: "Massachusetts"},
];
$scope.standardEvents = {
  onItemSelect: function(item) {   
    if(item != '') {
      standard.push(item['id']);
    }
  },
  onItemDeselect: function(item) {
    standard.splice(item['id'],1);
  }
};
$scope.standardTypemodel = [];
$scope.standardType = [
{id:"Alabama", label: "Alabama"},
{id:"Alaska", label: "Alaska"},
{id:"Arizona", label: "Arizona"},
{id:"Arkansas", label: "Arkansas"},
{id:"California", label: "California"},
{id:"Colorado", label: "Colorado"},
{id:"Connecticut", label: "Connecticut"},
{id:"D.C.", label: "D.C."},
{id:"Massachusetts", label: "Massachusetts"},
];
$scope.standardTypeEvents = {
  onItemSelect: function(item) {   
    standardType.push(item['id']);
  },
  onItemDeselect: function(item) {
    standardType.splice(item['id'],1);
  }
};
var lessonDetail = {};
var textDesc ='';
var doc = '';
var img = '';
var video = '';
$scope.submitDocDetail = function(data) {
   //for
   var sharedMode = '0'
  if($scope.checkboxModel == true){
    sharedMode = '1';
  }
  doc = $scope.doc;
  img = $scope.img;
  video = $scope.video;
  var content = '';
  var type = '';
  var pointType = '';
  if(angular.isDefined(data.htmlcontent)){
    if((data.htmlcontent).length == 0) {
      if(typeof(doc) === 'string' && doc.length != 0){
        content = doc;
        type = 'doc';
        pointType = mlg_points['content_type_doc'];
      }else if(typeof(img) === 'string' && img.length != 0){
        content = $scope.img;
        type = 'image';
        pointType = mlg_points['content_type_image'];
      }else if(typeof(video) === 'string' && video.length != 0){
        content = video;
        type = 'video';
        pointType = mlg_points['content_type_video'];
      }
    }else{
      content = data.htmlcontent;
      type = 'text';
      pointType = mlg_points['content_type_text'];
    }
  }else if(typeof(doc) === 'string'){
    content = doc;
    type = 'doc';
    pointType = mlg_points['content_type_doc'];
  }else if(typeof(img) === 'string'){
    content = $scope.img;
    type = 'image';
    pointType = mlg_points['content_type_image'];
  }else if(typeof(video) === 'string'){
    content = video;
    type = 'video';
    pointType = mlg_points['content_type_video'];
  }
  lessonDetail = {
    tid : get_uid,
    grade : grade,
    course : course,
    lesson : data.lesson_name,
    standard : standard,
    standard_type : standardType,
    skills : skillId,
    sub_skill : subSkills,
    title : data.text_title,
    content : content,
    type : type,
    point_type : pointType,
    shared_mode : sharedMode,
  }
  teacherHttpService.setContentForLesson(lessonDetail).success(function(response) {
    if(response.status == true){
      $scope.message = response.response;
      $timeout(function () {$scope.message = ""; }, 3000);
//        window.location.reload();
      if(type == 'doc') {
       $("#doc form").html(""); 
      }else if(type == 'image') {
       $("#img form").html(""); 
      }else if(type == 'video') {
       $("#video form").html(""); 
      }
      $scope.frm.htmlcontent = '';
      $scope.fileDocModel = '';
      $scope.fileImgModel = '';
      $scope.fileVideoModel = '';
      $scope.doc = '';
      $scope.img = '';
      $scope.video = '';
      content = '';
      type = '';
      var subSkillDetail = {};
      subSkillDetail= {
        uid : get_uid,
        subskills :subSkills,
      }
      teacherHttpService.getUserContent(subSkillDetail).success(function(response) {
        if (response.status == true) {
          $scope.userContent = response.data;
          mlg = response.url;
        }else{
          $scope.msg = 'unable to find content.';
          $timeout(function () {$scope.msg = ""; }, 3000);
        }
      });
      }else{
        $scope.message = response.response;
        $timeout(function () {$scope.message = ""; }, 3000);
      }
      }).error(function(error) {
       $scope.msg= 'Some technical error occured.';
       $timeout(function () {$scope.msg = ""; }, 3000);
      }); 
  }
  // set user Content for edit or update
  var addContCount = 0;
  $scope.setUserContent = function(data) {
    $scope.updateId = data;
    $scope.mesage = '';
    if(countImg == 0 && countDoc == 0 && countVideo ==0) {
      var mysave = angular.element(document.querySelector('#save-content button'));
      mysave.remove();
      var myupdate = angular.element(document.querySelector('#update-content'));
      myupdate.append($compile('<button type="submit" class="btn btn-primary"ng-click="updateDetail(frm)">Update</button>')($scope));
      var mycourse = angular.element(document.querySelector('#coursetemp select'));
      mycourse.remove();
      var mynewcourse = angular.element(document.querySelector('#coursetemp'));
      mynewcourse.append('<select class="mlg-selectpicker form-control" data-size="auto" ng-model="courseSelected"></select>');
      if(addContCount == 0){
        var myAddContent = angular.element(document.querySelector('#add-new-content'));
        myAddContent.append('<button type="submit" class="btn btn-background-none text-primary margin-bottom-10 btn-add"onClick="window.location.reload()" ><i class="icon icon-plus-outline"></i> Add New</button>');  
        addContCount++;
      }
      
    }
    if(countImg > 0){
      for(var $i=0; $i<=countImg;$i++) {
        var myLabel = angular.element(document.querySelector('#uploded-image label'));
        var myImage = angular.element(document.querySelector('#uploded-image img'));
        var mynewcourses = angular.element(document.querySelector('#coursetemp select option'));
        mynewcourses.remove();
        myLabel.remove();
        myImage.remove();
      }
      countImg = 0;
    }
    if(countDoc > 0){
      for(var $i=0; $i<=countDoc;$i++) {
        var myAnc = angular.element(document.querySelector('#uploded-doc a'));
        var mynewcourses = angular.element(document.querySelector('#coursetemp select option'));
        mynewcourses.remove()
        myAnc.remove();
      }
      countDoc = 0;
    }
    if(countVideo > 0){
      for(var $i=0; $i<=countVideo;$i++) {
        var myAnc = angular.element(document.querySelector('#uploded-video a'));
        var mynewcourses = angular.element(document.querySelector('#coursetemp select option'));
        mynewcourses.remove();
        myAnc.remove();
      }
      countVideo = 0;
    }
    $scope.skill = [];
    angular.forEach($scope.userContent, function(val, ki) {
      if(val['id'] == data) {
        $scope.frm.text_title = val['title'];
        $scope.frm.lesson_name = val['lesson_name'];
        teacherHttpService.setUserContents(val['course_detail_id']).success(function(response) {
          if(response.message == ''){
            angular.forEach(response.subject,function(value,key){
              $scope.gradeSelected = value['level_id'];
              $scope.subject = [];
              $scope.subject.push({
               'level_id' : value['level_id'],
               'course_id': value['id'],
               'course_name':value['course_name']
             });
              $scope.courseSelected = $scope.subject;
              var mynewcourses = angular.element(document.querySelector('#coursetemp select'));
              mynewcourses.append('<option value="'+value['id']+'">'+value['course_name']+'</option>')
            });
            angular.forEach(response.skill,function(skils,ki){
              $scope.skill = [];
              $scope.skill.push({
                'id' : skils['course_id'],
                'label': skils['name']
              });
              $scope.skillmodel = $scope.skill;
            });
            angular.forEach(response.sub_skill,function(subSkils,subKi){
              $scope.subSkill = [];
              $scope.subSkill.push({
                'id' : subSkils['course_id'],
                'label': subSkils['name']
              });
              $scope.subSkillmodel = $scope.subSkill;
            });
            $scope.subSkillmodel = $scope.subSkill;
            $scope.standard = [];
            var standard = val['standards'].split(',');
            for(var $i=0;$i<standard.length;$i++){
              console.log(standard[$i]);
              $scope.standard.push({
                'id' : standard[$i],
                'label': standard[$i]
              }); 
            }
            $scope.standardmodel = $scope.standard;
            $scope.standardType = [];
            console.log(val['standard_type']);
            var standardType = val['standard_type'].split(',');
            for(var $i=0;$i<standardType.length;$i++){
              $scope.standardType.push({
                'id' : standardType[$i],
                'label': standardType[$i]
              }); 
            }
            $scope.standardTypemodel = $scope.standardType;
          }
        }).error(function(error) {
         $scope.msg= 'Some technical error occured.';
         $timeout(function () {$scope.msg = ""; }, 3000);
       });
       if(val['shared_mode'] == '1') {
         $scope.checkboxModel = true;
       }else{
         $scope.checkboxModel = false;
       }
        if(val['type'] == 'text'){
         $scope.type = 'text';
         $scope.textClass = 'active';
         $scope.frm.htmlcontent = val['content'];   
       }else if(val['type'] == 'doc'){
        $scope.frm.htmlcontent = '';
        $scope.type = 'doc';
        $scope.docClass = 'active';
        var myDoc = angular.element(document.querySelector('#uploded-doc'));
        var docContent = val['content'].split(',');
        $scope.editValue = val['content'];
        angular.forEach(docContent,function(docValue,docKey){
          myDoc.append('<a href="'+mlg+'upload/'+docValue+'" target="_new">'+docValue+'</a>');
          countDoc++;
        });
      }else if(val['type'] == 'image'){
        $scope.type = 'image';
        $scope.imgClass = 'active';
        $scope.frm.htmlcontent = '';
        var myLabel = angular.element(document.querySelector('#uploded-image'));
        myLabel.append('<label>uploded Image :  </label> ');
        var myImg = angular.element(document.querySelector('#uploded-image'));
        var imgContent = val['content'].split(',');
        $scope.editValue = val['content'];
        angular.forEach(imgContent,function(imgValue,imgKey){
          myImg.append('<img src="'+mlg+'upload/'
            +imgValue+'" alt="'+imgValue+'"width="50px" height="50px"></img>');
          countImg++;
        });
      }else if(val['type'] == 'video'){
        $scope.frm.htmlcontent = '';
        $scope.type = 'video';
        $scope.videoClass = 'active';
        var myVideo = angular.element(document.querySelector('#uploded-doc'));
        var videoContent = val['content'].split(',');
        $scope.editValue = val['content'];
        angular.forEach(videoContent,function(videoValue,videoKey){
          myDoc.append('<a href="'+mlg+'upload/'+videoValue+'" target="_new">'+videoValue+'</a>');
          countVideo++;
        });
      }
    }
  });
}
$scope.submitTemplate = function(data) {
//    lessonDetail.temp_name=data.template_name;
lessonDetail = {
  tid : get_uid,
  grade : grade,
  course : course,
  lesson : data.lesson_name,
  standard : standard,
  standard_type : standardType,
  skills : skillId,
  sub_skill : subSkills,
  temp_name : data.template_name,
  template_status : 1,
  cont_type : 'lesson'
};
teacherHttpService.setTemplateDetail(lessonDetail).success(function(response) {
  if(response.status == true){
    window.$location.reload();
  }else{
    $('#modal-saveTemplateAs').modal();
//    alert(response.message);
    $scope.msg = response.message;
    $timeout(function () {$scope.msg = ""; }, 3000);
  }
}).error(function(error) {
 $scope.msg= 'Some technical error occured.';
 $timeout(function () {$scope.msg = ""; }, 3000);
 
}); 
} 
  //set template
  $scope.getTemplate = function(){
    var subTemp = [];
    var subTempCount = 0;
    tempStatus = 1;
    var tempId = $scope.selectedTemplateModel;
    $scope.skill=[];
    $scope.subSkill=[];
    $scope.skillmodel = [];
    $scope.subSkillmodel = [];
    $scope.standardmodel = [];
    $scope.standardTypemodel = [];
    
    angular.forEach($scope.template , function(value, key) {
      if(tempId == value['id']) {
        //for grade
        angular.forEach($scope.level , function(vall, kil) {
          if(value['grade']== vall['id']){
             //grade in template
             $scope.gradeSelected = vall['id'];
             grade = vall['id'];
            //for subject in template
            teacherHttpService.getTeacherDetailsForContent(get_uid,grade,value['course_id'],user_roles['teacher']).success(function(response) {
              $scope.subject = [];
              angular.forEach(response.response  , function(val, ki) {
                $scope.subject.push({
                  'course_id': val['id'],
                  'course_name':val['course_name'],
                });
              });   
              $scope.courseSelected = $scope.subject[0]['course_id'];
              course = $scope.subject[0]['course_id'];
            });
            teacherHttpService.getAllCourseList(value['course_id'],'lesson','-1',get_uid).success(function(response) {
              var data = response.response.course_details;   
              angular.forEach(data, function(skil, key) {
                $scope.skill.push({
                  'id' : skil['course_id'],
                  'label': skil['name']
                });
              });
              //for selected skill.
              angular.forEach($scope.skill , function(val, ki) { 
                teacherHttpService.getAllCourseList(val['id'],'lesson','-1',get_uid).success(function(response) {
                  angular.forEach(response.response.course_details, function(subskil, key) {
                    $scope.subSkill.push({
                      'id' : subskil['course_id'],
                      'label': subskil['name']
                    });
                  });
                  angular.forEach($scope.subSkill , function(subvalue, kisub) {
                   angular.forEach(value['sub_skill'] , function(subSkillValue, kil) {
                    if(subTempCount == 0) {
                     if(subSkillValue == subvalue['id'] ) {
                      subTemp.push(subSkillValue);
                      $scope.subSkillmodel.push($scope.subSkill[kisub]);
                      subTempCount++;
                    }
                  }else{
                    if(subSkillValue == subvalue['id']) {
                      if(subTemp.indexOf(subSkillValue) <0){
                        subTemp.push(subSkillValue);
                        console.log(subSkillValue+','+subvalue['id']);
                        console.log(subTemp);
                        $scope.subSkillmodel.push($scope.subSkill[kisub]);
                      }  
                    }
                  }
                });
                 });
                  angular.forEach(value['skills'] , function(skillValue, kil) {
                    if(skillValue == val['id'] ) {
                      $scope.skillmodel.push($scope.skill[ki]); 
                    }
                  });
                });
              });
            });
          }
        });
    skillId = value['skills'];
    subSkills = value['sub_skill'];
    standard = value['standard'];
    angular.forEach(value['standard'] , function(val, ki) {
     $scope.standardmodel.push({'id' : val,'label': val });
    });
    standardType = value['standard_type'];
    angular.forEach(value['standard_type'] , function(val, ki) {
     $scope.standardTypemodel.push({'id' : val, 'label': val });
    });
    }
  });
}
$scope.deleteContent = function(data){
  var r = confirm("Are you sure want to delete content?");
  if (r == true) {
    teacherHttpService.delContent(data).success(function(response) {
      if (response.status == true) {
        var subSkillDetail = {};
        if((subSkills.length) > 0) {
          subSkillDetail= {
            uid : get_uid,
            subskills :subSkills,
          }
        }else{
          subSkillDetail= {
            uid : get_uid,
            subskills :$scope.tempsubskil,
          }
        }
        teacherHttpService.getUserContent(subSkillDetail).success(function(response) {
          if (response.status == true) {
            $scope.userContent = response.data;
            mlg = response.url;
          }else{
            $scope.msg = 'unable to find content.';
            $timeout(function () {$scope.msg = ""; }, 3000);
          }
        });
      }else{
//        alert(response.message);
      }
    });
  }
  
}
$scope.updateDetail = function(data){
  doc = $scope.doc;
  img = $scope.img;
  video = $scope.video;
  var content = '';
  var type = '';
  if(data.htmlcontent != ''){
    content = data.htmlcontent;
    type = 'text';
  }else if(typeof(doc) === 'string'){
    content = doc;
    type = 'doc';
  }else if(typeof(img) === 'string'){
    content = img;
    type = 'image';
  }else if(typeof(video) === 'string'){
    content = video;
    type = 'video';
  }
  lessonDetail = {
    id : $scope.updateId,
    lesson : data.lesson_name,
    title : data.text_title,
    pre_content : $scope.editValue,
    updated_content : content,
    type : type
  };
  teacherHttpService.updateContent(lessonDetail).success(function(response) {
    if(response.status == true){
      $scope.mesage = response.message;
      window.location.reload();
    }else{
      $scope.mesage = response.message;
    }
  }).error(function(error) {
    $scope.msg= 'Some technical error occured.';
    $timeout(function () {$scope.msg = ""; }, 3000);
  });
}
$scope.lessonPreview = function(data) {
  angular.forEach($scope.level,function(value,key){
    if(value['id'] == $scope.gradeSelected){
      $scope.pregrade = value['name'];
    }
  });
  angular.forEach($scope.subject,function(sub,key){
    if(sub['course_id'] == $scope.courseSelected) {
      $scope.subjectName = sub['course_name'];
    }
  });
  $scope.previewLesson = (data.lesson_name).toUpperCase();
  $scope.previewText = data.htmlcontent;
  $scope.previewImage = [];
  var preImage = '';
  $scope.preht = $location.protocol();
  $scope.preHst = $location.host();
  preImage = $scope.img;
  var temp_data = preImage.split(',');
  for(var i=0;i<temp_data.length;i++) {
    var temp = temp_data[i].split(': "');
    var temp_string = temp[1].split('"');
    $scope.previewImage.push(temp_string[0]);  
  }
}
var lUrl = $location.url();
if(typeof lUrl.split('?') != 'undefined') {
  var LId = lUrl.split('?');
}
if(typeof LId[1] != 'undefined') {  
  var cId =  LId[1].split('&F');
  subSkills.push(cId[1]);
  var subSkillDetail = {};
  subSkillDetail= {
    uid : get_uid,
    subskills :subSkills,
  } 
  teacherHttpService.getUserContent(subSkillDetail).success(function(response) {
    if (response.status == true) {
      $scope.userContent = response.data;
      $scope.setUserContent(cId[0]);
    }else{
      $scope.msg = 'unable to find content.';
      $timeout(function () {$scope.msg = ""; }, 3000);
    }
  });
}
}])
 .controller('teacherSubscriptionCtrl',['$rootScope','$scope','teacherHttpService','loginHttpService','$location','user_roles','commonActions','$routeParams','subscription_days',
 function($rootScope,$scope,teacherHttpService,loginHttpService,$location,user_roles,commonActions,$routeParams,subscription_days) {
    var get_uid = commonActions.getcookies(get_uid);
    $scope.teacher = {};
    $scope.days_left = 0;
    $scope.start_date = '';
    $scope.end_date = '';
    $scope.days_left = '';
    loginHttpService.getUserDetails(get_uid).success(function (response) {
      if (response.data.user_all_details != '') {
        $scope.teacher = response.data.user_all_details[0];
        $scope.start_date = moment($scope.teacher.created).format("DD MMM YYYY");
        $scope.end_date = moment($scope.teacher.subscription_end_date).format("DD MMM YYYY");
        var end_date = moment($scope.teacher.subscription_end_date).format("YYYY-MM-DD");
        $scope.days_left = moment(end_date).diff(moment(), 'days');
      }
    });

     $scope.number_of_students = 0;
     $scope.average_duration_in_hrs = 0;
     $scope.teacher_subscription_days = subscription_days['teacher'];
     teacherHttpService.timeSpentByClassOnPlatform({tid: get_uid}).success(function(response) {
        $scope.number_of_students = response.number_of_students;
        $scope.average_duration_in_hrs = response.average_duration_in_hrs;
     });

    $scope.requestQuote = function() {
      $location.url('/teacher/requestQuote');
    };

 }])
 .controller('teacherQuoteCntrl',['$rootScope','$scope','teacherHttpService','loginHttpService','$location','user_roles','commonActions','$routeParams',
 function($rootScope,$scope,teacherHttpService,loginHttpService,$location,user_roles,commonActions,$routeParams) {
    var get_uid = commonActions.getcookies(get_uid);
    if (get_uid == '') {
      alert('Kindly login');
       window.location.href='/mlg_ui/app/signin';
      return false;
    }

    $scope.frm = {};
    $scope.mobile = '';
    $scope.position = 'Teacher';
    $scope.msg = '';
    $scope.frm.first_name = $scope.frm.last_name = $scope.frm.email = '';
    loginHttpService.getUserDetails(get_uid).success(function (response) {
      if (response.data.user_all_details != '') {
        var teacher = response.data.user_all_details[0];
        $scope.frm.first_name = teacher.first_name;
        $scope.frm.last_name = teacher.last_name;
        $scope.frm.email = teacher.email;
      }
    });
    loginHttpService.getUserPreferences(get_uid).success(function (resp) {
      if (resp.status == true) {
        $scope.mobile = resp.data.mobile;
      }
    });

    teacherHttpService.gradeList().success(function(response) {
      $scope.grades = response.response.Grades;
    });

    //show courses on change on class/grade--call API to getCourseList for a level on change of grade
    $scope.changeCourseList = function(grade_id) {
      $scope.message='';
      teacherHttpService.getCourseByGrade(grade_id).success(function(courseslistresult) {
  	     if (!courseslistresult.response.courses){  // value is null, empty
            $scope.msg=courseslistresult.response.message;
            $scope.records=courseslistresult.response.course_list;
         } else {
           $scope.cousesListByGrade= courseslistresult.response.courses;
           $scope.msg=courseslistresult.response.message;
           $scope.courserecords=courseslistresult.response.course_list;
         }
      });
    };

    $scope.stcourses = {};
    // selected course
    $scope.onchangeSelectedcourse = function(selected_courses) {
      $scope.message='';
      var selected_cour=[];
      angular.forEach(selected_courses, function(value, key) {
        if (value) {
          selected_cour.push({id:key,name:value.split(',')[0],level_id:value.split(',')[1] });
        }
      });
      $scope.stcourses = selected_cour;
    };
    $scope.setQuotation = function(frm) {
      if (frm.first_name === '') {
        $scope.msg = 'first name cannot be empty';
        alert('first name cannot be empty');
        return false;
      }
      frm.selected_course_values = $scope.stcourses;
      var data = {};
      data.user_id = get_uid;
      data.first_name = frm.first_name;
      data.last_name = frm.last_name;
      data.email = frm.email;
      data.phone_number = frm.phone_number;
      data.quotation = frm;
      teacherHttpService.setQuotation(data).success(function(response) {
  	     if (response.status == true) {
           alert('Your data saved successfully');
           window.location.reload();
         } else {
           if (response.message != '') {
             $scope.msg = response.message;
           } else {
             alert('some error occured');
           }
         }
      });
      return false;
    };
 }])
 .directive('dropZone', function() {
  return function($scope, element, attrs) {    
    var video_extsn = ['video/ogg', 'video/mp4', 'video/3gp'];
    return element.dropzone({
      url: "/mlg/teachers/uploadfile",
      maxFilesize: 100,
      paramName: "uploadfile",
      maxThumbnailFilesize: 3,
      accept:function(file,done) {
        if (element.context.id == 'file-doc' && file.type == 'application/pdf') {
          done();
        }else if (element.context.id == 'file-img' && (file.type == 'image/jpeg' || file.type == 'image/png')) {
          done();
        }else if (element.context.id == 'file-video' && video_extsn.indexOf(file.type) != -1 && (file.type == 'video/.mp3' || file.type == 'video/.ogg')) {
          done();
        }else if (element.context.id == 'ans-img' && (file.type == 'image/jpeg' || file.type == 'image/png')) {
          done();
        }
        else if( (element.context.id == 'file-all') && (file.type == 'application/pdf' || file.type == 'image/jpeg' || file.type == 'video/*' || file.type == 'image/png') ){
          done();
        }

        else{
         this.removeFile(file);
         alert('please choose appropriate file');
       }
     },
     init: function() {
      var doc = '';
      var images = '';
      var videos = '';
      var count = 0;
      var extraImg = '';
      this.on("addedfile",function(file){
        if(element.context.id == 'ans-img' && $scope.ansCount == 4){
          alert('you can upload 4 images');
          this.removeFile(file);
        }  
      });
      this.on("success", function (file) {  
        if(file.type == 'application/pdf') {
          if (doc != '') {
            doc = doc +','+file.xhr.response;
            $scope.doc = doc;
          }else{
            doc = file.xhr.response;
            $scope.doc = doc;

          } 

          $scope.$emit('UploadedDocument', $scope.doc);              
        }else if( (element.context.id == 'file-img' || element.context.id == 'file-all')&& (file.type == 'image/jpeg' || file.type == 'image/png')) {
          if (images != '') {
            images = images +','+file.xhr.response;
            $scope.img = images;
          }else{
            images = file.xhr.response;
            $scope.img = images;
          }

          $scope.$emit('UploadedImage', $scope.img);             
        }else if(element.context.id == 'ans-img' && (file.type == 'image/jpeg' || file.type == 'image/png')) {;
          if($scope.ansCount < 4) {
            var i = 0;
            $scope.img = [];
            if (images != '') {
              images = images +','+file.xhr.response;
              var temp = images.split(',');
              var len = temp.length;
              var myElem = angular.element(document.querySelector('#answer-img ul '));
              myElem.remove();
              var myEleme = angular.element(document.querySelector('#answer-img  '));
              myEleme.append('<ul></ul>');
              if($scope.updatedImageId != undefined) {
                i = $scope.ansCount - len +2;
                angular.forEach(temp,function(val,ki){
                 var temp = val.split(': "');
                 var ansImg = temp[1].split('"');
                 if(ki == 0) {
                   $scope.img = ansImg[0];
                 }else{
                   $scope.img = $scope.img+','+ansImg[0];
                 }
                 var myLabel = angular.element(document.querySelector('#answer-img ul'));
                 myLabel.append('<li><input type="checkbox" id="inlineRadio1" value="'+i+'" name="IMAGESS" ><img src="http://localhost/mlg/webroot/upload/'+ ansImg[0]+'"alt="opps" width="50px" height="50px" /></li>');
                 i++;
               }); 
              }else{
                angular.forEach(temp,function(val,ki){
                 var temp = val.split(': "');
                 var ansImg = temp[1].split('"');
                 if(ki == 0) {
                   $scope.img = ansImg[0];
                 }else{
                   $scope.img = $scope.img+','+ansImg[0];
                 }
                 var myLabel = angular.element(document.querySelector('#answer-img ul'));
                 myLabel.append('<li><input type="checkbox" id="inlineRadio1" value="'+i+'" name="IMAGESS" ><img src="http://localhost/mlg/webroot/upload/'+ ansImg[0]+'"alt="opps" width="50px" height="50px" /></li>');
                 i++; 
               }); 
              }
              count++;
              ($scope.ansCount)++;
            }else{
              images = file.xhr.response;
              var temp = images.split(': "');
              var ansImg = temp[1].split('"');
              var value = $scope.ansCount+1;
              $scope.img = ansImg[0];
//              var myLabel = angular.element(document.querySelector('#answer-img ul'));
//              myLabel.append('<li><input type="radio" id="inlineRadio1" value="0" name="IMAGESS" ><img src="http://localhost/mlg/webroot/upload/'+ ansImg[0]+'"alt="opps" width="50px" height="50px" /></li>');
              if($scope.updatedImageId != undefined) {
                 var myLabel = angular.element(document.querySelector('#answer-img ul'));
                myLabel.append('<li><input type="checkbox" id="inlineRadio1" value="'+value+'" name="IMAGESS" ><img src="http://localhost/mlg/webroot/upload/'+ ansImg[0]+'"alt="opps" width="50px" height="50px" /></li>');
            
                }else{
                var myLabel = angular.element(document.querySelector('#answer-img ul'));
                myLabel.append('<li><input type="checkbox" id="inlineRadio1" value="0" name="IMAGESS" ><img src="http://localhost/mlg/webroot/upload/'+ ansImg[0]+'"alt="opps" width="50px" height="50px" /></li>');
                }
              count++;
              ($scope.ansCount)++;
            } 
          }else{
            this.removeFile(file);
            var temp = (file.xhr.response).split(': "');
            count++;
            alert('YOU can upload only 4 images.');
          }
        }else if(video_extsn.indexOf(file.type) != -1 && file.type == 'video/.mp3') {
          if (videos != '') {
            videos = videos +','+file.xhr.response;
            $scope.video = videos;
          }else{
            videos = file.xhr.response;
            $scope.video = videos;
          } 
        }      
      });

}      
}); 
}   
})
.controller("tableRow", function ($scope) {
	$scope.people = [
	//{id:'2', Fname:'naseem', Lname: 'akhtar', email: 'naseem@incaendo.com', Uname:'Naseem', pass:'naseem@123'}
	];
	
  $scope.addPerson = function(){
   var person = {
    id: $scope.id,
    Fname: $scope.Fname,
    Lname: $scope.Lname,
    email: $scope.email,
    Uname: $scope.Uname,
    pass: $scope.pass,
  };

  $scope.people.push(person);
};
$scope.removePerson = function(index){
  $scope.people.splice(index, 1);
};

})

.controller("studentProgress", function ($scope) {
	$scope.labels = ["Conquered", "Practiced", "Not Attacked"];
	$scope.data = [5, 20, 75];
	
	$scope.colors = ['#f1c40f', '#2ecc71', '#e8e8e8'];
	$scope.datasetOverride = [
  {
    label: 'Bar chart',
    borderWidth: 1,
    type: 'bar'
  }
  ];
  $scope.options = {
    animation: {
      duration: 1000
    },
    legend: {
      display: true,
      position: 'right',
      labels: {
       fontColor: '#333',
       fontSize: 14,
       boxWidth: 15,

     },
   },

   tooltips: {
     callbacks: {
      label: function(tooltipItem, data) {
       var allData = data.datasets[tooltipItem.datasetIndex].data;
       var tooltipLabel = data.labels[tooltipItem.index];
       var tooltipData = allData[tooltipItem.index];
       var total = 0;
       for (var i in allData) {
        total += allData[i];
      }
      var tooltipPercentage = Math.round((tooltipData / total) * 100);
      return tooltipLabel + ': ' + tooltipData + '%';
					//return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
				}
			}
		}

  };


})

.controller("GradeAnalysis", function ($scope) {
  $scope.labels = ["Prime or composite", "Prime factorization", "Multiplicative inverses", "Divisibility rules", "Greatest common factor", "Least common factor", "GCF and LCM word problem", "Scientific nation"];
  $scope.series = ['Recommended progress', 'Average score', 'Andrew score'];
  $scope.data = [
  [50, 62, 80, 60, 40, 55, 48, 48],
  [60, 72, 90, 68, 60, 68, 58, 58],
  [70, 88, 100, 90, 82, 89, 72, 70]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.colors = ['#b0baaf', '#f39c12', '#00a651'];
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
  
  $scope.options = {
    scales: {
      yAxes: [
      {
        id: 'y-axis-1',
        type: 'linear',
        display: true,
        position: 'left'
      },
      ],

      labels: [
      {
       fontColor: '#fa4229'
     }
     ]
   },

   legend: {
    display: true,
    position: 'top',
    labels: {
     fontColor: '#333',
     fontSize: 14,
     boxWidth: 15
   },
 },
 title: {
  display: true,
  text: 'SCORE POINTS',
  fontColor: '#333',
  position: 'left',
  fontSize: 16
}
};
})


.controller("subjectPerformance", function ($scope) {
	$scope.labels = ["Above Average", "Below Average"];
	$scope.data = [30, 70];
	$scope.colors = ['#15a38c', '#fa4229',];
	
	$scope.options = {
    animation: {
      duration: 1000
    },
    legend: {
      display: true,
      position: 'right',
      labels: {
       fontColor: '#333',
       fontSize: 14,
       boxWidth: 15
     },
   },



   tooltips: {
     callbacks: {
      label: function(tooltipItem, data) {
       var allData = data.datasets[tooltipItem.datasetIndex].data;
       var tooltipLabel = data.labels[tooltipItem.index];
       var tooltipData = allData[tooltipItem.index];
       var total = 0;
       for (var i in allData) {
        total += allData[i];
      }
      var tooltipPercentage = Math.round((tooltipData / total) * 100);
      return tooltipLabel + ': ' + tooltipData + '%';
					//return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
				}
			}
		}

  };

})
.controller('teacherAddQuestionCtrl',['$rootScope','$scope','teacherHttpService','loginHttpService','$location','user_roles','commonActions','$routeParams','$compile','mlg_points','urlParams','$timeout',
  function($rootScope,$scope,teacherHttpService,loginHttpService,$location,user_roles,commonActions,$routeParams,$compile,mlg_points,urlParams,$timeout) {
    var get_uid=commonActions.getcookies(get_uid);
    var grade = '';
    var standard = [];
    var standardType = [];
    var course = '-1';
    var skills = '';
    var parentId = '';
    var skillId = [];
    var skillName = '';
    var subSkills = [];
    var tempStatus = 0;
    var subStatus = 0;
    var difficulity = '';
    var qType = [];
    var claim = '';
    var dok = '';
    var difficulityName = '';
    var  templateId = '';
    var questionId = '';
    $scope.frm = {};
    $scope.doc = {};
    $scope.temp = {};
    $scope.skillmodel = [];
    $scope.subSkillmodel = [];
    $scope.skill = [];
    $scope.subSkill = [];
    $scope.selectedTemplateModel = [];
    $scope.templateOptionModel = [];
    $scope.template = [];
    $scope.templateDetail = [];
    $scope.questionTypeModel = [];
    $scope.questionType = [];
    $scope.ansCount = 0;
    $scope.show = 'false';
    $scope.option = '';
    $scope.mlgUrl = urlParams.baseURL;
    // template detail show
    teacherHttpService.getTemplateDetail(get_uid,'question').success(function(response) {
      if (response.status == true) {
        var temp = response.data;
        $scope.templateDetail = response.data;
        $scope.template = temp;
        $scope.template.splice(0,0,{'id' :'','template_name' :'---Select template---'});
        $scope.selectedTemplateModel = $scope.template[0][0];
      }
    });
    
    teacherHttpService.getTeacherGrades(get_uid,user_roles['teacher']).success(function(response) {
      if (response.status == true) {
        $scope.level = response.grade;
      }else{
        $scope.msg = 'unable to find class';
        $timeout(function () {$scope.msg = ""; }, 3000);
      }
    });	
    // on the basis of grade fetch the coursr list.
    $scope.getGradeVal = function(){
      if($scope.gradeSelected != '---Select Grade---') {
        console.log(subStatus);
        if(subStatus == 0) {
          var mynewcourses = angular.element(document.querySelector('#courseselect select option'));
          mynewcourses.remove();
        }
        grade = $scope.gradeSelected;
        teacherHttpService.getTeacherDetailsForContent(get_uid,grade,-1,user_roles['teacher']).success(function(response) {
          $scope.subjects = response.response;
          $scope.subjects.splice(0,0,{'level_id' :'','course_id' :'','course_name' :'---Select Course---'});
          $scope.courseSelected = $scope.subjects[0][0];
          subStatus = 1;
        }).error(function(error) {
          $scope.msg= 'Some technical error occured.';
          $timeout(function () {$scope.msg = ""; }, 3000);
        });
      }  
    }
    // on the basis of courseid fetch skill
    $scope.getCourseVal = function(data){
      if(data != null) {
       course = $scope.courseSelected;
       $scope.subSkill = [];
       $scope.skill = [];
       teacherHttpService.getAllCourseList(course,'lesson','-1',get_uid).success(function(response) {
        var data = response.response.course_details;
        angular.forEach(data, function(value, key) {
          $scope.skill.push({
            'id' : value['course_id'],
            'label': value['name']
          });
        });
        console.log($scope.skill);
      }).error(function(error) {
        $scope.msg= 'Some technical error occured.';
        $timeout(function () {$scope.msg = ""; }, 3000);
      });
    }  
  }
  $scope.skillEvents = {
    onItemSelect: function(item) {
//                var string = item['id'];
//                skills = string.split('+');
parentId = item['id'];
//                skillName = skills[1];
skillId.push(parentId);
teacherHttpService.getAllCourseList(parentId,'lesson','-1',get_uid).success(function(response) {
  angular.forEach(response.response.course_details, function(value, key) {
    $scope.subSkill.push({
      'id' : value['course_id'],
      'label': value['name']
    });
  });
}).error(function(error) {
 $scope.msg= 'Some technical error occured.';
 $timeout(function () {$scope.msg = ""; }, 3000);
});  
},
onItemDeselect: function(item) {
  var Id = item['id'];
  angular.forEach(skillId,function(value, key) {
    if (value == Id) {
     skillId.splice(key);
     teacherHttpService.getAllCourseList(Id,'lesson','-1',get_uid).success(function(response) {
      angular.forEach(response.response.course_details, function(value, key) {
        angular.forEach($scope.subSkill, function(val, ki) {
          if(value['course_id'] == val['id']) {
            $scope.subSkill.splice(ki,1); 
          } 
        });  
      });
    }).error(function(error) {
     $scope.msg= 'Some technical error occured.';
     $timeout(function () {$scope.msg = ""; }, 3000);
   });
  }
});
}
};
$scope.subSkillEvents = {
  onItemSelect: function(item) {   
    if(item != '') {
      subSkills.push(item['id']);
    }
  },
  onItemDeselect: function(item) {
    angular.forEach(subSkills,function(value, key) {
      if (value == item['id']) {
       subSkills.splice(key);
     }
     console.log(subSkills);
   });
  }
};
      //standard
      $scope.standardmodel = [];
      $scope.standard = [
      {id:"Alabama", label: "Alabama"},
      {id:"Alaska", label: "Alaska"},
      {id:"Arizona", label: "Arizona"},
      {id:"Arkansas", label: "Arkansas"},
      {id:"California", label: "California"},
      {id:"Colorado", label: "Colorado"},
      {id:"Connecticut", label: "Connecticut"},
      {id:"D.C.", label: "D.C."},
      {id:"Massachusetts", label: "Massachusetts"},
      ];
      $scope.standardEvents = {
        onItemSelect: function(item) {   
          if(item != '') {
            standard.push(item['id']);
          }
        },
        onItemDeselect: function(item) {
          standard.splice(item['id'],1);
        }
      };
      //standard type
      $scope.standardTypemodel = [];
      $scope.standardType = [
      {id:"Alabama", label: "Alabama"},
      {id:"Alaska", label: "Alaska"},
      {id:"Arizona", label: "Arizona"},
      {id:"Arkansas", label: "Arkansas"},
      {id:"California", label: "California"},
      {id:"Colorado", label: "Colorado"},
      {id:"Connecticut", label: "Connecticut"},
      {id:"D.C.", label: "D.C."},
      {id:"Massachusetts", label: "Massachusetts"},
      ];
      $scope.standardTypeEvents = {
        onItemSelect: function(item) {   
          standardType.push(item['id']);
        },
        onItemDeselect: function(item) {
          standardType.splice(item['id'],1);
        }
      };
      //claim
      $scope.getClaimVal = function() {
        claim = $scope.claimModel;
      }
      //Depth Of Knowledge
      $scope.getDOKValue = function() {
        dok = $scope.dOKModel;
      }
      //difficulty
      teacherHttpService.getDifficultyLevel().success(function(response) {
        if(response.status == true){
          $scope.difficulty = response.data;
          $scope.difficulty.splice(0,0,{'id' :'','name' :'--Difficulity Level--'});
          $scope.diffulityModel = $scope.difficulty[0][0]; 
        }
      });
      $scope.getDifficulityVal = function(){
        difficulity = $scope.diffulityModel;
        angular.forEach($scope.difficulty,function(diffValue,diffKey){
          if(diffValue['id'] == $scope.diffulityModel){
            difficulityName = diffValue['name'];
          }
        });
      };
    //Question type 
    teacherHttpService.questionType().success(function(response) {
      if(response.status == true){
        angular.forEach(response.data,function(type,key){
          $scope.questionType.push({
            'id' : type['name'],
            'label' : type['lable']
          });
        });
      }
    }).error(function(error) {
     $scope.msg = 'unable to fetch question type';
     $timeout(function () {$scope.msg = ""; }, 3000);
   });
//    $scope.quesTypeEvents = {
//     onItemSelect: function(item) {   
//      qType.push(item['id']);
//    },
//    onItemDeselect: function(item) {
//      qType.splice(item['id'],1);
//    }
//  }; 
  $scope.quesTypeEvents = function(data){
    qType = data;
  }
  var question = {};
  $scope.submitQuestion = function(data) {
    var answerList = '';
    var optionChecked = '';
    var Qtyp = '';
    var gradeName = '';
    var courseName = '';
    var pointType = '';
    if(typeof(data.ans1) == 'undefined'&& typeof(data.ans2) == 'undefined'&&
            typeof(data.ans3) == 'undefined' && typeof(data.ans4) == 'undefined'
            &&typeof($scope.img) == 'undefined') {
      $scope.msg = "Please provide options first";
      $timeout(function () {$scope.msg = ""; }, 3000);
    }else if(typeof(data.ans1) == 'undefined'&& typeof(data.ans2) == 'undefined'&&
            typeof(data.ans3) == 'undefined' && typeof(data.ans4) == 'undefined'
            && typeof($scope.img) != 'undefined'){
      answerList = $scope.img;
      Qtyp = 'image'
      pointType = mlg_points['question_type_image'];
      var radios = document.getElementsByName('IMAGESS');
      for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
          var optionChecked = radios[i].value;
          break;
        }
      }
    }else if ((typeof(data.ans1) == 'undefined' && typeof(data.ans2) == 'undefined')) {
        $scope.msg = "Atleast 2 answers are given.)";
        $timeout(function () {$scope.msg = ""; }, 3000);
    }else {
      if(typeof(data.ans1) != 'undefined'&& typeof(data.ans2) != 'undefined'&& 
              typeof(data.ans3) != 'undefined'&& typeof(data.ans4) == 'undefined') {
        answerList = data.ans1+','+data.ans2+','+data.ans3;
      }else if(typeof(data.ans1) != 'undefined'&& typeof(data.ans2) != 'undefined'
              &&typeof(data.ans3) == 'undefined'&& typeof(data.ans4) != 'undefined') {
        answerList = data.ans1+','+data.ans2+','+data.ans4;
      }else if(typeof(data.ans1) != 'undefined'&& typeof(data.ans2) != 'undefined'
              &&typeof(data.ans3) != 'undefined'&& typeof(data.ans4) != 'undefined') {
        answerList = data.ans1+','+data.ans2+','+data.ans3+','+data.ans4;
      }else if(typeof(data.ans1) != 'undefined'&& typeof(data.ans2) != 'undefined'
              &&typeof(data.ans3) == 'undefined'&& typeof(data.ans4) == 'undefined') {
        answerList = data.ans1+','+data.ans2;
      }else if(typeof(data.ans1) == 'undefined'&& typeof(data.ans2) == 'undefined'
              &&typeof(data.ans3) != 'undefined'&& typeof(data.ans4) != 'undefined') {
        answerList = data.ans3+','+data.ans4;
      }else if(typeof(data.ans1) != 'undefined'&& typeof(data.ans2) == 'undefined'
              &&typeof(data.ans3) != 'undefined'&& typeof(data.ans4) != 'undefined') {
        answerList = data.ans1+','+data.ans3+','+data.ans4;
      }else if(typeof(data.ans1) == 'undefined'&& typeof(data.ans2) != 'undefined'
              &&typeof(data.ans3) != 'undefined'&& typeof(data.ans4) != 'undefined') {
        answerList = data.ans2+','+data.ans3+','+data.ans4;
      }
      Qtyp = 'text';
      pointType = mlg_points['question_type_text'];
      optionChecked = $scope.ansChecked;
    }
    angular.forEach($scope.level,function(gradeValue,gradeKey){
      if(gradeValue['id'] == grade){
        gradeName = gradeValue['name'];
      }
    });
    angular.forEach($scope.subjects,function(courValue,courKey){
      if(courValue['course_id'] == $scope.courseSelected) {
        courseName = courValue['course_name'];
      }
    });
    question = {
      tid : get_uid,
      grade : grade,
      grade_name : gradeName,
      course : course,
      course_name : courseName,
      standard : standard,
      skills : skillId,
      sub_skill : subSkills,
      ques_diff : difficulity,
      ques_diff_name : difficulityName,
      ques_type : qType,
      ques_complexity :data.complexity,
      ques_passage : data.passage,
      ques_target : data.target,
      task : data.task,
      claim : claim,
      scope : data.rScope,
      dok : dok,
      assignment : data.assignment,
      question : data.questionStatement,
      answer : answerList,
      correctanswer : optionChecked,
      type : Qtyp,
      point_type : pointType,
    };
    if(templateId != ''){
      question.template_id = templateId;
    }
    teacherHttpService.uploadQuestion(question).success(function(response){
      $scope.msg = '';
      $scope.message = '';
      if(response.status == true){
        questionId = response.question_id;
        $scope.frm.questionStatement = '';
        if(Qtyp == 'text') {
          $scope.frm.ans1=$scope.frm.ans2=$scope.frm.ans3=$scope.frm.ans4 = '';
        }
        if(Qtyp == 'image') {
          $scope.video = '';
          $("#ans-imag form").html("");
          $scope.ansCount = 0;
          $scope.img = '';
          var myElem = angular.element(document.querySelector('#answer-img ul '));
         myElem.remove();
        }
        if(templateId == ''){
          $('#modal-saveTemplateAs').modal({backdrop: 'static', keyboard: false}); 
        }
        $scope.msg = response.message;
        $timeout(function () {$scope.msg = ""; }, 3000);
     }else{
       $scope.message = response.message;
       $timeout(function () {$scope.message = "";}, 3000);
       
     } 
   }).error(function(error){
     $scope.message = 'Some technical error occurred';
     $timeout(function () {$scope.message = "";}, 3000);
   });
 }
 $scope.submitTemplate = function(data){
  question.temp_name = data.template_name;
  question.cont_type = 'question';
  question.last_question_id = questionId;
  question.template_status = 1;
  teacherHttpService.setTemplateDetail(question).success(function(response) {
    if(response.status == true){
      templateId = response.template_id;
      var myRem = angular.element(document.querySelector('#save-question button'));
      myRem.remove(); 
      var myEleme = angular.element(document.querySelector('#save-question'));
      myEleme.append($compile('<button type="button" class="btn btn-outline btn-default margin-right-10 margin-xs-top-10" data-toggle="modal" ng-click="submitQuestion(frm)"><i class="icon icon-plus-outline margin-right-5"></i> SAVE QUESTION</button>')($scope));  
    }else{
      console.log(response.message);
      $scope.message = response.message;
      $timeout(function () {$scope.message = "";}, 3000);
    }
  }).error(function(error) {
    $scope.msg= 'Some technical error occured.';
  });
}
$scope.closeTemplate = function(){
  question.temp_name = Date.now()+'_'+get_uid;
  question.cont_type = 'question';
  question.last_question_id = questionId;
  question.template_status = 0;
  teacherHttpService.setTemplateDetail(question).success(function(response) {
    if(response.status == true){
      templateId = response.template_id;
      var myRem = angular.element(document.querySelector('#save-question button'));
      myRem.remove(); 
      var myEleme = angular.element(document.querySelector('#save-question'));
      myEleme.append($compile('<button type="button" class="btn btn-outline btn-default margin-right-10 margin-xs-top-10" data-toggle="modal" ng-click="submitQuestion(frm)"><i class="icon icon-plus-outline margin-right-5"></i> SAVE QUESTION</button>')($scope));  
    }else{
      $scope.message = response.message;
      $timeout(function () {$scope.message = "";}, 3000);
    }
  }).error(function(error) {
    $scope.msg= 'Some technical error occured.';
    $timeout(function () {$scope.msg = "";}, 3000);
  });
}
    //set template value
    $scope.getTemplate = function(data) {
      var subTemp = [];
      var subTempCount = 0;
      tempStatus = 1;
      var tempId = $scope.selectedTemplateModel;
      templateId = $scope.selectedTemplateModel;
      console.log(templateId);
      $scope.skill=[];
      $scope.subSkill=[];
      $scope.skillmodel = [];
      $scope.subSkillmodel = [];
      $scope.standardmodel = [];
      $scope.standardTypemodel = [];
      var myRem = angular.element(document.querySelector('#save-question button'));
      myRem.remove(); 
      var myEleme = angular.element(document.querySelector('#save-question'));
      myEleme.append($compile('<button type="button" class="btn btn-outline btn-default margin-right-10 margin-xs-top-10" data-toggle="modal" ng-click="submitQuestion(frm)"><i class="icon icon-plus-outline margin-right-5"></i> SAVE QUESTION</button>')($scope));  
      //grade in template
      angular.forEach($scope.template , function(value, key) {
        if(tempId == value['id']) {
        //for grade
        angular.forEach($scope.level , function(vall, kil) {
          if(value['grade']== vall['id']){
             //grade in template
             $scope.gradeSelected = vall['id'];
             grade = vall['id'];
            //for subject in template
            teacherHttpService.getTeacherDetailsForContent(get_uid,grade,value['course_id'],user_roles['teacher']).success(function(response) {
              $scope.subjects = [];
              angular.forEach(response.response  , function(val, ki) {
                $scope.subjects.push({
                  'course_id': val['id'],
                  'course_name':val['course_name'],
                });
              });   
              $scope.courseSelected = $scope.subjects[0]['course_id'];
              course = $scope.subjects[0]['course_id'];
            });
            teacherHttpService.getAllCourseList(value['course_id'],'lesson','-1',get_uid).success(function(response) {
              var data = response.response.course_details;   
              angular.forEach(data, function(skil, key) {
                $scope.skill.push({
                  'id' : skil['course_id'],
                  'label': skil['name']
                });
              });
              //for selected skill.
              angular.forEach($scope.skill , function(val, ki) { 
                teacherHttpService.getAllCourseList(val['id'],'lesson','-1',get_uid).success(function(response) {
                  angular.forEach(response.response.course_details, function(subskil, key) {
                    $scope.subSkill.push({
                      'id' : subskil['course_id'],
                      'label': subskil['name']
                    });
                  });
                  angular.forEach($scope.subSkill , function(subvalue, kisub) {
                   angular.forEach(value['sub_skill'] , function(subSkillValue, kil) {
                    if(subTempCount == 0) {
                     if(subSkillValue == subvalue['id'] ) {
                      subTemp.push(subSkillValue);
                      $scope.subSkillmodel.push($scope.subSkill[kisub]);
                      subTempCount++;
                    }
                  }else{
                    if(subSkillValue == subvalue['id']) {
                      if(subTemp.indexOf(subSkillValue) <0){
                        subTemp.push(subSkillValue);
                        console.log(subSkillValue+','+subvalue['id']);
                        console.log(subTemp);
                        $scope.subSkillmodel.push($scope.subSkill[kisub]);
                      }  
                    }
                  }
                });
                 });
                  angular.forEach(value['skills'] , function(skillValue, kil) {
                    if(skillValue == val['id'] ) {
                      $scope.skillmodel.push($scope.skill[ki]); 
                    }
                  });
                });
});
});
}
});
skillId = value['skills'];
subSkills = value['sub_skill'];
standard = value['standard'];
angular.forEach(value['standard'] , function(val, ki) {
 $scope.standardmodel.push({'id' : val,'label': val });
});
//      standardType = value['standard_type'];
//      angular.forEach(value['standard_type'] , function(val, ki) {
//      $scope.standardTypemodel.push({'id' : val, 'label': val });
//      })
$scope.diffulityModel = value['ques_diff'];
angular.forEach($scope.difficulty,function(diffValue,diffKey){
  if(diffValue['id'] == $scope.diffulityModel){
    difficulityName = diffValue['name'];
  }
});
difficulity = value['ques_diff'];
$scope.claimModel = value['claim'];
claim = value['claim'];
$scope.frm.rScope = value['scope'];
$scope.dOKModel = value['dok'];
dok = value['dok'];
console.log(value['ques_passage']);
$scope.frm.passage = value['ques_passage'];
$scope.frm.target = value['ques_target'];
$scope.frm.task = value['task'];
$scope.frm.complexity = value['ques_complexity'];
$scope.frm.assignment = value['assignment'];
qType = value['ques_type'];
angular.forEach(value['ques_type'],function(type,key){
  angular.forEach($scope.questionType,function(qlist,key){
    if(type == qlist['id']){
//      $scope.questionTypeModel.push({'id':qlist['id'], 'label':qlist['lable']});
        $scope.questionTypeModel = qlist['id'];
    }
  });
});
}
});
}
$scope.lessonPreview = function(data) {
  angular.forEach($scope.level,function(value,key){
    if(value['id'] == $scope.gradeSelected){
      $scope.pregrade = value['name'];
    }
  });
  angular.forEach($scope.subjects,function(sub,key){
    if(sub['course_id'] == $scope.courseSelected) {
      $scope.subjectName = sub['course_name'];
    }
  });
  angular.forEach($scope.skill,function(sub,key){
    if(sub['id'] == $scope.skillmodel[0]['id']) {
      $scope.preskil = sub['label']
    }
  });

}   

$scope.addTxtAns=function(){
  $("#addTextAns").click(function(){
   $(".text-answer-block").addClass("show");
   $(this).hide();
   $(this).parent().siblings("li").fadeOut();
 });					
},

$scope.addImgAns=function(){

  $("#addImgAns").click(function(){
   $(".img-answer-block").addClass("show");
   $(this).hide();
   $(this).parent().siblings("li").fadeOut();

   var owl = $(".img-ans-owl-carousel");
   owl.owlCarousel({
    margin: 20,
    nav: false,
    loop: false,
    responsive: {
     1000: {
      items: 6
    }
  }
});
 });					
}
  //edit questions
  var qUrl = $location.url();
  var QId = qUrl.split('?');
  var grd = '';
  teacherHttpService.getEditQuestion(get_uid,QId[1]).success(function(response) {
    if(response.status == true) {
      var myRem = angular.element(document.querySelector('#save-question button'));
      myRem.remove(); 
      var myEleme = angular.element(document.querySelector('#save-question'));
      myEleme.append($compile('<button type="button" class="btn btn-outline btn-default margin-right-10 margin-xs-top-10" data-toggle="modal" ng-click="updateQuestion(frm)"><i class="icon icon-plus-outline margin-right-5"></i> UPDATE QUESTION</button>')($scope));  
        //grade in template
        angular.forEach(response.question,function(value , key){
          $scope.gradeSelected = value['grade_id'].toString();
          grade = value['grade_id'].toString();
          $scope.diffulityModel = value['difficulty_level_id'].toString();
          difficulity = value['difficulty_level_id'];
          angular.forEach($scope.difficulty,function(diffValue,diffKey){
            if(diffValue['id'] == difficulity){
              difficulityName = diffValue['name'];
            }
          });
          $scope.standardmodel.push({'id' : value['standard'],'label': value['standard'] });
          standard = value['standard'];
          $scope.questionTypeModel = value['type'].toString();
//          $scope.questionTypeModel.push({'id' : value['type']});
          qType = value['type'];
          $scope.frm.questionStatement = value['questionName'];
        //answer listing
         var i = 0;
        if(response.ques_type == 'image') {
          $('.img-answer-block').show();
          $('#answer-type').hide();
          angular.forEach(response.option,function(opt,ki){
            i = ki+1;
            var myLabel = angular.element(document.querySelector('#edit-answer-img ul'));
            angular.forEach(response.answer,function(ans,anski){
              var optin = opt['options'].split('/');
              if(ki == 0) {
               $scope.option =  optin['1']; 
              }else{
               $scope.option = $scope.option +','+optin['1'];
              }
              if(ans['answers'] == optin['1']){
                myLabel.append($compile('<li><input type="checkbox" id="inlineRadio1" value="'+i+'" name="EDIT-IMAGESS" checked="">\n\
                <img src="'+urlParams.baseURL+'/webroot/'+opt['options'] +'"alt="opps" width="50px" height="50px"/> \n\
                <a ng-click="deleteImage('+i+','+opt['id']+')"><i class="glyphicon glyphicon-remove-circle"></i></a>\n\
               </li>')($scope));
              }else{
                myLabel.append($compile('<li><input type="checkbox" id="inlineRadio1" value="'+i+'" name="EDIT-IMAGESS">\n\
                  <img src="'+urlParams.baseURL+'/webroot/'+opt['options'] +'"alt="opps" width="50px" height="50px"/>\n\
                  <a ng-click="deleteImage('+i+','+opt['id']+')"><i class="glyphicon glyphicon-remove-circle"></i></a></li>')($scope));
              }
            });
          });
          $scope.ansCount = i;
        }else{
          $('.text-answer-block').show();
          $('#answer-type').hide();
          angular.forEach(response.option,function(opt,ki){
            var i = ki+1;
            if(i== 1) {
             $scope.frm.ans1 = opt['options'];
           }else if(i == 2){
            $scope.frm.ans2 = opt['options'];
          }else if(i == 3){
            $scope.frm.ans3 = opt['options'];
          }else if(i == 4){
            $scope.frm.ans4 = opt['options'];
          }
          angular.forEach(response.answer,function(ans,anski){
            if(ans['answers'] == opt['options']){
              $scope.ansChecked = i;
            }
          });
        });
        }
      });
$scope.subjects = [];
angular.forEach(response.subject, function(val, ki) {
  $scope.subjects.push({
    'course_id': val['id'],
    'course_name':val['course_name'],
  });
});
$scope.courseSelected = ($scope.subjects[0]['course_id']).toString();
course = $scope.subjects[0]['course_id'];
angular.forEach(response.skill, function(skil, key) {
  $scope.skill.push({
    'id' : skil['course_id'],
    'label': skil['name']
  });
  $scope.skillmodel.push({'id' : skil['course_id']});
  skillId = skil['course_id'];
});
teacherHttpService.getAllCourseList(skillId,'lesson','-1',get_uid).success(function(response) {
  angular.forEach(response.response.course_details, function(value, key) {
    $scope.subSkill.push({
      'id' : value['course_id'],
      'label': value['name']
    });
    });
  }); 
  angular.forEach(response.sub_skill, function(subskil, key) {
  //  $scope.subSkill.push({
  //    'id' : subskil['course_id'],
  //    'label': subskil['name']
  //  });
  $scope.subSkillmodel.push({'id' : subskil['course_id']});
  subSkills.push(subskil['course_id']);
  });
  angular.forEach(response.template, function(temp, ki) {
   $scope.claimModel = temp['claim'];
   $scope.dOKModel = temp['depth_of_knowledge'];
   $scope.frm.rScope = temp['scope'];
   $scope.frm.assignment = temp['assignment'];
   $scope.frm.passage = temp['passage'];
   $scope.frm.target = temp['secondary_target'];
   $scope.frm.task = temp['task_noties'];
   $scope.frm.complexity = temp['text_compexity'];
  }); 
}
});
$scope.updateQuestion = function(data) {
  var answerList = '';
  var optionChecked = '';
  var opt = '';
  var Qtyp = '';
  var gradeName = '';
  var courseName = '';
  var pointType = '';
//  if(typeof(data.ans1) == 'undefined'){
//    answerList = $scope.img;
//    Qtyp = 'image'
//    pointType = mlg_points['question_type_image'];
//    var radios = document.getElementsByName('IMAGESS');
//    for (var i = 0, length = radios.length; i < length; i++) {
//      if (radios[i].checked) {
//        var optionChecked = radios[i].value;
//        break;
//      }
//    }
//  }else{
//    answerList = data.ans1+','+data.ans2+','+data.ans3+','+data.ans4;
//    Qtyp = 'text';
//    pointType = mlg_points['question_type_text'];
//    optionChecked = $scope.ansChecked;
//  }
    if(typeof(data.ans1) == 'undefined'&& typeof(data.ans2) == 'undefined'&&
            typeof(data.ans3) == 'undefined' && typeof(data.ans4) == 'undefined'
            &&typeof($scope.img) == 'undefined') {
      $scope.msg = "Please provide options first";
      $timeout(function () {$scope.msg = ""; }, 3000);
    }else if(typeof(data.ans1) == 'undefined'&& typeof(data.ans2) == 'undefined'&&
            typeof(data.ans3) == 'undefined' && typeof(data.ans4) == 'undefined'
            && typeof($scope.img) != 'undefined'){
      answerList = $scope.option+':'+$scope.img;
      Qtyp = 'image'
      pointType = mlg_points['question_type_image'];
      var radios = document.getElementsByName('IMAGESS');
      for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
          optionChecked = radios[i].value;
          opt = 'image';
          break;
        }
      }
      var radi = document.getElementsByName('EDIT-IMAGESS');
      for (var i = 0, length = radi.length; i < length; i++) {
        if (radi[i].checked) {
          optionChecked = radi[i].value;
          opt = 'edit';
          break;
        }
      }
    }else if ((typeof(data.ans1) == 'undefined' && typeof(data.ans2) == 'undefined')) {
        $scope.msg = "Atleast 2 answers are given.)";
        $timeout(function () {$scope.msg = ""; }, 3000);
    }else {
      Qtyp = 'text';
      optionChecked = $scope.ansChecked;
      if(typeof(data.ans1) != 'undefined'&& typeof(data.ans2) != 'undefined'&& 
              typeof(data.ans3) != 'undefined'&& typeof(data.ans4) == 'undefined') {
        answerList = data.ans1+','+data.ans2+','+data.ans3;
      }else if(typeof(data.ans1) != 'undefined'&& typeof(data.ans2) != 'undefined'
              &&typeof(data.ans3) == 'undefined'&& typeof(data.ans4) != 'undefined') {
        answerList = data.ans1+','+data.ans2+','+data.ans4;
      }else if(typeof(data.ans1) != 'undefined'&& typeof(data.ans2) != 'undefined'
              &&typeof(data.ans3) != 'undefined'&& typeof(data.ans4) != 'undefined') {
        answerList = data.ans1+','+data.ans2+','+data.ans3+','+data.ans4;
      }else if(typeof(data.ans1) != 'undefined'&& typeof(data.ans2) != 'undefined'
              &&typeof(data.ans3) == 'undefined'&& typeof(data.ans4) == 'undefined') {
        answerList = data.ans1+','+data.ans2;
      }else if(typeof(data.ans1) == 'undefined'&& typeof(data.ans2) == 'undefined'
              &&typeof(data.ans3) != 'undefined'&& typeof(data.ans4) != 'undefined') {
        answerList = data.ans3+','+data.ans4;
      }else if(typeof(data.ans1) != 'undefined'&& typeof(data.ans2) == 'undefined'
              &&typeof(data.ans3) != 'undefined'&& typeof(data.ans4) != 'undefined') {
        answerList = data.ans1+','+data.ans3+','+data.ans4;
      }else if(typeof(data.ans1) == 'undefined'&& typeof(data.ans2) != 'undefined'
              &&typeof(data.ans3) != 'undefined'&& typeof(data.ans4) != 'undefined') {
        answerList = data.ans2+','+data.ans3+','+data.ans4;
      }
    }  
  angular.forEach($scope.level,function(gradeValue,gradeKey){
    if(gradeValue['id'] == grade){
      gradeName = gradeValue['name'];
    }
  });
  angular.forEach($scope.subjects,function(courValue,courKey){
    if(courValue['course_id'] == $scope.courseSelected) {
      courseName = courValue['course_name'];
    }
  });
  question = {
    tid : get_uid,
    qId : QId[1],
    grade : grade,
    grade_name : gradeName,
    course : course,
    course_name : courseName,
    standard : standard,
    skills : skillId,
    sub_skill : subSkills,
    ques_diff : difficulity,
    ques_diff_name : difficulityName,
    ques_type : qType,
    question : data.questionStatement,
    answer : answerList,
    correctanswer : optionChecked,
    correctanswer_type :opt,
    type : Qtyp,
    point_type : pointType,
  };
  teacherHttpService.updateQuestion(question).success(function(response) {
    if (response.status == true) {
      $scope.msg = response.message;
      $('#modal-sucess').modal('show'); 
//      window.location.href = window.location.origin+urlParams.siteRoot+'teacher/questions';
    }else{
      $scope.message = 'Some error occurred.';
      $timeout(function () {$scope.message = ""; }, 3000);
    }
  }); 
}
$scope.clickAlert = function(data) {
  if(data == 'update') {
    window.location.href = window.location.origin+urlParams.siteRoot+'teacher/questions';
  }
}
$scope.updatedImageId = [];
$scope.deleteImage = function(j,data) {
    teacherHttpService.deleteImage(get_uid,data).success(function(response) {
      
    });
    teacherHttpService.getEditQuestion(get_uid,QId[1]).success(function(response) {
      $scope.updatedImageId.push(data);
        if(response.status == true) {
            var i = 0;
            if(response.ques_type == 'image') {
              $('.img-answer-block').show();
              $('#answer-type').hide();
              var myLabell = angular.element(document.querySelector('#edit-answer-img ul'));
                myLabell.remove();
               var myLabl = angular.element(document.querySelector('#edit-answer-img'));
                myLabl.append('<ul></ul>');
              angular.forEach(response.option,function(opt,ki){
                var myLabel = angular.element(document.querySelector('#edit-answer-img ul'));
                i = ki+1;
                angular.forEach(response.answer,function(ans,anski){
                  var optin = opt['options'].split('/');
                  if(anski == 0) {
                   $scope.option =  optin['1']; 
                  }else{
                   $scope.option = $scope.option +','+optin['1'];
                  }
                  if(ans['answers'] == optin['1']){
                    myLabel.append($compile('<li><input type="checkbox" id="inlineRadio1" value="'+i+'" name="EDIT-IMAGESS" checked="">\n\
                    <img src="'+urlParams.baseURL+'/webroot/'+opt['options'] +'"alt="opps" width="50px" height="50px"/> \n\
                    <a ng-click="deleteImage('+i+','+opt['id']+')"><i class="glyphicon glyphicon-remove-circle"></i></a>\n\
                   </li>')($scope));
                  }else{
                    myLabel.append($compile('<li><input type="checkbox" id="inlineRadio1" value="'+i+'" name="EDIT-IMAGESS">\n\
                      <img src="'+urlParams.baseURL+'/webroot/'+opt['options'] +'"alt="opps" width="50px" height="50px"/>\n\
                      <a ng-click="deleteImage('+i+','+opt['id']+')"><i class="glyphicon glyphicon-remove-circle"></i></a></li>')($scope));
                  }
                });
            });
            $scope.ansCount = i;
          }
        }
    });
  }
}])
.controller('teacherCustomAssignmentCtrl',['$rootScope','$scope','$timeout','teacherHttpService','loginHttpService','$location','urlParams','user_roles','commonActions','$routeParams','$compile',
  function($rootScope,$scope,$timeout,teacherHttpService,loginHttpService,$location,urlParams,user_roles,commonActions,$routeParams,$compile) {
    var get_uid=commonActions.getcookies(get_uid);
    $scope.baseURL= urlParams.baseURL;
    $scope.grade_id = $routeParams.gradeid ;
    $scope.course_id = $routeParams.courseid ;
    $scope.subject_name = $routeParams.subject_name ;
    $scope.frm ={}; 
    $scope.frm.questions_limit =5;      
    $scope.frm.assignmentFor = 'class';
    $scope.frm.selectedStd =[];
    $scope.frm.asscomments ="";
    var  assgresources = {};


    $scope.$on('UploadedImage', function(event, mass) { 
      assgresources.image = mass;
    });

   // Step 1 - To populate the dynamic value in fields of Assignment     
      // Api to call all students of a teacher
      $scope.frm.studentModel = [];
      $scope.students =[]; 
      teacherHttpService.getStudentsOfSubjectForTeacher(get_uid,$scope.course_id).success(function(respStd) { 
       if (respStd.response.status == "true") {               
               //$scope.students=respStd.response.students;                            
               angular.forEach(respStd.response.students,function(type,key){
                $scope.students.push({
                  'id' : type['id'],
                  'label' : type['username']
                });            
              });               
             }
           });
      var stType= [] ;
      $scope.stEvents = {
       onItemSelect: function(item) {        
        stType.push(item['id']);
        $scope.frm.assignmentFor = "students"; 
        $scope.frm.selectedGroup = "";   

      },
      onItemDeselect: function(item) {
        stType.splice(item['id'],1);
      }
    }; 


     //On change drop down
     $scope.onChangeGP=function(dt){       
      $scope.frm.assignmentFor = "group";
      $scope.frm.studentModel = [];        
    }


    // Action trigger on select of People/Students from drop down    
    $scope.onChangeCL=function(slctCL){       
      $scope.frm.assignmentFor = "class";
      $scope.frm.selectedGroup = ""; 
      $scope.frm.studentModel = [];       
    }
    

      // API to call all groups of a teacher
      teacherHttpService.getGroupsOfSubjectForTeacher(get_uid,$scope.course_id).success(function(respGroup) {
         //console.log(respGroup);
         if (respGroup.response.status == "true") {
          $scope.groups= respGroup.response.groups;
        }

      });

       //API to call skill
       var parent_id = $scope.course_id;
       teacherHttpService.getCourseSkillSubskills($scope.grade_id,parent_id).success(function(rescourse) {
         if (rescourse.response.status == "True") {                
          $scope.skills = rescourse.response.courses;
        }

      });


       //API to call subskill
       $scope.onChangeSkill = function(slctSkill){
        var parentid = slctSkill;
        $scope.subskills ="";
        teacherHttpService.getCourseSkillSubskills($scope.grade_id,parentid).success(function(rescourse) {
         if (rescourse.response.status == "True") {
          $scope.subskills = rescourse.response.courses;
        }         
      });
      }


       // API to call Difficulti level and multi select drop down
       $scope.frm.difficultModel = [];
       $scope.difficulties =[];
       teacherHttpService.getDifficultyLevel().success(function(response) {
        if(response.status == true){         
          angular.forEach(response.data,function(type,key){
            $scope.difficulties.push({
              'id' : type['id'],
              'label' : type['name']
            });            
          });

        }
      });

       var diffLevel = [];
       $scope.diffEvents = {
         onItemSelect: function(item) {   
          diffLevel.push(item['id']);
        },
        onItemDeselect: function(item) {
          diffLevel.splice(item['id'],1);
        }
      };
      // Get settings
      var data = {user_id : get_uid, level_id: $scope.grade_id, course_id: $scope.course_id}
      teacherHttpService.getTeacherSettings(data).success(function(response) {
        if (response.status == true) {
          var result = response.result;
          var settings = JSON.parse(result.settings);
          $scope.group_builder = (settings.group_builder == true) ? 'true' : 'false';
        }
      });
// Step 2 - To generate the questions and change questions

    //Click on generate button and get question as per field values
    $scope.generateQuestion = function(frmdata){
      $scope.err_message =[];

      if(frmdata.selectedSkill == ""){
        $scope.err_message[1] = "Please select Skill.";
      }
      else if(frmdata.selectedSubskill == ""){
        $scope.err_message[2] = "Please select SubSkill.";
      } 
      else if( (5 >(parseInt(frmdata.questions_limit)) ) || ((parseInt(frmdata.questions_limit)) > 20) ){
        $scope.err_message[3] = "Please enter question less than 20 but greater than 5.";
      }
      else{

        var slcFields = {
          teacher_id      : get_uid,
          grade_id        : $scope.grade_id,
          main_course_id  : $scope.course_id, 
          subject_name    : $scope.subject_name, 
          group_id        : frmdata.selectedGroup,
          students        : frmdata.studentModel,
          difficulty_level: frmdata.difficultModel,
          skill_id        : frmdata.selectedSkill,
          subskill_id     : frmdata.selectedSubskill,
          questions_limit : frmdata.questions_limit,
          assignmentFor   : frmdata.assignmentFor
        } 
        $scope.questions =[];

        teacherHttpService.generateAssignQuestions(slcFields).success(function(respQues) {
          if(respQues.response.status == "True"){ 
            $scope.questions = respQues.response.questions;            
          }else{
            $scope.err_message[4] = respQues.response.message;
            $timeout(function () { $scope.err_message[4] = ""; }, 5000);         

          }

        });

         // to alter question name
          /*$scope.stripQues = function(quesName) {
             return quesName.replace();    
           };*/ 


        // To make option numbering as alphabet
        $scope.numToAlpha =function(idx) {
          var getAlpha = ['A','B','C','D','E','F','G'];
          return getAlpha[idx];
        }


        //To remove the question after click on change question
        var removed_questions_id ="0";
        
        $scope.onChangeQues = function(indx, rm_quesid) {
          var exist_questions_id = "1";
          

          
          removed_questions_id = removed_questions_id+','+rm_quesid;

          for(var key in $scope.questions){
             // console.log($scope.questions[key].question_id);
             if($scope.questions[key].question_id!=rm_quesid){
              exist_questions_id =exist_questions_id+','+$scope.questions[key].question_id;
            }
          }


          var dataToGetQuestions = {                
            subjects          : frmdata.selectedSubskill,
            grade_id          : $scope.grade_id, 
            limit             : frmdata.questions_limit,              
            difficulty        : 'Easy|Moderate|Difficult',
            existing_questions_id:  exist_questions_id,
            removed_questions_id : removed_questions_id               
          }; 

          teacherHttpService.getQuestionsListForAssg(dataToGetQuestions).success(function(respQues) {
            if(respQues.response.status == "True"){ 

              if(respQues.response.change_question_status == "True"){

               $scope.questions.splice(indx, 1);
               console.log($scope.questions);                        
               $scope.questions = respQues.response.questions;

             }
             else{
              $scope.err_message[4] = respQues.response.change_question_message;
              alert(respQues.response.change_question_message);

            }
          }

        });
        }

      }
    };
    // end Step 2 

     // Step 3 - To save the selected questions , Resources and comment in Database
          /*$scope.onClickCancel = function(frmCandata){
            $scope.frm.assignDate="";
          };*/


          $scope.onSubmitAssignmentNow = function(frmdata){
            //frmdata.attachedresource="";
            //console.log(assgresources);


            $count_slectedQues = Object.keys(frmdata.selected_questions).length;          
            
            if($count_slectedQues !=frmdata.questions_limit){
              $scope.err_message[5] ="Your selected question is not equal to 'Number of question'. ."
              $count_slectedQues = "";
              $timeout(function () { $scope.err_message[5] = ""; }, 3000);
            }
            else{

              var assgData ={
                teacher_id      : get_uid,
                grade_id        : $scope.grade_id,
                main_course_id  : $scope.course_id, 
                subject_name    : $scope.subject_name, 
                group_id        : frmdata.selectedGroup,
                students        : frmdata.studentModel,
                difficulty_level: frmdata.difficultModel,
                skill_id        : frmdata.selectedSkill,
                subskill_id     : frmdata.selectedSubskill,
                questions_limit : frmdata.questions_limit,
                assignmentFor   : frmdata.assignmentFor,
                attachedresource :assgresources,
                selected_questions : frmdata.selected_questions,
                comments           : frmdata.asscomments
              };


              teacherHttpService.setCustomAssignmentByTeacher(assgData,get_uid).success(function(respAssg) {
                if(respAssg.response.status == "True"){ 
                  $('#modal-sucess').modal('show'); 

                  $scope.onClickOk=function(){
                    window.location.href='teacher/custom-assignment/'+$scope.grade_id+'/'+$scope.subject_name+'/'+$scope.course_id;

                  }                   

                }
              });
            }

          }

          ;

          $scope.onclickAssignmentLater = function(frmdata){
            frmdata.attachedresource = $scope.img;         ;

            $count_slectedQues = Object.keys(frmdata.selected_questions).length;           
            if($count_slectedQues !=frmdata.questions_limit){
              $scope.err_message[5] ="Your selected question is not equal to 'Number of question'. ."
              $count_slectedQues = "";
              $timeout(function () { $scope.err_message[5] = ""; }, 4000);
            }
            else{
              $('#modal-calender').modal('show');
            }
            
          };


          $scope.onSubmitAssignmentLater = function(frmdata){
            frmdata.attachedresource = $scope.img;
            if(typeof $scope.date =='undefined'){
              $scope.err_message[6] ="Please select date to schedule your assignment."
              $count_slectedQues = "";
              $timeout(function () { $scope.err_message[6] = ""; }, 4000);
            }
            else{
              var assgnData ={
                teacher_id      : get_uid,
                grade_id        : $scope.grade_id,
                main_course_id  : $scope.course_id, 
                subject_name    : $scope.subject_name, 
                group_id        : frmdata.selectedGroup,
                students        : frmdata.studentModel,
                difficulty_level: frmdata.difficultModel,
                skill_id        : frmdata.selectedSkill,
                subskill_id     : frmdata.selectedSubskill,
                questions_limit : frmdata.questions_limit,
                assignmentFor   : frmdata.assignmentFor,
                attachedresource :assgresources,
                selected_questions : frmdata.selected_questions,
                comments           : frmdata.asscomments,
                schedule_time       : $scope.date
              };

              teacherHttpService.setCustomAssignmentByTeacher(assgnData,get_uid).success(function(respAssg) {
                if(respAssg.response.status == "True"){ 
                  $('#modal-sucess').modal('show'); 

                  $scope.onClickOk=function(){
                    window.location.href='teacher/custom-assignment/'+$scope.grade_id+'/'+$scope.subject_name+'/'+$scope.course_id;

                  }                   

                }
              });
            }

          }
          //end- Step 3 - To save the selected questions , Resources and comment in Database

}])


//teacherStudentProfile  studentPerformance 
.controller('teacherAutoGenerateAssignment', ['$scope', function($scope) {

  $scope.autoGenerateAssignmentModel = [];
  $scope.autoGenerateAssignmentData = [
  {id: 1, label: "All"},
  {id: 2, label: "Sahil Sharma"},
  {id: 3, label: "Aditya Parihar"},
  {id: 4, label: "Narendra Modi"},
  {id: 5, label: "Rahul Gandhi"},	
  {id: 6, label: "Soniya Gandhi"}];

        /*$scope.autoGenerateAssignmentSetting = {
            smartButtonMaxItems: 2,
          };*/
        }])
.controller('studentProfileForTeacherCntrl',['$rootScope','$scope','teacherHttpService','loginHttpService','$location','urlParams','commonActions','$routeParams','quiz_mastered_score',
  function($rootScope,$scope,teacherHttpService,loginHttpService,$location, urlParams,commonActions,$routeParams,quiz_mastered_score) {
    if (typeof $routeParams.id == 'undefined' || $routeParams.id  == '') {
      alert('No child selected');
      return false;
    }
    $scope.student = {};
    $scope.image_directory = '';
    $scope.student_courses = {};
    $scope.student_class = '';
    var get_uid=commonActions.getcookies(get_uid);
    loginHttpService.getUserDetails($routeParams.id).success(function (response) {
      if (response.data.user_all_details != '') {
        $scope.student = response.data.user_all_details[0];
        var image_directory = response.data.image_directory;
        if ($scope.student.user_detail.profile_pic != '' && $scope.student.user_detail.profile_pic != null) {
          $scope.profile_pic = image_directory + '/' + $scope.student.user_detail.profile_pic;
        } else {
          $scope.profile_pic = image_directory + '/' + 'profile_img/default_studentAvtar.png';
        }
        teacherHttpService.getStudentCourses($routeParams.id).success(function (response) {
          if (response.response.status.toLowerCase() == 'true') {
            $scope.student_courses = response.response.student_courses;
            $scope.selected_course = $scope.student_courses[0].id;
            $scope.student_class = response.response.student_class_name;
          }
        });
      }
    });

    // duration will be calculated on the basis of weeks
    // such as -1 for 1 past 1 week.
    $scope.total_duration_in_hrs = 0;
    var send_data = {'user_ids' : [$routeParams.id], 'week': -1};
    teacherHttpService.timeSpentOnPlatform(send_data).success(function (response) {
      if (response.status == true) {
        $scope.total_duration_in_hrs = response.total_duration_in_hrs;
      }
    });

    $scope.average_duration_in_hrs = 0;
    var send_data = {'sid' : $routeParams.id};
    teacherHttpService.timeSpentByClassOnPlatform(send_data).success(function (response) {
      if (response.status == true) {
        $scope.average_duration_in_hrs = response.average_duration_in_hrs;
      }
    });



    //Start-  Student Analytic graph  $routeParams.id = student_id
    teacherHttpService.getStudentProgress($routeParams.id).success(function (result) {
          if (result.response.status == true) {
              var total_subskill = result.response.total_subskill*10;
              var conquered_count = result.response.conquered_count*10;
              var practice_count = result.response.practice_count*10;     
     
          }else{
              $scope.prgress_message=result.response.message;
              var total_subskill = 100;
              var conquered_count = 0;
              var practice_count = 0;
            }

            $scope.stprogress_labels = ["Conquered", "Practiced", "Not Attacked"];
                $scope.stprogress_data = [conquered_count, practice_count, total_subskill-practice_count];
                $scope.stprogress_colors = ['#f1c40f', '#2ecc71', '#e8e8e8'];
                $scope.datasetOverride = [{ label: 'Bar chart', borderWidth: 1, type: 'bar' } ];
                $scope.stprogress_options = { 
                  animation: { duration: 1000 },
                  legend: { display: true, position: 'right', labels: {fontColor: '#333',fontSize: 14,boxWidth: 15, }, },
                 tooltips: {
                     callbacks: {
                    label: function(tooltipItem, data) {
                     var allData = data.datasets[tooltipItem.datasetIndex].data;
                     var tooltipLabel = data.labels[tooltipItem.index];
                     var tooltipData = allData[tooltipItem.index];
                     var total = 0;
                     for (var i in allData) {
                      total += allData[i];
                    }
                    //var tooltipPercentage = total_subskill;
                    return tooltipLabel + ': ' + tooltipData + '%';
                        //return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
                  }
                }
              }
            };


    });    
//end-  Student Analytic graph



//Second Graph Grade Analysis
$scope.gradeAnalysis_labels = ["Prime or composite", "Prime factorization", "Multiplicative inverses", "Divisibility rules", "Greatest common factor", "Least common factor", "GCF and LCM word problem", "Scientific nation"];
  $scope.series = ['Recommended progress', 'Average score', 'Andrew score'];
  $scope.gradeAnalysis_data = [
  [50, 62, 80, 60, 40, 55, 48, 48],
  [60, 72, 90, 68, 60, 68, 58, 58],
  [70, 88, 100, 90, 82, 89, 72, 70]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.gradeAnalysis_colors = ['#b0baaf', '#f39c12', '#00a651'];
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
  
  $scope.gradeAnalysis_options = {
    scales: {
      yAxes: [
      {
        id: 'y-axis-1',
        type: 'linear',
        display: true,
        position: 'left'
      },
      ],

      gradeAnalysis_labels: [
      {
       fontColor: '#fa4229'
     }
     ]
   },

   legend: {
    display: true,
    position: 'top',
    labels: {
     fontColor: '#333',
     fontSize: 14,
     boxWidth: 15
   },
 },
 title: {
  display: true,
  text: 'SCORE POINTS',
  fontColor: '#333',
  position: 'left',
  fontSize: 16
}
};



//end - Second Graph Grade Analysis



    //Need Your Attention Block
    teacherHttpService.getNeedAttentionOFStudent($routeParams.id).success(function(resAtn) {
          if(resAtn.response.status==true){
              $scope.strecords = resAtn.response.student_attention_records ; 
              var first_subskill_id =resAtn.response.student_attention_records[0].course_id;

              teacherHttpService.getSubskillAnalytic(get_uid,1,first_subskill_id).success(function(resAna) {
                  //$scope.data = [30,10,20,20,15,5];
                  if(resAna.response.status==true){
                    var stAnalyticResults= resAna.response.student_result;
                    $scope.data =[];
                    angular.forEach(stAnalyticResults, function(value, key) {               
                           $scope.data.push(value);    
                    });
                    $("#menu1").addClass('in active');
                    $scope.st_attention_message ='';
                  }
                  else{
                    // $scope.analytic_message = resAna.response.message;
                    $scope.st_attention_message = resAna.response.message;
                     $scope.data = [100,0,0,0,0,0];
                  }
            });
          }else{
              $scope.st_attention_message = resAtn.response.message;
              $scope.data = [100,0,0,0,0,0];
          }

      });


    $scope.clickNeedAttention= function(indx,subskillid){
        $(".tab-pane.in.active").removeClass('in active'); 
        $("#menu"+indx).addClass('in active');

        teacherHttpService.getSubskillAnalytic(get_uid,1,subskillid).success(function(resAna) {
          //$scope.data = [30,10,20,20,15,5];
          if(resAna.response.status==true){
              var stAnalyticResults= resAna.response.student_result;
              $scope.data =[];
              angular.forEach(stAnalyticResults, function(value, key) {               
                  $scope.data.push(value);    
              });
          }
          else{
            $scope.analytic_message = resAna.response.message;
          }
        });
    }

    /*$scope.labels = [];
    angular.forEach(class_students_classification, function(value, key) {               
        $scope.labels.push(key);    
      });*/
      $scope.labels =["NO_ATTACK", "REMEDIAL", "STRUGGLING", "ON_TARGET", "OUTSTANDING", "GIFTED"];
      $scope.colors = ['#e8e8e8','#db4a4a','#f1c40f','#69e59d','#249626','#8a81e8'];
      //$scope.data = [30,10,20,20,15,5];
      
      $scope.datasetOverride = [{ label: 'Bar chart', borderWidth: 1,  type: 'bar'  }];
      $scope.options = {  
          animation: {duration: 1000 },
          legend: { 
                    display: true, position: 'right',
                    labels: {  fontColor: '#333', fontSize: 14, boxWidth: 15, },
                  },

          tooltips: {
              callbacks: {
                    label: function(tooltipItem, data) {
                        var allData = data.datasets[tooltipItem.datasetIndex].data;
                        var tooltipLabel = data.labels[tooltipItem.index];
                        var tooltipData = allData[tooltipItem.index];
                        var total = 0;
                        for (var i in allData) {
                              total += allData[i];
                        }
                        //var tooltipPercentage = Math.round((tooltipData / total) * 100);
                        return tooltipLabel + ': ' + tooltipData + '%';
          
                    }
              }
          }
      };


// Last Block - Student Result in panle-subjects
  
  //API to call student courses 
  $scope.mastered = quiz_mastered_score.SUBSKILLQUIZ;
  teacherHttpService.getStudentCourses($routeParams.id).success(function (response) {
      if (response.response.status == 'TRUE') {
          $scope.student_courses = response.response.student_courses;            
      }
    });
    $scope.clickAccordionSubject = function(index, subject_id){
      $("#subjectblock_"+index).toggleClass('in');
      $scope.st_skillresult_message = "";
      teacherHttpService.getStudentScoreForSubskills($routeParams.id,subject_id).success(function (response) {
          if (response.response.status == true) {
              $scope.student_results = response.response.student_percentage;
              angular.forEach($scope.student_results, function(subdata){
                  if(subdata['student_subskill_percentage'] >= $scope.mastered ){              
                    subdata['subjectblock_class']  ='complete';               
                  }
                  else if( subdata['student_subskill_percentage'] < $scope.mastered && subdata['student_subskill_percentage']!=0){
                      subdata['subjectblock_class']  ='progress-block';
                  }else{
                      subdata['subjectblock_class']  ='not-attempted';
                   }                
              }); 
                       
          }else{
            $scope.st_skillresult_message = response.response.message;

          }
        });


    };











  }])
/*.directive('owlcarousel', function() {

  var linker = function(scope, element, attr) {
    var loadCarousel = function() {

      element.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
      });
    }

    scope.$watch("juego.Galerias.Videos", function(value) {
      loadCarousel(element);
    })
  }

  return {
    restrict: "A",
    link: linker
  }

})
*/

/*.directive('awardCarousel', function() {

  var linker = function(scope, element, attr) {
    var loadCarousel = function() {

      element.owlCarousel({
        margin: 0,
        loop: false,
        nav: true,
        responsive: {
         0: {
          items: 1
        },
        600: {
          items: 4
        },
        1000: {
          items: 6
        }
      }
    });
    }

    scope.$watch("juego.Galerias.Videos", function(value) {
      loadCarousel(element);
    })
  }

  return {
    restrict: "A",
    link: linker
  }

})*/


/*.directive('radioSlider', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            $(element).radiosToSlider(scope.$eval(attrs.radioSlider));
        }
    };
  })*/

.controller('teacherRewards',['$rootScope','$scope','teacherHttpService','loginHttpService','$location','user_roles','commonActions','$routeParams','$q',
  function($rootScope,$scope,teacherHttpService,loginHttpService,$location,user_roles,commonActions,$routeParams,$q) {
    var get_uid=commonActions.getcookies(get_uid);
    $scope.rewards = '';
    $scope.points = 0;
    init_points();
    function refresh_points() {
      teacherHttpService.getTeacherPoints({user_id : get_uid}).then(function(resp) {
        var response = resp.data;
        if (response.status == true) {
          $scope.points = response.points;
        } else {
          if (response.message != '') {
            alert(response.message);
          } else {
            alert('Some error occured, Please ask to administrator');
          }
        }
      })
    }

    function init_points() {
      teacherHttpService.getTeacherPoints({user_id : get_uid}).then(function(resp) {
        var response = resp.data;
        if (response.status == true) {
          $scope.points = response.points;
        } else {
          if (response.message != '') {
            alert(response.message);
          } else {
            alert('Some error occured, Please ask to administrator');
          }
        }
      }).then(function() {
        getRewards();
      });    
    }

    function getRewards() {
      var data = {user_id : get_uid, condition_key: 'points', condition_value: $scope.points};
      teacherHttpService.getRewards(data).success(function(response) {
        if (response.status == true) {
         $scope.rewards = response.result;
         if (response.available_rewards == 0) {
          // alert('There is no more rewards availbale');
         }
       } else {
        if (response.message != '') {
          alert(response.message);
        } else {
          alert('Some error occured, Please ask to administrator');
        }
      }
    });
    }

    $scope.requestReward = function(reward) {
      var status = (reward.coupon_code == '') ? 'Mlg approval pending' : 'acquired';
      var set_data = {user_id : get_uid, coupon_id : reward.coupon_id, status: status, updated_by_user_id: get_uid};
      teacherHttpService.setAvailableRewards(set_data).success(function(response) {
        if (response.status == true) {
          reward.status = response.coupon_status;
          refresh_points();
          $('#modal-redeemCheck_' + reward.id + ' .modal-content').addClass('success');
        } else {
          if (response.message != '') {
            alert(response.message);
          } else {
            alert('Some error occured');
          }
        }
      });
    }
  }])


.directive('datetimez', function() {
  return {
    restrict: 'A',
    require : 'ngModel',
    link: function(scope, element, attrs, ngModelCtrl) {
      element.datetimepicker({
        dateFormat:'dd/MM/yyyy hh:mm:ss',
        language: 'pt-BR'
      }).on('changeDate', function(e) {
        ngModelCtrl.$setViewValue(e.date);
        scope.$apply();
      });
    }
  };
})
.controller('teacherQuestions',['$rootScope','$scope','teacherHttpService','loginHttpService','$location','user_roles','commonActions','$routeParams','$compile',
  function($rootScope,$scope,teacherHttpService,loginHttpService,$location,user_roles,commonActions,$routeParams,$compile) {
   var get_uid = commonActions.getcookies(get_uid);
   var pgnum = 1;
   $scope.nexClass = '';
   $scope.preClass = 'disabled';
   if(pgnum > 1) {
     $scope.preClass = '';
   }else if(typeof $scope.lastPage != undefined && pgnum >= $scope.lastPage  ) {
     $scope.nexClass = 'disabled';
     $scope.preClass = '';
   }else if(pgnum > 1 && typeof $scope.lastPage != undefined && pgnum >= $scope.lastPage){
     $scope.nexClass = '';
     $scope.preClass = '';
   }
   var tempUrl = $location.url();
   var temp = tempUrl.split('#');
   if(typeof temp[1] != 'undefined') {
     pgnum = temp[1];
   }
   teacherHttpService.getQuestions(get_uid,pgnum).success(function(response) {
    $scope.questionList = response.data;
    $scope.lastPage = response.lastPage;
    $scope.start = response.start;
    $scope.last = response.last;
    $scope.total = response.total;
    if($scope.lastPage == 1 && pgnum == 1) {
      $scope.preClass = 'disabled';
      $scope.nexClass = 'disabled';
    }
  });
   $scope.getPrevious = function() {
    pgnum = pgnum - 1;
    if(pgnum < '1') {
      pgnum = 1;
      $scope.nexClass = '';
      $scope.preClass = 'disabled';
    }else if(pgnum == '1'){
      pgnum = 1;
      $scope.nexClass = '';
      $scope.preClass = 'disabled';
      teacherHttpService.getQuestions(get_uid,pgnum).success(function(response) {
        $scope.questionList = response.data;
        $scope.lastPage = response.lastPage;
        $scope.start = response.start;
        $scope.last = response.last;
        $scope.total = response.total;
      });
    }else{
      if(pgnum > 1) {
       $scope.preClass = '';
     }else if(typeof $scope.lastPage != undefined && pgnum == $scope.lastPage  ) {
       $scope.nexClass = 'disabled';
       $scope.preClass = '';
     }else if(pgnum > 1 && typeof $scope.lastPage != undefined && pgnum >= $scope.lastPage){
       $scope.nexClass = '';
       $scope.preClass = '';
     }
     teacherHttpService.getQuestions(get_uid,pgnum).success(function(response) {
      $scope.questionList = response.data;
      $scope.lastPage = response.lastPage;
      $scope.start = response.start;
      $scope.last = response.last;
      $scope.total = response.total;
    }); 
   }
 }
 $scope.getNext = function() {
  pgnum = pgnum + 1;
  if(pgnum > $scope.lastPage) {
    $scope.nexClass = 'disabled';
    $scope.preClass = '';
    pgnum = pgnum -1 ;
  }else if(pgnum == $scope.lastPage) {
    $scope.nexClass = 'disabled';
    $scope.preClass = '';
    teacherHttpService.getQuestions(get_uid,pgnum).success(function(response) {
      $scope.questionList = response.data;
      $scope.lastPage = response.lastPage;
      $scope.start = response.start;
      $scope.last = response.last;
      $scope.total = response.total;
    });
  }else{
   teacherHttpService.getQuestions(get_uid,pgnum).success(function(response) {
    $scope.questionList = response.data;
    $scope.lastPage = response.lastPage;
    $scope.start = response.start;
    $scope.last = response.last;
    $scope.total = response.total;
  });
 }
 if(pgnum > 1) {
     $scope.preClass = '';
   }else if(typeof $scope.lastPage != undefined && pgnum == $scope.lastPage  ) {
     $scope.nexClass = 'disabled';
     $scope.preClass = '';
   }else if(pgnum > 1 && typeof $scope.lastPage != undefined && pgnum < $scope.lastPage){
     $scope.nexClass = '';
     $scope.preClass = '';
   }
}
$scope.range = function(min, max, step){
  step = step || 1;
  var input = [];
  for (var i = min; i <= max; i += step) input.push(i);
    return input;
};
$scope.deleteQuestions = function(Qid,uniqId){
  var r = confirm("Are you sure want to delete question?");
  if (r == true) {
   var questionIds = [];
   questionIds = {
    id : Qid,
    unique_id : uniqId
  }
  teacherHttpService.deleteQuestions(questionIds).success(function(response) {
    if(response.status == true) {
      alert(response.message);
      teacherHttpService.getQuestions(get_uid,pgnum).success(function(response) {
        $scope.questionList = response.data;
        $scope.lastPage = response.lastPage;
        $scope.start = response.start;
        $scope.last = response.last;
        $scope.total = response.total;
      });
    }else{
      alert(response.message);
    }  
  });
}

}
   // Get teacher class and subjects. 
   teacherHttpService.getTeacherGrades(get_uid,user_roles['teacher']).success(function(response) {   
    if (response.status == true) {
     $scope.grades = response.grade;
   }
 });
     // on the basis of grade fetch the coursr list.
     var grade = -"1";
     var course = "-1";
     var skill = "-1";
     $scope.skills = [];
     $scope.getGrade = function(){
      grade = $scope.gradeModel;
      teacherHttpService.getTeacherDetailsForContent(get_uid,grade,-1,user_roles['teacher']).success(function(response) {
        $scope.courses = response.response;
      }).error(function(error) {
        $scope.msg= 'Some technical error occured.';
      });
      course = '-1';
      $scope.skill = [];
      teacherHttpService.getFilterdQuestion(get_uid,pgnum,grade,course,skill).success(function(response) {
        $scope.questionList = response.data;
        $scope.lastPage = response.lastPage;
        $scope.start = response.start;
        $scope.last = response.last;
        $scope.total = response.total;
      });
    }
    // on the basis of courseid fetch skill
    $scope.skill = [];
    $scope.getCourse = function(data){
      if(data != null) {
        $scope.skill = [];
        course = $scope.courseModel;
        teacherHttpService.getAllCourseList(course,'lesson').success(function(response) {
          var data = response.response.course_details;
          angular.forEach(data, function(value, key) {
            $scope.skill.push({
              'id' : value['course_id'],
              'label': value['name']
            });
          });
        }).error(function(error) {
          $scope.msg= 'Some technical error occured.';
        });
        teacherHttpService.getFilterdQuestion(get_uid,pgnum,grade,course,skill).success(function(response) {
          $scope.questionList = response.data;
          $scope.lastPage = response.lastPage;
          $scope.start = response.start;
          $scope.last = response.last;
          $scope.total = response.total;
        });
      }
    }
    $scope.getSkill = function(skil){
      if(skil != null) {
        skill = skil;
        teacherHttpService.getFilterdQuestion(get_uid,pgnum,grade,course,skill).success(function(response) {
          $scope.questionList = response.data;
          $scope.lastPage = response.lastPage;
          $scope.start = response.start;
          $scope.last = response.last;
          $scope.total = response.total;
        })
      }
    }
  }])
.controller('teacherLessonListingCtrl',['$rootScope','$scope','teacherHttpService','loginHttpService','$location','user_roles','commonActions','$routeParams','$compile',
  function($rootScope,$scope,teacherHttpService,loginHttpService,$location,user_roles,commonActions,$routeParams,$compile) {
    $scope.close_modal=function(){
       $(".modal-backdrop").remove();
 //      window.location.href='teacher/add-content';
    } 
    var get_uid = commonActions.getcookies(get_uid);
    var pgnum = 1;
    $scope.nexClass = '';
    $scope.preClass = 'disabled';
    if(pgnum > 1) {
      $scope.preClass = '';
    }else if(typeof $scope.lastPage != undefined && pgnum >= $scope.lastPage  ) {
      $scope.nexClass = 'disabled';
      $scope.preClass = '';
    }else if(pgnum > 1 && typeof $scope.lastPage != undefined && pgnum >= $scope.lastPage){
      $scope.nexClass = '';
      $scope.preClass = '';
    }
    var tempUrl = $location.url();
    var temp = tempUrl.split('#');
    if(typeof temp[1] != 'undefined') {
      pgnum = temp[1];
    }
    teacherHttpService.getLessonForList(get_uid,pgnum).success(function(response) {
     $scope.lessonList = response.data;
     $scope.lastPage = response.lastPage;
     $scope.start = response.start;
     $scope.last = response.last;
     $scope.total = response.total;
   });
   $scope.getPrevious = function() {
    pgnum = pgnum - 1;
    if(pgnum < '1') {
      pgnum = 1;
      $scope.nexClass = '';
      $scope.preClass = 'disabled';
    }else if(pgnum == '1'){
      pgnum = 1;
      $scope.nexClass = '';
      $scope.preClass = 'disabled';
      teacherHttpService.getLessonForList(get_uid,pgnum).success(function(response) {
        $scope.lessonList = response.data;
        $scope.lastPage = response.lastPage;
        $scope.start = response.start;
        $scope.last = response.last;
        $scope.total = response.total;
      });
    }else{
      if(pgnum > 1) {
       $scope.preClass = '';
     }else if(typeof $scope.lastPage != undefined && pgnum == $scope.lastPage  ) {
       $scope.nexClass = 'disabled';
       $scope.preClass = '';
     }else if(pgnum > 1 && typeof $scope.lastPage != undefined && pgnum >= $scope.lastPage){
       $scope.nexClass = '';
       $scope.preClass = '';
     }
     teacherHttpService.getLessonForList(get_uid,pgnum).success(function(response) {
      $scope.lessonList = response.data;
      $scope.lastPage = response.lastPage;
      $scope.start = response.start;
      $scope.last = response.last;
      $scope.total = response.total;
    });
   }
 }
 $scope.getNext = function() {
  pgnum = pgnum + 1;
  if(pgnum > $scope.lastPage) {
    $scope.nexClass = 'disabled';
    $scope.preClass = '';
    pgnum = pgnum -1 ;
  }else if(pgnum == $scope.lastPage) {
    $scope.nexClass = 'disabled';
    $scope.preClass = '';
    teacherHttpService.getLessonForList(get_uid,pgnum).success(function(response) {
      $scope.lessonList = response.data;
      $scope.lastPage = response.lastPage;
      $scope.start = response.start;
      $scope.last = response.last;
      $scope.total = response.total;
    });
  }else{
   teacherHttpService.getLessonForList(get_uid,pgnum).success(function(response) {
      $scope.lessonList = response.data;
      $scope.lastPage = response.lastPage;
      $scope.start = response.start;
      $scope.last = response.last;
      $scope.total = response.total;
    });
 }
 if(pgnum > 1) {
     $scope.preClass = '';
   }else if(typeof $scope.lastPage != undefined && pgnum == $scope.lastPage  ) {
     $scope.nexClass = 'disabled';
     $scope.preClass = '';
   }else if(pgnum > 1 && typeof $scope.lastPage != undefined && pgnum < $scope.lastPage){
     $scope.nexClass = '';
     $scope.preClass = '';
   }
}
   $scope.range = function(min, max, step){
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) input.push(i);
      return input;
  };
  $scope.deleteContent = function(data){
    var r = confirm("Are you sure want to delete question?");
    if (r == true) {
     teacherHttpService.delContent(data).success(function(response) {
        if (response.status == true) {
          alert(response.message);
          teacherHttpService.getLessonForList(get_uid,pgnum).success(function(response) {
            $scope.lessonList = response.data;
            $scope.lastPage = response.lastPage;
            $scope.start = response.start;
            $scope.last = response.last;
            $scope.total = response.total;
          });
        }else{
          alert(response.message);
        }
      });
    }
  }
    // Get teacher class and subjects. 
    teacherHttpService.getTeacherGrades(get_uid,user_roles['teacher']).success(function(response) {   
      if (response.status == true) {
       $scope.grades = response.grade;
     }
   });
     // on the basis of grade fetch the coursr list.
     var grade = -"1";
     var course = "-1";
     var skill = "-1";
     $scope.skills = [];
     $scope.getGrade = function(){
      grade = $scope.gradeModel;
      teacherHttpService.getTeacherDetailsForContent(get_uid,grade,-1,user_roles['teacher']).success(function(response) {
        $scope.courses = response.response;
      }).error(function(error) {
        $scope.msg= 'Some technical error occured.';
      });
      course = '-1';
      $scope.skill = [];
      teacherHttpService.getFilterdLesson(get_uid,pgnum,grade,course,skill).success(function(response) {
        $scope.lessonList = response.data;
        $scope.lastPage = response.lastPage;
        $scope.start = response.start;
        $scope.last = response.last;
        $scope.total = response.total;
      });
    }
    // on the basis of courseid fetch skill
    $scope.skill = [];
    $scope.getCourse = function(data){
      if(data != null) {
        $scope.skill = [];
        course = $scope.courseModel;
        teacherHttpService.getAllCourseList(course,'lesson','-1',get_uid).success(function(response) {
          var data = response.response.course_details;
          angular.forEach(data, function(value, key) {
            $scope.skill.push({
              'id' : value['course_id'],
              'label': value['name']
            });
          });
        }).error(function(error) {
          $scope.msg= 'Some technical error occured.';
        });
        teacherHttpService.getFilterdLesson(get_uid,pgnum,grade,course,skill).success(function(response) {
          $scope.lessonList = response.data;
          $scope.lastPage = response.lastPage;
          $scope.start = response.start;
          $scope.last = response.last;
          $scope.total = response.total;
        });
      }
    }
    $scope.getSkill = function(skil){
      if(skil != null) {
        skill = skil;
        teacherHttpService.getFilterdLesson(get_uid,pgnum,grade,course,skill).success(function(response) {
          $scope.lessonList = response.data;
          $scope.lastPage = response.lastPage;
          $scope.start = response.start;
          $scope.last = response.last;
          $scope.total = response.total;
        })
      }
    }
  }])
.controller('teacherSettingCtrl',['$rootScope','$scope','teacherHttpService','loginHttpService','$location','user_roles','commonActions','$routeParams','$compile','urlParams',
  function($rootScope,$scope,teacherHttpService,loginHttpService,$location,user_roles,commonActions,$routeParams,$compile,urlParams) {
    var get_uid = commonActions.getcookies(get_uid);
    $scope.page_url = $location.path();
    $scope.site_root = urlParams.siteRoot;
    $scope.frm = {};
    $scope.frm.address_line_1 = '';
    $scope.frm.profile_picture = '';
    $scope.profile_image = '/assets/img/student-img/stud_img_1.png';
    loginHttpService.getUserDetails(get_uid).success(function (response) {
      if (response.data.user_all_details != '') {
        var user = response.data.user_all_details[0];
        $scope.full_name = user.first_name + ' ' + user.last_name;
        $scope.email = user.email;
        if (user.user_detail.profile_pic != '' && user.user_detail.profile_pic != null) {
          $scope.profile_image = response.data.image_directory + '/' + user.user_detail.profile_pic;
        }
        $scope.frm.address_line_1 = user.user_detail.address_line_1;
        $scope.frm.address_line_2 = user.user_detail.address_line_2;
        $scope.frm.district = user.user_detail.district;
        $scope.frm.city = user.user_detail.city;
        $scope.frm.state = user.user_detail.state;
        $scope.frm.country = user.user_detail.country;
      }
      loginHttpService.getUserPreferences(get_uid).success(function (resp) {
        if (resp.status == true) {
          $scope.frm.mobile = resp.data.mobile;
          $scope.frm.sms_subscription = (resp.data.sms_subscription == 0) ? false : true;
        } else {
          $scope.frm.mobile = '';
          $scope.frm.sms_subscription = false;
        }
      });
    }).error(function(err) {
      alert('Some Error occured while getting your data');
    });

    $scope.changePassword = function(user) {
      loginHttpService.setUserPassword(get_uid, user).success(function (resp) {
        if (resp.response == true) {
          alert('Your Password changed sucessfully');
        } else {
          alert(resp.response);
        }
      });
    }

    $("#imgInp").on('change', function() {
        readURL(this);
    });
    function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
              $('#ImgShw').attr('src', e.target.result);
          }
          reader.readAsDataURL(input.files[0]);
      }
    }

    $scope.updateMyAccount = function(frm) {
    if ((typeof frm.profile_picture != 'undefined') && frm.profile_picture != '') {
      var fd = new FormData();
      fd.append('file', frm.profile_picture);
      fd.append('user_id', get_uid);
      loginHttpService.updateProfilePic(fd).success(function (resp) {
        if (resp.status == false) {
          alert('unable to update profile picture');
        }
      });
    }
    if ($scope.frm.deactivate == true) {
      var deactivate = confirm('Do you really want to deactivate your account');
      if (deactivate == false) {
        return false;
      } else {
        loginHttpService.setUserStatus({id: get_uid, status: 0}).success(function(response) {
          if (response.status) {
            alert('Your account deactivated successfully');
          } else {
            alert('Unable to deactivate your account, Some Error occured');
          }
        }).error(function(err) {
          alert('Some error occured');
        });
      }
    }
    frm.user_id = get_uid;
    loginHttpService.updateMyAccount(frm).success(function (resp) {
      if (resp.status == true) {
        alert('your Details saved successfully');
      } else {
        if (resp.message != '') {
          alert(resp.message);
        } else {
          alert('Some Error occured while saving data');
        }
      }
    }).error(function(x) {
      alert('Some Error occured while saving data');
    });
  };

  $scope.grades = {};
  $scope.class_students = {};
  $scope.class_groups = {};
  $scope.subject_id = '';
  $scope.subject_name = '';
  $scope.grade_id = '';
  $scope.selected_grade = '';
  $scope.number_of_students_in_class = 0;
  $scope.getClassSettingsOnChange = function(grade_subject) {
    var grade_info = grade_subject.split(',');
    $scope.subject_id = grade_info[0];
    $scope.subject_name = grade_info[1];
    $scope.grade_id = grade_info[2];
    $scope.selected_grade = grade_info[3];
    teacherHttpService.getStudentsOfSubjectForTeacher(get_uid,$scope.subject_id).success(function(student_response) {
      if (student_response.response.status=="true") {
        $scope.class_students = student_response.response.students;
        $scope.number_of_students_in_class = student_response.response.students.length;
      } else{
        $scope.err_message = "No Record Found. Please add student for this class";
      }
    });

    teacherHttpService.getGroupsOfSubjectForTeacher(get_uid, $scope.subject_id).success(function(group_response) {
      if (group_response.response.status == "true") {
        $scope.class_groups = group_response.response.groups;
      } else{
        $scope.err_message = "No Record Found. Please add student for this class";
      }
    });

    var data = {user_id : get_uid, level_id: $scope.grade_id, course_id: $scope.subject_id}
    teacherHttpService.getTeacherSettings(data).success(function(response) {
      if (response.status == true) {
        var result = response.result;
        var settings = JSON.parse(result.settings);
        if (typeof settings.question_type != 'undefined') {
          angular.forEach(settings.question_type, function(question_value, question_id) {
            $scope.pfrm.question_type[question_id] = question_value;
          });
        }
        $scope.pfrm.group_builder = (settings.group_builder == true) ? 'true' : 'false';;
        $scope.pfrm.chat_status = (settings.chat_status == true) ? 'true' : 'false';
        $scope.pfrm.student_chat_enabled = settings.student_chat_enabled;
        $scope.pfrm.parent_chat_enabled = settings.parent_chat_enabled;
        $scope.pfrm.placement_test = settings.placement_test;
        $scope.pfrm.auto_progression = settings.auto_progression;
        $scope.pfrm.challenges_frequency = (typeof settings.challenges_frequency != 'undefined') ?
            settings.challenges_frequency : '';
        $scope.pfrm.frequency_of_challenges_by = settings.frequency_of_challenges_by;
        $scope.pfrm.auto_progression_by = settings.auto_progression_by;
        $scope.pfrm.frequency_of_challenges_for_individual = (typeof settings.frequency_of_challenges_for_individual != 'undefined') ?
            settings.frequency_of_challenges_for_individual : '';
        $scope.pfrm.frequency_of_challenges_for_group = (typeof settings.frequency_of_challenges_for_group != 'undefined') ?
            settings.frequency_of_challenges_for_group : '';
        $scope.pfrm.auto_progression_for_individual = (typeof settings.auto_progression_for_individual != 'undefined') ?
            settings.auto_progression_for_individual : '';
        $scope.pfrm.auto_progression_for_group = (typeof settings.auto_progression_for_group != 'undefined') ?
            settings.auto_progression_for_group : '';
      }
    });
  };

  $scope.pfrm = {};
  $scope.pfrm.question_type = {};
  $scope.pfrm.frequency_of_challenges_for_individual = '';
  $scope.pfrm.frequency_of_challenges_for_group = '';
  $scope.pfrm.auto_progression_for_individual = '';
  $scope.pfrm.auto_progression_for_group = '';
  $scope.pfrm.placement_test = true;
  $scope.pfrm.auto_progression = true;
  $scope.changeStatus = function(question_id) {
    $scope.pfrm.question_type[question_id] = !$scope.pfrm.question_type[question_id];
  };

  $scope.teacherClassSettings = function() {
    getTeacherGrades();
    getQuestionType();
  };

  function getQuestionType() {
    teacherHttpService.questionType().success(function(resp) {
      if (resp.status == true) {
        $scope.question_types = resp.data;
        angular.forEach(resp.data , function(question, index) {
          $scope.pfrm.question_type[question.id] = true;
        });
      }
    }).error(function(x) {
      alert('Some Error occured while getting question types');
    });
  }

  function getTeacherGrades() {
    teacherHttpService.getTeacherGrades(get_uid, user_roles['teacher']).success(function (resp) {
      if (resp.status == true) {
       $scope.grades = resp.response;
      } else {
        if (resp.message != '') {
          alert(resp.message);
        } else {
          alert('Some Error occured while saving data');
        }
      }
    }).error(function(x) {
      alert('Some Error occured while saving data');
    });
  }

  $scope.submitTeacherSettingForClass = function(pfrm) {
    if ($scope.selected_grade == '' || $scope.subject_name == '') {
      alert('Please choose subject or grade to save settings');
      return false;
    }

    if (pfrm.frequency_of_challenges_by == 'all_class') {
      pfrm.frequency_of_challenges_for_group = '';
      pfrm.frequency_of_challenges_for_individual = '';
    } else if (pfrm.frequency_of_challenges_by == 'group' && pfrm.frequency_of_challenges_for_group == '') {
      alert('Kindly choose a group from frequency of challenges');
      return false;
    } else if (pfrm.frequency_of_challenges_by == 'individual' && pfrm.frequency_of_challenges_for_individual == '') {
      alert('kindly choose an individual for frequency of challenge');
      return false;
    }

    if (pfrm.frequency_of_challenges_by == 'group') {
      pfrm.frequency_of_challenges_for_individual = '';
    } else if (pfrm.frequency_of_challenges_by == 'individual') {
      pfrm.frequency_of_challenges_for_group = '';
    }

    if (pfrm.auto_progression_by == 'all_class') {
      pfrm.auto_progression_for_group = '';
      pfrm.auto_progression_for_individual = '';
    } else if (pfrm.auto_progression_by == 'group' && pfrm.auto_progression_for_group == '') {
      alert('Kindly choose a group fro auto progression');
      return false;
    } else if (pfrm.auto_progression_by == 'individual' && pfrm.auto_progression_for_individual == '') {
      alert('kindly choose an individual for auto progression');
      return false;
    }

    if (pfrm.auto_progression_by == 'group') {
      pfrm.auto_progression_for_individual = '';
    } else if (pfrm.auto_progression_by == 'individual') {
      pfrm.auto_progression_for_group = '';
    }

    pfrm.group_builder = (pfrm.group_builder == 'false') ? false : true;
    pfrm.chat_status = (pfrm.chat_status == 'false') ? false : true;
    var data = {
      user_id: get_uid,
      level_id : $scope.grade_id,
      course_id : $scope.subject_id,
      course_name: $scope.subject_name,
      settings: pfrm
    }
    teacherHttpService.setTeacherSettings(data).success(function (resp) {
      if (resp.status == true) {
        alert('Your settings saved successfully');
      } else {
        if (typeof resp.message != 'undefined' || resp.message != '') {
          alert(resp.message);
        } else {
          alert('Some Error occured while saving data');
        }
      }
    }).error(function(x) {
      alert('Some Error occured while saving data');
    });
  };
}]).controller('teacherScopeSequence',['$rootScope','$scope','teacherHttpService','$location','user_roles','commonActions','$routeParams','$compile','mlg_points','$timeout',
  function($rootScope,$scope,teacherHttpService,$location,user_roles,commonActions,$routeParams,$compile,mlg_points,$timeout) {
    var get_uid=commonActions.getcookies(get_uid);
    var skill = '';
    var grade = '';
    var course = '';
    skill = $routeParams.skill;
    var frm = {};
    $scope.skill = [];
    $scope.grpId = '0';
    var optionChecked = '';
    $scope.scopeSubSkills = [];
    $scope.startDate = [];
    $scope.endDate = [];
    $scope.auto_progression = '';
    $scope.auto_progression_by = '';
    $scope.auto_progression_for_individual = '';
    $scope.auto_progression_for_group = '';
    var radios = document.getElementsByName('SCOPE');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        optionChecked = radios[i].value;
        break;
      }
    }
    var groupId = '';
    var groupName = '';
    $scope.scopeGradeModel = [];
    var lUrl = $location.url();
    if(typeof lUrl.split('?') != 'undefined') {
      var LId = lUrl.split('?');
    }
    if(typeof LId[1] != 'undefined') {  
      var cId =  LId[1].split('&F');
      grade = cId[0].toString();
      course = cId[1].toString();
      groupName  = cId[2].toString();
      groupId = cId[3].toString();
      optionChecked = groupName;
    }
    $scope.option = optionChecked;
    teacherHttpService.getTeacherGrades(get_uid,user_roles['teacher']).success(function(response) {
      if (response.status == true) {          
        $scope.scopeLevel = response.grade;
        if(grade != 'undefined') {
          angular.forEach($scope.scopeLevel,function(val,ki){
            if(val['id'] == grade){
              $scope.scopeGradeModel = val['id'];
            }
          });
          teacherHttpService.getTeacherDetailsForContent(get_uid,grade,-1,user_roles['teacher']).success(function(response) {
            $scope.scopeSubject = response.response;
            angular.forEach($scope.scopeSubject,function(val,ki){
              if(val['course_id'] == course){
                $scope.scopeCourseModel = val['course_id'];
              }
            });
          }).error(function(error) {
//                $scope.msg= 'Some technical error occured.';
          });
          /** get teacher student start**/
            teacherHttpService.getStudentsOfSubjectForTeacher(get_uid,course).success(function(response_students) { 
             if (response_students.response.status == "true") {
               $scope.students = response_students.response.students;
               if(groupName == 'people'){
                angular.forEach($scope.students,function(val,ki){
                  if(val['id'] == groupId){
                    $scope.scopePeopleModel = val['id'];
                  }
                });
              }
             }else{
               $scope.student_Errormessage=response_students.response.message;
             } 
            });
             /** get teacher student end**/
            // API to call all groups of a teacher
            teacherHttpService.getGroupsOfSubjectForTeacher(get_uid,course).success(function(respGroup) {
             if (respGroup.response.status == "true") {
               $scope.groups = respGroup.response.groups;
               if(groupName == 'group'){
                angular.forEach($scope.groups,function(val,ki){
                  if(val['id'] == groupId){
                    $scope.scopeGroupModel = val['id'];
                  }
                });
              }
             }
            });
            
          teacherHttpService.teacherScope(get_uid,course,groupName,groupId).success(function(response) {
            if(response.status == true) {
              if(response.by == 'course') {
                $scope.scopeSkills = response.response;
              }else if(response.by == 'scope') {
                $scope.scopeSkills = angular.fromJson(response.response[0].scope);
              }
              angular.forEach($scope.scopeSkills,function(sub,key){
                teacherHttpService.teacherScope(get_uid,sub['course_id'],optionChecked,id).success(function(response) {
                 if(response.status == true) {
                   if(response.by == 'course') {
                     if(response.response != '') {
                       $scope.subSkill.push(response.response);
                     }
                   }else if(response.by == 'scope') {
                     if(angular.fromJson(response.response[0].scope) != '') {
                       $scope.subSkill.push(angular.fromJson(response.response[0].scope));
                     }
                   }
                 } 
               }).error(function(error) {
                 $scope.msg= 'Some technical error occured.';
               });          
            });
            } 
          }).error(function(error) {
            $scope.msg= 'Some technical error occured.';
          });
          }
        mlg = response.url;
      }else{
        $scope.msg = 'unable to find class';
      }
    });	
    // this api used for get templates
     teacherHttpService.getScopeTemplates(get_uid,'skills').success(function(response) {
      if (response.status == true) {          
        $scope.template = response.response;
      }else{
      }
    });	
    // on the basis of grade fetch the course list.
    $scope.getScopeGrade = function(data){
      if(data != '') {
        grade = data;
        teacherHttpService.getTeacherDetailsForContent(get_uid,grade,-1,user_roles['teacher']).success(function(response) {
          $scope.scopeSubject = response.response;
        }).error(function(error) {
              $scope.msg= 'Some technical error occured.';
        });
      }  
    }
    // on the basis of courseid fetch skill
    $scope.subSkill= [];
    $scope.getScopeCourse = function(data){
      if(data != '') {
        course = data;
        var id = null;
        /**get teacher scopes start**/
        teacherHttpService.teacherScope(get_uid,course,optionChecked,id).success(function(response) {
          if(response.status == true) {
            if(response.by == 'course') {
              $scope.scopeSkills = response.response;
            }else if(response.by == 'scope') {
              $scope.scopeSkills = angular.fromJson(response.response[0].scope);
            }
            angular.forEach($scope.scopeSkills,function(sub,key){
              teacherHttpService.teacherScope(get_uid,sub['course_id'],optionChecked,id).success(function(response) {
               if(response.status == true) {
                 if(response.by == 'course') {
                   if(response.response != '') {
                     $scope.subSkill.push(response.response);
                   }
                 }else if(response.by == 'scope') {
                   if(angular.fromJson(response.response[0].scope) != '') {
                     $scope.subSkill.push(angular.fromJson(response.response[0].scope));
                   }
                 }
               } 
             }).error(function(error) {
               $scope.msg= 'Some technical error occured.';
             });          
          });
          } 
        }).error(function(error) {
          $scope.msg= 'Some technical error occured.';
        });
        // get teachersettings for autoprogression on and off.
       
        var data = {user_id : get_uid, level_id: grade, course_id: course}
        teacherHttpService.getTeacherSettings(data).success(function(response) {
          if (response.status == true) {
            var result = response.result;
            var settings = JSON.parse(result.settings);
            $scope.auto_progression = settings.auto_progression;
            $scope.auto_progression_for = settings.auto_progression_by;
            $scope.auto_progression_for_individual = (typeof settings.auto_progression_for_individual != 'undefined') ?
               settings.auto_progression_for_individual : '';
            $scope.auto_progression_for_group = (typeof settings.auto_progression_for_group != 'undefined') ?
                settings.auto_progression_for_group : '';
          }
        });
        /**get teacher scopes end**/
        /** get teacher student start**/
        teacherHttpService.getStudentsOfSubjectForTeacher(get_uid,course).success(function(response_students) { 
         if (response_students.response.status == "true") {
           $scope.students = response_students.response.students;
         }else{
           $scope.student_Errormessage=response_students.response.message;
         } 
        });
         /** get teacher student end**/
        // API to call all groups of a teacher
        teacherHttpService.getGroupsOfSubjectForTeacher(get_uid,course).success(function(respGroup) {
         if (respGroup.response.status == "true") {
           $scope.groups = respGroup.response.groups;
         }
        });
      }  
    }
    // add new skill
    $scope.setNewSkill = function(data) {
      var newSkill = '';
      var start_date = '';
      var end_date = '';
      if(data != undefined){
        var newSkill = data.newSkill;
      }
      if($scope.startDate != undefined) {
       start_date = $scope.startDate; 
      }
      if($scope.startDate != undefined) {
       end_date = $scope.endDate; 
      }
      var skillDetail = {
        uid : get_uid,
        grade : grade,
        course_id : course,
        skill_name : newSkill,
        start_date : start_date,
        end_date : end_date,
      }; 
      teacherHttpService.addNewScope(skillDetail).success(function(response) {
        if(response.status == true) {
          $scope.msg = response.message;
          $timeout(function () {$scope.message = ""; }, 3000);
          /**get teacher scopes start**/
          teacherHttpService.teacherScope(get_uid,course,$scope.option,$scope.grpId).success(function(response) {
            if(response.status == true) {
              if(response.by == 'course') {
                $scope.scopeSkills = response.response;
              }else if(response.by == 'scope') {
                $scope.scopeSkills = angular.fromJson(response.response[0].scope);
              }
              angular.forEach($scope.scopeSkills,function(sub,key){
                teacherHttpService.teacherScope(get_uid,sub['course_id'],$scope.option,$scope.grpId).success(function(response) {
                 if(response.status == true) {
                   if(response.by == 'course') {
                     if(response.response != '') {
                       $scope.subSkill.push(response.response);
                     }
                   }else if(response.by == 'scope') {
                     if(angular.fromJson(response.response[0].scope) != '') {
                       $scope.subSkill.push(angular.fromJson(response.response[0].scope));
                     }
                   }
                 } 
               }).error(function(error) {
                 $scope.msg= 'Some technical error occured.';
               });          
            });
            } 
          }).error(function(error) {
            $scope.msg= 'Some technical error occured.';
          });
        }else{
          $scope.message = response.message;
          $timeout(function () {$scope.message = ""; }, 3000);
        }
      });
    }
    /** save scope start**/
    $scope.saveScope = function() {
      var scope = [];
      angular.forEach($scope.scopeSkills,function(scop,ki){
        scope.push({
          'course_id' : scop['course_id'],
          'name' : scop['name'],
          'start_date' : scop['start_date'],
          'end_date' : scop['end_date'],
          'parent_id' : course,
          'visibility' : scop['visibility'],
        });
      });
      var detail = {
        scope : scope,
        grade :grade,
        parent_id : course,
        created_by : get_uid,
        type : $scope.option,
        people : $scope.scopePeopleModel,
        group : $scope.scopeGroupModel
      };
      teacherHttpService.scopeAndSequence(detail).success(function(response) {
        if(response.status == true) {   
          $scope.msg = response.message;
          $timeout(function () {$scope.msg = ""; }, 3000);
        }else{
          $scope.message = response.message;
          $timeout(function () {$scope.message = ""; }, 3000);
        } 
      });
    }
    /** Save Scope End**/
    /**chang in group start**/
    $scope.getGroup = function(data) {
      $scope.grpId = data;
      ($scope.grpId).toString();
      $scope.option = 'group';
      /**get teacher scopes start**/
        teacherHttpService.teacherScope(get_uid,course,$scope.option,data).success(function(response) {
          if(response.status == true) {
            if(response.by == 'course') {
              $scope.scopeSkills = response.response;
            }else if(response.by == 'scope' && response.response != '' ) {
              $scope.scopeSkills = angular.fromJson(response.response[0].scope);
            }
          } 
        }).error(function(error) {
          $scope.msg= 'Some technical error occured.';
        });
        /**get teacher scopes end**/
    }
    /**chang in group end**/
    /**chang in group start**/
    $scope.getPeople = function(data) {
      $scope.grpId = data;
      ($scope.grpId).toString();
      $scope.option = 'people';
      /**get teacher scopes start**/
        teacherHttpService.teacherScope(get_uid,course,$scope.option,data).success(function(response) {
          if(response.status == true) {
            if(response.by == 'course') {
              $scope.scopeSkills = response.response;
            }else if(response.by == 'scope' && response.response != '') {
              $scope.scopeSkills = angular.fromJson(response.response[0].scope);
            }
          } 
        }).error(function(error) {
          $scope.msg= 'Some technical error occured.';
        });
        /**get teacher scopes end**/
    }
    /**chang in group end**/
    /**save scope as template**/
    $scope.saveScopeTemplate = function(data,type) {
      var template = [];
      angular.forEach($scope.scopeSkills,function(scop,ki){
        template.push({
          'course_id' : scop['course_id'],
          'name' : scop['name'],
          'parent_id' : course,
          'start_date' : scop['start_date'],
          'end_date' : scop['end_date'],
          'visibility' : scop['visibility'],
        });
      });
      var detail = {
        template : template,
        grade :grade,
        parent_id : course,
        created_by : get_uid,
        name : data.template_name,
        type : type,
        created_for : $scope.option,
        id : $scope.grpId,
      };
      teacherHttpService.scopeAndSequenceTemplate(detail).success(function(response) {
        if(response.status == true) {   
          $scope.msg = response.message;
          $timeout(function () {$scope.msg = ""; }, 3000);
          // this api used for get templates
          teacherHttpService.getScopeTemplates(get_uid,'skills').success(function(response) {
           if (response.status == true) {          
             $scope.template = response.response;
           }
          });
        }else{
          $scope.message = response.message;
          $timeout(function () {$scope.message = ""; }, 3000);
        }
      });
    }
    /** get template **/
    $scope.scopeGradeModel = [];
    $scope.getTemplate = function(data) { 
      if($scope.templat == undefined) {
        //get template gor skill
        angular.forEach($scope.template,function(scope ,key){
          if(scope['id'] == data) {
            $scope.scopeGradeModel = scope['grade_id'].toString();
            teacherHttpService.getTeacherDetailsForContent(get_uid,scope['grade_id'],-1,user_roles['teacher']).success(function(response) {
              $scope.scopeSubject = response.response;
              $scope.scopeCourseModel = scope['parent_id'].toString();
              if(scope['type'] == 'group') {
               // API to call all groups of a teacher
                teacherHttpService.getGroupsOfSubjectForTeacher(get_uid,scope['parent_id']).success(function(respGroup) {
                 if (respGroup.response.status == "true") {
                   $scope.groups = respGroup.response.groups;
                   $scope.scopeGroupModel = scope['created_for'];
                 }
                }); 
              }
              if(scope['type'] == 'people') {
               /** get teacher student start**/
                teacherHttpService.getStudentsOfSubjectForTeacher(get_uid,course).success(function(response_students) { 
                 if (response_students.response.status == "true") {
                   $scope.students = response_students.response.students;
                   scopePeopleModel = scope['created_for'];
                 } 
                }); 
              }
            }).error(function(error) {
                  $scope.message= 'Some technical error occured.';
            });
            $scope.option = scope['type'];
            $scope.scopeSkills = angular.fromJson(scope['template']);
          }
        });
      }else {
        // get template for subskill
        angular.forEach($scope.templat,function(scope ,key){
          if(scope['id'] == data) {
            $scope.scopeGradeModel = scope['grade_id'];
            teacherHttpService.getTeacherDetailsForContent(get_uid,scope['grade_id'],-1,user_roles['teacher']).success(function(response) {
              $scope.scopeSubject = response.response;
              $scope.scopeCourseModel = scope['parent_id'];
            }).error(function(error) {
                  $scope.message= 'Some technical error occured.';
            });
              $scope.scopeSubSkills = angular.fromJson(scope['template']);
          }
        });
      } 
    }
    /** subskil scope and sequence start**/
    if(skill != undefined) {
      // get teachersettings for autoprogression on and off.
      var data = {user_id : get_uid, level_id: $routeParams.grade, course_id: $routeParams.subject}
      teacherHttpService.getTeacherSettings(data).success(function(response) {
        if (response.status == true) {
          var result = response.result;
          var settings = JSON.parse(result.settings);
          $scope.auto_progression = settings.auto_progression;
          $scope.auto_progression_for = settings.auto_progression_by;
          $scope.auto_progression_for_individual = (typeof settings.auto_progression_for_individual != 'undefined') ?
             settings.auto_progression_for_individual : '';
          $scope.auto_progression_for_group = (typeof settings.auto_progression_for_group != 'undefined') ?
              settings.auto_progression_for_group : '';
        }
      });
    $scope.grpId = $routeParams.id;
        // this api used for get templates
      teacherHttpService.getScopeTemplates(get_uid,'subSkill').success(function(response) {
        if (response.status == true) {          
          $scope.templat = response.response;
        }
      });	
      var courses = $routeParams.subject;
      var options = $routeParams.group;
      $scope.setNewSubSkill = function(data) {
        var newSubSkill = '';
        var start_date = '';
        var end_date = '';
        if(data != undefined){
          newSubSkill = data.newSubSkill;
        }
        if($scope.startDate != undefined) {
         start_date = $scope.startDate; 
        }
        if($scope.startDate != undefined) {
         end_date = $scope.endDate; 
        }
        var skillDetail = {
          uid : get_uid,
          grade : $routeParams.grade,
          course_id : skill,
          skill_name : newSubSkill,
          start_date : start_date,
          end_date : end_date,
        };
        teacherHttpService.addNewScope(skillDetail).success(function(response) {
          if(response.status == true) {
            $scope.msg = response.message;
            $timeout(function () {$scope.message = ""; }, 3000);
             /** get subskill**/
            teacherHttpService.teacherScope(get_uid,skill,options,$scope.grpId).success(function(response) {
              if(response.status == true) {
                if(response.by == 'course') {
                  $scope.scopeSubSkills = response.response;
                }else if(response.by == 'scope' && response.response != '') {
                  $scope.scopeSubSkills = angular.fromJson(response.response[0].scope);
                }
              } 
            }).error(function(error) {
              $scope.msg= 'Some technical error occured.';
            });
          }else{
            $scope.message = response.message;
            $timeout(function () {$scope.message = ""; }, 3000);
          }
        });
      } 
      /** get subskill**/
      $scope.Skills = [];
      teacherHttpService.teacherScope(get_uid,skill,options,null).success(function(response) {
        if(response.status == true) {
          if(response.by == 'course') {
            $scope.scopeSubSkills = response.response;
          }else if(response.by == 'scope' && response.response != '') {
            $scope.scopeSubSkills = angular.fromJson(response.response[0].scope);
          }
        } 
      }).error(function(error) {
        $scope.msg= 'Some technical error occured.';
      });
      teacherHttpService.teacherScope(get_uid,courses,options,$scope.grpId).success(function(response) {
        var tempArray = [];
        if(response.status == true) {
          if(response.by == 'course') {
            var temp = response.response;
            angular.forEach(temp,function(val,key){
              console.log(val['course_id']+';'+skill);
              if(val['course_id'] == skill ) {
                $scope.Skills.push(val);
              }
            });
          }else if(response.by == 'scope' && response.response != '') {
            console.log(response.response);
            var temp = angular.fromJson(response.response[0].scope);
            angular.forEach(temp,function(val,key){
              console.log(val['course_id']+';'+skill);
              if(val['course_id'] == skill ) {
                tempArray[0] = val;
              }
            });
            $scope.Skills = tempArray;
          }
        } 
      }).error(function(error) {
        $scope.msg= 'Some technical error occured.';
      });
      /** save subskill scope start**/
    $scope.saveScopeSubSkill = function() {
      var scope = [];
      angular.forEach($scope.scopeSubSkills,function(scop,ki){
        scope.push({
          'course_id' : scop['course_id'],
          'name' : scop['name'],
          'start_date' : scop['start_date'],
          'end_date' : scop['end_date'],
          'parent_id' : skill,
          'visibility' : scop['visibility'],
        });
      });
      var detail = {
        scope : scope,
        grade :$routeParams.grade,
        parent_id : skill,
        created_by : get_uid,
        type : options,
        people : 1,
        group : 1,
      };
      teacherHttpService.scopeAndSequence(detail).success(function(response) {
        if(response.status == true) {   
          $scope.msg = response.message;
          $timeout(function () {$scope.msg = ""; }, 3000);
        }else{
          $scope.msg = response.message;
          $timeout(function () {$scope.msg = ""; }, 3000);
        }
      });
    }
    /** Save Scope End**/
    }
    /**save scope as template for sub skill**/
    $scope.saveScopeSubSkillTemplate = function(data,type) {
      var templat = [];
      var id = '';
      angular.forEach($scope.scopeSubSkills,function(scop,ki){
        templat.push({
          'course_id' : scop['course_id'],
          'name' : scop['name'],
          'parent_id' : skill,
          'start_date' : scop['start_date'],
          'end_date' : scop['end_date'],
          'visibility' : scop['visibility'],
        });
      });
      grade = $routeParams.grade;
      course = $routeParams.subject;
      $scope.option = $routeParams.group;
      id = $routeParams.id;
      var detail = {
        template : templat,
        grade :grade,
        parent_id : course,
        created_by : get_uid,
        name : data.template_name,
        status : 1,
        type : type,
        created_for : $scope.option,
        id : id
      };
      teacherHttpService.scopeAndSequenceTemplate(detail).success(function(response) {
        if(response.status == true) {   
          $scope.msg = response.message;
          // this api used for get templates
          teacherHttpService.getScopeTemplates(get_uid,'subSkill').success(function(response) {
            if (response.status == true) {          
              $scope.templat = response.response;
            }
          });	
          $timeout(function () {$scope.msg = ""; }, 3000);
        }else{
          $scope.message = response.message;
          $timeout(function () {$scope.message = ""; }, 3000);
        }
      });
    }
    $scope.backFunction = function() {
       window.location.href='teacher/scope-sequence?'+$routeParams.grade+'&F'+$routeParams.subject+'&F'+$routeParams.group+'&F'+$routeParams.id;
    }
    /** ng-sortable**/
   $scope.sortableOptions = {
      orderChanged: function(event){
//        console.log($scope.scopeSkills)
      }
   };
    $scope.changeStatus = function(status,id){
      if(status == true) {
        angular.forEach($scope.scopeSkills,function(scope,key){
          if(scope['course_id'] == id) {
            scope['visibility'] = '1';
          }
        });
        angular.forEach($scope.scopeSubSkills,function(scope,key){
          if(scope['course_id'] == id) {
            scope['visibility'] = '1';
          }
        });
      }else if(status == false) {
        angular.forEach($scope.scopeSkills,function(scope ,key){
          if(scope['course_id'] == id) {
            scope['visibility'] = '0';
          }
        }); 
        angular.forEach($scope.scopeSubSkills,function(scope ,key){
          if(scope['course_id'] == id) {
            scope['visibility'] = '0';
          }
        });
      }
      if($scope.scopeSkills != 'undefined') {
        return $scope.scopeSkills;
      }
      if($scope.scopeSubSkills != 'undefined') {
        return $scope.scopeSubSkills;
      }
    }
    /** js **/
//    var headertext = [],
//    headers = document.querySelectorAll(".table-teacherContent th"),
//    tablerows = document.querySelectorAll(".table-teacherContent th"),
//    tablebody = document.querySelector(".table-teacherContent tbody");
//
//    for(var i = 0; i < headers.length; i++) {
//      var current = headers[i];
//      headertext.push(current.textContent.replace(/\r?\n|\r/,""));
//    }
//    for (var i = 0, row; row = tablebody.rows[i]; i++) {
//      for (var j = 0, col; col = row.cells[j]; j++) {
//        col.setAttribute("data-th", headertext[j]);
//      }
//    }
//      $('[data-toggle="tooltip"]').tooltip();
//    $(window).load(function(){
//        $(".modal-SequencePreview .modal-body").mCustomScrollbar({
//          theme:"dark"
//        });
//    });
  /** js for swicwery on of start**/
      $("body").on('click','.switchery-default', function(e){
          e.preventDefault();
          var checked = $(this).siblings(".js-switch").attr("checked");
          $(this).toggleClass("off");
          if(checked == "checked"){
            //on
            $(this).siblings(".js-switch").attr("checked", false);
            var clss = $(this).attr("class");
            var attr = clss.split(' ');
            $scope.changeStatus(true,attr[2]);
          }else {
            //off
            $(this).siblings(".js-switch").attr("checked", true);
            var clss = $(this).attr("class");
            var attr = clss.split(' ');
            $scope.changeStatus(false,attr[2]);
          }
      });
  /** js for swicwery on of end**/
 }]).controller('teacherReportCtrl',['$rootScope','$scope','teacherHttpService','$location','user_roles','commonActions','$routeParams','$compile','mlg_points','$timeout','orderByFilter',
  function($rootScope,$scope,teacherHttpService,$location,user_roles,commonActions,$routeParams,$compile,mlg_points,$timeout,orderBy) {
    var get_uid=commonActions.getcookies(get_uid);
    var course = $routeParams.courseid;
    var grade = $routeParams.gradeid;
    var studentId = null;
    var studentType = 'all';
    $scope.sortModel = "mastered";
    var radios = document.getElementsByName('GAP');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        optionChecked = radios[i].value;
        break;
      }
    }
    $scope.option = optionChecked;
    var pgnum = 1;
    var gapPgnum = 1;
    $scope.nexClass = '';
    $scope.preClass = 'disabled';
    if(pgnum > 1) {
      $scope.preClass = '';
    }else if(typeof $scope.lastPage != undefined && pgnum >= $scope.lastPage  ) {
      $scope.nexClass = 'disabled';
      $scope.preClass = '';
    }else if(pgnum > 1 && typeof $scope.lastPage != undefined && pgnum >= $scope.lastPage){
      $scope.nexClass = '';
      $scope.preClass = '';
    }
    if(gapPgnum > 1) {
      $scope.preClass = '';
    }else if(typeof $scope.endPage != undefined && gapPgnum >= $scope.endPage  ) {
      $scope.nexClass = 'disabled';
      $scope.preClass = '';
    }else if(gapPgnum > 1 && typeof $scope.endPage != undefined && gapPgnum >= $scope.endPage){
      $scope.nexClass = '';
      $scope.preClass = '';
    }
    var tempUrl = $location.url();
    var temp = tempUrl.split('#');
    if(typeof temp[1] != 'undefined') {
      pgnum = temp[1];
      gapPgnum = temp[1];
    }
    teacherHttpService.getTeacherStudentReport(get_uid,grade,course,pgnum).success(function(response) {
      if (response.status == true) {          
        $scope.assisment = response.response;
        $scope.NoGap = response.gap;
        $scope.lastPage = response.lastPage;
//        $scope.propertyName = 'name';
//        $scope.reverse = true;
//        $scope.assisment = orderBy($scope.assisment, $scope.propertyName, $scope.reverse);
      }
    });
    teacherHttpService.getTeacherStudentGap(get_uid,grade,course,gapPgnum,studentId,studentType).success(function(response) {
//      if (response.status == true) {          
        $scope.studentGap = response.response;
        $scope.endPage = response.lastPage;
//      }
    });
   $scope.getPrevious = function(data) {
     if(data == 'report') {
      pgnum = pgnum - 1;
      if(pgnum < '1') {
        pgnum = 1;
        $scope.nexClass = '';
        $scope.preClass = 'disabled';
      }else if(pgnum == '1'){
        pgnum = 1;
        $scope.nexClass = '';
        $scope.preClass = 'disabled';
        teacherHttpService.getTeacherStudentReport(get_uid,grade,course,pgnum).success(function(response) {
          if (response.status == true) {          
            $scope.assisment = response.response;
            $scope.NoGap = response.gap;
            $scope.lastPage = response.lastPage;
          }
        });
      }else{
        if(pgnum > 1) {
         $scope.preClass = '';
       }else if(typeof $scope.lastPage != undefined && pgnum == $scope.lastPage  ) {
         $scope.nexClass = 'disabled';
         $scope.preClass = '';
       }else if(pgnum > 1 && typeof $scope.lastPage != undefined && pgnum >= $scope.lastPage){
         $scope.nexClass = '';
         $scope.preClass = '';
       }
       teacherHttpService.getTeacherStudentReport(get_uid,grade,course,pgnum).success(function(response) {
        if (response.status == true) {          
          $scope.assisment = response.response;
          $scope.NoGap = response.gap;
          $scope.lastPage = response.lastPage;
        }
      });
      } 
    }
    if(data == 'gap') {
      gapPgnum = gapPgnum - 1;
      if(gapPgnum < '1') {
        gapPgnum = 1;
        $scope.nexClass = '';
        $scope.preClass = 'disabled';
      }else if(gapPgnum == '1'){
        gapPgnum = 1;
        $scope.nexClass = '';
        $scope.preClass = 'disabled';
        teacherHttpService.getTeacherStudentGap(get_uid,grade,course,gapPgnum,studentId,studentType).success(function(response) {
//      if (response.status == true) {          
          $scope.studentGap = response.response;
          $scope.endPage = response.lastPage;
  //      }
      });
      }else{
        if(gapPgnum > 1) {
         $scope.preClass = '';
       }else if(typeof $scope.endPage != undefined && gapPgnum == $scope.endPage  ) {
         $scope.nexClass = 'disabled';
         $scope.preClass = '';
       }else if(gapPgnum > 1 && typeof $scope.endPage != undefined && gapPgnum >= $scope.endPage){
         $scope.nexClass = '';
         $scope.preClass = '';
       }
       teacherHttpService.getTeacherStudentGap(get_uid,grade,course,gapPgnum,studentId,studentType).success(function(response) {
  //      if (response.status == true) {          
          $scope.studentGap = response.response;
          $scope.endPage = response.lastPage;
  //      }
      });
      } 
    }
 }
 $scope.getNext = function(data) {
   if(data == 'report') {
    pgnum = pgnum + 1;
    if(pgnum > $scope.lastPage) {
      $scope.nexClass = 'disabled';
      $scope.preClass = '';
      pgnum = pgnum -1 ;
    }else if(pgnum == $scope.lastPage) {
      $scope.nexClass = 'disabled';
      $scope.preClass = '';
      teacherHttpService.getTeacherStudentReport(get_uid,grade,course,pgnum).success(function(response) {
        if (response.status == true) {          
          $scope.assisment = response.response;
          $scope.NoGap = response.gap;
          $scope.lastPage = response.lastPage;
        }
      });
    }else{
     teacherHttpService.getTeacherStudentReport(get_uid,grade,course,pgnum).success(function(response) {
        if (response.status == true) {          
          $scope.assisment = response.response;
          $scope.NoGap = response.gap;
          $scope.lastPage = response.lastPage;
        }
      });
   }
   if(pgnum > 1) {
       $scope.preClass = '';
     }else if(typeof $scope.lastPage != undefined && pgnum == $scope.lastPage  ) {
       $scope.nexClass = 'disabled';
       $scope.preClass = '';
     }else if(pgnum > 1 && typeof $scope.lastPage != undefined && pgnum < $scope.lastPage){
       $scope.nexClass = '';
       $scope.preClass = '';
     } 
   }
   if(data == 'gap') {
     gapPgnum = gapPgnum + 1;
    if(gapPgnum > $scope.endPage) {
      $scope.nexClass = 'disabled';
      $scope.preClass = '';
      gapPgnum = gapPgnum -1 ;
    }else if(gapPgnum == $scope.endPage) {
      $scope.nexClass = 'disabled';
      $scope.preClass = '';
      teacherHttpService.getTeacherStudentGap(get_uid,grade,course,gapPgnum,studentId,studentType).success(function(response) {
  //      if (response.status == true) {          
          $scope.studentGap = response.response;
          $scope.endPage = response.lastPage;
  //      }
      });
    }else{
     teacherHttpService.getTeacherStudentGap(get_uid,grade,course,gapPgnum,studentId,studentType).success(function(response) {
  //      if (response.status == true) {          
          $scope.studentGap = response.response;
          $scope.endPage = response.lastPage;
  //      }
      });
   }
   if(gapPgnum > 1) {
       $scope.preClass = '';
     }else if(typeof $scope.endPage != undefined && gapPgnum == $scope.endPage  ) {
       $scope.nexClass = 'disabled';
       $scope.preClass = '';
     }else if(gapPgnum > 1 && typeof $scope.endPage != undefined && gapPgnum < $scope.endPage){
       $scope.nexClass = '';
       $scope.preClass = '';
     }
   }
}
   $scope.range = function(min, max, step){
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) input.push(i);
      return input;
  };
  /** get teacher student start**/
  teacherHttpService.getStudentsOfSubjectForTeacher(get_uid,course).success(function(response_students) { 
   if (response_students.response.status == "true") {
     $scope.students = response_students.response.students;
   }else{
     $scope.student_Errormessage=response_students.response.message;
   } 
  });
   /** get teacher student end**/
  // API to call all groups of a teacher
  teacherHttpService.getGroupsOfSubjectForTeacher(get_uid,course).success(function(respGroup) {
   if (respGroup.response.status == "true") {
     $scope.groups = respGroup.response.groups;
   }
  });
  // this function is used for get student gap
  $scope.getStudentGap = function(stdId){
    $scope.modelAreaGap = [];
    $scope.gapSkill = [];
    $scope.gapSubSkill =[];
    $scope.gapStudentName = '';
    var temp_skill = '';
    var temp_subSkill = '';
//    var data = {};
    var k = 0;
    angular.forEach($scope.NoGap,function(value,key){
      if(key == stdId) {
        angular.forEach(value,function(val,ki){
          if(temp_skill != val['skill_id']) {
            temp_skill = val['skill_id'];
            $scope.gapSkill.push({
              'skill_id': val['skill_id'],
              'skill_name': val['skill_name'],
            })
          }
            $scope.gapSubSkill.push({
              'sub_skill_id': val['sub_skill_id'],
              'sub_skill_name': val['sub_skill_name'],
              'parent_id' : val['skill_id'],
            });
        });
        $('#modal-areaOfGaps').modal();
      } 
    });
  }
  $scope.getPeople = function(data){
    $scope.option = 'student';
    studentType = 'student';
    studentId = data;
    teacherHttpService.getTeacherStudentGap(get_uid,grade,course,gapPgnum,studentId,studentType).success(function(response) {
  //      if (response.status == true) {          
          $scope.studentGap = response.response;
          $scope.endPage = response.lastPage;
  //      }
    });
  }
  $scope.getGroup = function(data){
    $scope.option = 'group';
    studentType = 'group';
    angular.forEach($scope.groups,function(val,key){
      if(val['id'] == data) {
        studentId = val['student_id'];
      }
    });
    teacherHttpService.getTeacherStudentGap(get_uid,grade,course,gapPgnum,studentId,studentId,studentType).success(function(response) {
  //      if (response.status == true) {          
          $scope.studentGap = response.response;
          $scope.endPage = response.lastPage;
  //      }
    });
  }
  $scope.sortBy = function(propertyName) {
   $scope.sortModel = propertyName;
  };
 }]).filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
    filtered.sort(function (a, b) {
      return (a[field] > b[field] ? 1 : -1);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
});;
