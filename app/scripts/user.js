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

	loginHttpResponse.gradeList=function(){
		return $http({
			method:'GET',			
			url   : urlParams.baseURL+urlParams.gradeList
		});
	}

	loginHttpResponse.packageList=function(){
		return $http({
			method:'GET',			
			url   : urlParams.baseURL+urlParams.packageList
		});
	}

	loginHttpResponse.planList=function(){
		return $http({
			method:'GET',			
			url   : urlParams.baseURL+urlParams.planList
		});
	}

	loginHttpResponse.getCourseByGrade=function(grade_id){		
		return $http({
			method:'GET',	
			data : grade_id,		
			url   : urlParams.baseURL+urlParams.getCourseByGrade+'/'+grade_id.id
		});
	}

	loginHttpResponse.setChildrenCount=function(ccount){		
		return $http({
			method:'POST',	
			data : ccount,		
			url   : urlParams.baseURL+urlParams.getCourseByGrade+'/'+grade_id.id
		});
	}


	loginHttpResponse.addChild=function(data){
		return $http({
			method:'POST',	
			data : data,		
			url  : urlParams.baseURL+urlParams.addChild
		});
	}



	loginHttpResponse.packageList=function(){
		return $http({
			method:'GET',			
			url   : urlParams.baseURL+urlParams.packageList
		});
	}

	loginHttpResponse.planList=function(){
		return $http({
			method:'GET',			
			url   : urlParams.baseURL+urlParams.planList
		});
	}

	loginHttpResponse.getCourseByGrade=function(grade_id){		
		return $http({
			method:'GET',	
			data : grade_id,		
			url   : urlParams.baseURL+urlParams.getCourseByGrade+'/'+grade_id.id
		});
	}

	loginHttpResponse.setChildrenCount=function(data){
		return $http({
			method:'PUT',
			url   : urlParams.baseURL+urlParams.setChildrenCount+'/'+data.uid+'/'+data.numofchild
		});
	}

	loginHttpResponse.getChildrenCount=function(get_uid){
		return $http({
			method:'PUT',
			url   : urlParams.baseURL+urlParams.getChildrenCount+'/'+get_uid
		});
	}


	loginHttpResponse.getAddedChildren=function(pid){
		return $http({
			method:'GET',
			url   : urlParams.baseURL+urlParams.getAddedChildren+'/'+pid
		});
	}

	loginHttpResponse.getChildrenDetails=function(pid){
		return $http({
			method:'GET',
			url   : urlParams.baseURL+urlParams.getChildrenDetails+'/'+pid
		});
	}


	loginHttpResponse.pricecalc=function(course_ids){
		return $http({
			method:'POST',	
			data : course_ids,		
			url  : urlParams.baseURL+urlParams.priceCalcOnSeclectedCourse
		});
	}


	loginHttpResponse.addChildRecord=function(childdata){
		return $http({
			method:'POST',	
			data : childdata,		
			url  : urlParams.baseURL+urlParams.addChild
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
           setCookie('uid', $rootScope.logged_user.id);
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

/* ****************************** */
.controller('addChild',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles) {
   //$rootScope.username=$location.search().uid;

  //  get children count
   	$scope.number=5;
   	$scope.counter = Array; 

   	//get cookies
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
	var get_uid=getCookie('uid'); 
	//var get_uid=$rootScope.logged_user.id; 
	

   	// Call to redirect on add child after child selection
    $scope.submitChildrenCount = function(childrencount) {
   		
   		//call API to save number of children of a parents   			
   		if (typeof get_uid !="") {   				
   			data={};
	   		data.uid = get_uid;
	   		data.numofchild=childrencount;
   				
   			loginHttpService.setChildrenCount(data).success(function(response) {	   			
	        	if (response.response.status == "True") {
	           	 	//alert('updated');
	               	 $location.url('/add_child_account');          		
	           	}else{
	           		//alert('No updated');
	           		$location.url('/add_child_account');
	           	}
           				
        	})
   		}else{
   			alert('kindly login');
      		window.location.href='/mlg_ui/app';
   		}		
   		
    };   


    // call API to check number of Childrent
    if (typeof get_uid !="") {
	    loginHttpService.getChildrenCount(get_uid).success(function(response) {
	  		  $rootScope.childrencount = response.response.number_of_children;  
	  	});
	}else{
		alert('kindly login');
      		window.location.href='/mlg_ui/app';
	}


	 // call API to get grades
     loginHttpService.gradeList().success(function(response) {
  		  $scope.grades = response.response.Grades;  
  	});

    // call API to get packages
    loginHttpService.packageList().success(function(packrecords) {
		$scope.packages = packrecords.response.package; 
	});

    // call API to get plans
    loginHttpService.planList().success(function(planrecord) {
		$scope.plans = planrecord.response.plans; 
	});

	//call API to get added chidren name of a parent
	loginHttpService.getChildrenDetails(get_uid).success(function(chidrenName) {
		$scope.childname = chidrenName.response.children_name; 
	});

	loginHttpService.getAddedChildren(get_uid).success(function(response) {
			$scope.remainchildAccount=$rootScope.childrencount-response.response.added_children;

		})



    //call API to getCourseList for a level on change of grade
     $scope.changeCourseList = function(grade_id) {
	   	loginHttpService.getCourseByGrade(grade_id).success(function(courseslistresult) {
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


    //On select of plan
    $scope.num_months=1;
    $scope.currency='$';
		$scope.permonth='/month';
		$scope.price =0;
		$scope.dis_amount=0;
		$scope.subtotal=0;	
   		
   		$scope.onSelectplan = function(dataplan){
    		$scope.num_months=dataplan.num_months;
    	//$scope.plan=dataplan.id;
    	}

    // On selection of package
	$scope.onSelectedPackageDiscount = function(data){
		$scope.frm.selectedcourse = [];
		$scope.currency='$';
		$scope.permonth='/month';
		$scope.price =0;
		$scope.dis_amount=0;
		$scope.subtotal=0;	
			

		if(data.type=='percent'){	
			$scope.discount=data.discount+' %';
						
			// On selection of course calculate price
			$scope.onSelectCourse = function(dataa){				
				loginHttpService.pricecalc(dataa).success(function(courseprice) {
					$scope.price =courseprice.response.amount; 
					$scope.dis_amount= courseprice.response.amount*data.discount*0.01;	
					$scope.subtotal=courseprice.response.amount-courseprice.response.amount*data.discount*0.01;
				});
			}
		}

		if(data.type=='fixed'){
			$scope.discount=data.discount+' fixed';
			$scope.onSelectCourse = function(dataa){	
				console.log(data.discount);	
				loginHttpService.pricecalc(dataa).success(function(courseprice) {
					$scope.price =courseprice.response.amount; 
					$scope.dis_amount= data.discount;
					if(courseprice.response.amount>0){
						$scope.subtotal=courseprice.response.amount-data.discount;
					}else{
						$scope.subtotal=0;
					}

				});
			}
		}

	/*		
	    loginHttpService.packageDiscount().success(function(packrecords) {
			$scope.packages = packrecords.response.package; 
		});
		*/
	}



/* *************************************************************************** */
    $scope.submitChildDetails = function(data){   

       
    //data.selectedcourses = JSON.parse(JSON.stringify(data.selectedcourse));
      data.selectedcourses = Object.assign({}, data.selectedcourse);
      $scope.today = $filter('date')(new Date(), 'yyyy-mm-dd HH:mm:ss');

      	var childdata={};
      	 childdata={
       			username 	: data.first_name,
       			first_name 	: data.first_name,
       			last_name 	: data.last_name,
       			level_id 	: data.levelchoice.id,
       			dob 	 	: data.dob,
       			created 	: $scope.today,
       			emailchoice	: data.emailchoice,
       			email 	    : data.childemail,
       			school		: data.school,
       			parent_id	: get_uid,
       			role_id		: 4, 
       			status 		: 1,
       			//plan_id	: $scope.selectedplan,
       			//package_id: $scope.selectedPackage,
       			plan_id		: data.selectedplan,
       			package_id	: data.selectedPackage,
       			courses		: data.selectedcourses, 

       	}; 



       //console.log(childdata); 
       //how many childeren has been added n
       	loginHttpService.getAddedChildren(get_uid).success(function(response) {
			if (typeof response.response.added_children !='undefined') {
					var added_children =	response.response.added_children;					
					
					if(added_children!=$rootScope.childrencount){       				       		       		
		       		//call API to check the number of child has been added
		       		loginHttpService.addChildRecord(childdata).success(function(response_childadd) {
						if (response_childadd.response.status == "True") {
									/*data={};
									childdata={};*/
									//$scope.childform.$setPristine();
                					//$scope.childform.$setUntouched();
								window.location.href=urlParams.siteRoot+'add_child_account';


						}
			}); 
       	}
       	else{
       		//alert('redirect on preference page');
       		window.location.href=urlParams.siteRoot+'parent_preferences'; 
       	}




	}
		});
 		
	};

	$scope.testsubmitChildDetails = function(data){

		console.log(data);
		console.log($scope.usr = "usr");


		console.log($scope.selectedoption);              
        $scope.submitCalled = "submit called " + $scope.selectedoption;

        
       	};
/* ********************************************************************** */

   
}])

/** ************************ */

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
