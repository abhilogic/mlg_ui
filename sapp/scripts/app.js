'use strict';
angular.module('mlg_student', [ 'ngAnimate', 'ngCookies', 'ngRoute', 'ui.bootstrap','ngStorage','ngSanitize','angularUtils.directives.dirPagination'])
.value('urlParams', {
users : '/users',
login: '/users/login',
logout: '/users/logout',
getUserDetails: '/users/getUserDetails',
siteRoot : '/mlg_ui/app/',
studentsiteRoot : '/mlg_ui/sapp/',
baseURL : 'http://localhost/mlg',
registerUser:'/users/registerUser',
getCourseByGrade :'/courses/getCourseListForLevel',
getStudentCourses :'/students/getStudentCourses', 
getAllCourseList :'/courses/getAllCourseList',
getSubskillQuizQuestions: 'http://35.185.43.146/standards?subject=Maths&grade=11th&standard=CCSS.MATH.CONTENT.8.EE.A.3&session_token=482694923ce92675025f48b3b12f3fd2bd6d98ce33119feccaab657bc1e1a941&page=10',
setUserQuizResponse :'/exams/setUserQuizResponse',
getUserQuizResponse :'/exams/getUserQuizResponse',
getUserScoreForQuiz: '/exams/getUserScoreForQuiz',
getCouponByUserType: '/users/getCouponByUserType',
getUsedCoupon: '/users/getUsedCoupon',
setAvailableCoupon: '/users/setAvailableCoupon',
khanApiTopic: 'http://www.khanacademy.org/api/v1/topic/',
khanApiVideo: 'http://www.khanacademy.org/api/v1/videos/',
khanApiArticle: 'http://www.khanacademy.org/api/v1/articles/',
setpreTestStatus: '/users/setpreTestStatus',
getpreTestStatus: '/users/getpreTestStatus',
uploadAvtarImage : '/users/uploadAvatarImage',
getAvatarImage : '/users/getAvatarImage',
setStepNum :'/users/setStepNum',
getStepNum :'/users/getStepNum',
getTodayEvents : '/teachers/getTodayEvents',
getStudentAssignments : '/students/getStudentAssignments',
getAssignmentItems : '/students/getAssignmentItems',
getCourseInfo : '/courses/getCourseInfo',
createQuizOnStudent: '/exams/createQuizOnStudent/',
getStudentReport : '/students/getStudentReport',
checkKnightQuizStatus : '/exams/checkKnightQuizStatus',
getStudentCourseList : '/courses/getStudentSkills'
}).value('REGEX', {
LAT : '/-?([1-8]?[1-9]|[1-9]0)\\.{1}\\d{1,6}/',
PINCODE : '/^([0-9]{6})$/',
MOBILE : '/^(\\d{10})$/',
AMOUNT : '/^(?:[1-9]\\d*|0)?(?:\\.\\d+)?$/',
LANDLINE : '/^[0-9]*$/',
DATE : '/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/',
DATEFORMAT : '/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/'
}).value('user_roles', {
admin:1,
parent : 2,
teacher : 3,
student : 4,
}).value('subscription_days', {
    parent  : 30,
    student  : 60,
    teacher  : 30,
}).value('quiz_pass_score', {
  score  : 60
}).value('questionslimit', {
  PRETEST : '3',
  SUBSKILLQUIZ : '15',
  KNIGHTCHALLENGE :'15',
  PRACTICE : '10',  
}).value('quiz_type', {
      PRETEST            : 1,
      SUBSKILLQUIZ       : 2,
      PRACTICE          : 3, 
      KNIGHTCHALLENGE    : 4,
      TEACHERCUSTOMASSIGNMENT : 5,
      TEACHERAUTOASSIGNMENT : 6, 
      PARENTAUTOASSIGNMENT :7,
}).value('quiz_mastered_score', {
      PRETEST            : 80,
      SUBSKILLQUIZ       : 80,
      PRACTICES           : 80, 
      KNIGHTCHALLENGE    : 80,
      ASSIGNMNENT         : 80,
      TEACHERCUSTOMASSIGNMENT : 80,
      TEACHERAUTOASSIGNMENT : 80, 
      PARENTAUTOASSIGNMENT :80,
}).value('mlg_subjects_for_masscourt', {  // please mention all subject name(where parent_id=0) that has been stored in DB.
      MATH         : 'Math',  // if grade=6th, 7th, 8th all have Math subject
      ENGLISH       : 'English',
      SCIENCE       : 'Science', 
      SOCIALSCIENCE : 'Social Science', 
      MATHS   :  'Maths'    // if subject name if any one of grade has name Maths except math in dabaabase. 
})

.config([ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//var access = routingConfig.accessLevels;
$routeProvider
.when('/journey', {
	templateUrl : 'views/my_journey.html',
	controller : 'journeyCtrl',		
}).when('/subject-view/:id', {
	templateUrl : 'views/math_subject_view.html',
	controller : 'subjectViewCtrl',		
}).when('/skill-door/:skill_name/:id', {
	templateUrl : 'views/skills_door.html',
	controller : 'skillDoorCtrl',		
}).when('/sub-skill/:subskill_name/:course_id', {
	templateUrl : 'views/subskillsroom.html',
	controller : 'subSkillRoomCtrl',		
}).when('/subskill-quiz/:subskill_name/:subskill_id', {
	templateUrl : 'views/subskill_quiz.html',
	controller : 'subskillQuizCtrl',		
}).when('/practice/:subskill_name/:subskill_id', {
  templateUrl : 'views/practice.html',
  controller : 'practiceCtrl',    
}).when('/sub-skill-video/:id', {
	templateUrl : 'views/subkills_view_video.html',
	controller : 'subjectViewCtrl',	
}).when('/profile', {
	templateUrl : 'views/my_profile.html',
	controller : 'profileCtrl',
}).when('/help', {
	templateUrl : 'views/help.html',
	controller : 'helpCtrl',		
}).when('/challenges', {
	templateUrl : 'views/challenges.html',
	controller : 'challengesCtrl',		
}).when('/demo_video/:id', {
	templateUrl : 'views/firsttime_demo_video.html',
	controller : 'preTestQuizCtrl',		
}).when('/pre-test/:id', {
	templateUrl : 'views/firsttimelogintest.html',
	controller : 'preTestQuizCtrl',		
}).when('/quiz', {
	templateUrl : 'views/quiz.html',
	controller : 'preTestQuizCtrl',		
}).when('/avtar1', {
	templateUrl : 'views/avtar-gender-selection.html',
	controller : 'avtarCtrl',		
}).when('/avtar2', {
	templateUrl : 'views/avtar-boy-design.html',
	controller : 'avtarCtrl',		
}).when('/avtar3', {
  templateUrl : 'views/avatar-girl-design.html',
  controller : 'avtarCtrl',   
}).when('/subskill_content/:subskill_name/:course_id', {
	templateUrl : 'views/subskills-content.html',
	controller : 'subskillContent',
}).when('/challenge/:assignment_id', {
  templateUrl : 'views/assignment-quiz.html',
  controller : 'challengesCtrl',   
}).when('/knight-challenge/:skill_name/:skill_id', {
  templateUrl : 'views/knight_challenge.html',
  controller : 'knightChallengeCtrl',    
})
.otherwise({
	redirectTo : '/journey',
});

$locationProvider.html5Mode({
	enabled : true,
	requireBase : false
});

} ]).run([ '$rootScope','$templateCache', '$location','loginHttpService', 'urlParams', '$http', '$cookies', '$cookieStore','$localStorage','commonActions', function($rootScope,$templateCache,$location, loginHttpService, urlParams, $http, $cookies, $cookieStore,$localStorage,commonActions) {

urlParams.baseURL=$location.protocol()+'://'+$location.host()+'/mlg';
	function setCookie(key, value) {
      var expires = new Date();
      expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
      document.cookie = key + '=' + value + ';expires=' + expires.toUTCString()+';path=/';
	}

  var uid = getCookie('uid');
  if (uid == '') {
    alert('Kindly login');
    window.location.href='/mlg_ui/app';
  }else{

    loginHttpService.getStepNum(uid).success(function(stepNum) {         
        if(stepNum.response.step.step_completed!=null ){            
          //var step_page = stepNum.response.step.step_completed; 
          if(stepNum.response.step.step_completed==0 ){ 
            $location.url('avtar1'); 
              }
          else if(stepNum.response.step.step_completed==1){
            // $location.url('journey');
          }                  
              
        }
        });


  }
  $rootScope.logout=function(){
            var get_uid = commonActions.getcookies(get_uid);
		   	loginHttpService.logout({user_id: get_uid}).success(function(response) {
		   		$rootScope.logged_user = '';
          var question = $localStorage.localquestions;
          $localStorage.$reset();
		   		 /*document.cookie = uid+ '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		   		 document.cookie =  'userObj=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';*/
		   		setCookie('uid',null);
		   		setCookie('userObj',null);


	         window.location.href='/mlg_ui/app';
		   }).error(function(error) {
			  $rootScope.logged_user = '';
		   });
		}

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

        function parseUser(cookie) {
          var keyVals=cookie.split(',');
          var obj={};
          angular.forEach(keyVals,function(value,key){
            var vals=value.split('=');
            obj[vals[0]]=vals[1];
          });
          return obj;
        }

$rootScope.$on('$viewContentLoaded', function() {
  $templateCache.removeAll();

        redirectStudentOnSubscriptionOver();
        function redirectStudentOnSubscriptionOver() {
          var userObj = getCookie('userObj');
          userObj = parseUser(userObj);
          if ((userObj.userStatus == 2) && (userObj.role == 'student')) {
            alert('Your subscription has been over, Please upgrade your subscription');
            $location.url('/journey');
            return true;
          }
        }
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
          redirectStudentOnSubscriptionOver();
          if (next !== current && (localStorage.getItem('responseForStudentContent') !== null)) {
            localStorage.removeItem('responseForStudentContent');
          }
        });
});


} ]).directive('header', function () {
return {
	restrict: 'E',
	templateUrl: 'views/header.html',
	controller: ['$rootScope','$scope','$cookieStore','loginHttpService','urlParams','commonActions',function ($rootScope,$scope,$cookieStore,loginHttpService,urlParams,commonActions) {  
    
     $('html').click(function (e) {      
    if ($(e.target).parents('#h_menu').length==1) {
        $('#h_menu').addClass('open')
    } else {
        $('#h_menu').removeClass('open')
    }
}); 

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

    // user points
    $rootScope.userPoints = 0;
    loginHttpService.getUserDetails(get_uid).success(function(response) {
      if (typeof (response.data.user_all_details) != 'undefined') {
        var user = response.data.user_all_details;
        if(user[0])
        $rootScope.userPoints = user[0].user_detail.points;
      } else {
        alert('Please sign up to continue');
      }
    });
	}]
};
}).directive('mascot', function () {
return {
  restrict: 'EA',
  templateUrl: 'views/mascot.html',
  controller: ['$scope','$cookieStore',function ($scope,$cookieStore) {     
   
  }]
}
})
.controller("TopController", function($rootScope, $scope, $location) {
$rootScope.$on("$routeChangeSuccess", function(event, next, current) {
//$scope.atHome = ($location.path() === "/");
$scope.this_route = function(){
     return $location.path().replace('/', '');
};
});
})
.directive('loading',   ['$http' ,function ($http)
    {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs)
            {
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };

                scope.$watch(scope.isLoading, function (v)
                {
                    if(v){
                        elm.show();
                    }else{
                        elm.hide();
                    }
                });
            }
        };

    }])
.directive("owlCarousel", function() {
  return {
    restrict: 'E',
    transclude: false,
    replace : true,
    link: function (scope) {
      scope.initCarousel = function(element) {
        // provide any default options you want
        var defaultOptions = {};
        var customOptions = scope.$eval($(element).attr('data-options'));
        // combine the two options objects
        for(var key in customOptions) {
          defaultOptions[key] = customOptions[key];
        }

        // init carousel
        $(element).owlCarousel(defaultOptions);
      };
    }
  };
})
.directive('owlCarouselItem', [function() {
  return {
    restrict: 'A',
    transclude: false,
    link: function(scope, element) {
      // wait for the last item in the ng-repeat then call init
      if(scope.$last) {
        scope.initCarousel(element.parent());
      }
    }
  };
}]);


/*app.controller('PageCtrl', function () {

});*/