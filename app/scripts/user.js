angular.module('mlg')
.factory('loginHttpService',['$http','urlParams',function($http,urlParams){
	
	var loginHttpResponse={};	
	
	
	loginHttpResponse.login=function(data){
		return $http({
			method:'POST',
			data  : data,
			url   : urlParams.baseURL+urlParams.login
		});
	}

	loginHttpResponse.register=function(data){
		return $http({
			method:'POST',
			data  : data,
			url   : urlParams.baseURL+urlParams.registerUser
		});
	}
	loginHttpResponse.setPassword=function(data){
		return $http({
			method:'POST',
			data  : data,
			url   : urlParams.baseURL+urlParams.password
		});
	}
	loginHttpResponse.forgotPassword=function(data){
		return $http({
			method:'POST',
			data  : data,
			url   : urlParams.baseURL+urlParams.forgotPassword
		});
	}
    loginHttpResponse.setPreference = function(data) {
      return $http({
        method: 'POST',
        data  : data,
        url   : urlParams.baseURL+urlParams.parentPreference
      });
    }

	loginHttpResponse.gradeList=function(){
		return $http({
			method:'GET',			
			url   : urlParams.baseURL+urlParams.gradeList
		});
	}
    
	loginHttpResponse.isUserlogin=function(){
		return $http({
			method:'GET',			
			url   : urlParams.baseURL+urlParams.isUserLogin
		});
	}

	loginHttpResponse.logout=function(){
		return $http({
			method:'GET',			
			url   : urlParams.baseURL+urlParams.logout
		});
	}

	loginHttpResponse.setStatusActive=function(data){
		return $http({
			method:'POST',
            data  : data,
			url   : urlParams.baseURL+urlParams.setUserStatus
		});
	}

	loginHttpResponse.getPaymentBrief=function(data){
		return $http({
			method:'POST',
            data  : data,
			url   : urlParams.baseURL+urlParams.getPaymentBrief
		});
	}
    
	loginHttpResponse.saveCardToPaypal=function(data){
		return $http({
			method:'POST',
            data  : data,
			url   : urlParams.baseURL+urlParams.saveCardToPaypal
		});
	}
    
	return loginHttpResponse;
	
}])
.controller('loginCtrl',['$rootScope','$scope','loginHttpService','$location','user_roles',function($rootScope,$scope, loginHttpService,$location,user_roles) {
    $scope.form={};	
    $scope.msg='';
    $scope.range = function(n) {
        return new Array(n);
    }; 

    function setCookie(key, value) {
		var expires = new Date();
		expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
		document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
	}
	 $scope.login = function(data) {
	   loginHttpService.login(data).success(function(response) {
         if (response.status=='false') {
           $scope.msg = response.message;
         } else {
           $rootScope.logged_user = response.user;
           $location.url('select_children');
         }
	   }).error(function(error) {
		  $scope.msg="Invalid Username Password";
	   });
	};

	$scope.gohome=function(){

		window.location.href='/mlg_ui/app';
	}


	 $scope.register = function(data,user_type){
	 		var role_id=user_roles[user_type];
	 		if(typeof data=='undefined'){
	 			data={};
	 		}

	 		data.role_id=role_id;
            data.source_url = $location.protocol()+'://'+$location.host() + '/mlg_ui/app/';
			loginHttpService.register(data).success(function(response) {
				if(!response.data.response){
					$scope.msg=response.message;
				}else{
					$("#emailConfirmation").modal();					
				}
			
					//alert('registered succefully');
			}).error(function(error) {
				alert('registration fail');
			});
	};

}])
.controller('parentDashboardCtrl',['$rootScope','$scope','loginHttpService','$location','user_roles','$routeParams', function($rootScope,$scope, loginHttpService, $location, user_roles, $routeParams) {
  $scope.frm = {}

  $rootScope.username=$location.search().uid;
  if (typeof $routeParams.id != 'undefined') {
    loginHttpService.setStatusActive($routeParams).success(function(response) {
      if (response.status == false) {
        alert('Some error occured, kindly refresh the page');
      }
    }).error(function() {
      alert('Unable to activate account, contact to the administrator');
    });
  }

  $scope.setPreference = function(data) {
    if (typeof $rootScope.logged_user == 'undefined') {
      alert('kindly login');
      window.location.href='/mlg_ui/app';
    }
    data.user_id = $rootScope.logged_user.id;
    loginHttpService.setPreference(data).success(function(response) {
      if (response.status == true) {
        if ((typeof response.warning != 'undefined') && (response.warning == true)) {
          alert(response.message);
        }
        $location.url('/terms_and_conditions');
      } else {
        $scope.msg = response.message;
      }
    }).error(function(error) {
      $scope.msg = 'some error occured';
    });
  };
}])
.controller('addChild',['$rootScope','$scope','loginHttpService','$location','$http','user_roles','$location',function($rootScope,$scope, loginHttpService,$location,$http,user_roles,$location) {
   //$rootScope.username=$location.search().uid;
   	 $scope.submitChildrenCount = function() {
        $http({
          method  : 'POST',
          url     : 'add_child_account',
          data    : $scope.childrencount, //forms user object
          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         })
          .success(function(data) {           
             // $scope.message = data.message;

             $scope.PostChildCount = data;
             $location.path('/add_child_account');
            
          });
        };

        $scope.childrencount = ["1", "2", "3"];

         loginHttpService.gradeList().success(function(response) {
  		  $scope.grades = response.response.Grades;  
  	  });

      $scope.addChildAccount = function() {
        $location.path('/parent_preferences');
      }
}])
.controller('passwordCtrl',['$scope','loginHttpService','$location','$timeout',function($scope, loginHttpService,$location,$timeout) {
    $scope.form={};	
    $scope.msg='';
    var token= $location.search().code;
    $scope.form.token= token;
    $scope.range = function(n) {
        return new Array(n);
    }; 
    
    $scope.getUserByToken = function(token) {
  	  loginHttpService.getUserByToken(token).success(function(response) {
  		  $scope.email = response.email;  
  	  });
    }
    $scope.getUserByToken(token);
    
	  $scope.setPassword = function(data){
	  		if($scope.frmPassword.$invalid){
	 	    			//alert("Please fill all mandatory fields.");
	 	    			//return false;
	 	    		}
	  		$scope.spinner=true;
			loginHttpService.setPassword(data).success(function(response) {
				$scope.msg="Please Login with the password you have set. <br>Click <a href='/'>here</a> to login. <br>The Page will redirect to login  in 5 sec."	
				//$location.search('');
					$scope.spinner=false;
					$timeout(function() {
						$location.search('');
	  					 $location.path('/')
					}, 5000);	
					
					
			}).error(function(error) {					
				$scope.msg=error;
				$scope.spinner=false;
				 
			});	
	};

	 $scope.forgotPassword = function(data){
	 	if($scope.frmPassword.$invalid){
	 	    			//alert("Please fill all mandatory fields.");
	 	    			//return false;
	 	    		}
	  	$scope.spinner=true;
			loginHttpService.forgotPassword(data).success(function(response) {
					$scope.msg="A mail has been sent to your emailid."
					$scope.spinner=false;
					$scope.form={};
					$scope.frmPassword.$setPristine();
			}).error(function(error) {	
				$scope.msg=error;
				$scope.spinner=false;
			});
	};	
}])
.controller('termsAndConditionsCtrl',['$scope', 'loginHttpService','$location','$timeout', function($scope, loginHttpService,$location,$timeout) {
//    $scope.pagehtml = '';
//    loginHttpService.getPaymentBrief(data).success(function(response) {
//      $scope.pagehtml = response.data;
//    });
    $scope.termsAndConditions = function () {
      $location.url('/payment_page');
    }

}])
.controller('paymentPageCtrl',['$scope', '$rootScope','loginHttpService','$location','card_months', 'card_years',
  function($scope, $rootScope, loginHttpService,$location, card_months, card_years) {
    $scope.children = {};
    $scope.total_amount = 0;
    console.log($rootScope.logged_user);
    if (typeof $rootScope.logged_user != 'undefined') {
      data = {user_id : $rootScope.logged_user.id};
      loginHttpService.getPaymentBrief(data).success(function(response) {
        if (response.status) {
          $scope.children = response.data;
          $scope.total_amount = response.total_amount;
        }
      });
    }

    $scope.frm = {};
    $scope.card_months = card_months;
    $scope.card_years = card_years;
    $scope.frm.expiry_month = card_months['1'];
    $scope.frm.expiry_year = card_years['2018'];
    $scope.submitCardDetail = function(data) {
      data.user_id = $rootScope.logged_user.id;
      data.amount = $scope.total_amount;
      loginHttpService.saveCardToPaypal(data).success(function(response) {
        if (response.status == true) {
          $location.url('/parent/dashboard');
        } else {
          $scope.msg = response.message;
        }
      });
    };
}]);
