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
.controller('quizCtrl',['$rootScope','$scope','$filter','$routeParams','loginHttpService','$location','urlParams','$http','user_roles',function($rootScope,$scope,$filter,$routeParams,loginHttpService,$location,urlParams,$http,user_roles) {
	  //alert('kkkk');
	  $scope.data={};
	  $scope.data.param1 = $routeParams.id;

	  	$scope.data.questions=[
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

	  	$scope.sequence=0;
	  	$scope.currentquestion= $scope.data.questions[$scope.sequence];	
	  	$scope.total_questions=$scope.data.questions.length;

		

	 $scope.submitQuestion=function(frm){
	 	console.log(frm);	
	 	$scope.error_message=""; 	
	 	// check selected option   frm.selectedoption
	 		if(typeof frm.selectedoption=='undefined'){
	 			$scope.error_message="Please select you option";	 			
	 		}
	 		else{	 			
		 			$scope.validresponse=$scope.currentquestion.valid_responses[0].value;
		 			if(frm.selectedoption==$scope.validresponse){
		 				console.log(frm.selectedoption);
		 				$scope.data.selectedAnswer='Correct';
		 			}
		 			else{
		 				$scope.data.selectedAnswer='Wrong';
		 				//alert('wrong');
		 			}

	 			// Next Question
	 			if($scope.sequence < $scope.total_questions){
	 				$scope.sequence+=1;
	 				$scope.currentquestion= $scope.data.questions[$scope.sequence];
	 				$scope.frm={};
	 			}
	 			else{
	 					alert('end quiz');
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
}])
;


