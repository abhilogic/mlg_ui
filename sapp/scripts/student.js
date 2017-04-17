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
  
  loginHttpResponse.getAllCourseList=function(pid){		
		return $http({
			method:'GET',				
			url   : urlParams.baseURL+urlParams.getAllCourseList+'/'+pid
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

	loginHttpResponse.getUserQuizResponse=function(user_id,exam_id){		
		return $http({
			method:'GET',			
			url  : urlParams.baseURL+urlParams.getUserQuizResponse+'?user_id='+user_id+'&exam_id='+exam_id
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
	}])
.controller('journeyCtrl',['$rootScope','$scope','$filter','loginHttpService','commonActions','$location','urlParams','$http','user_roles',function($rootScope,$scope,$filter, loginHttpService,commonActions,$location,urlParams,$http,user_roles) {
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
		    	    $scope.frm.msg=courseslistresult.response.message; 
		        	        
		        }else{
		        	$scope.frm.cousesListByGrade= courseslistresult.response.courses;
		          	$scope.msg=courseslistresult.response.message;
		          	
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
.controller('quizCtrl',['$rootScope','$scope','$filter','$routeParams','loginHttpService','commonActions','$location','urlParams','$http','user_roles',function($rootScope,$scope,$filter,$routeParams,loginHttpService,commonActions,$location,urlParams,$http,user_roles) {
	  //alert('kkkk');
	  $scope.data={};
	  $scope.data.param1 = $routeParams.id;

	  var get_uid=commonActions.getcookies(get_uid);

	  	$scope.data.questions=[

	  				{"id":"response_id-7611","type":"yesNO","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110SW4723875","questionName":"Irrational numbers cannot be written as a/b (where a and b are integers and b is not zero).  When written as decimals, irrational numbers do not terminate or repeat.","level":"Moderate","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"Yes","label":"Yes"},{"value":"No","label":"No"}],"valid_responses":[{"value":"Yes","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7603","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"","questionName":"Write 61/100 as a decimal number.","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"0.61","label":"0.61"},{"value":"0.32","label":"0.32"},{"value":"0.65","label":"0.65"},{"value":"0.77","label":"0.77"}],"valid_responses":[{"value":"0.61","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7604","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110SM4787496","questionName":"Sum of two Positive number is always?","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"positive","label":"positive"},{"value":"negative","label":"negative"},{"value":"0","label":"0"},{"value":"1","label":"1"}],"valid_responses":[{"value":"positive","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7605","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110OS3391753","questionName":"Sum of – 36 and 29 is____?.","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"-65","label":"-65"},{"value":"65","label":"65"},{"value":"-7","label":"-7"},{"value":"7","label":"7"}],"valid_responses":[{"value":"-7","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7606","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110PS8184364","questionName":"The pair of integers whose sum is -5.","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"1,-4","label":"1,-4"},{"value":"-1,6","label":"-1,6"},{"value":"-3,-2","label":"-3,-2"},{"value":"2,3","label":"2,3"}],"valid_responses":[{"value":"-3,-2","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7607","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110WJ8451694","questionName":"Write 50/150 as a decimal number","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"30","label":"30"},{"value":"0.25","label":"0.25"},{"value":"0.33","label":"0.33"},{"value":"0.30","label":"0.30"}],"valid_responses":[{"value":"0.33","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7608","type":"fillin","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110GJ9662352","questionName":"Write additive inverse of -5?","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"-6","label":"-6"},{"value":"-4","label":"-4"},{"value":"-5","label":"-5"},{"value":"5","label":"5"}],"valid_responses":[{"value":"5","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7609","type":"yesNO","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110UA2098985","questionName":"Sqaure of 5 is 25?","level":"Easy","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"Yes","label":"Yes"},{"value":"No","label":"No"}],"valid_responses":[{"value":"Yes","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7610","type":"yesNO","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110PN6373960","questionName":"Is 7 an irrational number?","level":"Moderate","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"Yes","label":"Yes"},{"value":"No","label":"No"}],"valid_responses":[{"value":"No","score":1}],"penalty_score":-1},
	  				{"id":"response_id-7612","type":"yesNO","grade":"11th","subject":"Maths","standard":"1","docId":"20170318225110AJ1668693","uniqueId":"20170318225110AK9743127","questionName":"Is 2/10 an irrational number?","level":"Moderate","mimeType":null,"paragraph":null,"item":"E.1","Claim":"1","Domain":"NBT","Target":"E","CCSS-MC":"CCSS.MATH.CONTENT.8.EE.A.3","CCSS-MP":"N/A","state":"NRC","GUID":"54133f7b-5f95-4898-96e4-02a01f3230c8","ParentGUID":null,"AuthorityGUID":null,"Document":"Grade Level Disciplinary Core Ideas","Label":"Disciplinary Core Idea","Number":"MS-PS1","Description":"Matter and Its Interactions","Year":"2013","createdDate":"2017-03-18 22:51:10","options":[{"value":"Yes","label":"Yes"},{"value":"No","label":"No"}],"valid_responses":[{"value":"No","score":1}],"penalty_score":-1}
	  			];

	  	$scope.sequence=0;
	  	$scope.currentquestion= $scope.data.questions[$scope.sequence];	
	  	$scope.total_questions=$scope.data.questions.length-1;

		

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
		 			}
		 			else{
		 				selectedAnswer=0; // select option is wrong
		 				if(typeof $scope.currentquestion.penalty_score=='undefined'){ score=0}
		 				else{ score =$scope.currentquestion.penalty_score; }
		 				$scope.answer_response="Oops, This is not the correct answer";		 				
		 				//alert('wrong'); 
		 			}
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
		 			

		 			// Step - 3 Send data to API to store value in database (user_quiz_response)
		 			loginHttpService.setUserQuizResponse(userExamResponse).success(function(apiresponse) {
		 				console.log(apiresponse);
		 					if (apiresponse.response.status == "true") {
		 						//Step-4 -  Next Question
		 						console.log($scope.sequence);
		 						console.log($scope.total_questions);

					 			if($scope.sequence < $scope.total_questions){
					 				$scope.sequence+=1;
					 				$scope.currentquestion= $scope.data.questions[$scope.sequence];
					 				$scope.frm={};
					 			}
					 			else{ 
					 				//alert('end quiz');
					 				loginHttpService.getUserQuizResponse(get_uid,1).success(function(quizResultResponse) {
					 					console.log(quizResultResponse);
					 					if (quizResultResponse.response.status == "true") {
					 						var correct_answer= quizResultResponse.response.correct_questions;
					 						var wrong_answer= quizResultResponse.response.correct_questions;
					 						var st_result="";
					 						if(quizResultResponse.response.student_result< 60){
					 							 st_result= "Your are Fail";
					 							alert("Your score is less that 60%. Please Try Again");
					 						}
					 						else{
					 							st_result= "Your are Pass";
					 							alert("Your score is less that 60%. Please Try Again");
					 						}
											window.location.href='subject-view/'+$routeParams.id;
					 					}
					 				});
					 				
					 			 }
		 					}
		 					else{ $scope.data.message=apiresponse.response.message;	}
					});	 				 			
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

.controller('subSkillRoomCtrl',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles','$routeParams',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles,$routeParams) {
	 
	 $scope.show_subskill = function(){
	 	var pid = $routeParams.id;
  loginHttpService.getAllCourseList(pid).success(function(response) {
    console.log(response.response);
    if(response.response.length > 0){
      $scope.topic_detail = response.response;

    } else{
      response.topic_detail = [];
    }  
    $('#modal-subskillsoverview').modal();                
  });
		
	 };


	 
}])
.controller('subjectViewCtrl',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles','$routeParams',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles,$routeParams) {
  
  var pid = $routeParams.id;
  loginHttpService.getAllCourseList(pid).success(function(response) {
    console.log(response.response);
    if(response.response.length > 0){
      $scope.subject_detail = response.response;
    } else{
      response.subject_detail = 0;
    }                 
  });
  
  //naseem
	/*$scope.studentResult = 0;
    $scope.beDisabled=$scope.studentResult < 1;
    $scope.studentResult=function() {
        if ($scope.studentResult == 1) {
			$scope.studentResult = 1;
            //return true;
        }
        else {
			$scope.studentResult = 0;
            //return false;
        }
    }*/
	
	$scope.studentResult = 0;
	$scope.$watch('studentResult',function(){
		console.log($scope.studentResult);
		if($scope.studentResult==1){
			$scope.studentResult=1;
		}
		else{
			$scope.studentResult=0;
		}
		$scope.beDisabled=$scope.studentResult < 1;
	});
  
}])
.controller('skillDoorCtrl',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles','$routeParams',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles,$routeParams) {
  
  var pid = $routeParams.id;
  loginHttpService.getAllCourseList(pid).success(function(response) {
    console.log(response.response);
    if(response.response.length > 0){
      $scope.subject_detail = response.response;
    } else{
      response.subject_detail = 0;
    }                 
  });
}]);


