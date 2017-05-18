'use strict';
angular.module('mlg_student', [ 'ngAnimate', 'ngCookies', 'ngRoute', 'ui.bootstrap','ngStorage'])
.value('urlParams', {
users : '/users',
login: '/users/login',
logout: '/users/logout',
siteRoot : '/mlg_ui/app/',
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
khanApiArticle: 'http://www.khanacademy.org/api/v1/articles/'

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
}).value('card_months', {
1  : '1',
2  : '2',
3  : '3',
4  : '4',
5  : '5',
6  : '6',
7  : '7',
8  : '8',
9  : '9',
10 : '10',
11 : '11',
12 : '12',
}).value('card_years', {
2018  : '2018',
2019  : '2019',
2020  : '2020',
2021  : '2021',
2022  : '2022',
}).value('subscription_days', {
parent  : 30,
student  : 60,
teacher  : 30,
}).config([ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//var access = routingConfig.accessLevels;
$routeProvider
.when('/journey', {
	templateUrl : 'views/my_journey.html',
	controller : 'journeyCtrl',		
}).when('/subject-view/:id', {
	templateUrl : 'views/math_subject_view.html',
	controller : 'subjectViewCtrl',		
}).when('/skill-door/:id', {
	templateUrl : 'views/skills_door.html',
	controller : 'skillDoorCtrl',		
}).when('/sub-skill/:id/:type/:course_id', {
	templateUrl : 'views/subskillsroom.html',
	controller : 'subSkillRoomCtrl',		
}).when('/sub-skill-quiz/:id', {
	templateUrl : 'views/subskill_quiz.html',
	controller : 'subskillQuizCtrl',		
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
	controller : 'journeyCtrl',		
}).when('/demo_video/:id', {
	templateUrl : 'views/firsttime_demo_video.html',
	controller : 'quizCtrl',		
}).when('/pre-test/:id', {
	templateUrl : 'views/firsttimelogintest.html',
	controller : 'quizCtrl',		
}).when('/quiz', {
	templateUrl : 'views/quiz.html',
	controller : 'quizCtrl',		
}).when('/subskill_content/:pid/:type/:course_id', {
	templateUrl : 'views/subskills-content.html',
	controller : 'subskillContent',		
})

.otherwise({
	redirectTo : '/journey',
});

$locationProvider.html5Mode({
	enabled : true,
	requireBase : false
});

} ]).run([ '$rootScope','$templateCache', '$location','loginHttpService', 'urlParams', '$http', '$cookies', '$cookieStore', function($rootScope,$templateCache,$location, loginHttpService, urlParams, $http, $cookies, $cookieStore) {

urlParams.baseURL=$location.protocol()+'://'+$location.host()+'/mlg';
	    function setCookie(key, value) {
		var expires = new Date();
		expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
		document.cookie = key + '=' + value + ';expires=' + expires.toUTCString()+';path=/';
	}
	
  $rootScope.logout=function(){
		   	loginHttpService.logout().success(function(response) {
		   		$rootScope.logged_user = '';
		   		 /*document.cookie = uid+ '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		   		 document.cookie =  'userObj=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';*/
		   		setCookie('uid',null);
		   		setCookie('userObj',null);


	         window.location.href='/mlg_ui/app';
		   }).error(function(error) {
			  $rootScope.logged_user = '';
		   });
		}


$rootScope.$on('$viewContentLoaded', function() {
  $templateCache.removeAll();

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

        function parseUser(cookie){
          var keyVals=cookie.split(',');
          var obj={};
          angular.forEach(keyVals,function(value,key){
            var vals=value.split('=');
            obj[vals[0]]=vals[1];
          });
          return obj;
        }

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
        });
});


} ]).directive('header', function () {
return {
	restrict: 'E',
	templateUrl: 'views/header.html',
	controller: ['$scope','$cookieStore',function ($scope,$cookieStore) {                         	
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
	}]
};
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

;


/*app.controller('PageCtrl', function () {

});*/