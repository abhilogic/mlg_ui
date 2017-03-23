'use strict';
angular.module('mlg', [ 'ngAnimate', 'ngCookies', 'ngRoute', 'ui.bootstrap',])
.value('urlParams', {
	users : '/users',
	login: '/users/login',
	logout: '/users/logout',
	registerUser:'/users/registerUser',
	parentPreference:'/users/setUserPreference',
	baseURL : 'http://localhost/mlg',
	gradeList : '/users/getGradeList',
	setUserStatus : '/users/setUserStatus',
	getTermsAndConditions : '/users/getStaticContents',
	getPaymentBrief : '/users/getPaymentBrief',
	isUserLogin : '/users/isUserLoggedin',
	packageList : '/users/getPackageList',
	planList : '/users/getPlanList',
	getCourseByGrade :'/courses/getCourseListForLevel',
	setChildrenCount :'/users/setCountOfChildrenOfParent',
	getChildrenCount :'/users/getCountOfChildrenOfParent',
	getAddedChildren :'/users/getChildrenListOfParent',
	addChild : '/users/addChildren',
	
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
}).config([ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	//var access = routingConfig.accessLevels;
	$routeProvider.when('/', {
		templateUrl : 'views/landing.html',
		controller : 'loginCtrl',		
	}).when('/signin', {
		templateUrl : 'views/user-selection.html',
		controller : 'loginCtrl',		
	}).when('/parent_login', {
		templateUrl : 'views/parent_login.html',
		controller : 'loginCtrl',		
	}).when('/parent_signup', {
		templateUrl : 'views/parent_signup.html',
		controller : 'loginCtrl',		
	}).when('/parent_confirmation/:id', {
		templateUrl : 'views/parent_confirmation.html',
		controller : 'parentDashboardCtrl',
	}).when('/parent_dashboard', {
		templateUrl : 'views/parent_dashboard.html',
		controller : 'parentDashboardCtrl',
	}).when('/select_children', {
		templateUrl : 'views/number_children.html',
		controller : 'addChild',		
	}).when('/add_child_account', {
		templateUrl : 'views/child_account_creation.html',
		controller : 'addChild',		
	}).when('/parent_preferences', {
		templateUrl : 'views/account_preferenceces.html',
		controller : 'parentDashboardCtrl',
	}).when('/terms_and_conditions', {
		templateUrl : 'views/term_condition.html',
		controller : 'termsAndConditionsCtrl',
	}).when('/parent/dashboard', {
		templateUrl : 'views/dashboard/parent-dashboard.html',
		controller : 'parentDashboardCtrl',
	}).when('/payment_page', {
		templateUrl : 'views/payment_page.html',
		controller : 'paymentPageCtrl',
	}).otherwise({
		redirectTo : '/',
	});

	$locationProvider.html5Mode({
		enabled : true,
		requireBase : false
	});

} ]).run([ '$rootScope', '$location','loginHttpService', 'urlParams', '$http', '$cookies', '$cookieStore', function($rootScope, $location, loginHttpService, urlParams, $http, $cookies, $cookieStore) {

    urlParams.baseURL=$location.protocol()+'://'+$location.host()+'/mlg';
    loginHttpService.isUserlogin().success(function(response) {
         if (response.status=='false') {
           $rootScope.logged_user = '';
         } else {
           $rootScope.logged_user = response.user_info;
         }
	   }).error(function(error) {
		  $rootScope.logged_user = '';
	   });

	   $rootScope.logout=function(){
		   	loginHttpService.logout().success(function(response) {
		   		$rootScope.logged_user = '';
	         window.location.href='/mlg_ui/app';
		   }).error(function(error) {
			  $rootScope.logged_user = '';
		   });
		}
	// $rootScope.logout = function() {
	// 	// api call for logout
	// 	$http({
	// 		method : 'GET',
	// 		url : urlParams.baseURL + urlParams.logout
	// 	}).success(function(response) {
	// 		$rootScope.userName = '';

			
	// 		$location.path('/');
	// 	}).error(function(error) {

	// 	});

	// };

} ]);

