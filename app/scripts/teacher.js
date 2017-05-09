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
      teacherHttpResponse.getAllCourseList=function(parent_id,type){
        return $http({
          method:'GET',			
          url  : urlParams.baseURL+urlParams.getAllCourseList+'/'+parent_id+'/'+type
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
      teacherHttpResponse.getTemplateDetail=function(uid){
        return $http({
          method:'GET',
          url  : urlParams.baseURL+urlParams.getTemplateDetail+'/'+uid
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
      teacherHttpResponse.getUserContent=function(uid){
        return $http({
          method:'GET',
          url  : urlParams.baseURL+urlParams.getUserContent+'/'+uid
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

      teacherHttpResponse.getStudentsOfClass=function(tid,course_id){
        return $http({
          method:'GET',            
          url  : urlParams.baseURL+urlParams.getStudentsOfClass+'?teacher_id='+tid+'&course_id='+course_id
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
       country : data.country,
       state : data.state,
       city : data.city,
       district : data.district,
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

	/*$scope.deleteCustomer = function (customer) {
		var index = $scope.stcourses.indexOf(customer);
		$scope.stcourses.splice(index, 1);
		// $scope.stcourses.splice($index, 1);
		$scope.$emit('customerDeleted', customer); 
	};*/
  
}])
.controller('teacherCreateClassCtrl',['$rootScope','$scope','$timeout', 'teacherHttpService','loginHttpService','$location','user_roles','commonActions','$routeParams',
  function($rootScope,$scope,$timeout,teacherHttpService,loginHttpService,$location,user_roles,commonActions,$routeParams) {

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
        teacherHttpService.getStudentsOfClass(get_uid,stcourseid).success(function(student_response) {
            //console.log(student_response);
            $scope.students=student_response.response.students;
            
            //to edit the data
            $scope.selected={};
            $scope.editStudent=function(sid){
                $scope.selected.id=sid;
            }

       });
    }
   
  
  $scope.people = [
  //{id:'2', Fname:'naseem', Lname: 'akhtar', email: 'naseem@incaendo.com', Uname:'Naseem', pass:'naseem@123'}
  ];
  
  /*$scope.addPerson = function(){
  var person = {
    //id: $scope.id,
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
   };*/
  

  // start:- To add the student in class
 $scope.submitStudentDetails = function(frmdata){
      if(typeof frmdata.selectedcourse !='undefined'){
          console.log(frmdata.selectedcourse);
          //$scope.today = $filter('date')(new Date(), 'yyyy-mm-dd HH:mm:ss');
          var slct_courseid=frmdata.selectedcourse.split(',')[0];
          var slct_courname=frmdata.selectedcourse.split(',')[1];
          var select_course={[slct_courseid]:slct_courname};          
          var d = new Date();
          var sec = d.getSeconds();   
          
          var studentdata={};
               studentdata={
                  username    : frmdata.Fname+get_uid+sec,
                  first_name  : frmdata.Fname,
                  last_name   : frmdata.Lname,
                  password    : frmdata.pass,
                  level_id    : '',
                  dob         : '',
                  created     : $scope.today,
                  emailchoice : '',
                  email       : frmdata.email,
                  school      : '',
                  parent_id   : get_uid,
                  role_id     : 3, 
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
              
                  teacherHttpService.getStudentsOfClass(get_uid,slct_courseid).success(function(student_response) {
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


}])
.controller('teacherLessonCtrl',['$rootScope','$scope','teacherHttpService','loginHttpService','$location','user_roles','commonActions','$routeParams',
  function($rootScope,$scope,teacherHttpService,loginHttpService,$location,user_roles,commonActions,$routeParams) {
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
    var countImg = 0;
    var countDoc = 0;
    var countVideo = 0;
    $scope.frm = {};
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
    $scope.templateDetail = [];
    // template detail show
    teacherHttpService.getTemplateDetail(get_uid).success(function(response) {
      if (response.status == true) {
        var temp = response.data;
        $scope.templateDetail = response.data;
        $scope.template = temp;
        $scope.template.splice(0,0,{'id' :'','template_name' :'---Select template---'});
        $scope.selectedTemplateModel = $scope.template[0][0];
      }else{
        $scope.msg = 'unable to find template';
      }
    });
    //get user content
    var mlg = '';
    teacherHttpService.getUserContent(get_uid).success(function(response) {
      if (response.status == true) {
        $scope.userContent = response.data;
        mlg = response.url;
      }else{
        $scope.msg = 'unable to find content.';
      }
    });
    teacherHttpService.getTeacherGrades(get_uid,user_roles['teacher']).success(function(response) {
      if (response.status == true) {
        $scope.level = (response.grade.level_id).split(',');
//        $scope.level.splice(0,0, '---Select Grade---');
//        $scope.gradeSelected = $scope.level[0];
      }else{
        $scope.msg = 'unable to find class';
      }
    });	
    // on the basis of grade fetch the coursr list.
    $scope.getGradeVal = function(){
      if($scope.gradeSelected != '---Select Grade---') {
        if(subStatus == 0) {
          angular.element('#coursetemp select option').hide();
        }
        grade = $scope.gradeSelected;
        teacherHttpService.getTeacherDetailsForContent(get_uid,grade,-1,user_roles['teacher']).success(function(response) {
          $scope.subject = response.response;
          $scope.subject.splice(0,0,{'level_id' :'','course_id' :'','course_name' :'---Select Course---'});
          $scope.courseSelected = $scope.subject[0][0];
          subStatus = 1;
        }).error(function(error) {
            $scope.msg= 'Some technical error occured.';
        });
      }  
    }
    // on the basis of courseid fetch skill
    $scope.getCourseVal = function(){
      if($scope.gradeSelected != '---Select Subject---') {
       course = $scope.courseSelected;
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
      }  
    }
    $scope.skillEvents = {
            onItemSelect: function(item) {
//                var string = item['id'];
//                skills = string.split('+');
                parentId = item['id'];
//                skillName = skills[1];
                skillId.push(parentId);
                  teacherHttpService.getAllCourseList(parentId,'lesson').success(function(response) {
                  angular.forEach(response.response.course_details, function(value, key) {
                    $scope.subSkill.push({
                      'id' : value['course_id'],
                      'label': value['name']
                     });
                  });
                  }).error(function(error) {
                     $scope.msg= 'Some technical error occured.';
                  });  
            },
            onItemDeselect: function(item) {
                var Id = item['id'];
                angular.forEach(skillId,function(value, key) {
                    if (value == Id) {
                     skillId.splice(key);
                     teacherHttpService.getAllCourseList(Id,'lesson').success(function(response) {
                      angular.forEach(response.response.course_details, function(value, key) {
                        angular.forEach($scope.subSkill, function(val, ki) {
                          if(value['course_id'] == val['id']) {
                            $scope.subSkill.splice(key,1); 
                          } 
                        });  
                      });
                      }).error(function(error) {
                         $scope.msg= 'Some technical error occured.';
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
      doc = $scope.doc;
      img = $scope.img;
      video = $scope.video;
      var content = '';
      var type = '';
      if(data.htmlcontent != undefined){
        content = data.htmlcontent;
        type = 'text';
      }else if(typeof(doc) === 'string'){
        content = doc;
        type = 'doc';
      }else if(typeof(img) === 'string'){
        content = $scope.img;
        type = 'image';
      }else if(typeof(video) === 'string'){
        content = video;
        type = 'video';
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
     };
     teacherHttpService.setContentForLesson(lessonDetail).success(function(response) {
      if(response.status == true){
        $scope.message = response.response;
        window.location.reload();
      }else{
        $scope.message = response.response;
      }
     }).error(function(error) {
     $scope.msg= 'Some technical error occured.';
    }); 
  }
  // set user Content for edit or update
  $scope.setUserContent = function(data) {
    if(countImg == 0 && countDoc == 0 && countVideo ==0) {
      var mysave = angular.element(document.querySelector('#save-content button'));
      mysave.remove();
      var myupdate = angular.element(document.querySelector('#update-content'));
      myupdate.append('<button type="submit" class="btn btn-primary"ng-click="updateDetail(frm)">Update</button>');
      var mycourse = angular.element(document.querySelector('#coursetemp select'));
      mycourse.remove();
      var mynewcourse = angular.element(document.querySelector('#coursetemp'));
      mynewcourse.append('<select class="mlg-selectpicker form-control" data-size="auto" ng-model="courseSelected"></select>');
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
        mynewcourses.remove()
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
            var standardType = val['standard_type'].split(',');
            for(var $i=0;$i<standardType.length;$i++){
              console.log(standardType[$i]);
              $scope.standardType.push({
                  'id' : standardType[$i],
                  'label': standardType[$i]
              }); 
            }
            $scope.standardTypemodel = $scope.standardType;
          }
        }).error(function(error) {
         $scope.msg= 'Some technical error occured.';
        });
        if(val['type'] == 'text'){
          $scope.frm.htmlcontent = val['content'];
        }else if(val['type'] == 'doc'){
          $scope.frm.htmlcontent = '';
          var myDoc = angular.element(document.querySelector('#uploded-doc'));
          var docContent = val['content'].split(',');
          angular.forEach(docContent,function(docValue,docKey){
            myDoc.append('<a href="'+mlg+'upload/'+docValue+'" target="_new">'+docValue+'</a>');
            countDoc++;
          });
        }else if(val['type'] == 'image'){
          $scope.frm.htmlcontent = '';
          var myLabel = angular.element(document.querySelector('#uploded-image'));
          myLabel.append('<label>uploded Image :  </label> ');
          var myImg = angular.element(document.querySelector('#uploded-image'));
          var imgContent = val['content'].split(',');
          angular.forEach(imgContent,function(imgValue,imgKey){
            myImg.append('<img src="'+mlg+'upload/'
                    +imgValue+'" alt="'+imgValue+'"width="50px" height="50px"></img>');
            countImg++;
          });
        }else if(val['type'] == 'video'){
          $scope.frm.htmlcontent = '';
          var myVideo = angular.element(document.querySelector('#uploded-doc'));
          var videoContent = val['content'].split(',');
          angular.forEach(videoContent,function(videoValue,videoKey){
            myDoc.append('<a href="'+mlg+'upload/'+videoValue+'" target="_new">'+videoValue+'</a>');
            countVideo++;
          });
        }
      }
    });
  }
  $scope.submitTemplate = function(data) {
    lessonDetail.temp_name=data.template_name;
    teacherHttpService.setTemplateDetail(lessonDetail).success(function(response) {
      if(response.status == true){
        window.$location.reload();
      }
    }).error(function(error) {
     $scope.msg= 'Some technical error occured.';
    }); 
  } 
  //set template
  $scope.getTemplate = function(){
    var subTemp = [];
    var subTempCount = 0;
    var tempId = $scope.selectedTemplateModel;
    $scope.skill=[];
    $scope.subSkill=[];
    $scope.skillmodel = [];
    $scope.subSkillmodel = [];
    $scope.standardmodel = [];
    $scope.standardTypemodel = [];
    tempStatus = 1;
    angular.forEach($scope.template , function(value, key) {
      if(tempId == value['id']) {
        //for grade
        angular.forEach($scope.level , function(vall, kil) {
          if(value['grade']== vall){
             //grade in template
            $scope.gradeSelected = $scope.level[kil];
            grade = vall;
            //for subject in template
            teacherHttpService.getTeacherDetailsForContent(get_uid,grade,value['course_id'],user_roles['teacher']).success(function(response) {
              $scope.subject = [];
              angular.forEach(response.response  , function(val, ki) {
              $scope.subject.push({
                  'level_id' : val['level_id'],
                  'course_id': val['course_id'],
                  'course_name':val['name'].toUpperCase()
                 });
              });
//              $scope.subject.splice(0,0,{'level_id' :'','course_id' :'','course_name' :'---Select Course---'}); 
              $scope.courseSelected = $scope.subject[0][0][2];
            });
            teacherHttpService.getAllCourseList(value['course_id'],'lesson').success(function(response) {
              var data = response.response.course_details;   
              angular.forEach(data, function(skil, key) {
                  $scope.skill.push({
                  'id' : skil['course_id'],
                  'label': skil['name']
                 });
              });
              //for selected skill.
              angular.forEach($scope.skill , function(val, ki) { 
                teacherHttpService.getAllCourseList(val['id'],'lesson').success(function(response) {
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
      teacherHttpService.delContent(data).success(function(response) {
        if (response.status == true) {
          alert(response.message);
          window.location.reload();
          return true;
        }else{
          alert(response.message);
        }
      });
    }
  }])
  
.controller('teacherScopeSequence',['$rootScope','$scope','teacherHttpService','loginHttpService','$location','user_roles','commonActions','$routeParams',
  function($rootScope,$scope,teacherHttpService,loginHttpService,$location,user_roles,commonActions,$routeParams) {
	  $scope.sequenceModel = [];
	  $scope.sequenceData = [
		{id: 1, label: "Sahil Sharma"},
		{id: 2, label: "Aditya Parihar"},
		{id: 3, label: "Narendra Modi"},
		{id: 4, label: "Rahul Gandhi"},
		{id: 5, label: "Soniya Gandhi"}
	  ]
     
}])
  
  .directive('dropZone', function() {
    return function($scope, element, attrs) {    
      return element.dropzone({
        url: "/mlg/teachers/uploadfile",
        maxFilesize: 100,
        paramName: "uploadfile",
        maxThumbnailFilesize: 5,
        accept:function(file,done) {
          if (element.context.id == 'file-doc' && file.type == 'application/pdf') {
            done();
          }else if (element.context.id == 'file-img' && file.type == 'image/jpeg') {
            done();
          }else if (element.context.id == 'file-video' && file.type == 'video/*') {
            done();
          }else{
             this.removeFile(file)
           alert('please choose appropriate file');
          }
        },
        init: function() {
          var doc = '';
          var images = '';
          var videos = '';
//          myDropzone.emit("addedfile", file); 
          this.on("success", function (file) {
            if(file.type == 'application/pdf') {
              if (doc != '') {
                doc = doc +','+file.xhr.response;
                $scope.doc = doc;
              }else{
                doc = file.xhr.response;
                $scope.doc = doc;
              } 
            }else if(file.type == 'image/jpeg') {
              if (images != '') {
                images = images +','+file.xhr.response;
                $scope.img = images;
              }else{
                images = file.xhr.response;
                $scope.img = images;
              } 
            }else if(file.type == 'video/*') {
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
  

.controller("tableRow", ['$scope', '$filter', '$window', '$location', function ($scope, $filter, $window, $location) {
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
   
   
   /*$scope.dtOptions = {
		
		iDisplayLength: 5,
		// These 2 lines are for styling. Ignore!
		sDom: "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
		sPaginationType: "bootstrap",
		// End
	}
	// These are the options for the second DT. It's set in the element tags.
	$scope.dtOptionsExample2 = {
		sAjaxSource: 'data.json',
		sAjaxDataProp: 'result',
		bProcessing: false,
		fnRowCallback: function(row, data, index, fullindex) {
			if (data.id === 1) {
				angular.element(row).addClass('blue');
			}
		}
	}
	// This is an example of column callback
	$scope.idCB = function(data) {
		if (data.id > 3) {
			return '<span class="label label-info">'+data.id+'</span>'
		} 
		return '<span class="label label-important">'+data.id+'</span>'
	}
	// Anoter example
	$scope.aboutCB = function(data) {
		return data.about.text.substring(0, 50) + '...';
	}*/
	$scope.currentPage = 0;
    $scope.pageSize = 10;
    //$scope.data = [];
    $scope.q = '';
    
    $scope.getData = function () {
      // needed for the pagination calc
      // https://docs.angularjs.org/api/ng/filter/filter
      return $filter('filter')($scope.people, $scope.q)
     /* 
       // manual filter
       // if u used this, remove the filter from html, remove above line and replace data with getData()
       
        var arr = [];
        if($scope.q == '') {
            arr = $scope.data;
        } else {
            for(var ea in $scope.data) {
                if($scope.data[ea].indexOf($scope.q) > -1) {
                    arr.push( $scope.data[ea] );
                }
            }
        }
        return arr;
       */
    }
    
    $scope.numberOfPages=function(){
        return Math.ceil($scope.getData().length/$scope.pageSize);                
    }
    
    /*for (var i=0; i< '$scope.numberOfPages'; i++) {
        $scope.data.push(+i);
    }*/
	
}])

  
//.controller('MyCtrl', ['$scope', '$filter', function ($scope, $filter) {
    
//}])

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
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
.controller('teacherAddQuestionCtrl',['$rootScope','$scope','teacherHttpService','loginHttpService','$location','user_roles','commonActions','$routeParams',
  function($rootScope,$scope,teacherHttpService,loginHttpService,$location,user_roles,commonActions,$routeParams) {
	  
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
    // template detail show
    teacherHttpService.getTemplateDetail(get_uid).success(function(response) {
      if (response.status == true) {
        var temp = response.data;
        $scope.templateDetail = response.data;
        $scope.template = temp;
        $scope.template.splice(0,0,{'id' :'','template_name' :'---Select template---'});
        $scope.selectedTemplateModel = $scope.template[0][0];
      }else{
        $scope.msg = 'unable to find template';
      }
    });
    
    teacherHttpService.getTeacherGrades(get_uid,user_roles['teacher']).success(function(response) {
      if (response.status == true) {
        $scope.level = (response.grade.level_id).split(',');
//        $scope.level.splice(0,0, '---Select Grade---');
//        $scope.gradeSelected = $scope.level[0];
      }else{
        $scope.msg = 'unable to find class';
      }
    });	
    // on the basis of grade fetch the coursr list.
    $scope.getGradeVal = function(){
      if($scope.gradeSelected != '---Select Grade---') {
        if(subStatus == 0) {
          angular.element('#courseselect select option').hide();
        }
        grade = $scope.gradeSelected;
        teacherHttpService.getTeacherDetailsForContent(get_uid,grade,-1,user_roles['teacher']).success(function(response) {
          $scope.subject = response.response;
          $scope.subject.splice(0,0,{'level_id' :'','course_id' :'','course_name' :'---Select Course---'});
          $scope.courseSelected = $scope.subject[0][0];
          subStatus = 1;
        }).error(function(error) {
            $scope.msg= 'Some technical error occured.';
        });
      }  
    }
    // on the basis of courseid fetch skill
    $scope.getCourseVal = function(){
      if($scope.gradeSelected != '---Select Subject---') {
       course = $scope.courseSelected;
       teacherHttpService.getAllCourseList(course,'lesson').success(function(response) {
          var data = response.response.course_details;
          angular.forEach(data, function(value, key) {
            console.log(data);
              $scope.skill.push({
              'id' : value['course_id'],
              'label': value['name']
             });
          });
          console.log($scope.skill);
        }).error(function(error) {
            $scope.msg= 'Some technical error occured.';
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
                  teacherHttpService.getAllCourseList(parentId,'lesson').success(function(response) {
                  angular.forEach(response.response.course_details, function(value, key) {
                    $scope.subSkill.push({
                      'id' : value['course_id'],
                      'label': value['name']
                     });
                  });
                  }).error(function(error) {
                     $scope.msg= 'Some technical error occured.';
                  });  
            },
            onItemDeselect: function(item) {
                var Id = item['id'];
                angular.forEach(skillId,function(value, key) {
                    if (value == Id) {
                     skillId.splice(key);
                     teacherHttpService.getAllCourseList(Id,'lesson').success(function(response) {
                      angular.forEach(response.response.course_details, function(value, key) {
                        angular.forEach($scope.subSkill, function(val, ki) {
                          if(value['course_id'] == val['id']) {
                            $scope.subSkill.splice(key,1); 
                          } 
                        });  
                      });
                      }).error(function(error) {
                         $scope.msg= 'Some technical error occured.';
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
                console.log(value+','+item['id']);
                    if (value == item['id']) {
                     subSkills.splice(key);
                    }
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
        console.log(difficulity);
      };
    //Question type 
      teacherHttpService.questionType().success(function(response) {
        if(response.status == true){
          angular.forEach(response.data,function(type,key){
            $scope.questionType.push({
              'id' : type['name'],
              'label' : type['label']
            });
          });
        }
       }).error(function(error) {
         $scope.msg = 'unable to fetch question type';
     });
     $scope.quesTypeEvents = {
       onItemSelect: function(item) {   
              qType.push(item['id']);
       },
       onItemDeselect: function(item) {
              qType.splice(item['id'],1);
       }
     };               
      
      
      
      
    var question = {};
    $scope.submitQuestion = function(data) {
      question = {
        tid : get_uid,
        grade : grade,
        course : course,
        standard : standard,
        skills : skillId,
        sub_skill : subSkills,
        ques_diff : difficulity,
        ques_type : qType,
        ques_complexity :data.complexity,
        ques_passage : data.passage,
        ques_target : data.target,
        task : data.task,
        claim : claim,
        scope : data.rScope,
        dok : dok,
     };
     console.log(question);
//    teacherHttpService.setContentForLesson(question).success(function(response) {
//      if(response.status == true){
//        angular.element('#modal-saveTemplate').show();
//      }
//    }).error(function(error) {
//     $scope.msg= 'Some technical error occured.';
//    }); 
  }
  $scope.submitTemplate = function(data) {
    lessonDetail.temp_name=data.template_name;
    teacherHttpService.setTemplateDetail(lessonDetail).success(function(response) {
      if(response.status == true){
        window.location.reload();
      }
    }).error(function(error) {
     $scope.msg= 'Some technical error occured.';
    }); 
  }
  //set template
  $scope.getTemplate = function(){
    var tempId = $scope.selectedTemplateModel;
    $scope.skill=[];
    $scope.subSkill=[];
    tempStatus = 1;
    angular.forEach($scope.template , function(value, key) {
      if(tempId == value['id']) {
        //for grade
        angular.forEach($scope.level , function(vall, kil) {
          if(value['grade']== vall){
             //grade in template
            $scope.gradeSelected = $scope.level[kil];
            grade = vall;
            //for subject in template
            teacherHttpService.getTeacherDetailsForContent(get_uid,grade,value['course_id'],user_roles['teacher']).success(function(response) {
              $scope.subject = [];
              angular.forEach(response.response  , function(val, ki) {
              $scope.subject.push({
                  'level_id' : val['level_id'],
                  'course_id': val['course_id'],
                  'course_name':val['name'].toUpperCase()
                 });
              });
              $scope.subject.splice(0,0,{'level_id' :'','course_id' :'','course_name' :'---Select Course---'}); 
              $scope.courseSelected = $scope.subject[0][0][2];
            });
            teacherHttpService.getAllCourseList(value['course_id'],'lesson').success(function(response) {
              var data = response.response.course_details;   
              angular.forEach(data, function(skil, key) {
                  $scope.skill.push({
                  'id' : skil['course_id'],
                  'label': skil['name']
                 });
              });
              //for selected skill.
              angular.forEach($scope.skill , function(val, ki) { 
                teacherHttpService.getAllCourseList(val['id'],'lesson').success(function(response) {
                  angular.forEach(response.response.course_details, function(subskil, key) {
                    $scope.subSkill.push({
                      'id' : subskil['course_id'],
                      'label': subskil['name']
                     });
                  });
                  angular.forEach($scope.subSkill , function(subvalue, kisub) {
                   angular.forEach(value['sub_skill'] , function(subSkillValue, kil) {
                      if(subSkillValue == subvalue['id'] ) {
                        $scope.subSkillmodel.push($scope.subSkill[kisub]); 
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
    $scope.deleteTemplate = function(data){
      teacherHttpService.delTemplate(data).success(function(response) {
        if (response.status == true) {
          alert(response.message);
          return true;
        }else{
          alert(response.message);
        }
      });
    }
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

.controller('teacherCustomAssignment', ['$scope', function($scope) {
    
        $scope.autoAssignmentModel = [];
        $scope.autoAssignmentData = [
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

.directive('owlcarousel', function() {

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

.controller('teacherRewards',['$rootScope','$scope','teacherHttpService','loginHttpService','$location','user_roles','commonActions','$routeParams',
  function($rootScope,$scope,teacherHttpService,loginHttpService,$location,user_roles,commonActions,$routeParams) {
	$scope.openRedeenModal=function(){
		$('.modal-backdrop').hide();
		$("#modal-redeemcheck").modal();					
	}  
}])


;

