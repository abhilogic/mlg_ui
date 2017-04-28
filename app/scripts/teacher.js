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
      teacherHttpResponse.delTemplate=function(id){
        return $http({
          method:'GET',
          url  : urlParams.baseURL+urlParams.delTemplate+'/'+id
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
        grade = $scope.gradeSelected;
        teacherHttpService.getTeacherDetailsForContent(get_uid,grade,-1,user_roles['teacher']).success(function(response) {
          $scope.subject = response.response;
          $scope.subject.splice(0,0,{'level_id' :'','course_id' :'','course_name' :'---Select Course---'});
          $scope.courseSelected = $scope.subject[0][0];          
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
    $scope.submitDocDetail = function(data) {
      textDesc = data;
    }
    $scope.submitLessonDetail = function(data) {
      lessonDetail = {
        tid : get_uid,
        grade : grade,
        course : course,
        lesson : data.lesson_name,
        standard : standard,
        standard_type : standardType,
        skills : skillId,
        sub_skill : subSkills,
        text_description : textDesc,
        text_title : data.text_title,
        doc_file : $scope.doc,
        image_url : $scope.img,
        video_url : $scope.video,
     };
    teacherHttpService.setContentForLesson(lessonDetail).success(function(response) {
      if(response.status == true){
        angular.element('#modal-saveTemplate').show();
      }
    }).error(function(error) {
     $scope.msg= 'Some technical error occured.';
    }); 
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
	
});
  	
//teacherStudentProfile  studentPerformance

