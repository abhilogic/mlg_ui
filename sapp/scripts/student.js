angular.module('mlg_student')
  .filter("commaBreak", function () {
    return function ( value ) {
      if (!value.length) {
          return;
      }
      return value.split(',');
    };
})
.factory('loginHttpService',['$http','urlParams',function($http,urlParams){
	
	var loginHttpResponse={};	
	
	
	loginHttpResponse.login=function(data){
		return $http({
			method:'POST',
			data  : data,
			url   : urlParams.baseURL+urlParams.login
		});
	}
	loginHttpResponse.setStepNum=function(uid,step_num){
		return $http({
			method:'GET',
			url   : urlParams.baseURL+urlParams.setStepNum+'?user_id='+uid+'&step_num='+step_num
		});
	}

	loginHttpResponse.getStepNum=function(pid){
		return $http({
			method:'GET',
			url   : urlParams.baseURL+urlParams.getStepNum+'/'+pid
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

	loginHttpResponse.logout=function(data){
		return $http({
			method:'POST',
            data : data,
			url   : urlParams.baseURL+urlParams.logout
		});
	}

	loginHttpResponse.getAllCourseList=function(pid, type, course_id, user_id){
        if ((typeof pid == 'undefined') || (pid === '')) {
          pid = null;
        }
        var url = urlParams.baseURL+urlParams.getAllCourseList+'/'+pid;
        if(type == 'student') {
          url = urlParams.baseURL+urlParams.getAllCourseList+'/'+pid+'/'+type;
        }
        if ((typeof course_id != 'undefined') && (course_id != '')) {
          url = urlParams.baseURL+urlParams.getAllCourseList+'/'+ pid + '/' + type +'/' + course_id;
        }
		if ((typeof user_id != 'undefined') && (user_id != '')) {
			url = url + '/' + user_id;
		}
		return $http({
			method:'GET',				
			url   : url
		});
	}
  loginHttpResponse.getStudentCourseList=function(uid,parentId,course){
    var url = '';
    if ((typeof course != 'undefined') && (course != '')) {
      url = urlParams.baseURL+urlParams.getStudentCourseList+'/'+uid+'/'+parentId+'/'+course;
    }else{
       url = urlParams.baseURL+urlParams.getStudentCourseList+'/'+uid+'/'+parentId;
    }
		return $http({
			method: 'GET',				
			url: url
		});
	}

	loginHttpResponse.getSubskillQuizQuestions=function(){		
		return $http({
			method:'GET',				
			url   : urlParams.getSubskillQuizQuestions
		});
	} 

	loginHttpResponse.setUserQuizResponse=function(userquizrecord){		
		return $http({
			method:'POST',
			data : userquizrecord,		
			url  : urlParams.baseURL+urlParams.setUserQuizResponse
		});
	} 

	loginHttpResponse.getUserQuizResponse=function(user_id,quiz_id,user_quiz_id){		
		return $http({
			method:'GET',			
			url  : urlParams.baseURL+urlParams.getUserQuizResponse+'?user_id='+user_id+'&quiz_id='+quiz_id+'&user_quiz_id='+user_quiz_id
		});
	}

	loginHttpResponse.getUserQuizResponseOnSite=function(user_id,quiz_type_id, quiz_course_id){		
		return $http({
			method:'GET',			
			url  : urlParams.baseURL+urlParams.getUserQuizResponse+'?user_id='+user_id+'&quiz_type_id='+quiz_type_id+'&course_id='+quiz_course_id
		});
	}	

	loginHttpResponse.getUserScoreForQuiz=function(exam_id,uid){
		return $http({
			method:'GET',
			url  : urlParams.baseURL+urlParams.getUserScoreForQuiz+'?exam_id='+exam_id+'&uid='+uid
		});
	}

	loginHttpResponse.getCouponByUserType = function(data) {
		return $http({
			method:'POST',
			data  : data,
			url   : urlParams.baseURL+urlParams.getCouponByUserType
		});
	}

	loginHttpResponse.getUsedCoupon = function(data) {
		return $http({
			method:'POST',
			data  : data,
			url   : urlParams.baseURL+urlParams.getUsedCoupon
		});
	}

	loginHttpResponse.setAvailableCoupon = function(data) {
		return $http({
			method:'POST',
			data  : data,
			url   : urlParams.baseURL+urlParams.setAvailableCoupon
		});
	}


	loginHttpResponse.getUserDetails = function(uid){
		return $http({
			method:'GET',
			url   : urlParams.baseURL+urlParams.getUserDetails + '/' + uid
		});
	}


	loginHttpResponse.setpreTestStatus = function(test_status,user_id) {
		return $http({
			method:'POST',
			data  : {pretestStatus: test_status,user_id:user_id},
			url   : urlParams.baseURL+urlParams.setpreTestStatus
		});
	}

	loginHttpResponse.getpreTestStatus = function(user_id) {
		return $http({
			method:'GET',			
			url   : urlParams.baseURL+urlParams.getpreTestStatus+'?user_id='+user_id
		});
	}
	loginHttpResponse.uploadAvtarImage = function(avtarImage) {
		return $http({
			method:'post',
			data : avtarImage,
			url   : urlParams.baseURL+urlParams.uploadAvtarImage
		});
	}
	loginHttpResponse.getAvatarImage = function(uid){
		return $http({
			method:'GET',
			url   : urlParams.baseURL+urlParams.getAvatarImage + '/' + uid
		});
	}
	loginHttpResponse.getTodayEvents = function(uid){
		return $http({
			method:'GET',
			url   : urlParams.baseURL+urlParams.getTodayEvents + '/' + uid
		});
	}

	loginHttpResponse.getStudentAssignments = function(uid,course_id){ //course_id may be subject_id or skill_id
      return $http({
          method:'GET',
          url   : urlParams.baseURL+urlParams.getStudentAssignments + '/' + uid+'/'+course_id
      });
	}

	loginHttpResponse.getAssignmentItems = function(assignment_id){
      return $http({
          method:'GET',
          url   : urlParams.baseURL+urlParams.getAssignmentItems + '/' + assignment_id
      });
	}

	loginHttpResponse.getCourseInfo = function(course_id){
      return $http({
          	method:'GET',			
         	url   : urlParams.baseURL+urlParams.getCourseInfo + '/' + course_id
      });
	}


	loginHttpResponse.createQuizOnStudent = function(sndData){
      return $http({
          	method:'POST',
          	data : sndData,	
         	url   : urlParams.baseURL+urlParams.createQuizOnStudent
      });
	}

	loginHttpResponse.getStudentReport = function(user_id){
      return $http({
          	method:'GET',          	
         	url   : urlParams.baseURL+urlParams.getStudentReport+'/'+user_id
      });
	}	

	loginHttpResponse.checkKnightQuizStatus = function(skill_id,user_id){
      return $http({
          	method:'GET',          	
         	url   : urlParams.baseURL+urlParams.checkKnightQuizStatus+'?skill_id='+skill_id+'&user_id='+user_id
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

		commonActions.getguestcookies=function(key){
			var value=getCookie(key);
			return value;
		}


		return commonActions;
	}])
.filter('changeInURL', function () {
	//$scope.changeInURL = function(strtochange){
		return function (strtochange) {
			var lowerstr = strtochange.toLowerCase();
			return lowerstr.replace(/\s+/g, '-');
		}
		
	//};

})
.controller('journeyCtrl',['$rootScope','$scope','$filter','loginHttpService','commonActions','$location','urlParams','$http','user_roles','$localStorage',function($rootScope,$scope,$filter, loginHttpService,commonActions,$location,urlParams,$http,user_roles,$localStorage) {
	  //alert('kkk');
	  var get_uid=commonActions.getcookies(get_uid);
	  $scope.frm = {};

	  $scope.select_course=function(course_name){
	  	$localStorage.selected_course=course_name;
	  }
	  $scope.first_time_login=false;           
	  loginHttpService.getStepNum(get_uid).success(function(stepNum) {         
	  	if(stepNum.response.step.step_completed==1 ){ 
	  		$scope.first_time_login=true; 
	  	}          

	  });

	  $scope.mascot_close=function(){
	  	$(".masscourt-block .masscourt-cover").removeClass("in");
	  	setTimeout(function(){
	  		$(".masscourt-block").removeClass("active");
	  	}, 500);
                        //set step 2 for macot seen
                        loginHttpService.setStepNum(get_uid,2).success(function(resp) { 
                        	 
                        });

	  }


	  $("#gotIt").click(function(){
	  	$(".masscourt-block .masscourt-cover").removeClass("in");
	  	setTimeout(function(){
	  		$(".masscourt-block").removeClass("active");
	  	}, 500);
                        //set step 2 for macot seen
                        loginHttpService.setStepNum(get_uid,2).success(function(resp) { 
                        	 
                        });


                    });
	  $scope.redirectURL='demo_video';
	   // Check the condition to move either on pre-Test Page or On Sub Skill Page
	   loginHttpService.getpreTestStatus(get_uid).success(function(pretestResponse) {
	   	if (pretestResponse.response.status == "True") { 
	   		if(pretestResponse.response.preTestStatus==1){
	   			$scope.redirectURL='subject-view';
	   		}
	   		else{
	   			$scope.redirectURL='demo_video';
	   		}
	   	}
	   });   


	  /*if(localStorage.getItem('preTestProcessStatus')!=null && localStorage.getItem('preTestProcessStatus')!=0 ) {
	  		$scope.redirectURL='subject-view';
	  }else{
	  	$scope.redirectURL='demo_video';
	  }*/

	  if (document.cookie == '' || get_uid == 'null') {
	  	alert('kindly login');
	  	window.location.href='/mlg_ui/app/';
	  }
	  $scope.guest = false;
	  $scope.inactive_courses=[];
	  $scope.all_courses=[];
	  $scope.child_courses=[];

	  if (get_uid == 'guest' || get_uid == 0) {
	  	$scope.guest = true;
	  	var grade_id = commonActions.getguestcookies('grade_id');
	  	loginHttpService.getCourseByGrade(grade_id).success(function(courseslistresult) {
          if (!courseslistresult.response.courses){  // value is null, empty
          	$scope.frm.msg=courseslistresult.response.message;	        
          } else {
          	$scope.frm.childcourses = courseslistresult.response.courses;
          	$scope.frm.childclass = '';
          	$scope.frm.cousesListByGrade= $scope.result=courseslistresult.response.courses;
          	$scope.msg=courseslistresult.response.message;
          }
      })
	  } else {
	  	loginHttpService.getStudentCourses(get_uid).success(function(studentcoursesresult) {

	  		if (studentcoursesresult.response.status == "TRUE") {
	  			$scope.frm.childcourses=studentcoursesresult.response.student_courses;
	  			$scope.frm.childclass=studentcoursesresult.response.student_class;

	  			// API to call all courses of a class
	  			loginHttpService.getCourseByGrade(studentcoursesresult.response.student_class).success(function(courseslistresult) {
	  				console.log(courseslistresult);
		        if(!courseslistresult.response.courses){  // value is null, empty
		        	$scope.frm.msg=courseslistresult.response.message; 

		        }else{
		        	$scope.frm.cousesListByGrade= courseslistresult.response.courses;
		        	angular.forEach(courseslistresult.response.courses, function(main_value, main_key){
		        		$scope.all_courses.push(main_value.course_name);

		        	});
		        	angular.forEach($scope.frm.childcourses, function(child_value, child_key){
		        		$scope.child_courses.push((child_value.course_name));
		        	});
		        	$scope.result = $scope.all_courses.filter(function(n) {
		        		return $scope.child_courses.indexOf(n) == -1;
		        	});
		        	$scope.msg=courseslistresult.response.message;
		        }         
		    });
	  	}
	  		console.log(studentcoursesresult.response.student_class);
	  	});

}
    //event alert.
//    if($localStorage.messageCount != '1') {
//    	loginHttpService.getTodayEvents(get_uid).success(function(response) {
//    		var html = '';
//    		var count = 1;
//    		angular.forEach(response.response,function(val,key){
//    			html +=  count+'. '+val+'\n';
//    			count++;
//    		});
//    		if(html!='')
//    			alert(html);
//    		$localStorage.messageCount = '1';
//    	});
//    }
}])



.controller('helpCtrl',['$rootScope','$scope','$filter','loginHttpService','commonActions','$location','urlParams','$http','user_roles',function($rootScope,$scope,$filter, loginHttpService,commonActions,$location,urlParams,$http,user_roles) {
	 // alert('kkkk');
	 var get_uid=commonActions.getcookies(get_uid);
	}])
.controller('avtarCtrl',['$scope','$location','$anchorScroll','loginHttpService','commonActions','$http',function($scope,$location,$anchorScroll,loginHttpService,commonActions,$http) {
	
	var get_uid=commonActions.getcookies(get_uid); 
	var prev=undefined;
	var next=undefined;

	var step_num =1;
	$scope.onSkipClick=function(){		
		loginHttpService.setStepNum(get_uid,step_num).success(function(resp) { 
			if (resp.response.status == "True") {                 
				$location.url('journey');
			}else{
				$location.url('journey');
			} 
		});

	};


	$scope.SelectionBoy={	
		current:'skin',
		prev:prev,
		next:'hair'
	};

	$scope.SelectionGirl={
		current:'girl_skin',
		prev:prev,
		next:'girl_hair'
	};

	    //for boy
	    $scope.scrollTo = function(id) {
	    	var arr=['skin','hair','clothes','accessories'] ;
	    	for(i in arr){
	    		$('#'+arr[i]).removeClass('in active');
	    		$('#li_'+arr[i]).removeClass('active');
	    	}	   
	    	$('#'+id).addClass('in active');
	    	$('#li_'+id).addClass('active');
	    	var searchIndex=arr.indexOf(id);
	    	if(searchIndex==0){
	    		$scope.SelectionBoy={
	    			current:id,
	    			prev:prev,
	    			next:'hair'
	    		};
	    	}else if(searchIndex==arr.length-1){
	    		$scope.SelectionBoy={
	    			current:id,
	    			prev:arr[searchIndex-1],
	    			next:next
	    		};
	    	}else{
	    		$scope.SelectionBoy={
	    			current:id,
	    			prev:arr[searchIndex-1],
	    			next:arr[searchIndex+1]
	    		};
	    	}   
	    };

	    $scope.scrollToGirl = function(id) {
	    	var arr1=['girl_skin','girl_hair','girl_clothes','girl_accessories'] ;
	    	for(i in arr1){
	    		$('#'+arr1[i]).removeClass('in active');
	    		$('#li_'+arr1[i]).removeClass('active');
	    	}	   
	    	$('#'+id).addClass('in active');
	    	$('#li_'+id).addClass('active');
	    	var searchIndex=arr1.indexOf(id);
	    	if(searchIndex==0){
	    		$scope.SelectionGirl={
	    			current:id,
	    			prev:prev,
	    			next:'girl_hair'
	    		};
	    	}else if(searchIndex==arr1.length-1){
	    		$scope.SelectionGirl={
	    			current:id,
	    			prev:arr1[searchIndex-1],
	    			next:next
	    		};
	    	}else{
	    		$scope.SelectionGirl={
	    			current:id,
	    			prev:arr1[searchIndex-1],
	    			next:arr1[searchIndex+1]
	    		};
	    	}   
	    };
//    if($location.path() == '/avtar2') {
      //avtar download js prakash
      //var btn = document.getElementById("downloadAvtar");
      var svg = document.getElementById("avtar");
      //var svgGirl = document.getElementById("avtarGirl");
      var canvas = document.getElementById("canvas");
      //var canvas_girl = document.getElementById("canvas_girl");

      function triggerDownload (imgURI) {
      	var evt = new MouseEvent('click', {
      		view: window,
      		bubbles: false,
      		cancelable: true
      	});

      	var a = document.createElement('a');
      	a.setAttribute('download', 'Avtar_profile_pick.png');
      	a.setAttribute('href', imgURI);
      	a.setAttribute('target', '_blank');
      	a.dispatchEvent(evt);
      } 
      if(document.getElementById("downloadAvtar")){ 
      	document.getElementById("downloadAvtar").addEventListener('click', function () {
      		$(".modal-backdrop").remove();
      		var canvas = document.getElementById('canvas');
      		var ctx = canvas.getContext('2d');
      		var data = (new XMLSerializer()).serializeToString(svg);
      		var DOMURL = window.URL || window.webkitURL || window;

      		var img = new Image();
      		var svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
      		var url = DOMURL.createObjectURL(svgBlob);

      		img.onload = function () {
      			ctx.drawImage(img, 0, 0);
      			DOMURL.revokeObjectURL(url);

      			var imgURI = canvas
      			.toDataURL('image/png');
    //					.replace('image/png', 'image/octet-stream');
    var avtarImage ={};
    avtarImage = {
    	uid : get_uid,
    	image : imgURI,
    };
    loginHttpService.uploadAvtarImage(avtarImage).success(function (response) {
    	$location.url('/journey');
    	$scope.AvtarImage = response.response
    });  
};
img.src = url;
});
      }


      $scope.download_avtar=function(){
      	$(".modal-backdrop").remove();
      	var canvas = document.getElementById('canvas');
      	var ctx = canvas.getContext('2d');
      	var svg = document.getElementById("avtar_girl");
      	var data = (new XMLSerializer()).serializeToString(svg);
      	var DOMURL = window.URL || window.webkitURL || window;

      	var img = new Image();
      	var svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
      	var url = DOMURL.createObjectURL(svgBlob);

      	img.onload = function () {
      		ctx.drawImage(img, 0, 0);
      		DOMURL.revokeObjectURL(url);

      		var imgURI = canvas
      		.toDataURL('image/png');
    //					.replace('image/png', 'image/octet-stream');
    var avtarImage ={};
    avtarImage = {
    	uid : get_uid,
    	image : imgURI,
    };
    loginHttpService.uploadAvtarImage(avtarImage).success(function (response) {
    	$location.url('/journey');
    	$scope.AvtarImage = response.response
    });  
};
img.src = url;
     // });

}

}])
.controller('preTestQuizCtrl',['$rootScope','$scope','$localStorage','$sessionStorage','$filter','$routeParams','loginHttpService','commonActions','$location','urlParams','$http','user_roles','quiz_type','quiz_mastered_score','questionslimit','mlg_subjects_for_masscourt','$cookieStore',function($rootScope,$scope,$localStorage,$sessionStorage,$filter,$routeParams,loginHttpService,commonActions,$location,urlParams,$http,user_roles,quiz_type,quiz_mastered_score,questionslimit,mlg_subjects_for_masscourt,$cookieStore) {
	 // alert(navigator.onLine);

	 $scope.data={};
	 $scope.data.param1 = $routeParams.id;
	 var get_uid=commonActions.getcookies(get_uid);
	 var cookieString=$cookieStore.get("userObj");
	 var userInfo=parseUser(cookieString);
	 function parseUser(cookie){
	 	var keyVals=cookie.split(',');
	 	var obj={};
	 	angular.forEach(keyVals,function(value,key){
	 		var vals=value.split('=');
	 		obj[vals[0]]=vals[1];
	 	});
	 	return obj;
	 }
	 $scope.userInfo=userInfo;

	 if (document.cookie == '' || get_uid == 'null') {
	 	alert('kindly login');
	 	window.location.href='/mlg_ui/app/';
	 }
	 $scope.guest = false;
	 if (get_uid == 'guest' || get_uid == 0) {
	 	$scope.guest = true;
	 }
	 $scope.skipQuiz = function() {
	 	$location.url('/subject-view/' + $routeParams.id);
	 }

	 var promise = loginHttpService.getCourseInfo($routeParams.id).success(function(crinfo) {	
		return crinfo ;
	});

promise.then(function(result) {

		// Masscourt- Display in starting, before starting quiz(set Masscourt image and message)
		var selected_subject = result.data.response.course_Information.course_name;
		$scope.masscourt_message = "Ahh, looks like you need some practice. Get in the first castle to hone your skills.";		
		if(selected_subject==mlg_subjects_for_masscourt.MATH || selected_subject==mlg_subjects_for_masscourt.MATHS ){
			$scope.masscourt_image ='math_normal.png';
		}
		else if(selected_subject==mlg_subjects_for_masscourt.ENGLISH){
			$scope.masscourt_image ='english_normal.png';
		}
		else if(selected_subject==mlg_subjects_for_masscourt.SCIENCE){
			$scope.masscourt_image = 'science_normal.png';
		}
		else if(selected_subject==mlg_subjects_for_masscourt.SOCIALSCIENCE){
			$scope.masscourt_image = 'social_studies_normal.png';
		}else{
				$scope.masscourt_image='mascot.png';
		} 
		$("#pretestmasscourt_id").addClass("active"); // show masscourt with value of masscourt_image and masscourt_message
   	

	 	//console.log(result);
		var d = new Date();
		senddata ={
			user_id 	: get_uid,
			grade_id 	: result.data.response.course_Information.level_id,
			subskill_id : -1,
			quiz_type_id : quiz_type.PRETEST, // id of the table quiz_types
			questions_limit : questionslimit.PRETEST,
			quiz_name : 'preTest-'+ d.getFullYear()+(d.getMonth()+1)+d.getDate(),
		};

		// To maintain old quiz questions if user quize questions response is incomplete
		var localQuizResponse = JSON.parse(localStorage.getItem('localQuizResponse'));
		var localQuestions= JSON.parse(localStorage.getItem('ngStorage-localquestions'));
		if(localQuizResponse ==null && localQuestions==null ){
			
			// API to create quiz and questions list of quiz created for user 
		loginHttpService.createQuizOnStudent(senddata).success(function(resitem){

			if (resitem.data.status == true) {
				//$scope.assignment_details = resitem.data.assignment_details;
				var quizquestions = resitem.data.questions;

				//local storage functionality implementation
		  		$localStorage.localquestions= quizquestions; //set value in local storage	  	
		  		$scope.data.questions= $localStorage.localquestions //get value in localstorage


		  		// To check the sequence of the question in quiz	  	
		  		if(localStorage.getItem('userQuesSequence')!=null ) {
		  			$scope.sequence=parseInt(localStorage.getItem('userQuesSequence'));
		  		}else{
		  			$scope.sequence=0;	  				  			
		  			var a=[];
		  			localStorage.setItem('localQuizResponse', JSON.stringify(a));
		  		}

		  		// Set current question
		  		$scope.currentquestion= $scope.data.questions[$scope.sequence];	
		  		$scope.total_questions=$scope.data.questions.length-1;
			}else{
					$scope.message = "Issue in traversing page";
			}
		}); // end createquiz APi

		}else{   // if quiz attemped incomplete then pick question from localstorage 

			$scope.data.questions= $localStorage.localquestions;
		
			// To check the sequence of the question in quiz	  	
	  		if(localStorage.getItem('userQuesSequence')!=null && localStorage.getItem('userQuesSequence') !=0 ) {
	  			$scope.sequence=parseInt(localStorage.getItem('userQuesSequence'));
	  		}else{
	  			$scope.sequence=0;
	  			var a=[];
	  			localStorage.setItem('localQuizResponse', JSON.stringify(a));
	  		}	
	  	
	  		$scope.currentquestion= $scope.data.questions[$scope.sequence];	
	  		$scope.total_questions=$scope.data.questions.length-1;
		}
	}); // end then promise

	  	// Read Question in UK voice
	  	$scope.readQuestion=function(){            
	  		var text= $scope.currentquestion.questionName;
	  		responsiveVoice.speak("" + text +"", "UK English Male");                        
	  	}

	  	//close masscourt
		$scope.closeMascot=function(st_result){         
	        if(st_result=='correct' || st_result=='wrong'){
	        	$("#pretestmasscourt_id").removeClass("active");
	        } 
	        else if(st_result=='pass'){
	        	window.location.href='subject-view/'+$routeParams.id;
	        } else if(st_result=='fail') {
	        	window.location.href='subject-view/'+$routeParams.id;
	        }  
	        else{
	        	$("#pretestmasscourt_id").removeClass("active");
	        }                   
		}
 

	  	$scope.submitQuestion=function(frm){
	  		//console.log(frm);	
	  		$scope.error_message=""; 	
	 	// check selected option   frm.selectedoption
	 	if(typeof frm.selectedoption=='undefined'){
	 		$scope.error_message="Please select you option";	 			
	 	}
	 	else{	 		

	 				//step-1 - calculate 
	 				var correctoption=$scope.currentquestion.answers[0].value;
	 				var question_marks=$scope.currentquestion.answers[0].score;
	 				if(frm.selectedoption==correctoption){
	 					console.log(frm.selectedoption);
		 				var selectedAnswer=1; // select option is correct
		 				$scope.masscourt_message="Awesome, you got this correct";
		 				//alert('Correct');
		 				var score= $scope.currentquestion.answers[0].score;
		 				$scope.answer_result=true;
		 				$scope.current_quesstatus="correct";
		 				$scope.st_result="correct";
		 			}
		 			else{
		 				selectedAnswer=0; // select option is wrong
		 				if(typeof $scope.currentquestion.penalty_score=='undefined'){ score=0}
		 					else{ score =$scope.currentquestion.penalty_score; }
		 				$scope.masscourt_message="Oops, This is not the correct answer";
		 				$scope.answer_result=false;	
		 				$scope.current_quesstatus="wrong";
		 				$scope.st_result="wrong";	 				
		 				//alert('wrong'); 
		 			}
		 		

	 				//Step-2  Set required coulum values
	 				var userExamResponse={};
	      	 		userExamResponse={
	       				user_id 	: get_uid,
	       				exam_id 	: $scope.currentquestion.quiz_id,
	       				item_id 	: $scope.currentquestion.question_id,
	       				item_marks	: $scope.currentquestion.question_marks,
	       				response 	: frm.selectedoption,
	       				correct 	: selectedAnswer,
	       				score 		: score,       				
	       				skip_count 	: 0,
	       				grade_id 	: $scope.currentquestion.grade_id,
						course_id : $scope.currentquestion.course_id,
						quiz_type_id : quiz_type.PRETEST,
	       				//time_taken 	: 1,
	       			}

	       				// Masscourt- Display in starting, before starting quiz(set Masscourt image and message)
					var selected_subject = $scope.currentquestion.subject;
					if(selected_subject==mlg_subjects_for_masscourt.MATH || selected_subject==mlg_subjects_for_masscourt.MATHS ){
						if($scope.current_quesstatus =="correct"){	$scope.masscourt_image ="math_right.png";}
						else{ $scope.masscourt_image ="math_wrong.png";	}
					}
					else if(selected_subject==mlg_subjects_for_masscourt.ENGLISH){
						if($scope.current_quesstatus =="correct"){	$scope.masscourt_image ="english_right.png";}
						else{ $scope.masscourt_image ="english_wrong.png";	}
					}
					else if(selected_subject==mlg_subjects_for_masscourt.SCIENCE){
						if($scope.current_quesstatus =="correct"){	$scope.masscourt_image ="science_right.png";}
						else{ $scope.masscourt_image ="science_wrong.png";	}
					}
					else if(selected_subject==mlg_subjects_for_masscourt.SOCIALSCIENCE){
						if($scope.current_quesstatus =="correct"){	$scope.masscourt_image ="social_studies_right.png";}
						else{ $scope.masscourt_image ="social_studies_wrong.png";	}

					}else{
						$scope.masscourt_image='mascot.png';
					} 
					$("#pretestmasscourt_id").addClass("active"); // show masscourt with value of masscourt_image and masscourt_message
   		


       				//2.1 Add the quiz response in local storage
       				var b;
       				a = JSON.parse(localStorage.getItem('localQuizResponse'));    
       				a.push(userExamResponse); 
       				localStorage.setItem('localQuizResponse', JSON.stringify(a));  

		 			//Step-3 Procceed steps once value has been add in local storage
		 			if( ($scope.sequence < $scope.total_questions) && (($scope.sequence!=4) && ($scope.sequence!=9)) ){
		 				localStorage.setItem('userQuesSequence', $scope.sequence+1);
		 				$scope.sequence+=1;
		 				$scope.currentquestion= $scope.data.questions[$scope.sequence];
		 				$scope.frm={};
		 			}
		 			else if($scope.sequence==4 || $scope.sequence==9) {		
		 				// check $scope.sequence with one less value because it has to initiallize with 0 for indexing of question.		 				
		 				localStorage.setItem('userQuesSequence', $scope.sequence+1);
		 				if(localStorage.getItem('preTestProcessStatus')==null ) {
		 					window.location.href='demo_video/'+$routeParams.id;
		 				}else{
		 					$scope.sequence=$scope.sequence+1;
		 				}
		 			}
		 			else{ 									

						//Step- 4 send local Stoage Quiz attand Response to API						
						//localStorage.setItem('userQuesSequence', 0);
						localStorage.removeItem("userQuesSequence");
						//localStorage.setItem('preTestProcessStatus',1);
						var userQuizAttandResponses=localStorage.getItem('localQuizResponse')
						loginHttpService.setUserQuizResponse(userQuizAttandResponses).success(function(apiresponse) {
						//alert('final')							
						if (apiresponse.response.status == "true") {
							var user_quiz_id=apiresponse.response.quiz_attempt_id;
							//localStorage.setItem('quiz_id', quiz_id);

								// set the pretest status in user details
								loginHttpService.setpreTestStatus(1,get_uid).success(function(preTestResponse) {});


		  						// Step -5 to Get the User Result
		  						loginHttpService.getUserQuizResponse(get_uid,$scope.currentquestion.quiz_id,user_quiz_id).success(function(quizResultResponse) {
		  							//a=[];
		  							//localStorage.setItem('localQuizResponse', JSON.stringify(a)); // empty localstorage userquiz response
		  							localStorage.removeItem("localQuizResponse"); // empty the local storage
						 			localStorage.removeItem("ngStorage-localquestions");
		  							if (quizResultResponse.response.status == true) {
		  								var correct_answer= quizResultResponse.response.correct_questions;
		  								var wrong_answer= quizResultResponse.response.correct_questions;
		  								var st_result="";
		  								if(quizResultResponse.response. student_result_percent < quiz_mastered_score.PRETEST){
		  									$scope.st_result= "fail";
		  									$scope.masscourt_message="Opps.. Your require more practice.";
						 						
						 						//alert("Your are Fail");
						 						//$("#mascot_quiz").removeClass("active");
						 						//$("#mascot_fail").addClass("active");
						 						
						 					}
						 					else{
						 						$scope.st_result= "pass";
						 						$scope.masscourt_message="Congrats.. Your are mastered in this skill.";
						 						//alert("Your are Pass");
						 						//$("#mascot_quiz").removeClass("active");
						 						//$("#mascot_pass").addClass("active");						 						
						 					}


						 					// Check Masscourt image and message			
											var selected_subject = $scope.currentquestion.subject;
											if(selected_subject==mlg_subjects_for_masscourt.MATH || selected_subject==mlg_subjects_for_masscourt.MATHS ){
												$scope.masscourt_image ='math_normal.png';
											}
											else if(selected_subject==mlg_subjects_for_masscourt.ENGLISH){
												$scope.masscourt_image ='english_normal.png';
											}
											else if(selected_subject==mlg_subjects_for_masscourt.SCIENCE){
												$scope.masscourt_image = 'science_normal.png';
											}
											else if(selected_subject==mlg_subjects_for_masscourt.SOCIALSCIENCE){
												$scope.masscourt_image = 'social_studies_normal.png';
											}else{
												$scope.masscourt_image='mascot.png';
											} 
											$("#pretestmasscourt_id").addClass("active"); // show masscourt with value of masscourt_image and masscourt_message
   	


						 					
									}
								});

							}else{
							alert('Opps something is wrong to store your quiz result');
						}

					});
				}
			}	
	}
}])


.controller('subskillQuizCtrl',['$rootScope','$scope','$routeParams','$localStorage','$filter','loginHttpService','$location','commonActions','urlParams','$http','user_roles','questionslimit','quiz_type','quiz_mastered_score','mlg_subjects_for_masscourt',function($rootScope,$scope,$routeParams,$localStorage,$filter, loginHttpService,$location,commonActions,urlParams,$http,user_roles,questionslimit,quiz_type,quiz_mastered_score,mlg_subjects_for_masscourt) {
	var get_uid=commonActions.getcookies(get_uid);
	var senddata= {};
	var attempt_questions_status = [];
	var local_questions_status =[];
	$scope.questions_status = [];

	var promise = loginHttpService.getCourseInfo($routeParams.subskill_id).success(function(crinfo) {	
		return crinfo ;
	});

promise.then(function(result) {
	$scope.course_name = result.data.response.course_Information.course_name;
	$scope.selected_subject = result.data.response.parent_info_of_skill.course_name;
	
	$scope.skill_id_URL = result.data.response.skill_info_of_subskill.id;
	var skillname = result.data.response.skill_info_of_subskill.course_name.toLowerCase();
	$scope.skill_name_URL =	skillname.replace(/\s+/g, '-'); 
	
		 $scope.numToAlpha =function(idx) {
          var getAlpha = ['A','B','C','D','E','F','G'];
          return getAlpha[idx];
        }

       //$scope.questate_class = 'active';
       $scope.data = {};
       var skip = null;
       $scope.attempts = 0;

	//console.log(result);
	var d = new Date();
	senddata ={
		user_id 	: get_uid,
		grade_id 	: result.data.response.course_Information.level_id,
		subskill_id : $routeParams.subskill_id,
		quiz_type_id : quiz_type.SUBSKILLQUIZ, // id of the table quiz_types
		questions_limit : questionslimit.SUBSKILLQUIZ,
		quiz_name : 'subskillQuiz-'+ d.getFullYear()+(d.getMonth()+1)+d.getDate(),
	};


	// To maintain old quiz questions if user quize questions response is incomplete
	var localsubskillQuizResponse = JSON.parse(localStorage.getItem('localsubskillQuizResponse'));
	var localsubskillquestions= JSON.parse(localStorage.getItem('ngStorage-localsubskillquestions'));
	if(localsubskillQuizResponse ==null && localsubskillquestions==null ){
		
		// API to create quiz and questions list of quiz created for user 
		loginHttpService.createQuizOnStudent(senddata).success(function(resitem){

			if (resitem.data.status == true) {
				//$scope.assignment_details = resitem.data.assignment_details;
				var quizquestions = resitem.data.questions;

				//local storage functionality implementation
		  		$localStorage.localsubskillquestions= quizquestions; //set value in local storage	  	
		  		$scope.data.questions= $localStorage.localsubskillquestions //get value in localstorage



		  		// To check the sequence of the question in quiz	  	
		  		if(localStorage.getItem('userQuesSequence')!=null ) {
		  			$scope.sequence=parseInt(localStorage.getItem('userQuesSequence'));
		  		}else{
		  			$scope.sequence=0;	  				  			
		  			var a=[];
		  			localStorage.setItem('localsubskillQuizResponse', JSON.stringify(a));
		  		}

		  		// Set current question
		  		$scope.currentquestion= $scope.data.questions[$scope.sequence];	
		  		$scope.total_questions=$scope.data.questions.length-1;

		  		// To maintain the question number indicator
			  	var qstatus={};
			  	for(var i=0; i<$scope.total_questions; i++){
			  		qstatus ={
		    			sequence : i,
		    			status   : 'inactive'
		    		}
		    		attempt_questions_status.push(qstatus);

			  	}
			  	if(localStorage.getItem('questionsStatus')==null ) {
			  		localStorage.setItem('questionsStatus', JSON.stringify(attempt_questions_status));	  	
			  	}			  	
			  	
			  	local_questions_status = JSON.parse(localStorage.getItem('questionsStatus'));
			  	attempt_questions_status[$scope.sequence]['status']="minimize";
			  	$scope.questions_status = attempt_questions_status;		  		

			}else{
					//$scope.message = "Issue in traversing page";
					$scope.creatquiz_message = "Soon Quiz will generate for you. Till then read lesson"+
												"<br><br><a href='subskill_content/"+$routeParams.subskill_name+"/"+$routeParams.subskill_id+"'> Click here</a>"
					;
			}
		}); // end createquiz APi 
			

	}else{ // if quiz attemped incomplete then pick question from localstorage
		$scope.data.questions= $localStorage.localsubskillquestions;
		
		// To check the sequence of the question in quiz	  	
	  		if(localStorage.getItem('userQuesSequence')!=null && localStorage.getItem('userQuesSequence') !=0 ) {
	  			$scope.sequence=parseInt(localStorage.getItem('userQuesSequence'));
	  		}else{
	  			$scope.sequence=0;
	  			var a=[];
	  			localStorage.setItem('localsubskillQuizResponse', JSON.stringify(a));
	  		}	  	
	  	
	  		$scope.currentquestion= $scope.data.questions[$scope.sequence];	
	  		$scope.total_questions=$scope.data.questions.length-1;

	  		// To maintain the question number indicator
			  	var qstatus={};
			  	for(var i=0; i<$scope.total_questions; i++){
			  		qstatus ={
		    			sequence : i,
		    			status   : 'inactive'
		    		}
		    		attempt_questions_status.push(qstatus);

			  	}
			  	if(localStorage.getItem('questionsStatus')==null ) {
			  		localStorage.setItem('questionsStatus', JSON.stringify(attempt_questions_status));	  	
			  	}
			  	
			  	
			  	local_questions_status = JSON.parse(localStorage.getItem('questionsStatus'));
			  	attempt_questions_status[$scope.sequence]['status']="minimize";
			  	$scope.questions_status = attempt_questions_status;
	}

}); // end then promise
	 

	// To read the question in male UK voice    
	$scope.readQuestion=function(){            
        var questiontext= $scope.currentquestion.questionName;          
        responsiveVoice.speak("" + questiontext +"", "UK English Male");                        
	}


	//close masscourt
	$scope.closeMascot=function(st_result){         
        if(st_result=='correct' || st_result=='wrong'){
        	$("#skillquizmasscourt_id").removeClass("active");
        } 
        else if(st_result=='pass'){
        	window.location.href='skill-door/'+$scope.skill_name_URL+'/'+$scope.skill_id_URL;
        } else{
        	window.location.href='subskill_content/'+$routeParams.subskill_name+'/'+$routeParams.subskill_id;
        }                     
	}
	




	//get student response for question/ on Submit question answer.
    $scope.onSubmitQuestion = function(frm,skip){ 
    	$scope.error_optionmessage=""; 
    	var correctoption=$scope.currentquestion.answers[0].value;
    	var newqstate ='active';
    	var a = [];
    	
		 //var question_marks=$scope.currentquestion.question_marks;

    	// step 1- To check buton click is submit or skip button (if skip = 0 means click on submit/ skip)
    	if(skip == 1){ // if skip button is clicked    		
        	newqstate ="cancel";        	
     
    		//Step-2  Set required coulum values    			
	 			var userExamResponse={};
      	 		userExamResponse={
       				user_id 	: get_uid,
       				exam_id 	: $scope.currentquestion.quiz_id,
       				item_id 	: $scope.currentquestion.question_id,
       				item_marks	: $scope.currentquestion.question_marks,
       				response 	: '',
       				correct 	: 0,
       				score 		: 0,       				
       				skip_count 	: 1,
       				grade_id 	: $scope.currentquestion.grade_id,
					course_id : $scope.currentquestion.course_id,
					quiz_type_id : quiz_type.SUBSKILLQUIZ, // id of the table quiz_types
					//time_taken 	: 1,
       			}

    	}
    	else{	// if submit button is clicked

    		 newqstate ="done";    		

    		// check selected option   frm.selectedoption
	 		if(typeof frm.selectedoption=='undefined'){
	 			$scope.error_optionmessage="Please select you option";	 			
	 		}else{
	 			//$scope.sequence +=1;
    			//$scope.currentquestion= $scope.assigment_items[$scope.sequence];

    			

    			//step-1 - calculate right and wrong attempt 		 		
		 		if(frm.selectedoption==correctoption){
		 			console.log(frm.selectedoption);
		 			var selectedAnswer=1; // select option is correct
		 			$scope.masscourt_message="Awesome, you got this correct";		 			
		 			var score= $scope.currentquestion.answers[0].score;
		 			//alert('Correct');

		 			$scope.current_quesstatus="correct";
		 			$scope.st_result="correct";
		 			//$scope.answer_result = "correct"; 
		 		}
		 		else{
		 			selectedAnswer=0; // select option is wrong
		 			if(typeof $scope.currentquestion.penalty_score=='undefined'){ score=0}
		 			else{ score =$scope.currentquestion.penalty_score; }
		 			$scope.masscourt_message="Oops, This is not the correct answer";		 				
		 			//alert('wrong');
		 			$scope.current_quesstatus="wrong";
		 			$scope.st_result="wrong";

		 			//$scope.answer_result = "wrong"; 
		 		}

		 		//Step-2  Set required coulum values		 		
	 			var userExamResponse={};
      	 		userExamResponse={
       				user_id 	: get_uid,
       				exam_id 	: $scope.currentquestion.quiz_id,
       				item_id 	: $scope.currentquestion.question_id,
       				item_marks	: $scope.currentquestion.question_marks,
       				response 	: frm.selectedoption,
       				correct 	: selectedAnswer,
       				score 		: score,       				
       				skip_count 	: 0,
       				grade_id 	: $scope.currentquestion.grade_id,
					course_id : $scope.currentquestion.course_id,
					quiz_type_id : quiz_type.SUBSKILLQUIZ,
       				//time_taken 	: 1,
       			}

       		// Check Masscourt image and message			
			var selected_subject = $scope.currentquestion.subject;
			if(selected_subject==mlg_subjects_for_masscourt.MATH || selected_subject==mlg_subjects_for_masscourt.MATHS ){
				if($scope.current_quesstatus =="correct"){	$scope.masscourt_image ="math_right.png";}
				else{ $scope.masscourt_image ="math_wrong.png";	}
			}
			else if(selected_subject==mlg_subjects_for_masscourt.ENGLISH){
				if($scope.current_quesstatus =="correct"){	$scope.masscourt_image ="english_right.png";}
				else{ $scope.masscourt_image ="english_wrong.png";	}
			}
			else if(selected_subject==mlg_subjects_for_masscourt.SCIENCE){
				if($scope.current_quesstatus =="correct"){	$scope.masscourt_image ="science_right.png";}
				else{ $scope.masscourt_image ="science_wrong.png";	}
			}
			else if(selected_subject==mlg_subjects_for_masscourt.SOCIALSCIENCE){
				if($scope.current_quesstatus =="correct"){	$scope.masscourt_image ="social_studies_right.png";}
				else{ $scope.masscourt_image ="social_studies_wrong.png";	}

			}else{
				$scope.masscourt_image='mascot.png';
			} 
			$("#skillquizmasscourt_id").addClass("active"); // show masscourt with value of masscourt_image and masscourt_message
   		}
   	}	
	 	
 			

       	//Step-3 Procceed check questions sequence either for next question or show result if sequence is on last.
		if( ($scope.sequence < $scope.total_questions) && ($scope.error_optionmessage=="" ) ) {
		
			//3.1 Add the quiz response in local storage
       		//var b;
       		//console.log(a); 
       		a = JSON.parse(localStorage.getItem('localsubskillQuizResponse')); 
       		a.push(userExamResponse); 
    		localStorage.setItem('localsubskillQuizResponse', JSON.stringify(a));
		 	localStorage.setItem('userQuesSequence', $scope.sequence+1);
		 	$scope.sequence+=1;
		 	$scope.currentquestion= $scope.data.questions[$scope.sequence];
		 	$scope.frm={};

		 	// update question status in question indicator        	
		    attempt_questions_status[$scope.sequence]['status']= newqstate;
		    attempt_questions_status[$scope.sequence+1]['status']="minimize";
		       	      		
		    localStorage.setItem('questionsStatus', JSON.stringify(attempt_questions_status));        	
		    local_questions_status = JSON.parse(localStorage.getItem('questionsStatus'));
		    $scope.questions_status = attempt_questions_status;    	

		}
		else if( ($scope.sequence < $scope.total_questions) && ($scope.error_optionmessage!="" ) ) {
			console.log($scope.error_optionmessage);
		}	 			 		
		else{ 

			//Step- 4 send local Stoage Quiz attand Response to API						
			//localStorage.setItem('userQuesSequence', 0);
			localStorage.removeItem("userQuesSequence");
					
			var userQuizAttandResponses=localStorage.getItem('localsubskillQuizResponse')
			loginHttpService.setUserQuizResponse(userQuizAttandResponses).success(function(apiresponse) {							
				if (apiresponse.response.status == "true") {
					var user_quiz_id=apiresponse.response.quiz_attempt_id;
					localStorage.setItem('user_quiz_id', user_quiz_id);
		  						
					// Step -5 to Get the User Result
					loginHttpService.getUserQuizResponse(get_uid,$scope.currentquestion.quiz_id,user_quiz_id).success(function(quizResultResponse) {
			 			// a=[];
						//localStorage.setItem('subskillQuizResponse', JSON.stringify(a)); // empty localstorage userquiz response
			 			//localStorage.setItem('ngStorage-localsubskillquestions', JSON.stringify(a));
					 			
			 			localStorage.removeItem("localsubskillQuizResponse"); // empty the local storage
			 			localStorage.removeItem("ngStorage-localsubskillquestions");

			 			if (quizResultResponse.response.status == true) {
		 					//var correct_answer= quizResultResponse.response.correct_questions;
		 					//var wrong_answer= quizResultResponse.response.correct_questions;
		 					var st_result="";
		 					if(quizResultResponse.response.student_result_percent< quiz_mastered_score.SUBSKILLQUIZ){
		 						$scope.st_result= "fail";
		 						$("#skillquizmasscourt_id").addClass("active");
		 						//alert("Your are Fail");
		 						$scope.masscourt_message="You need more attention. Your are not mastered.";
		 					}
		 					else{
			 						$scope.st_result= "pass";			 						
			 						//alert("Your are Pass");
			 						$scope.masscourt_message="Congrats.. Your are mastered in this skill.";
			 					}
								//window.location.href='challenges';
							// Check Masscourt image and message			
							var selected_subject = $scope.currentquestion.subject;
							if(selected_subject==mlg_subjects_for_masscourt.MATH || selected_subject==mlg_subjects_for_masscourt.MATHS ){
								$scope.masscourt_image ='math_normal.png';
							}
							else if(selected_subject==mlg_subjects_for_masscourt.ENGLISH){
								$scope.masscourt_image ='english_normal.png';
							}
							else if(selected_subject==mlg_subjects_for_masscourt.SCIENCE){
								$scope.masscourt_image = 'science_normal.png';
							}
							else if(selected_subject==mlg_subjects_for_masscourt.SOCIALSCIENCE){
								$scope.masscourt_image = 'social_studies_normal.png';
							}else{
								$scope.masscourt_image='mascot.png';
							} 
							$("#skillquizmasscourt_id").addClass("active"); // show masscourt with value of masscourt_image and masscourt_message
   	

	 					}
	 				});
				}else{
					alert('Opps something is wrong to store your quiz result');
				}
							
			});

		} 					

	 //}    	
    }; // end submit question operation


}])
.controller('practiceCtrl',['$rootScope','$scope','$routeParams','$localStorage','$filter','loginHttpService','$location','commonActions','urlParams','$http','user_roles','questionslimit','quiz_type','quiz_mastered_score','mlg_subjects_for_masscourt',function($rootScope,$scope,$routeParams,$localStorage,$filter, loginHttpService,$location,commonActions,urlParams,$http,user_roles,questionslimit,quiz_type,quiz_mastered_score,mlg_subjects_for_masscourt) {
	var get_uid=commonActions.getcookies(get_uid);
	var senddata= {};
	var attempt_questions_status = [];
	var local_questions_status =[];
	$scope.questions_status = [];

	var promise = loginHttpService.getCourseInfo($routeParams.subskill_id).success(function(crinfo) {	
		return crinfo ;
	});

promise.then(function(result) {
	$scope.course_name = result.data.response.course_Information.course_name;
	$scope.selected_subject = result.data.response.parent_info_of_skill.course_name;

	$scope.skill_id_URL = result.data.response.skill_info_of_subskill.id;
	var skillname = result.data.response.skill_info_of_subskill.course_name.toLowerCase();
	$scope.skill_name_URL =	skillname.replace(/\s+/g, '-'); 
	
		 $scope.numToAlpha =function(idx) {
          var getAlpha = ['A','B','C','D','E','F','G'];
          return getAlpha[idx];
        }

       //$scope.questate_class = 'active';
       $scope.data = {};
       var skip = null;
       $scope.attempts = 0;

	//console.log(result);
	var d = new Date();
	senddata ={
		user_id 	: get_uid,
		grade_id 	: result.data.response.course_Information.level_id,
		subskill_id : $routeParams.subskill_id,
		quiz_type_id : quiz_type.PRACTICE, // id of the table quiz_types
		questions_limit : questionslimit.PRACTICE,
		quiz_name : 'practice-'+ d.getFullYear()+(d.getMonth()+1)+d.getDate(),
	};


	// To maintain old quiz questions if user quize questions response is incomplete
	var localQuizResponse = JSON.parse(localStorage.getItem('localQuizResponse'));
	var localQuestions= JSON.parse(localStorage.getItem('ngStorage-localquestions'));
	//if(localQuizResponse ==null && localQuestions==null ){
		if(localQuestions==null ){
		
		// API to create quiz and questions list of quiz created for user 
		loginHttpService.createQuizOnStudent(senddata).success(function(resitem){

			if (resitem.data.status == true) {
				//$scope.assignment_details = resitem.data.assignment_details;
				var quizquestions = resitem.data.questions;

				//local storage functionality implementation
		  		$localStorage.localquestions= quizquestions; //set value in local storage	  	
		  		$scope.data.questions= $localStorage.localquestions //get value in localstorage



		  		// To check the sequence of the question in quiz	  	
		  		if(localStorage.getItem('userQuesSequence')!=null ) {
		  			$scope.sequence=parseInt(localStorage.getItem('userQuesSequence'));
		  		}else{
		  			$scope.sequence=0;	  				  			
		  			var a=[];
		  			localStorage.setItem('localQuizResponse', JSON.stringify(a));
		  		}

		  		// Set current question
		  		$scope.currentquestion= $scope.data.questions[$scope.sequence];	
		  		$scope.total_questions=$scope.data.questions.length-1;

		  		// To maintain the question number indicator
			  	var qstatus={};
			  	for(var i=0; i<$scope.total_questions; i++){
			  		qstatus ={
		    			sequence : i,
		    			status   : 'inactive'
		    		}
		    		attempt_questions_status.push(qstatus);

			  	}
			  	if(localStorage.getItem('questionsStatus')==null ) {
			  		localStorage.setItem('questionsStatus', JSON.stringify(attempt_questions_status));	  	
			  	}			  	
			  	
			  	local_questions_status = JSON.parse(localStorage.getItem('questionsStatus'));
			  	attempt_questions_status[$scope.sequence]['status']="minimize";
			  	$scope.questions_status = attempt_questions_status;		  		

			}else{
					$scope.creatquiz_message = "Soon Quiz will generate for you for this susbkill.";

			}
		}); // end createquiz APi
			

	}else{ // if quiz attemped incomplete then pick question from localstorage
		$scope.data.questions= $localStorage.localquestions;
		
		// To check the sequence of the question in quiz	  	
	  		if(localStorage.getItem('userQuesSequence')!=null && localStorage.getItem('userQuesSequence') !=0 ) {
	  			$scope.sequence=parseInt(localStorage.getItem('userQuesSequence'));
	  		}else{
	  			$scope.sequence=0;
	  			var a=[];
	  			localStorage.setItem('localQuizResponse', JSON.stringify(a));
	  		}	  	
	  	
	  		$scope.currentquestion= $scope.data.questions[$scope.sequence];	
	  		$scope.total_questions=$scope.data.questions.length-1;

	  		// To maintain the question number indicator
			  	var qstatus={};
			  	for(var i=0; i<$scope.total_questions; i++){
			  		qstatus ={
		    			sequence : i,
		    			status   : 'inactive'
		    		}
		    		attempt_questions_status.push(qstatus);

			  	}
			  	if(localStorage.getItem('questionsStatus')==null ) {
			  		localStorage.setItem('questionsStatus', JSON.stringify(attempt_questions_status));	  	
			  	}
			  	
			  	
			  	local_questions_status = JSON.parse(localStorage.getItem('questionsStatus'));
			  	attempt_questions_status[$scope.sequence]['status']="minimize";
			  	$scope.questions_status = attempt_questions_status;
	}

}); // end then promise
	 

	// To read the question in male UK voice    
	$scope.readQuestion=function(){            
        var questiontext= $scope.currentquestion.questionName;          
        responsiveVoice.speak("" + questiontext +"", "UK English Male");                        
	}


	//close masscourt
	$scope.closeMascot=function(st_result){         
        if(st_result=='correct' || st_result=='wrong'){
        	$("#skillquizmasscourt_id").removeClass("active");
        } 
        else if(st_result=='pass'){
        	window.location.href='skill-door/'+$scope.skill_name_URL+'/'+$scope.skill_id_URL;
        } else{
        	window.location.href='subskill_content/'+$routeParams.subskill_name+'/'+$routeParams.subskill_id;
        }                     
	}
	




	//get student response for question/ on Submit question answer.
    $scope.onSubmitQuestion = function(frm,skip){ 
    	$scope.error_optionmessage=""; 
    	var correctoption=$scope.currentquestion.answers[0].value;
    	var newqstate ='active';
    	var a = [];
    	
		 //var question_marks=$scope.currentquestion.question_marks;

    	// step 1- To check buton click is submit or skip button (if skip = 0 means click on submit/ skip)
    	if(skip == 1){ // if skip button is clicked    		
        	newqstate ="cancel";        	
     
    		//Step-2  Set required coulum values    			
	 			var userExamResponse={};
      	 		userExamResponse={
       				user_id 	: get_uid,
       				exam_id 	: $scope.currentquestion.quiz_id,
       				item_id 	: $scope.currentquestion.question_id,
       				item_marks	: $scope.currentquestion.question_marks,
       				response 	: '',
       				correct 	: 0,
       				score 		: 0,       				
       				skip_count 	: 1,
       				grade_id 	: $scope.currentquestion.grade_id,
					course_id : $scope.currentquestion.course_id,
					quiz_type_id : quiz_type.PRACTICE, // id of the table quiz_types
					//time_taken 	: 1,
       			}

    	}
    	else{	// if submit button is clicked

    		 newqstate ="done";    		

    		// check selected option   frm.selectedoption
	 		if(typeof frm.selectedoption=='undefined'){
	 			$scope.error_optionmessage="Please select you option";	 			
	 		}else{
	 			//$scope.sequence +=1;
    			//$scope.currentquestion= $scope.assigment_items[$scope.sequence];

    			

    			//step-1 - calculate right and wrong attempt 		 		
		 		if(frm.selectedoption==correctoption){
		 			console.log(frm.selectedoption);
		 			var selectedAnswer=1; // select option is correct
		 			$scope.masscourt_message="Awesome, you got this correct";		 			
		 			var score= $scope.currentquestion.answers[0].score;
		 			//alert('Correct');

		 			$scope.current_quesstatus="correct";
		 			$scope.st_result="correct";
		 			//$scope.answer_result = "correct"; 
		 		}
		 		else{
		 			selectedAnswer=0; // select option is wrong
		 			if(typeof $scope.currentquestion.penalty_score=='undefined'){ score=0}
		 			else{ score =$scope.currentquestion.penalty_score; }
		 			$scope.masscourt_message="Oops, This is not the correct answer";		 				
		 			//alert('wrong');
		 			$scope.current_quesstatus="wrong";
		 			$scope.st_result="wrong";

		 			//$scope.answer_result = "wrong"; 
		 		}

		 		//Step-2  Set required coulum values		 		
	 			var userExamResponse={};
      	 		userExamResponse={
       				user_id 	: get_uid,
       				exam_id 	: $scope.currentquestion.quiz_id,
       				item_id 	: $scope.currentquestion.question_id,
       				item_marks	: $scope.currentquestion.question_marks,
       				response 	: frm.selectedoption,
       				correct 	: selectedAnswer,
       				score 		: score,       				
       				skip_count 	: 0,
       				grade_id 	: $scope.currentquestion.grade_id,
					course_id : $scope.currentquestion.course_id,
					quiz_type_id : quiz_type.PRACTICE,
       				//time_taken 	: 1,
       			}

       		// Check Masscourt image and message			
			var selected_subject = $scope.currentquestion.subject;
			if(selected_subject==mlg_subjects_for_masscourt.MATH || selected_subject==mlg_subjects_for_masscourt.MATHS ){
				if($scope.current_quesstatus =="correct"){	$scope.masscourt_image ="math_right.png";}
				else{ $scope.masscourt_image ="math_wrong.png";	}
			}
			else if(selected_subject==mlg_subjects_for_masscourt.ENGLISH){
				if($scope.current_quesstatus =="correct"){	$scope.masscourt_image ="english_right.png";}
				else{ $scope.masscourt_image ="english_wrong.png";	}
			}
			else if(selected_subject==mlg_subjects_for_masscourt.SCIENCE){
				if($scope.current_quesstatus =="correct"){	$scope.masscourt_image ="science_right.png";}
				else{ $scope.masscourt_image ="science_wrong.png";	}
			}
			else if(selected_subject==mlg_subjects_for_masscourt.SOCIALSCIENCE){
				if($scope.current_quesstatus =="correct"){	$scope.masscourt_image ="social_studies_right.png";}
				else{ $scope.masscourt_image ="social_studies_wrong.png";	}

			}else{
				$scope.masscourt_image='mascot.png';
			} 
			$("#skillquizmasscourt_id").addClass("active"); // show masscourt with value of masscourt_image and masscourt_message
   		}
   	}	
	 	
 			

       	//Step-3 Procceed check questions sequence either for next question or show result if sequence is on last.
		if( ($scope.sequence < $scope.total_questions) && ($scope.error_optionmessage=="" ) ) {
		
			//3.1 Add the quiz response in local storage
       		//var b;
       		//console.log(a); 
       		a = JSON.parse(localStorage.getItem('localQuizResponse')); 
       		a.push(userExamResponse); 
    		localStorage.setItem('localQuizResponse', JSON.stringify(a));
		 	localStorage.setItem('userQuesSequence', $scope.sequence+1);
		 	$scope.sequence+=1;
		 	$scope.currentquestion= $scope.data.questions[$scope.sequence];
		 	$scope.frm={};

		 	// update question status in question indicator        	
		    attempt_questions_status[$scope.sequence]['status']= newqstate;
		    attempt_questions_status[$scope.sequence+1]['status']="minimize";
		       	      		
		    localStorage.setItem('questionsStatus', JSON.stringify(attempt_questions_status));        	
		    local_questions_status = JSON.parse(localStorage.getItem('questionsStatus'));
		    $scope.questions_status = attempt_questions_status;    	

		}
		else if( ($scope.sequence < $scope.total_questions) && ($scope.error_optionmessage!="" ) ) {
			console.log($scope.error_optionmessage);
		}	 			 		
		else{ 

			//Step- 4 send local Stoage Quiz attand Response to API						
			//localStorage.setItem('userQuesSequence', 0);
			localStorage.removeItem("userQuesSequence");
					
			var userQuizAttandResponses=localStorage.getItem('localQuizResponse')
			loginHttpService.setUserQuizResponse(userQuizAttandResponses).success(function(apiresponse) {							
				if (apiresponse.response.status == "true") {
					var user_quiz_id=apiresponse.response.quiz_attempt_id;
					localStorage.setItem('user_quiz_id', user_quiz_id);
		  						
					// Step -5 to Get the User Result
					loginHttpService.getUserQuizResponse(get_uid,$scope.currentquestion.quiz_id,user_quiz_id).success(function(quizResultResponse) {
			 			// a=[];
						//localStorage.setItem('localQuizResponse', JSON.stringify(a)); // empty localstorage userquiz response
			 			//localStorage.setItem('ngStorage-localquestions', JSON.stringify(a));
					 			
			 			localStorage.removeItem("localQuizResponse"); // empty the local storage
			 			localStorage.removeItem("ngStorage-localquestions");

			 			if (quizResultResponse.response.status == true) {
		 					//var correct_answer= quizResultResponse.response.correct_questions;
		 					//var wrong_answer= quizResultResponse.response.correct_questions;
		 					var st_result="";
		 					if(quizResultResponse.response.student_result_percent< quiz_mastered_score.SUBSKILLQUIZ){
		 						$scope.st_result= "fail";
		 						$("#skillquizmasscourt_id").addClass("active");
		 						//alert("Your are Fail");
		 						$scope.masscourt_message="Your this practice will not scored good.";
		 					}
		 					else{
			 						$scope.st_result= "pass";			 						
			 						//alert("Your are Pass");
			 						$scope.masscourt_message="Excellent... You did good.";
			 					}
								//window.location.href='challenges';
							// Check Masscourt image and message			
							var selected_subject = $scope.currentquestion.subject;
							if(selected_subject==mlg_subjects_for_masscourt.MATH || selected_subject==mlg_subjects_for_masscourt.MATHS ){
								$scope.masscourt_image ='math_normal.png';
							}
							else if(selected_subject==mlg_subjects_for_masscourt.ENGLISH){
								$scope.masscourt_image ='english_normal.png';
							}
							else if(selected_subject==mlg_subjects_for_masscourt.SCIENCE){
								$scope.masscourt_image = 'science_normal.png';
							}
							else if(selected_subject==mlg_subjects_for_masscourt.SOCIALSCIENCE){
								$scope.masscourt_image = 'social_studies_normal.png';
							}else{
								$scope.masscourt_image='mascot.png';
							} 
							$("#skillquizmasscourt_id").addClass("active"); // show masscourt with value of masscourt_image and masscourt_message
   	

	 					}
	 				});
				}else{
					alert('Opps something is wrong to store your quiz result');
				}							
			});
		} 					

	 //}    	
    }; // end submit question operation


}])
.controller('subSkillRoomCtrl',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles','$routeParams','commonActions','quiz_type','quiz_mastered_score',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles,$routeParams,commonActions,quiz_type,quiz_mastered_score) {
	var get_uid=commonActions.getcookies(get_uid);
	if (document.cookie == '' || get_uid == 'null') {
		alert('kindly login');
		window.location.href='/mlg_ui/app/';
	}
	
	//var pid = $routeParams.id;
	//var type = $routeParams.type;
	$scope.URLsubskill_id = $routeParams.course_id;
	$scope.URLsubskill_name = $routeParams.subskill_name;
/*	$scope.subject_detail = {};
	loginHttpService.getAllCourseList(pid, type, course_id).success(function(response) {
		if (response.response.course_details.length > 0){
			$scope.subject_detail = response.response.course_details;
		} else{
			response.subject_detail = 0;
		}
	});
	$scope.show_subskill = function(){ 
		$location.url('/subskill_content/'+$routeParams.subskill_name+'/'+ URLsubskill_id);		
	}; */


		
	loginHttpService.getUserQuizResponseOnSite(get_uid,quiz_type.SUBSKILLQUIZ, $scope.URLsubskill_id).success(function(res_skillquiz) {
		if (res_skillquiz.response.status == true){
			if(res_skillquiz.response.student_result_percent>= quiz_mastered_score.SUBSKILLQUIZ ){ 
				//$scope.skill_result = 'pass';
				$scope.quiz_name = "Practice";	
				$scope.quiz_link = "practice/"+$scope.URLsubskill_name+'/'+$scope.URLsubskill_id;
			}			
			else{
				//$scope.skill_result = 'fail';
				$scope.quiz_name = "Challenges";
				$scope.quiz_link = "challenges";
			}				
		}else{
				$scope.quiz_name = "Quizes";
				$scope.quiz_link = "subskill-quiz/"+$scope.URLsubskill_name+'/'+$scope.URLsubskill_id;
			}
			
	});


}])
.controller('subjectViewCtrl',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles','$routeParams','commonActions','quiz_type','quiz_mastered_score',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles,$routeParams,commonActions,quiz_type,quiz_mastered_score) {

	var get_uid=commonActions.getcookies(get_uid);
	if (document.cookie == '' || get_uid == 'null') {
		alert('kindly login');
		window.location.href='/mlg_ui/app/';
	}

	var pid = $routeParams.id;
	$scope.cid=$routeParams.id;	
	$scope.skill_result = [];
	
	loginHttpService.getStudentCourseList(get_uid,pid).success(function(res_skill) {
    var stu_skill = '';
    if(res_skill.by == 'scope') {
      stu_skill = angular.fromJson(res_skill.response[0].scope);
      console.log(stu_skill);
    }else if(res_skill.by == 'course') {
      stu_skill = res_skill.response;
    }
    $scope.subject_detail = [];
		if(stu_skill.length > 0){
      angular.forEach(stu_skill,function(skil,key){
        if(skil['visibility'] == '1') {
         $scope.subject_detail.push({
           'course_id' : skil['course_id'],
           'name' : skil['name'],
           'start_date' : skil['start_date'],
           'end_date' : skil['end_date'],
           'parent_id' : skil['parent_id'],
           'visibility' : skil['visibility'],
         }); 
        } 
      });
//			$scope.subject_detail = stu_skill;
			for(var i=0; i< $scope.subject_detail.length ; i++){				
				var skill_id = $scope.subject_detail[i].course_id;
        var course = $scope.subject_detail[i].parent_id;
				// API to get all subskill of skill.
				loginHttpService.getStudentCourseList(get_uid,skill_id,course).success(function(res_subskill) {
        var stu_subSkill = res_subskill.response;
				if (stu_subSkill.length > 0){
					var subskill_details = stu_subSkill;
					for(var j=0; j< subskill_details.length ; j++){
						var subskill_id = subskill_details[j].course_id;
						//API to 1. check subskill quiz is pass/fail  or 2. any challenges from teacer/parents
						loginHttpService.getUserQuizResponseOnSite(get_uid,quiz_type.SUBSKILLQUIZ, subskill_id).success(function(res_skillquiz) {
              if (res_skillquiz.response.status == true){
								if(res_skillquiz.response.student_result_percent>= quiz_mastered_score.SUBSKILLQUIZ ) 
									$scope.skill_result[subskill_id] = 'pass';
								else
									$scope.skill_result[subskill_id] = 'fail';
							}else{
								$scope.skill_result[$scope.skill_result] =  res_skillquiz.response.message;
							}
							console.log($scope.skill_result);
						});
					}
				} else{
					 $scope.msg ="No subskill";
				}                 
			});				
			}

		} else{
			$scope.subject_detail = 0;
		} 
	});

	// API to check arena  Flag/unflag	
	var quiz_type_id = quiz_type.PRETEST;
	//var subject_id = $routeParams.id;	
	var subject_id =-1;
	loginHttpService.getUserQuizResponseOnSite(get_uid, quiz_type_id, subject_id).success(function(response) {
		if (response.response.status == true && response.response.student_result_percent>= quiz_mastered_score.PRETEST ) {
			$scope.pretest_result = 'pass';
		}else{
			$scope.pretest_result = 'fail';
		}
	});


	//API to check burn fire 
	//1. if knight challenge done get flag
	// 2. if quiz in skilldoor is not mastered and student get assignment get burn fire.
	/*$scope.mytest = function(inx, skill_id){
		//alert(inx);
		loginHttpService.getUserQuizResponseOnSite(get_uid,quiz_type.SUBSKILLQUIZ, skill_id).success(function(response) {
		if (response.response.status == true && response.response.student_result_percent>= quiz_mastered_score.SUBSKILLQUIZ ) {
			$scope.skill_result = 'pass';
		}else{
			$scope.skill_result = 'fail';
		}
	});

	}*/


}])
.controller('skillDoorCtrl',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles','$routeParams','commonActions','$localStorage',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles,$routeParams,commonActions,$localStorage) {
		

				

	var get_uid=commonActions.getcookies(get_uid);
	if (document.cookie == '' || get_uid == 'null') {
		alert('kindly login');
		window.location.href='/mlg_ui/app/';
	}
	var pid = $routeParams.id;
  var course = '-1';
	$scope.URLskill_id = $routeParams.id;
	$scope.URLskill_name = $routeParams.skill_name;
	loginHttpService.getStudentCourseList(get_uid,pid,course).success(function(response) {
    var stu_skill = '';
    if(response.by == 'scope') {
      stu_skill = angular.fromJson(response.response[0].scope);
    }else if(response.by == 'course') {
      stu_skill = response.response;
    }
    $scope.subject_detail = [];  
		if (stu_skill.length > 0){
//			$scope.subject_detail = response.response.course_details;
      angular.forEach(stu_skill,function(skil,key){
        if(skil['visibility'] == '1') {
         $scope.subject_detail.push({
           'course_id' : skil['course_id'],
           'name' : skil['name'],
           'start_date' : skil['start_date'],
           'end_date' : skil['end_date'],
           'parent_id' : skil['parent_id'],
           'visibility' : skil['visibility'],
         }); 
        } 
      });
		} else{
			response.subject_detail = 0;
		}                 
	});

	var selected_course=$localStorage.selected_course;
	if(selected_course=='Math'){
		$scope.mascot_img='math_normal.png';
	}
	else if(selected_course=='English'){
		$scope.mascot_img='english_normal.png';
	}
	else if(selected_course=='Science'){
		$scope.mascot_img='science_normal.png';
	}
	else if(selected_course=='Social Science'){
		$scope.mascot_img='social_studies_normal.png';
	}else{
		$scope.mascot_img='mascot.png';
	}

	$scope.close_skill_mascot=function(){
		$("#skillmascot").removeClass("in");
	  	setTimeout(function(){ $("#skillmascot").removeClass("active"); }, 100);	  
	}

	$scope.close_challanges_mascot=function(){
		$("#knight_challanges").removeClass("in");
	  	setTimeout(function(){ $("#knight_challanges").removeClass("active"); }, 100);
	}

  $scope.show_knight_mascot=function(){
  	$("#knight_challanges").addClass("in");
  	//$("#skillmascot").removeClass('active');
  	$("#knight_challanges").addClass("active");
  }


  // API to check the knight challenge will locked/unlocked
  loginHttpService.checkKnightQuizStatus($routeParams.id,get_uid).success(function(res) {  		
  		if(res.response.status=true && res.response.KnightQuiz_status=="enable" ){  			
  			$scope.kstatus =1;
  		}
  });

}])
.controller('subskillContent',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles','$routeParams','commonActions','$sce','$q','$route',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles,$routeParams,commonActions,$sce,$q,$route) {
	var get_uid=commonActions.getcookies(get_uid);
	if (document.cookie == '' || get_uid == 'null') {
		alert('kindly login');
		window.location.href='/mlg_ui/app/';
	}
	$scope.getIframeSrc = function (videoId) {
      return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId);
	};
	$scope.getImgSrc = function (imageUrl) {
      return $sce.trustAsResourceUrl($scope.base_url + '/' + imageUrl.trim());
	};
	$scope.getVideoSrc = function (videoUrl) {
      return $sce.trustAsResourceUrl($scope.base_url + '/' + videoUrl.trim());
	};
    $scope.base_url = urlParams.baseURL;
	var pid = $routeParams.pid;
	//var type = $routeParams.type;
	var type = 'type';
	var course_id = $routeParams.course_id;
    $scope.networkState = 'online';

      var previous_network_state = '';
      $scope.check_network_state = function() {
        $scope.networkState = (navigator.onLine == false) ? 'offline' : 'online';
        if ((navigator.onLine == false) && (localStorage.getItem('responseForStudentContent') != null)) {
          $scope.networkState = previous_network_state = 'offline';
          var response = JSON.parse(localStorage.getItem('responseForStudentContent'));
          process_page(response);
        }
        if ($scope.networkState == 'online' && previous_network_state == 'offline') {
           $route.reload();
        }
      };

      $scope.check_network_state();

      loginHttpService.getAllCourseList(pid, type, course_id, get_uid).success(function(response) {
        if (response.response.course_details.length > 0) {
          localStorage.setItem('responseForStudentContent', JSON.stringify(response));
          process_page(response);
        } else {
          response.topic_detail = [];
        }
      });

      function process_page(response) {
        $scope.topic_detail = response.response.course_details;
		var khan_api_slugs = response.response.khan_api_slugs;
		$scope.teacher_contents = response.response.teacher_contents;
		var khan_api_response_content = [];
		if (khan_api_slugs != '') {
		  angular.forEach(khan_api_slugs, function(khan_api_slug, index) {
		    $http.get(urlParams.khanApiTopic + khan_api_slug).success(
              function(contents) {
                angular.forEach(contents.children, function(child, key) {
                  if (child.kind.toUpperCase() != 'EXERCISE') {
                    if (child.kind.toUpperCase() == 'VIDEO') {
                      var content_title = response.response.khan_api_content_title;
                      if (content_title.indexOf(child.id) !== -1) {
                        $http.get(urlParams.khanApiVideo + child.id).then(function(video_response) {
                          var youtube_id = video_response.data.translated_youtube_id;
                          khan_api_response_content.push({
                            name: child.title,
                            descriptions: child.description,
                            kind: child.kind,
                            url: child.url,
                            youtube_id: youtube_id
                          });
                        });
                      }
                    } else if (child.kind.toUpperCase() == 'ARTICLE') {
                      $http.get(urlParams.khanApiArticle + child.internal_id).then(function(article_response) {
                        var article_content = JSON.parse(article_response.data.perseus_content);
                        var article_description = article_content[0].content;
                        khan_api_response_content.push({
                          name: child.title,
                          descriptions: article_description,
                          kind: child.kind,
                          url: child.url,
                        });
                      });
                    } else {
                      khan_api_response_content.push({
                        name: child.title,
                        descriptions: child.description,
                        kind: child.kind,
                        url: child.url,
                      });
                    }
                  }
                });
              });
            });
          }
        $scope.khan_api_content = khan_api_response_content;
      }



$scope.apiTabs=function(){
	$(".table-of-content .nav-tabs li").removeClass("active");
	$(this).parent().addClass("active");
	//$(tabIdactivated).addClass("active in");				
}
}])
.controller('challengesCtrl',['$rootScope','$scope','$localStorage','$filter','loginHttpService','$location','urlParams','$routeParams','$http','user_roles','quiz_type','quiz_mastered_score','questionslimit','mlg_subjects_for_masscourt','commonActions','$sce','$q',function($rootScope,$scope,$localStorage,$filter, loginHttpService,$location,urlParams,$routeParams,$http,user_roles,quiz_type,quiz_mastered_score,questionslimit,mlg_subjects_for_masscourt,commonActions,$sce,$q) {

	var get_uid=commonActions.getcookies(get_uid);
	var assignment_id ="37";
	$scope.mastered = quiz_mastered_score.TEACHERCUSTOMASSIGNMENT;


	// To masscourt Action
	$("#gotIt").click(function(){
	  	$(".masscourt-block .masscourt-cover").removeClass("in");
	  	setTimeout(function(){
	  		$(".masscourt-block").removeClass("active");
	  	}, 500);

	  });

if(typeof($routeParams.assignment_id) == 'undefined') {
// Step -1 to show student assignments
	// Api to get the stidents courses
	loginHttpService.getStudentCourses(get_uid).success(function(res) {
		if(res.response.status="TRUE"){
			var st_grade_id=res.response.student_class;
			$scope.student_courses = res.response.student_courses;
			var first_subj = $scope.student_courses[0].id;


				// to make first tab of subject active
				//API to call number of assignments
			 	loginHttpService.getStudentAssignments(get_uid,first_subj).success(function(respAssgn) {			 		
			 		//console.log(respAssgn.response.status);
		    	if (respAssgn.response.status == true) {
		    			$scope.assignments =[];
		    		  angular.forEach(respAssgn.response.assignment, function(assgnitem){
		                   if(assgnitem.subject_id == first_subj ){                   	
		                   		$scope.assignments.push(assgnitem); 
		                   }                   
		               });
		   		}
		   		else{
		   			//$scope.err_assignment_message = respAssgn.response.message ;
		   			$scope.err_assignment_message = "Wait!! No challenges are assigned you by your teacher." ;
		   		}
		   		$(".subject_"+first_subj).addClass('active in');
		    });




		}else{
			$scope.error_message= "Issue in finding the courses.";
		}
	});


	$scope.onClickSubject = function(subid){

		$('ul li.active').removeClass('active in');
		$('.tab-pane').removeClass('active in');
		$(".subject_"+subid).addClass('active in');
		

		
		//API to call number of assignments
	 	loginHttpService.getStudentAssignments(get_uid,subid).success(function(respAssgn) {
	 		console.log(respAssgn.response.status);
    	if (respAssgn.response.status == true) {
    			$scope.assignments =[];
    		  angular.forEach(respAssgn.response.assignment, function(assgnitem){
                   if(assgnitem.subject_id == subid ){                   	
                   		$scope.assignments.push(assgnitem); 
                   }                   
               });
   		}
   		else{
   			//$scope.err_assignment_message = respAssgn.response.message ;
   			$scope.err_assignment_message = "Wait!! No challenges are assigned you by your teacher." ;
   		}
    });

	}


}
else{
	// Step - 2 To call items of assignments	
	 $scope.numToAlpha =function(idx) {
          var getAlpha = ['A','B','C','D','E','F','G'];
          return getAlpha[idx];
        }

       $scope.questate_class = 'active';
       $scope.data = {};
       var skip = null;

	//API to get items/questions of assignments
	loginHttpService.getAssignmentItems($routeParams.assignment_id).success(function(resitem) {
		if (resitem.response.status == true) {
			$scope.assignment_details = resitem.response.assignment_details;
			var assigmentquestions = resitem.response.questions;

			//local storage functionality implementation
	  		$localStorage.localquestions= assigmentquestions; //set value in local storage	  	
	  		$scope.data.questions= $localStorage.localquestions //get value in localstorage

	  		// To check the sequence of the question in quiz	  	
	  		if(localStorage.getItem('userQuesSequence')!=null ) {
	  			$scope.sequence=parseInt(localStorage.getItem('userQuesSequence'));
	  		}else{
	  			$scope.sequence=0;
	  			var a=[];
	  			localStorage.setItem('localQuizResponse', JSON.stringify(a));
	  		}	  	
	  	
	  		$scope.currentquestion= $scope.data.questions[$scope.sequence];	
	  		$scope.total_questions=$scope.data.questions.length-1;

			
		}else{
			$scope.message = "Issue in traversing page";
		}
    
    });


    // To read the question in male UK voice    
	  	$scope.readQuestion=function(){            
            var questiontext= $scope.currentquestion.question_name;          
            responsiveVoice.speak("" + questiontext +"", "UK English Male");                        
	  	}

	  	//close masscourt
	$scope.closeMascot=function(st_result){         
        if(st_result=='correct' || st_result=='wrong'){
        	$("#skillquizmasscourt_id").removeClass("active");
        } 
        else if(st_result=='pass'){
        	window.location.href='challenges';
        } else{
        	window.location.href='challenges';
        }                     
	}
	


    //get student response for question/ on Submit question answer.
    $scope.onSubmitQuestion = function(frm,skip){ 
    	$scope.error_optionmessage=""; 
    	var correctoption=$scope.currentquestion.answers[0].value;
		 var question_marks=$scope.currentquestion.answers[0].score;


    	// step 1- To check buton click is submit or skip button (if skip = 0 means click on submit/ skip)
    	if(skip == 1){ // if skip button is clicked
    		
    		//Step-2  Set required coulum values
	 			var userExamResponse={};
      	 		userExamResponse={
       				user_id 	: get_uid,
       				exam_id 	: $scope.assignment_details.quiz_id,
       				item_id 	: $scope.currentquestion.question_id,
       				item_marks	: question_marks,
       				response 	: '',
       				correct 	: 0,
       				score 		: 0,       				
       				skip_count 	: 1,
       				grade_id 	: $scope.assignment_details.grade_id,
					course_id : $scope.assignment_details.course_id,
					quiz_type_id : quiz_type.TEACHERCUSTOMASSIGNMENT, // id of the table quiz_types
       				//time_taken 	: 1,
       			}

    	}
    	else{	// if submit button is clicked

    		// check selected option   frm.selectedoption
	 		if(typeof frm.selectedoption=='undefined'){
	 			$scope.error_optionmessage="Please select you option";	 			
	 		}else{
	 			//$scope.sequence +=1;
    			//$scope.currentquestion= $scope.assigment_items[$scope.sequence];

    			//step-1 - calculate right and wrong attempt 		 		
		 		if(frm.selectedoption==correctoption){
		 			console.log(frm.selectedoption);
		 			var selectedAnswer=1; // select option is correct
		 			$scope.masscourt_message="Awesome, you got this correct";
		 			//alert('Correct');
		 			var score= $scope.currentquestion.answers[0].score;
		 			$scope.current_quesstatus="correct";
		 			$scope.st_result="correct";
		 		}
		 		else{
		 			selectedAnswer=0; // select option is wrong
		 			if(typeof $scope.currentquestion.penalty_score=='undefined'){ score=0}
		 			else{ score =$scope.currentquestion.penalty_score; }
		 			$scope.masscourt_message="Oops, This is not the correct answer";		 				
		 			//alert('wrong'); 
		 			$scope.current_quesstatus="wrong";
		 			$scope.st_result="wrong";
		 		}

		 		//Step-2  Set required coulum values
	 			var userExamResponse={};
      	 		userExamResponse={
       				user_id 	: get_uid,
       				exam_id 	: $scope.assignment_details.quiz_id,
       				item_id 	: $scope.currentquestion.question_id,
       				item_marks	: question_marks,
       				response 	: frm.selectedoption,
       				correct 	: selectedAnswer,
       				score 		: score,       				
       				skip_count 	: 0,
       				grade_id 	: $scope.assignment_details.grade_id,
					course_id : $scope.assignment_details.course_id,
					quiz_type_id : quiz_type.TEACHERCUSTOMASSIGNMENT, // id of the table quiz_types
       				//time_taken 	: 1,
       			}

       			// Check Masscourt image and message			
				//var selected_subject = $scope.currentquestion.subject; 
				var selected_subject = "Math"; 
				if(selected_subject==mlg_subjects_for_masscourt.MATH || selected_subject==mlg_subjects_for_masscourt.MATHS ){
					if($scope.current_quesstatus =="correct"){	$scope.masscourt_image ="math_right.png";}
					else{ $scope.masscourt_image ="math_wrong.png";	}
				}
				else if(selected_subject==mlg_subjects_for_masscourt.ENGLISH){
					if($scope.current_quesstatus =="correct"){	$scope.masscourt_image ="english_right.png";}
					else{ $scope.masscourt_image ="english_wrong.png";	}
				}
				else if(selected_subject==mlg_subjects_for_masscourt.SCIENCE){
					if($scope.current_quesstatus =="correct"){	$scope.masscourt_image ="science_right.png";}
					else{ $scope.masscourt_image ="science_wrong.png";	}
				}
				else if(selected_subject==mlg_subjects_for_masscourt.SOCIALSCIENCE){
					if($scope.current_quesstatus =="correct"){	$scope.masscourt_image ="social_studies_right.png";}
					else{ $scope.masscourt_image ="social_studies_wrong.png";	}

				}else{
					$scope.masscourt_image='mascot.png';
				} 
				$("#skillquizmasscourt_id").addClass("active"); // show masscourt with value of masscourt_image and masscourt_message
   		
   			}
    	}	
    			//Step-3 Procceed check questions sequence either for next question or show result if sequence is on last.
		 		if( ($scope.sequence < $scope.total_questions) && ($scope.error_optionmessage=="" ) ) {
		 			//3.1 Add the quiz response in local storage
       				//var b;
       				a = JSON.parse(localStorage.getItem('localQuizResponse'));    
    				a.push(userExamResponse); 
    				localStorage.setItem('localQuizResponse', JSON.stringify(a));


		 			localStorage.setItem('userQuesSequence', $scope.sequence+1);
		 			$scope.sequence+=1;
		 			$scope.currentquestion= $scope.data.questions[$scope.sequence];
		 			$scope.frm={};
		 		}
		 		else if( ($scope.sequence < $scope.total_questions) && ($scope.error_optionmessage!="" ) ) {
		 			console.log($scope.error_optionmessage);
		 		}	 			 		
				else{ 

						//Step- 4 send local Stoage Quiz attand Response to API						
						//localStorage.setItem('userQuesSequence', 0);

						
						var userQuizAttandResponses=localStorage.getItem('localQuizResponse')
						loginHttpService.setUserQuizResponse(userQuizAttandResponses).success(function(apiresponse) {							
							if (apiresponse.response.status == "true") {
								var quiz_id=apiresponse.response.quiz_attempt_id;
								localStorage.setItem('quiz_id', quiz_id);				
		  						// Step -5 to Get the User Result
		  						loginHttpService.getUserQuizResponse(get_uid,$scope.assignment_details.quiz_id,quiz_id).success(function(quizResultResponse) {
						 			 //a=[];
		  							//localStorage.setItem('localQuizResponse', JSON.stringify(a)); // empty localstorage userquiz response
						 			localStorage.removeItem("localQuizResponse"); // empty the local storage
									localStorage.removeItem("ngStorage-localquestions");
									localStorage.removeItem("userQuesSequence");

						 			if (quizResultResponse.response.status == true) {
						 					var correct_answer= quizResultResponse.response.correct_questions;
						 					var wrong_answer= quizResultResponse.response.correct_questions;
						 					 $scope.st_result="";
						 					if(quizResultResponse.response.student_result< 60){
						 						 $scope.st_result= "fail";
						 						 $("#skillquizmasscourt_id").addClass("active");
						 						//alert("Your are Fail");
						 						$scope.masscourt_message="You need more attention. Your are not mastered.";
						 					}
						 					else{
						 						$scope.st_result= "pass";
						 						//alert("Your are Pass");
						 						$scope.masscourt_message="Congrats.. Your are mastered in this skill.";
						 					}
											//window.location.href='challenges';
											// Check Masscourt image and message			
											//var selected_subject = $scope.currentquestion.subject;
											var selected_subject = "Math";
											if(selected_subject==mlg_subjects_for_masscourt.MATH || selected_subject==mlg_subjects_for_masscourt.MATHS ){
												$scope.masscourt_image ='math_normal.png';
											}
											else if(selected_subject==mlg_subjects_for_masscourt.ENGLISH){
												$scope.masscourt_image ='english_normal.png';
											}
											else if(selected_subject==mlg_subjects_for_masscourt.SCIENCE){
												$scope.masscourt_image = 'science_normal.png';
											}
											else if(selected_subject==mlg_subjects_for_masscourt.SOCIALSCIENCE){
												$scope.masscourt_image = 'social_studies_normal.png';
											}else{
												$scope.masscourt_image='mascot.png';
											} 
											$("#skillquizmasscourt_id").addClass("active"); // show masscourt with value of masscourt_image and masscourt_message
   	

											
						 					}
						 				});

	  					}else{
	  						alert('Opps something is wrong to store your quiz result');
	  					}							
					});

				} 		

	 		//}    	
    }; // end submit question operation


    $scope.onSkipQuestion = function(frmdata){
    	$scope.sequence +=1;
    	$scope.currentquestion= $scope.assigment_items[$scope.sequence];
    }
}
}])
.controller('knightChallengeCtrl',['$rootScope','$scope','$localStorage','$filter','loginHttpService','$location','urlParams','$routeParams','$http','user_roles','quiz_type','questionslimit','quiz_mastered_score','commonActions','$sce','$q',function($rootScope,$scope,$localStorage,$filter, loginHttpService,$location,urlParams,$routeParams,$http,user_roles,quiz_type,questionslimit,quiz_mastered_score,commonActions,$sce,$q) {

	var get_uid=commonActions.getcookies(get_uid);
	var senddata= {};
	var attempt_questions_status = [];
	var local_questions_status =[];
	$scope.questions_status = [];

	$scope.numToAlpha =function(idx) {
        var getAlpha = ['A','B','C','D','E','F','G'];
        return getAlpha[idx];
    }

    // API to get course_info and its child info
	 loginHttpService.getAllCourseList($routeParams.skill_id,'student').success(function(crinfo) {

		$scope.course_name = crinfo.response.course_information[0].course_name;		
       	$scope.data = {};
       	var skip = null;
       	$scope.attempts = 0;
       	var subskill_ids ='0';

       	for(var i=0; i<crinfo.response.course_details.length; i++ ){
       		subskill_ids = subskill_ids+','+crinfo.response.course_details[i].id;
       	}

		//console.log(result);
		var d = new Date();
		senddata ={
			user_id 	: get_uid,
			grade_id 	: crinfo.response.course_information[0].level_id,
			subskill_id : subskill_ids,
			quiz_type_id : quiz_type.KNIGHTCHALLENGE, // id of the table quiz_types
			questions_limit : questionslimit.KNIGHTCHALLENGE,
			quiz_name : 'knightchallenge-'+ d.getFullYear()+(d.getMonth()+1)+d.getDate(),
		};


	// To maintain old quiz questions if user quize questions response is incomplete
	var localQuizResponse = JSON.parse(localStorage.getItem('localQuizResponse'));
	var localQuestions= JSON.parse(localStorage.getItem('ngStorage-localquestions'));
	if(localQuizResponse ==null && localQuestions==null ){
		
		// API to create quiz and questions list of quiz created for user 
		loginHttpService.createQuizOnStudent(senddata).success(function(resitem){

			if (resitem.data.status == true) {
				//$scope.assignment_details = resitem.data.assignment_details;
				var quizquestions = resitem.data.questions;

				//local storage functionality implementation
		  		$localStorage.localquestions= quizquestions; //set value in local storage	  	
		  		$scope.data.questions= $localStorage.localquestions //get value in localstorage


		  		// To check the sequence of the question in quiz	  	
		  		if(localStorage.getItem('userQuesSequence')!=null ) {
		  			$scope.sequence=parseInt(localStorage.getItem('userQuesSequence'));
		  		}else{
		  			$scope.sequence=0;	  				  			
		  			var a=[];
		  			localStorage.setItem('localQuizResponse', JSON.stringify(a));
		  		}

		  		// Set current question
		  		$scope.currentquestion= $scope.data.questions[$scope.sequence];	
		  		$scope.total_questions=$scope.data.questions.length-1;

		  		// To maintain the question number indicator
			  	var qstatus={};
			  	for(var i=0; i<$scope.total_questions; i++){
			  		qstatus ={
		    			sequence : i,
		    			status   : 'inactive'
		    		}
		    		attempt_questions_status.push(qstatus);

			  	}
			  	if(localStorage.getItem('questionsStatus')==null ) {
			  		localStorage.setItem('questionsStatus', JSON.stringify(attempt_questions_status));	  	
			  	}			  	
			  	
			  	local_questions_status = JSON.parse(localStorage.getItem('questionsStatus'));
			  	attempt_questions_status[$scope.sequence]['status']="minimize";
			  	$scope.questions_status = attempt_questions_status;		  		

			}else{
					$scope.message = "Issue in traversing page";
			}
		}); // end createquiz APi
			

	}else{ // if quiz attemped incomplete
		$scope.data.questions= $localStorage.localquestions;
		
		// To check the sequence of the question in quiz	  	
	  		if(localStorage.getItem('userQuesSequence')!=null && localStorage.getItem('userQuesSequence') !=0 ) {
	  			$scope.sequence=parseInt(localStorage.getItem('userQuesSequence'));
	  		}else{
	  			$scope.sequence=0;
	  			var a=[];
	  			localStorage.setItem('localQuizResponse', JSON.stringify(a));
	  		}	  	
	  	
	  		$scope.currentquestion= $scope.data.questions[$scope.sequence];	
	  		$scope.total_questions=$scope.data.questions.length-1;

	  		// To maintain the question number indicator
			  	var qstatus={};
			  	for(var i=0; i<$scope.total_questions; i++){
			  		qstatus ={
		    			sequence : i,
		    			status   : 'inactive'
		    		}
		    		attempt_questions_status.push(qstatus);
			  	}
			  	if(localStorage.getItem('questionsStatus')==null ) {
			  		localStorage.setItem('questionsStatus', JSON.stringify(attempt_questions_status));	  	
			  	}
			  	
			  	
			  	local_questions_status = JSON.parse(localStorage.getItem('questionsStatus'));
			  	attempt_questions_status[$scope.sequence]['status']="minimize";
			  	$scope.questions_status = attempt_questions_status;
	}

}); 

	
		// To read the question in male UK voice    
	 	$scope.readQuestion=function(){            
            var questiontext= $scope.currentquestion.questionName;          
            responsiveVoice.speak("" + questiontext +"", "UK English Male");                        
	  	}

	
	//get student response for question/ on Submit question answer.
    $scope.onSubmitQuestion = function(frm,skip){ 
    	$scope.error_optionmessage=""; 
    	var correctoption=$scope.currentquestion.answers[0].value;
    	var newqstate ='active';
    	var a = [];
    	
		 //var question_marks=$scope.currentquestion.question_marks;

    	// step 1- To check buton click is submit or skip button (if skip = 0 means click on submit/ skip)
    	if(skip == 1){ // if skip button is clicked    		
        	newqstate ="cancel";        	
     
    		//Step-2  Set required coulum values    			
	 			var userExamResponse={};
      	 		userExamResponse={
       				user_id 	: get_uid,
       				exam_id 	: $scope.currentquestion.quiz_id,
       				item_id 	: $scope.currentquestion.question_id,
       				item_marks	: $scope.currentquestion.question_marks,
       				response 	: '',
       				correct 	: 0,
       				score 		: 0,       				
       				skip_count 	: 1,
       				grade_id 	: $scope.currentquestion.grade_id,
					course_id 	: $routeParams.skill_id,
					quiz_type_id : quiz_type.KNIGHTCHALLENGE, // id of the table quiz_types
					//time_taken 	: 1,
       			}

    	}
    	else{	// if submit button is clicked

    		 newqstate ="done";    		

    		// check selected option   frm.selectedoption
	 		if(typeof frm.selectedoption=='undefined'){
	 			$scope.error_optionmessage="Please select you option";	 			
	 		}else{
	 			//$scope.sequence +=1;
    			//$scope.currentquestion= $scope.assigment_items[$scope.sequence];
    			

    			//step-1 - calculate right and wrong attempt 		 		
		 		if(frm.selectedoption==correctoption){
		 			console.log(frm.selectedoption);
		 			var selectedAnswer=1; // select option is correct
		 			$scope.answer_response="Awesome, you got this correct";
		 			alert('Correct');
		 			var score= $scope.currentquestion.answers[0].score;
		 		}
		 		else{
		 			selectedAnswer=0; // select option is wrong
		 			if(typeof $scope.currentquestion.penalty_score=='undefined'){ score=0}
		 			else{ score =$scope.currentquestion.penalty_score; }
		 			$scope.answer_response="Oops, This is not the correct answer";		 				
		 			alert('wrong'); 
		 		}

		 		//Step-2  Set required coulum values		 		
	 			var userExamResponse={};
      	 		userExamResponse={
       				user_id 	: get_uid,
       				exam_id 	: $scope.currentquestion.quiz_id,
       				item_id 	: $scope.currentquestion.question_id,
       				item_marks	: $scope.currentquestion.question_marks,
       				response 	: frm.selectedoption,
       				correct 	: selectedAnswer,
       				score 		: score,       				
       				skip_count 	: 0,
       				grade_id 	: $scope.currentquestion.grade_id,
					course_id 	: $routeParams.skill_id,
					quiz_type_id : quiz_type.KNIGHTCHALLENGE,
       				//time_taken 	: 1,
       			}
       		}
    	}	
	 	
 			
		//Step-3 Procceed check questions sequence either for next question or show result if sequence is on last.
 		if( ($scope.sequence < $scope.total_questions) && ($scope.error_optionmessage=="" ) ) {

 			//3.1 Add the quiz response in local storage
			//var b;
				 
       		a = JSON.parse(localStorage.getItem('localQuizResponse')); 
       		a.push(userExamResponse); 
    		localStorage.setItem('localQuizResponse', JSON.stringify(a));
		 	localStorage.setItem('userQuesSequence', $scope.sequence+1);
		 	$scope.sequence+=1;
		 	$scope.currentquestion= $scope.data.questions[$scope.sequence];
		 	$scope.frm={};

		 	// update question status in question indicator        	
		    attempt_questions_status[$scope.sequence]['status']= newqstate;
		    attempt_questions_status[$scope.sequence+1]['status']="minimize";
		        	      		
		    localStorage.setItem('questionsStatus', JSON.stringify(attempt_questions_status));        	
		    local_questions_status = JSON.parse(localStorage.getItem('questionsStatus'));
		    $scope.questions_status = attempt_questions_status;
		   
		}
		else if( ($scope.sequence < $scope.total_questions) && ($scope.error_optionmessage!="" ) ) {
			console.log($scope.error_optionmessage);
		}	 			 		
		else{ 

			//Step- 4 send local Stoage Quiz attand Response to API						
			//localStorage.setItem('userQuesSequence', 0);
			localStorage.removeItem("userQuesSequence");
						
			var userQuizAttandResponses=localStorage.getItem('localQuizResponse')
			loginHttpService.setUserQuizResponse(userQuizAttandResponses).success(function(apiresponse) {							
			if (apiresponse.response.status == "true") {
				var user_quiz_id=apiresponse.response.quiz_attempt_id;
				localStorage.setItem('user_quiz_id', user_quiz_id);				
		  						
				// Step -5 to Get the User Result
				loginHttpService.getUserQuizResponse(get_uid,$scope.currentquestion.quiz_id,user_quiz_id).success(function(quizResultResponse) {
					// a=[];
			  		//localStorage.setItem('localQuizResponse', JSON.stringify(a)); // empty localstorage userquiz response
					//localStorage.setItem('ngStorage-localquestions', JSON.stringify(a));
						 			
					localStorage.removeItem("localQuizResponse"); // empty the local storage
					localStorage.removeItem("ngStorage-localquestions");

					if (quizResultResponse.response.status == true) {
				
						//var correct_answer= quizResultResponse.response.correct_questions;
						//var wrong_answer= quizResultResponse.response.correct_questions;
						var st_result="";
						if(quizResultResponse.response.student_result_percent< quiz_mastered_score.KNIGHTCHALLENGE){
							st_result= "Your are Fail";
							//alert("Your are Fail");
							window.location.href='challenges';
						}
						else{
							st_result= "Your are Pass";
							alert("Your are Pass");
						}
						//window.location.href='challenges';
					}
				});

	  		}else{
	  				alert('Opps something is wrong to store your quiz result');
	  		}
				
		});
	}  
	   	
    }; // end submit question operation

}])
.controller('backHistoryPage', function($scope){
	$scope.goBack = function() {
		window.history.back();
	};
})
.controller('profileCtrl',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles','$routeParams','commonActions','$sce','$q',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles,$routeParams,commonActions,$sce,$q) {
	var get_uid = commonActions.getcookies(get_uid);
	$scope.coupons = [];
	$scope.coupons_acquired = [];
	$scope.coupon_not_acquired = [];
	$scope.display_front_cards = 5;
	$scope.acquired_coupon_count = 0;

	loginHttpService.getUserDetails(get_uid).success(function(response) {
		if (typeof (response.data.user_all_details) != 'undefined') {
			var user = response.data.user_all_details;
			$scope.userPoints = user[0].user_detail.points;
			process_page();
		} else {
			alert('Please sign up to continue');
		}
	});

	function process_page() {
		var param = {};
		param.user_type = 'student';
		param.condition_key = 'points';
		param.condition_value = $scope.userPoints;
		loginHttpService.getCouponByUserType(param).success(function(response) {
			if (response.status == true) {
				$scope.coupons = response.result;

          //If coupon is visible, then coupon must be in redeem state.
          angular.forEach($scope.coupons, function(coupon, coupon_index) {
          	if (coupon.visibility == 'visible') {
          		coupon.process_status = 'Redeem';
          	}
          });

          var coupon_data = {user_id: get_uid};
          loginHttpService.getUsedCoupon(coupon_data).success(function (avail_coupons) {
          	angular.forEach(avail_coupons.result, function(avail_coupon, avail_coupon_index) {
          		angular.forEach($scope.coupons, function(coupon, coupon_index) {
          			if (avail_coupon.coupon_id == coupon.id) {
          				coupon.process_status = avail_coupon.status;
          				if (avail_coupon.status.toLowerCase() == 'acquired') {
          					coupon.coupon_label = 'View';
          					$scope.coupons_acquired.push(coupon);
          					$scope.coupons.splice(coupon_index, 1);
          				}
          				if (avail_coupon.status.toLowerCase() == 'mlg approval pending') {
          					coupon.coupon_label = 'Mlg approval pending';
          					$scope.coupons_acquired.push(coupon);
          					$scope.coupons.splice(coupon_index, 1);
          				}
          			}
          		});
          	});
          	$scope.acquired_coupon_count = $scope.coupons_acquired.length;
          	$scope.total_coupons = $scope.coupons.length;
          });
}
});
}

$scope.showCoupon = function(obj) {
	if (obj.coupon_code == '' && obj.coupon_label.toLowerCase() == 'view') {
		alert('Approved by Parent, Waiting for MLG approval');
		setCoupon(obj, 'Mlg approval pending');
	} else if (obj.coupon_code != '') {
		obj.coupon_label = obj.coupon_code;
	}
}

$scope.openmodelRedeem=function(){
	$("#modal-redeem").modal();
};


$scope.open_avatar=function(){
	$("#modal-selectAvatar").modal();
}

$scope.show_boy_avatar=function(){
	$("#modal-selectAvatar").modal('hide');

	$("#modal-changeBoyAvatar").modal();
	$("#modal-changeGirlAvatar").remove();
}

$scope.show_girl_avatar=function(){
	$("#modal-selectAvatar").modal('hide');
	$("#modal-changeBoyAvatar").remove();
	$("#modal-changeGirlAvatar").modal();
}


$scope.open_report=function(){
	$("#modal-view-report").modal();
}

$scope.openRedeemAll=function(){
	$("#modal-allRedeem").modal();
};

$scope.coupon_requested = function (coupon) {
	if (coupon.visibility == 'hidden') {
		alert('You can not request for locked coupon');
		return false;
	}
	var requested_coupon_status = 'Redeem';
	if (coupon.process_status == '') {
		alert('you can not redeem this coupon');
		return false;
	}
	if (coupon.process_status.toLowerCase() == 'redeem') {
		requested_coupon_status = 'Approval pending';
	}
	if (coupon.process_status.toLowerCase() == 'acquired' && coupon.code == '') {
		requested_coupon_status = 'Mlg approval pending';
	}
	var new_user_points = (parseInt($scope.userPoints) - parseInt(coupon.conditional_value));
	if (new_user_points > 0) {
		$scope.userPoints = new_user_points;
	} else {
		generate_error_reason('LESS_POINT');
		return false;
	}
	setCoupon(coupon, requested_coupon_status);
}

/**function used to update coupon with their valuees**/
function setCoupon (coupon, coupon_new_status) {
	var set_coupon_data = {}
	set_coupon_data.user_id = get_uid;
	set_coupon_data.coupon_id = coupon.id;
	set_coupon_data.status = coupon_new_status;
	set_coupon_data.updated_by_user_id = get_uid;
	set_coupon_data.condition_value = coupon.condition_value;
	loginHttpService.setAvailableCoupon(set_coupon_data).success(function (response) {
		if (response.status == true) {
			coupon.coupon_label = coupon.process_status = response.coupon_status;
		} else if (response.status == false && response.error_code != ''){
			generate_error_reason(response.error_code);
		}
	});
}

/** function used to show error based on error code **/
function generate_error_reason(error_code) {
	switch(error_code) {
		case 'ZERO_POINT':
		alert('You have zero points');
		break;
		case 'LESS_POINT':
		alert('You have Insufficient Points');
		break;
		case 'POINT_GET_ERROR':
		alert('Unable to get your points');
		break;
	}
}
// Avatar profile
var get_uid=commonActions.getcookies(get_uid);
$scope.avtar = urlParams.baseURL+'/upload/Avtar/'+'Avtar_profile_pick.png';
loginHttpService.getAvatarImage(get_uid).success(function(response) {
	if(response.message == '') {
		if(response.response[0]['profile_pic'] != '' && response.response[0]['profile_pic'] != null) {
			$scope.avtar = urlParams.baseURL+response.response[0]['profile_pic']+'?'+Date.now();
		}
	}
});


	// Student Reports
	loginHttpService.getStudentReport(get_uid).success(function(res_resport) {
		if(res_resport.response.status=true){
			$scope.details = res_resport.response.details;
		}
		else{
			$scope.error_message ="No Report generated now.";
		}

	});





}]);
