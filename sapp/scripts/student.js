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

	loginHttpResponse.logout=function(){
		return $http({
			method:'GET',			
			url   : urlParams.baseURL+urlParams.logout
		});
	}
  
      loginHttpResponse.getAllCourseList=function(pid, type, course_id){
        var url = urlParams.baseURL+urlParams.getAllCourseList+'/'+pid;
        if ((typeof course_id != 'undefined') && (course_id != '')) {
          url = urlParams.baseURL+urlParams.getAllCourseList+'/'+ pid + '/' + type +'/' + course_id;
        }
        return $http({
			method:'GET',				
			url   : url
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

	loginHttpResponse.getUserQuizResponse=function(user_id,exam_id,quiz_id){		
		return $http({
			method:'GET',			
			url  : urlParams.baseURL+urlParams.getUserQuizResponse+'?user_id='+user_id+'&exam_id='+exam_id+'&quiz_id='+quiz_id
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
.controller('journeyCtrl',['$rootScope','$scope','$filter','loginHttpService','commonActions','$location','urlParams','$http','user_roles',function($rootScope,$scope,$filter, loginHttpService,commonActions,$location,urlParams,$http,user_roles) {
	  //alert('kkk');
	  var get_uid=commonActions.getcookies(get_uid);
	  $scope.frm = {};
    
	  
	   // Check the condition to move either on pre-Test Page and On Sub Skill Page
	  if(localStorage.getItem('preTestProcessStatus')!=null && localStorage.getItem('preTestProcessStatus')!=0 ) {
	  		$scope.redirectURL='subject-view';
	  }else{
	  	$scope.redirectURL='demo_video';
	  }

      if (document.cookie == '' || get_uid == 'null') {
        alert('kindly login');
        window.location.href='/mlg_ui/app/';
      }
      $scope.guest = false;
      if (get_uid == 'guest' || get_uid == 0) {
        $scope.guest = true;
        var grade_id = commonActions.getguestcookies('grade_id');
        loginHttpService.getCourseByGrade(grade_id).success(function(courseslistresult) {
          if (!courseslistresult.response.courses){  // value is null, empty
            $scope.frm.msg=courseslistresult.response.message;	        
          } else {
            $scope.frm.childcourses = courseslistresult.response.courses;
            $scope.frm.childclass = '';
            $scope.frm.cousesListByGrade= courseslistresult.response.courses;
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
		          	$scope.msg=courseslistresult.response.message;
		          	
		        }         
	    	});

	  	}
	  	console.log(studentcoursesresult.response.student_class);
	  });
	
}
}])



.controller('helpCtrl',['$rootScope','$scope','$filter','loginHttpService','commonActions','$location','urlParams','$http','user_roles',function($rootScope,$scope,$filter, loginHttpService,commonActions,$location,urlParams,$http,user_roles) {
	 // alert('kkkk');
	  var get_uid=commonActions.getcookies(get_uid);
}])
.controller('quizCtrl',['$rootScope','$scope','$localStorage','$sessionStorage','$filter','$routeParams','loginHttpService','commonActions','$location','urlParams','$http','user_roles',function($rootScope,$scope,$localStorage,$sessionStorage,$filter,$routeParams,loginHttpService,commonActions,$location,urlParams,$http,user_roles) {
	 // alert(navigator.onLine);

	  $scope.data={};
	  $scope.data.param1 = $routeParams.id;
	  var get_uid=commonActions.getcookies(get_uid);


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

	  	
	  var quizquestions=[
	  				{"id":"response_id-7609","type":"yesNO","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110UA2098985","questionName":"Sqaure of 5 is 25?","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"Yes","label":"Yes"},{"value":"No","label":"No"}],"valid_responses":[{"value":"Yes","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7610","type":"yesNO","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110PN6373960","questionName":"Is 7 an irrational number?","level":"Moderate","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"Yes","label":"Yes"},{"value":"No","label":"No"}],"valid_responses":[{"value":"No","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7611","type":"yesNO","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110SW4723875","questionName":"Irrational numbers cannot be written as a/b (where a and b are integers and b is not zero).  When written as decimals, irrational numbers do not terminate or repeat.","level":"Moderate","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"Yes","label":"Yes"},{"value":"No","label":"No"}],"valid_responses":[{"value":"Yes","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7603","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"","questionName":"Write 61/100 as a decimal number.","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"0.61","label":"0.61"},{"value":"0.32","label":"0.32"},{"value":"0.65","label":"0.65"},{"value":"0.77","label":"0.77"}],"valid_responses":[{"value":"0.61","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7604","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110SM4787496","questionName":"Sum of two Positive number is always?","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"positive","label":"positive"},{"value":"negative","label":"negative"},{"value":"0","label":"0"},{"value":"1","label":"1"}],"valid_responses":[{"value":"positive","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7605","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110OS3391753","questionName":"Sum of – 36 and 29 is____?.","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"-65","label":"-65"},{"value":"65","label":"65"},{"value":"-7","label":"-7"},{"value":"7","label":"7"}],"valid_responses":[{"value":"-7","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7606","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110PS8184364","questionName":"The pair of integers whose sum is -5.","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"1,-4","label":"1,-4"},{"value":"-1,6","label":"-1,6"},{"value":"-3,-2","label":"-3,-2"},{"value":"2,3","label":"2,3"}],"valid_responses":[{"value":"-3,-2","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7607","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110WJ8451694","questionName":"Write 50/150 as a decimal number","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"30","label":"30"},{"value":"0.25","label":"0.25"},{"value":"0.33","label":"0.33"},{"value":"0.30","label":"0.30"}],"valid_responses":[{"value":"0.33","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7608","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110GJ9662352","questionName":"Write additive inverse of -5?","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"-6","label":"-6"},{"value":"-4","label":"-4"},{"value":"-5","label":"-5"},{"value":"5","label":"5"}],"valid_responses":[{"value":"5","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7609","type":"yesNO","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110UA2098985","questionName":"Sqaure of 5 is 25?","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"Yes","label":"Yes"},{"value":"No","label":"No"}],"valid_responses":[{"value":"Yes","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7610","type":"yesNO","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110PN6373960","questionName":"Is 7 an irrational number?","level":"Moderate","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"Yes","label":"Yes"},{"value":"No","label":"No"}],"valid_responses":[{"value":"No","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7606","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110PS8184364","questionName":"The pair of integers whose sum is -5.","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"1,-4","label":"1,-4"},{"value":"-1,6","label":"-1,6"},{"value":"-3,-2","label":"-3,-2"},{"value":"2,3","label":"2,3"}],"valid_responses":[{"value":"-3,-2","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7609","type":"yesNO","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110UA2098985","questionName":"Sqaure of 5 is 25?","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"Yes","label":"Yes"},{"value":"No","label":"No"}],"valid_responses":[{"value":"Yes","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7610","type":"yesNO","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110PN6373960","questionName":"Is 7 an irrational number?","level":"Moderate","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"Yes","label":"Yes"},{"value":"No","label":"No"}],"valid_responses":[{"value":"No","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7612","type":"yesNO","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110AK9743127","questionName":"Is 2/10 an irrational number?","level":"Moderate","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"Yes","label":"Yes"},{"value":"No","label":"No"}],"valid_responses":[{"value":"No","score":1}],"penalty_score":-1}

	  			];

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
	  	
	  	$scope.currentquestion= $scope.data.questions[$scope.sequence];	
	  	$scope.total_questions=$scope.data.questions.length-1;

 	
	  	// Read Question in UK voice
	  	$scope.readQuestion=function(){            
            var text= $scope.currentquestion.questionName;
            responsiveVoice.speak("" + text +"", "UK English Male");                        
	  	}


	 $scope.submitQuestion=function(frm){
	 	console.log(frm);	
	 	$scope.error_message=""; 	
	 	// check selected option   frm.selectedoption
	 		if(typeof frm.selectedoption=='undefined'){
	 			$scope.error_message="Please select you option";	 			
	 		}
	 		else{	 		

	 				//step-1 - calculate 
		 			var correctoption=$scope.currentquestion.valid_responses[0].value;
		 			var question_marks=$scope.currentquestion.valid_responses[0].score;
		 			if(frm.selectedoption==correctoption){
		 				console.log(frm.selectedoption);
		 				var selectedAnswer=1; // select option is correct
		 				$scope.answer_response="Awesome, you got this correct";
		 				//alert('Correct');
		 				var score= $scope.currentquestion.valid_responses[0].score;
		 				$scope.answer_result=true;
		 			}
		 			else{
		 				selectedAnswer=0; // select option is wrong
		 				if(typeof $scope.currentquestion.penalty_score=='undefined'){ score=0}
		 				else{ score =$scope.currentquestion.penalty_score; }
		 				$scope.answer_response="Oops, This is not the correct answer";
		 				$scope.answer_result=false;		 				
		 				//alert('wrong'); 
		 			}
		 			$("#gotIt").click(function(){
   						 $(".masscourt-block .masscourt-cover").removeClass("in");
  						  setTimeout(function(){
    						  $(".masscourt-block").removeClass("active");
   						 }, 500);
 					 });

					$(".masscourt-block").addClass("active");
				    setTimeout(function(){
				        $(".masscourt-block .masscourt-cover").addClass("in");
				    }, 500);
				  


	 				//Step-2  Set required coulum values
	 				var userExamResponse={};
      	 			userExamResponse={
       						user_id 	: get_uid,
       						exam_id 	: 1,
       						item_id 	: $scope.currentquestion.id,
       						response 	: frm.selectedoption,
       						correct 	: selectedAnswer,
       						score 		: score,
       						item_marks	: question_marks,
       						//skip_count 	: 1,
       						//time_taken 	: 1,
       				}
		 			

       				//2.1 Add the quiz response in local storage
       				var b;
       				a = JSON.parse(localStorage.getItem('localQuizResponse'));    
    				a.push(userExamResponse); 
    				localStorage.setItem('localQuizResponse', JSON.stringify(a));  
    				   				



		 			// Step - 3 Send data to API to store value in database (user_quiz_response)
		 			/*loginHttpService.setUserQuizResponse(userExamResponse).success(function(apiresponse) {		 				
		 				if (apiresponse.response.status == "true") {*/		 						
		 						//Step-4 -  Next Question

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
						localStorage.setItem('userQuesSequence', 0);
						localStorage.setItem('preTestProcessStatus',1);
						var userQuizAttandResponses=localStorage.getItem('localQuizResponse')
						loginHttpService.setUserQuizResponse(userQuizAttandResponses).success(function(apiresponse) {							
							if (apiresponse.response.status == "true") {
								var quiz_id=apiresponse.response.quiz_attampt;
								localStorage.setItem('quiz_id', quiz_id);				
		  						// Step -5 to Get the User Result
		  						loginHttpService.getUserQuizResponse(get_uid,1,quiz_id).success(function(quizResultResponse) {
						 			 a=[];
		  							localStorage.setItem('localQuizResponse', JSON.stringify(a)); // empty localstorage userquiz response
						 			if (quizResultResponse.response.status == "true") {
						 					var correct_answer= quizResultResponse.response.correct_questions;
						 					var wrong_answer= quizResultResponse.response.correct_questions;
						 					var st_result="";
						 					if(quizResultResponse.response.student_result< 60){
						 						 st_result= "Your are Fail";
						 						alert("Your are Fail");
						 					}
						 					else{
						 						st_result= "Your are Pass";
						 						alert("Your are Pass");
						 					}
											window.location.href='subject-view/'+$routeParams.id;
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



.controller('subskillQuizCtrl',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles) {
	  $scope.qti={};
	  $scope.sequence=0;			
	  $scope.qti.questions=[
	  				{"id":"response_id-7603","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"","questionName":"Q1.Write 61/100 as a decimal number.","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"0.61","label":"0.61"}],"valid_responses":[{"value":"0.61","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7604","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110SM4787496","questionName":"Q2.Write the fraction as a decimal number with 2 decimal places.","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"0.61","label":"0.61"}],"valid_responses":[{"value":"0.61","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7605","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110OS3391753","questionName":"Q3.Write 0.15 as a fraction in simplest form.","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"3/20","label":"3/20"}],"valid_responses":[{"value":"3/20","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7606","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110PS8184364","questionName":"Q4.Write 13/50 as a decimal number.","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"0.26","label":"0.26"}],"valid_responses":[{"value":"0.26","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7607","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110WJ8451694","questionName":false,"level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"0.25","label":"0.25"}],"valid_responses":[{"value":"0.25","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7608","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110GJ9662352","questionName":"Q6.Write -13/20 as a decimal number.","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"-0.65","label":"-0.65"}],"valid_responses":[{"value":"-0.65","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7609","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110UA2098985","questionName":"Q7.Write -7/100 as a decimal number.","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"-0.07","label":"-0.07"}],"valid_responses":[{"value":"-0.07","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7610","type":"yesNO","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110PN6373960","questionName":"Q8. Is 7 an irrational number?","level":"Moderate","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"No","label":"No"}],"valid_responses":[{"value":"No","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7611","type":"yesNO","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110SW4723875","questionName":"Q9.Irrational numbers cannot be written as a/b (where a and b are integers and b is not zero).  When written as decimals, irrational numbers do not terminate or repeat.","level":"Moderate","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"No","label":"No"}],"valid_responses":[{"value":"No","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7612","type":"yesNO","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110AK9743127","questionName":"Q10.Is 2/10 an irrational number?","level":"Moderate","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"No","label":"No"}],"valid_responses":[{"value":"No","score":1}],"penalty_score":-1}
	  			];

	 $scope.question= $scope.qti.questions[$scope.sequence];	
	 
	 $scope.nextQuestion=function()		{
	 	$scope.sequence+=1;
	 	$scope.question= $scope.qti.questions[$scope.sequence];	
	 }









	/*// API to call all courses of a class
	loginHttpService.getSubskillQuizQuestions().success(function(subquizResult) {
		alert('ppp');
		 console.log(subquizResult);
	    if(subquizResult.status=="true"){  // value is null, empty
	   	    $scope.qti.questions= subquizResult.questions;
	   	    console.log(subquizResult);
	    }else{
	       	$scope.frm.cousesListByGrade= courseslistresult.response.courses;
	       	$scope.msg=courseslistresult.response.message;
	    }         
	 });*/
	  
}])

.controller('subSkillRoomCtrl',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles','$routeParams','commonActions',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles,$routeParams,commonActions) {
      var get_uid=commonActions.getcookies(get_uid);
      if (document.cookie == '' || get_uid == 'null') {
        alert('kindly login');
        window.location.href='/mlg_ui/app/';
      }
      var pid = $routeParams.id;
      var type = $routeParams.type;
      var course_id = $routeParams.course_id;
      $scope.subject_detail = {};
      loginHttpService.getAllCourseList(pid, type, course_id).success(function(response) {
        if (response.response.course_details.length > 0){
          $scope.subject_detail = response.response.course_details;
        } else{
          response.subject_detail = 0;
        }
      });
	  $scope.show_subskill = function(){
        $location.url('/subskill_content/'+ pid + '/type/' + course_id);
    };


	 
}])
.controller('subjectViewCtrl',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles','$routeParams','commonActions',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles,$routeParams,commonActions) {
  
  var get_uid=commonActions.getcookies(get_uid);
  if (document.cookie == '' || get_uid == 'null') {
    alert('kindly login');
    window.location.href='/mlg_ui/app/';
  }

  var pid = $routeParams.id;
  $scope.cid=$routeParams.id;
  loginHttpService.getAllCourseList(pid).success(function(response) {
    console.log(response.response);
    if(response.response.course_details.length > 0){
      $scope.subject_detail = response.response.course_details;
    } else{
      response.subject_detail = 0;
    }                 
  });
  $scope.studentResult = 'fail';
  var quiz_id=localStorage.getItem('quiz_id');
  loginHttpService.getUserQuizResponse(get_uid,null,null).success(function(response) {
    if (response.response.status == "true" && response.response.student_result>60 ) {
      $scope.studentResult = 'pass';
    }
  });

}])
.controller('skillDoorCtrl',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles','$routeParams','commonActions',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles,$routeParams,commonActions) {
  var get_uid=commonActions.getcookies(get_uid);
  if (document.cookie == '' || get_uid == 'null') {
    alert('kindly login');
    window.location.href='/mlg_ui/app/';
  }
  var pid = $routeParams.id;
  loginHttpService.getAllCourseList(pid).success(function(response) {
    if (response.response.course_details.length > 0){
      $scope.subject_detail = response.response.course_details;
    } else{
      response.subject_detail = 0;
    }                 
  });
}])
.controller('subskillContent',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles','$routeParams','commonActions','$sce','$q',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles,$routeParams,commonActions,$sce,$q) {
    var get_uid=commonActions.getcookies(get_uid);
    if (document.cookie == '' || get_uid == 'null') {
      alert('kindly login');
      window.location.href='/mlg_ui/app/';
    }
    $scope.getIframeSrc = function (videoId) {
      return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId);
    };
    var pid = $routeParams.pid;
    var type = $routeParams.type;
    var course_id = $routeParams.course_id;
    loginHttpService.getAllCourseList(pid, type, course_id).success(function(response) {
      if(response.response.course_details.length > 0){
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
              }
            );
          });
        }
        $scope.khan_api_content = khan_api_response_content;
      } else {
        response.topic_detail = [];
      }
    });
	
	$scope.apiTabs=function(){
		$(".table-of-content .nav-tabs li").removeClass("active");
		$(this).parent().addClass("active");
		$(tabIdactivated).addClass("active in");				
	}
	
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
    var param = {};
    param.user_type = 'student';
    param.condition_key = 'points';
    param.condition_value = $rootScope.userPoints;
    loginHttpService.getCouponByUserType(param).success(function(response) {
    if (response.status == true) {
      $scope.coupons = response.result;
     var coupon_data = {user_id: get_uid};
     loginHttpService.getUsedCoupon(coupon_data).success(function (avail_coupons) {
       angular.forEach($scope.coupons, function(coupon, coupon_index) {
        coupon.process_status = '';
        angular.forEach(avail_coupons.result, function(avail_coupon, avail_coupon_index) {
          if (avail_coupon.id == coupon.id) {
             coupon.process_status = avail_coupon.status;
            if (avail_coupon.status.toLowerCase() == 'acquired') {
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

	$scope.openmodelRedeem=function(){
		$("#modal-redeem").modal();
	};

	$scope.openRedeemAll=function(){
      $("#modal-allRedeem").modal();
	};

    $scope.coupon_requested = function (coupon_id, coupon_visibility, coupon_process_status) {
      if (coupon_visibility == 'hidden') {
        alert('You can not request for locked coupon');
        return false;
      }
      var set_coupon_data = {};
      set_coupon_data.user_id = get_uid;
      set_coupon_data.coupon_id = coupon_id;
      var requested_coupon_status = 'Redeem';
      if (coupon_process_status == '') {
        alert('you can not redeem this coupon');
        return false;
      }
      if (coupon_process_status.toLowerCase() == 'redeem') {
        requested_coupon_status = 'Approval pending';
      }
      set_coupon_data.status = requested_coupon_status;
      set_coupon_data.updated_by_user_id = get_uid;
      loginHttpService.setAvailableCoupon(set_coupon_data).success(function (response) {
        if (response.status == true) {
          angular.forEach($scope.coupons, function(coupon, coupon_index) {
            if (coupon.id == coupon_id) {
              if (coupon.process_status.toLowerCase() == 'redeem') {
                coupon.process_status = requested_coupon_status;
              } else {
                alert('coupon already in progress');
              }
            }
          });
        }
      });
    }
}]);
