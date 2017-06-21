'use strict';
angular.module('mlg', [ 'ngAnimate', 'ngCookies', 'ngRoute', 'ui.bootstrap','angularjs-dropdown-multiselect','textAngular','AUTH','tien.clndr','chart.js', 'datatablesDirectives','ngStorage','ngSanitize'
,'as.sortable'])
.value('urlParams', {
	users : '/users',
	contactus: '/users/contact_us',
	login: '/users/login',
	logout: '/users/logout',
	siteRoot : '/mlg_ui/app/',
	studentsiteRoot : '/mlg_ui/sapp/',
	registerUser:'/users/registerUser',
	parentPreference:'/users/setUserPreference',
	baseURL : 'http://localhost/mlg',
	gradeList : '/users/getGradeList',
	setUserStatus : '/users/setUserStatus',
	getTermsAndConditions : '/users/getStaticContents',
	getPaymentBrief : '/users/getPaymentBrief',
	isUserLogin : '/users/isUserLoggedin',
	saveCardToPaypal : '/users/saveCardToPaypal',
	saveCardToPaypalForTeacher : '/teachers/saveCardToPaypal',
	packageList : '/users/getPackageList',
	planList : '/users/getPlanList',
	getCourseByGrade :'/courses/getCourseListForLevel',
	setChildrenCount :'/users/setCountOfChildrenOfParent',
	getChildrenCount :'/users/getCountOfChildrenOfParent',
	getAddedChildren :'/users/getChildrenListOfParent',	
	priceCalcOnSeclectedCourse :'/users/priceCalOnCourse',
	getChildrenDetails :'/users/getChildrenDetails',
	addChildRecord : '/users/addChildrenRecord',
	addChild : '/users/addChildren',
	offerRecords : '/users/getOffers',
	setStepNum :'/users/setStepNum',
	getStepNum :'/users/getStepNum',
	getUsedCoupon: '/users/getUsedCoupon',
	getUserSetting: '/users/getUserSetting',
	setUserSetting: '/users/setUserSetting',
  setAvailableCoupon: '/users/setAvailableCoupon',
  promocode :'/users/promocode',
  getUserPurchaseDetails :'/users/getUserPurchaseDetails',
  signUpTeacher :'/teachers/setTeacherRecord',
  setTeacherSubjects :'/teachers/setTeacherSubjects',
  teacherPayment :'/teachers/getTeacherSubject',
  upgradePackage :'/users/upgrade',
  getStudentDetail: '/teachers/getStudentDetail',
  getTeacherGrades: '/teachers/getTeacherGradeSubject',
  getTeacherDetailsForContent: '/teachers/getTeacherDetailsForLesson',
  getAllCourseList : '/courses/getAllCourseList',
  setContentForLesson : '/teachers/setContentForLesson',
  guestLogin: '/users/guestLogin',
  setTemplateDetail : '/teachers/saveTemplate',
  getTemplateDetail : '/teachers/getTemplate',
  delContent : '/teachers/deleteContent',
  getDifficultyLevel : '/teachers/getDifficulty',
  questionType : '/teachers/getQuestionType',
  getUserContent : '/teachers/getUserContent',
  setUserContents : '/teachers/setUserContent',
  delTemplate : '/teachers/deleteTemplate',
  addStudent : '/teachers/addStudent',
  getStudentsOfSubjectForTeacher : '/teachers/getStudentsOfSubjectForTeacher',
  updateStudent : '/teachers/updateStudent',
  deleteStudent : '/teachers/deleteStudent',
  sendMeMail : '/teachers/sendEmailToTeacher', 
  getStudentOfTeacher : '/teachers/getStudentOfTeacher', 
  createGroupInSubjectByTeacher : '/teachers/createGroupInSubjectByTeacher',
  getGroupsOfSubjectForTeacher : '/teachers/getGroupsOfSubjectForTeacher',
  editGroupOfSubject : '/teachers/editGroupOfSubject', 
  getStudentsOfGroup : '/teachers/getStudentsOfGroup',
  updateContent : '/teachers/updateUserContent',
  uploadQuestion : '/teachers/saveQuestion',
  getStaticContent : '/users/getStaticContents',
  getUserDetails : '/users/getUserDetails',
  getCouponByUserType : '/users/getCouponByUserType',
  updateProfilePic : '/users/updateProfilePic',
  getUserPreferences : '/users/getUserPreferences',
  setUserPassword : '/users/setUserPassword',
  updateMyAccount : '/users/updateMyAccount',
  getCourseSkillSubskills : '/courses/getCourseSkillSubskills',
  generateAssignQuestions : '/teachers/generateAssignQuestions',
  getQuestionsListForAssg : '/teachers/getQuestionsListForAssg',
  setCustomAssignmentByTeacher : '/teachers/setCustomAssignmentByTeacher',
  uploadEvent : '/teachers/setEvent',
  getEvent : '/teachers/getEvent',
  getTodayEvents : '/teachers/getTodayEvents',
  getQuestions : '/teachers/getUserQuestions',
  deleteQuestions : '/teachers/deleteTeacherQuestions',
  getFilterdQuestion : '/teachers/filteredTeacherQuestions',
  getEditQuestion : '/teachers/getEditQuestionDetails',
  getRewards : '/teachers/getRewards',
  getTeacherPoints : '/teachers/getTeacherPoints',
  setAvailableRewards : '/teachers/setAvailableRewards',
  getStudentCourses : '/students/getStudentCourses',
  timeSpentOnPlatform : '/teachers/timeSpentOnPlatform',
  timeSpentByClassOnPlatform : '/teachers/timeSpentByClassOnPlatform',
  updateQuestion : '/teachers/updateTeacherQuestion',
  getLessonForList : '/teachers/getLessonDetailForListing',
  getFilterdLesson : '/teachers/filteredTeacherLessons',
  setQuotation : '/teachers/setQuotation',
  setTeacherSettings : '/teachers/setTeacherSettings',
  getTeacherSettings : '/teachers/getTeacherSettings',
  deactivateChildrenAccount : '/users/deactivateChildrenOnParentDeactivation',
  getUserOrders : '/users/getUserOrders',
  deleteImage : '/teachers/deleteImages',
  addNewScope : '/teachers/addNewScope',
  teacherScope : '/teachers/getUserCreatedScope',
  scopeAndSequenceTemplate : '/teachers/saveScopesAsTemplate',
  scopeAndSequence : '/teachers/saveScopesAsSequence',
  getScopeTemplates : '/teachers/getScopeTemplate',
  getNeedAttention : '/teachers/getNeedAttention',
  getSubskillAnalytic : '/teachers/getSubskillAnalytic',

  
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
	guest_teacher : 5,
	principal : 6
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
	2017  : '2017',
	2018  : '2018',
	2019  : '2019',
	2020  : '2020',
	2021  : '2021',
	2022  : '2022',
}).value('subscription_days', {
parent  : 30,
student  : 30,
teacher  : 60,
guest_teacher  : 30,
principal  : 30,
}).value('mlg_points', {
	question_type_text:1,
	question_type_image : 2,
	content_type_text : 3,
	content_type_image : 4,
	content_type_doc : 5,
	content_type_video : 6,
}).value('class_students_classification', {
	NO_ATTACK  	: 0,  //student not present in user_quiz
	REMEDIAL  	: 50,  //student scored 0 to 50
	STRUGGLING  : 79,  // student scored 51 to 79
	ON_TARGET  	: 85,  //student scored 80 to 85
	OUTSTANDING : 95,  // student scored 86 to 95
	GIFTED		: 100     // 96 to 100
})
.config([ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	var access = routingConfig.accessLevels;
	$routeProvider.when('/', {
		templateUrl : 'views/landing.html',
		controller : 'loginCtrl',
		access : access.public		
	}).when('/signin', {
		templateUrl : 'views/login.html',
		controller : 'loginCtrl',
		access : access.public		
	}).when('/parent_login', {
		templateUrl : 'views/parent_login.html',
		controller : 'loginCtrl',		
	}).when('/teacher/login', {
		templateUrl : 'views/login-teacher.html',
		controller : 'loginCtrl',	
	}).when('/student/login', {
		templateUrl : 'views/login-student.html',
		controller : 'loginCtrl',	
	}).when('/teacher/signup',{
		templateUrl : 'views/teacher_signup.html',
		controller : 'teacherSingnupCtrl',
		access : access.public
	}).when('/parent_signup', {
		templateUrl : 'views/parent_signup.html',
		controller : 'loginCtrl',
		access : access.public
	}).when('/parent-login', {
		templateUrl : 'views/login-parent.html',
		controller : 'parentLoginCtrl',
	}).when('/email/confirmation/:id',{
		templateUrl : 'views/parent_confirmation.html',
		controller : 'emailConfirmationCtrl',
	}).when('/select_children', {
		templateUrl : 'views/number_children.html',
		controller : 'addChild',		
	}).when('/add_child_account', {
		templateUrl : 'views/child_account_creation.html',
		controller : 'addChild',
	}).when('/parent_preferences', {
		templateUrl : 'views/account_preferenceces.html',
		controller : 'parentPreferenceCtrl',
		access : access.parents
	}).when('/terms_and_conditions', {
		templateUrl : 'views/term_condition.html',
		controller : 'termsAndConditionsCtrl',
		access : access.parents
	}).when('/payment_page/:child_id?', {
		templateUrl : 'views/payment_page.html',
		controller : 'paymentPageCtrl',
	}).when('/preferences', {
		templateUrl : 'views/preferences.html',
		controller : 'preferences',
	}).when('/add/children', {
		templateUrl : 'views/number_children.html',
		controller : 'addMoreChildCntrl',
	}).when('/parent/dashboard/subscription/:child_id', {
		templateUrl : 'views/dashboard/parent-subscription.html',
		controller : 'parentSubscriptionCtrl',
	}).when('/test', {
		templateUrl : 'views/test.html',
		controller : 'addChild',
	}).when('/children-account-setup', {
		templateUrl : 'views/children-account-setup.html',
		controller : 'childrenAccountSetup',
	}).when('/parent/offer', {
		templateUrl : 'views/dashboard/parent-offers.html',
		controller : 'childrenAccountSetup',
	}).when('/parent/dashboard/offers', {
		templateUrl : 'views/dashboard/parent-offers.html',
		controller : 'parentOffers',
		access : access.parents
	}).when('/parent/dashboard/redeem/:id',{
		templateUrl : 'views/dashboard/parent-redeem.html',
		controller : 'parentRedeemCtrl',
	}).when('/parent/dashboard/settings',{
		templateUrl : 'views/dashboard/parent-settings.html',
		controller : 'parentSettingCtrl',
	}).when('/parent/dashboard/notifications', {
		templateUrl : 'views/dashboard/parent-notifications.html',
		controller : 'parentOffers',
	}).when('/teacher/create_account',{
		templateUrl : 'views/account-teacher.html',
		controller : 'teacherOnBoardingCtrl',
	}).when('/teacher/select_courses',{		
		templateUrl : 'views/select-grades-subjects.html',
		controller : 'teacherOnBoardingCtrl',
	}).when('/teacher/dashboard/class/:gradeid/:subject_name/:courseid',{
		templateUrl : 'views/dashboard/teacher-dashboard.html',
		controller : 'teacherDashboardViewCtrl',
	}).when('/parent/report',{
		templateUrl : 'views/dashboard/parent-report.html',
		controller : 'teacherReportCtrl',
	}).when('/teacher/message',{
		templateUrl : 'views/dashboard/teacher-message.html',
		controller : 'teacherMessageCtrl',
	}).when('/teacher/subscription',{
		templateUrl : 'views/dashboard/teacher-subscription.html',
		controller : 'teacherSubscriptionCtrl',
	}).when('/teacher/dashboard/settings',{
		templateUrl : 'views/dashboard/teacher-setting.html',
		controller : 'teacherSettingCtrl',
	}).when('/teacher/add-new-event-ptm',{
		templateUrl : 'views/dashboard/teacher-AddNewEventPTM.html',
		controller : 'teacherAddNewEventPTM',
	}).when('/teacher/addNewEvent',{
		templateUrl : 'views/dashboard/teacher-addNewEvent.html',
		controller : 'teacherAddNewEvent',
	}).when('/teacher/student-list',{
		templateUrl : 'views/dashboard/teacher-all-student-list.html',
		controller : 'teacherStudentList',
	}).when('/teacher/student-profile/:id',{
		templateUrl : 'views/dashboard/teacher-student-profile.html',
		controller : 'studentProfileForTeacherCntrl',
	}).when('/teacher/auto-generate-assignment',{
		templateUrl : 'views/dashboard/teacher-autoGenerateAssignment.html',
		controller : 'teacherAutoGenerateAssignment',
	}).when('/teacher/custom-assignment/:gradeid/:subject_name/:courseid',{
		templateUrl : 'views/dashboard/teacher-createCustomAssignement.html',
		controller : 'teacherCustomAssignmentCtrl',
	}).when('/teacher/add-new-assignment',{
		templateUrl : 'views/dashboard/teacher-AddNewAssignment.html',
		controller : 'teacherAddNewAssignment',
	}).when('/teacher/add-new-todo',{
		templateUrl : 'views/dashboard/teacher-addnewtodo.html',
		controller : 'teacherAddNewTodo',
	}).when('/parent/dashboard/:id', {
		templateUrl : 'views/dashboard/parent-dashboard.html',
		controller : 'parentDashboardCtrl',
		access : access.parents
	}).when('/teacher/payment_page',{
		templateUrl : 'views/payment_teacher.html',
		controller : 'teacherOnBoardingCtrl',
  }).when('/teacher/add-content',{
		templateUrl : 'views/dashboard/teacher-content-add-lesson.html',
		controller : 'teacherLessonCtrl',
  }).when('/teacher/create-class',{  	
		templateUrl : 'views/dashboard/teacher-create-class.html',
		controller : 'teacherCreateClassCtrl',
  }).when('/teacher/add-question',{
		templateUrl : 'views/dashboard/teacher-content-add-question.html',
		controller : 'teacherAddQuestionCtrl',
  }).when('/teacher/questions',{
		templateUrl : 'views/dashboard/teacher-content-questions.html',
		controller : 'teacherQuestions',
  }).when('/teacher/lessons',{
		templateUrl : 'views/dashboard/teacher-content-lessons.html',
		controller : 'teacherLessonListingCtrl',
  }).when('/teacher/create-group/class/:grade_id/:subject_name/:course_id',{
		templateUrl : 'views/dashboard/teacher-create-group.html',
		controller : 'teacherGroupCtrl',
  }).when('/teacher/edit-group/:group_title_inURL/:group_id',{
		templateUrl : 'views/dashboard/teacher-editGroup.html',
		controller : 'teacherGroupCtrl',
  }).when('/teacher/gap-analysis',{
		templateUrl : 'views/dashboard/teacher-gapAnalysis.html',
		controller : 'teacherGapAnalysis',
  }).when('/teacher/get-a-quote',{
		templateUrl : 'views/dashboard/teacher-getQuote.html',
		controller : 'teacherGetQuote',
  }).when('/teacher/group-member',{
		templateUrl : 'views/dashboard/teacher-groupMember.html',
		controller : 'teacherGroupMember',
  }).when('/teacher/teacher-message',{
		templateUrl : 'views/dashboard/teacher-message.html',
		controller : 'teacherMessage',
  }).when('/teacher/my-class',{
		templateUrl : 'views/dashboard/teacher-myClass.html',
		controller : 'teacherMyClass',
  }).when('/teacher/notification',{
		templateUrl : 'views/dashboard/teacher-notification.html',
		controller : 'teacherNotification',
  }).when('/teacher/rewards',{
		templateUrl : 'views/dashboard/teacher-rewards.html',
		controller : 'teacherRewards',
  }).when('/teacher/scope-sequence',{
		templateUrl : 'views/dashboard/teacher-scope-sequence.html',
		controller : 'teacherScopeSequence',
  }).when('/teacher/scope-sequence-subskill/:skill/:grade/:subject/:group/:id',{
		templateUrl : 'views/dashboard/teacher-scope-sequence-subskills.html',
		controller : 'teacherScopeSequence',
  }).when('/teacher/requestQuote',{
		templateUrl : 'views/dashboard/teacher-getQuote.html',
		controller : 'teacherQuoteCntrl',
  }).when('/guest', {
	templateUrl : 'views/guest_login.html',
	controller : 'guestCtrl',
  }).when('/static/:slug',{
		templateUrl : 'views/comingsoon.html',
		controller : 'staticCtrl',
	}).otherwise({
		redirectTo : '/',
  });

	$locationProvider.html5Mode({
		enabled : true,
		requireBase : false
	});

} ]).run([ '$rootScope','$templateCache', '$location','loginHttpService', 'urlParams', '$http', '$cookies', '$cookieStore','Auth','commonActions', function($rootScope,$templateCache,$location, loginHttpService, urlParams, $http, $cookies, $cookieStore,Auth, commonActions) {

    urlParams.baseURL=$location.protocol()+'://'+$location.host()+'/mlg';
    var top ="";
    $cookieStore.put('selected_child_id', null);
    loginHttpService.isUserlogin().success(function(response) {
         if (response.status=='false') {
           $rootScope.logged_user = '';
         } else {
           $rootScope.logged_user = response.user_info;
         }
	   }).error(function(error) {
		  $rootScope.logged_user = '';
	   });

		/*$rootScope.$on("$routeChangeSuccess", function(event, next, current) {
			$scope.atHome = ($location.path() === "parent/dashboard/offers");
		});*/
		/*$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		  $rootScope.atHome = (toState.name == '/parent/dashboard');
		});*/
 

        function setCookie(key, value) {
          var expires = new Date();
          expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
          document.cookie = key + '=' + value + ';expires=' + expires.toUTCString()+';path=/';
        }

		
	   $rootScope.logout=function(){
         var get_uid = commonActions.getcookies(get_uid);
		   	loginHttpService.logout({user_id: get_uid}).success(function(response) {
		   		$rootScope.logged_user = '';
		   		 /*document.cookie = uid+ '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		   		 document.cookie =  'userObj=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';*/
		   		setCookie('uid',null);
		   		setCookie('userObj',null);
		   		$cookieStore.remove('selected_child_id');


	         window.location.href='/mlg_ui/app';
		   }).error(function(error) {
			  $rootScope.logged_user = '';
		   });
		}

	$rootScope.$on('$viewContentLoaded', function() {
     // $temlateCache.removeAll();
   });

} ])
.controller("TopController", function($rootScope, $scope, $location) {
  $rootScope.$on("$routeChangeSuccess", function(event, next, current) {
    //$scope.atHome = ($location.path() === "/");
	$scope.this_route = function(){
		
         return $location.path().replace('/', '')==''?'home':$location.path().replace('/', '')
    };
  });
})
.controller('parentOffers', function ($scope) {
	
	$scope.$apply(function(){
		$('.page-container').addClass('abc');
		var availableHeight = $(window).height() - $('.page-container').offset().top - $('.footer').outerHeight();
		//var footerHeight = $('.footer').outerHeight();
		$('.page-container').attr('style', 'min-height:' + availableHeight + 'px');
	});
})

.directive('banner', function() {
    return function (scope, element, attrs) {
        element.height($(window).height() - $('.navbar').outerHeight());
    }
})
.directive('aside', function () {
return {
	restrict: 'E',
	templateUrl: 'include/sidebar-teacher.html',
	controller: ['$scope','$cookieStore','teacherHttpService','user_roles', function ($scope,$cookieStore,teacherHttpService,user_roles) {                         	
		$scope.isCollapsedmyClass = true;
		$scope.isCollapsedmyContent = true;
		$scope.open_menu=function(menu_class,menu_item){
			if(menu_item=='myClass'){
				$scope.isCollapsedmyClass = !$scope.isCollapsedmyClass;
				if(!$scope.isCollapsedmyClass){
					$('#'+menu_item).addClass('in');
					$('#'+menu_class).removeClass('collapsed');
				}
				else{
					$('#'+menu_item).removeClass('in');
					$('#'+menu_class).addClass('collapsed');
				}
			}
			else{
				$scope.isCollapsedmyContent = !$scope.isCollapsedmyContent;
				if(!$scope.isCollapsedmyContent){
					$('#'+menu_item).addClass('in');
					$('#'+menu_class).removeClass('collapsed');
				}else{
					$('#'+menu_item).removeClass('in');
					$('#'+menu_class).addClass('collapsed');
			}

			}
			
		   
		}
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

	// Get Teacher selected class and subjects
	var get_uid= cookieString=$cookieStore.get("uid");
	
	  teacherHttpService.getTeacherGrades(get_uid,user_roles['teacher']).success(function(response) {
    if (response.status == true) {
      $scope.subject_grade = response.response;
      $scope.level = response.grade;
      $scope.subject = (response.subject.course_name).split(',');  


    }
  });

}]
};

	
})

.directive('asideParent', function () {
return {
	restrict: 'E',
	templateUrl: 'include/sidebar.html',
	controller: ['$scope','$cookieStore','loginHttpService','$routeParams',function ($scope,$cookieStore,loginHttpService,$routeParams) {                         	
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
  $scope.childname={};
  $scope.frm={};
  // Get Teacher selected class and subjects
  var get_uid= cookieString=$cookieStore.get("uid");
  // To call dynamic step slider
  // and Call API to get child details for deshboard naming
  loginHttpService.getChildrenDetails(get_uid).success(function(chidrenName) {
    var childcount=chidrenName.response.length;
    if (childcount > 0) {
      $scope.childname=chidrenName.response;
      $scope.frm.childnames = chidrenName.response;

      for(var i in $scope.frm.childnames) {
        if ($scope.frm.childnames[i].user_id==$routeParams.child_id) {
          $scope.frm.selectedchild=$scope.frm.childnames[i];
          return false;
        }
      }
      if (typeof $scope.frm.selectedchild == 'undefined') {
        $scope.frm.selectedchild = {children_name : 'My child', user_id : $cookieStore.get('selected_child_id')};
      } else if($scope.frm.selectedchild != '') {
        $cookieStore.put('selected_child_id', $scope.frm.selectedchild.user_id);
      }
    //window.location.href='parent/dashboard/'+$scope.frm.childnames[0].user_id;
    } else {
      $scope.childname=0;
      $scope.frm.childnames = [];
    }
  });
}]
};

})


.directive('topSearchBar', function () {
return {
	restrict: 'E',
	templateUrl: 'include/search-bar.html',
	controller: ['$scope','$cookieStore',function ($scope,$cookieStore) {  
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
	}]
};
	
}).directive('fileModel', ['$parse', function ($parse) {
  return {
     restrict: 'A',
     link: function(scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        element.bind('change', function(){
           scope.$apply(function(){
              modelSetter(scope, element[0].files[0]);
           });
        });
     }
  };
}])
.directive('jqdatepicker', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
         link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
               // dateFormat: 'DD, d  MM, yy',
               dateFormat: 'yy-mm-d',
                onSelect: function (date) {
                    scope.date = date;
                    scope.$apply();
                }
            });
        }
    };
});


