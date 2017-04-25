angular.module('mlg').filter('moment', function() {
    return function(dateString, format) {
        return moment(dateString).format(format);
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
			url  : urlParams.baseURL+urlParams.addChildRecord
		});
	}
	
	
	//offers
	loginHttpResponse.offerRecords=function(){
		return $http({
			method:'GET',	
			//data : childdata,		
			url  : urlParams.baseURL+urlParams.offerRecords
		});
	}

  
	loginHttpResponse.saveCardToPaypal=function(data){
		return $http({
			method:'POST',
            data  : data,
			url   : urlParams.baseURL+urlParams.saveCardToPaypal
		});
	}

	loginHttpResponse.getStepNum=function(pid){
		return $http({
			method:'GET',
			url   : urlParams.baseURL+urlParams.getStepNum+'/'+pid
		});
	}
  
	loginHttpResponse.promocode=function(prcode){
		return $http({
			method:'GET',				
			url  : urlParams.baseURL+urlParams.promocode +'/'+prcode
		});
	}
    

    loginHttpResponse.getUserPurchaseDetails=function(cid){		
      return $http({
        method:'GET',
        url   : urlParams.baseURL+urlParams.getUserPurchaseDetails + '/' + cid
	  });
	}

    loginHttpResponse.upgradePackage=function(frm) {
      return $http({
        method:'POST',
        data: frm,
        url   : urlParams.baseURL+urlParams.upgradePackage
	  });
	}
    
    loginHttpResponse.guestLogin=function(data){
      return $http({
          method:'POST',
          data : data,
          url   : urlParams.baseURL+urlParams.guestLogin
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


		
		// To find number of children
		commonActions.chidrenNameFactory = function (get_uid) {
			
				var childname= loginHttpService.getChildrenDetails(get_uid).success(function(chidrenName) {
					var childcount=chidrenName.response.length;
						console.log(chidrenName);
						if(childcount>0){
								//$rootScope.childname 	= chidrenName.response;													
								return  chidrenName.response;
						}						
				});

				return childname;
		}

		return commonActions;
	}])

.controller('loginCtrl',['$rootScope','$scope','loginHttpService','$location','user_roles',function($rootScope,$scope,
   loginHttpService,$location,user_roles) {
    $scope.form={};	
    $scope.msg='';
    $scope.range = function(n) {
        return new Array(n);
    }; 

    $scope.teacher_signup_page=function(){
    	$("#modalFreeTrail").modal('hide');					
    	$location.url('teacher/signup');
    }

     $scope.parent_signup_page=function(){
     	$("#modalFreeTrail").modal('hide');					
    	$location.url('parent_signup');
    }


    function setCookie(key, value) {
		var expires = new Date();
		expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
		document.cookie = key + '=' + value + ';expires=' + expires.toUTCString()+';path=/';
	}

	$scope.openFreeModal=function(){
		$("#modalFreeTrail").modal();					
	}
	 $scope.login = function(data) {
       //var role_id = user_roles[user_type];
       //data.role_id= role_id;
       console.log(user_roles)
	   loginHttpService.login(data).success(function(response) {
         if (response.status=='false') {
           $scope.msg = response.message;
         } else {
           $rootScope.logged_user = response.user;
           setCookie('uid', $rootScope.logged_user.id);

           var role_id=response.role_id;
           var role_name='';
           if(role_id==1){
           		role_name='admin';
           }else if(role_id==2){
           		role_name='parent';
           }else if(role_id==3){
           		role_name='teacher';
           }else if(role_id==4){
           		role_name='student';
           }
           setCookie('userObj', '"userName='+response.user.first_name+',email='+response.user.email+',role='+role_name+'"');
           //var user_type=user_roles.indexOf(response.role_id);
          // $location.url('select_children');
          if (role_id == '3') {
            $location.url('teacher/create_account');
            return true;
          }
          if (role_id == '4') {
            window.location.href='/mlg_ui/sapp/journey';
            return true;
          }
            // To Redirect User on his account last step page.
             // call API to get last step track             
    		loginHttpService.getStepNum(response.user.id).success(function(stepNum) {    			
    			if(stepNum.response.step.step_completed!=null ){    				
    				//var step_page = stepNum.response.step.step_completed; 

					if(stepNum.response.step.step_completed==0 ){ 
						$location.url('select_children'); 
					}
					else if(stepNum.response.step.step_completed==1){
					 $location.url('add_child_account');
					  }
					else if(stepNum.response.step.step_completed==2){
					 $location.url('parent_preferences');
					  }
					else if(stepNum.response.step.step_completed==3){ 
						$location.url('payment_page'); 
					}
					else if(stepNum.response.step.step_completed==4){
					 $location.url('parent/dashboard/110');
					 }				
					
	   			}
			});

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
.controller('parentDashboardCtrl',['$rootScope','$scope','loginHttpService','$location','user_roles','$routeParams','commonActions',function($rootScope,$scope, loginHttpService, $location, user_roles, $routeParams,commonActions) {
  $scope.frm = {}
  $scope.childname={};

  console.log($routeParams.id);

  //alert(commonActions.getcookies(get_uid));
  var get_uid=commonActions.getcookies(get_uid);

	// To call dynamic step slider
	// and Call API to get child details for deshboard naming
    loginHttpService.getChildrenDetails(get_uid).success(function(chidrenName) {
			var childcount=chidrenName.response.length;
			console.log(chidrenName);
			if(childcount>0){																
					$scope.childname=chidrenName.response;
                    $scope.frm.childnames = chidrenName.response;
                    
                    for(var i in $scope.frm.childnames){

    			if($scope.frm.childnames[i].user_id==$routeParams.id){
    				$scope.frm.selectedchild=$scope.frm.childnames[i];
    				return false;
    			}else{

    			}
    	}
    	window.location.href='parent/dashboard/'+$scope.frm.childnames[0].user_id;
			}else{
				$scope.childname=0;
                $scope.frm.childnames =[];
			}			
		});

    	


	// end to call dynamic step slider


//  $rootScope.username=$location.search().uid;

    //Child Purchase history.
    $scope.child_info={}
    $scope.packages = {}
    $scope.plans = {}
    $scope.level_id = '';
    $scope.price = 0;
    $scope.dis_val = 0;
    $scope.dis_amount = 0;
    $scope.pageNumber = 0;
    $scope.new_package_name = 'NaN';
    $scope.errMsg = '';
    var all_courses = '';
    $scope.getTotalPrice = function(subject) {
      loginHttpService.pricecalc(subject).success(function(courseprice) {
        $scope.price = courseprice.response.amount;
        $scope.dis_amount = $scope.price * $scope.dis_val * 0.01;
        $scope.subtotal = $scope.price - $scope.dis_amount;
	  });
    }
    $scope.discount = function(package) {
     $scope.frm.updatedPackage = package;
     $scope.dis_val = package.discount;
     $scope.new_package_name = package.name;
     $scope.dis_amount = $scope.price * $scope.dis_val * 0.01;
     $scope.subtotal = $scope.price-$scope.dis_amount;
    }

    $scope.updatedPlan = function(plan) {
      $scope.frm.updatedPlan = plan;
    }

    $scope.upgrade = function(frm) {
     if (typeof frm.new_package == 'undefined') {
       $scope.errMsg = 'Please choose Package';
       return false;
     }
     if (typeof frm.new_plan == 'undefined' || frm.new_plan == '') {
       $scope.errMsg = 'Please choose Plan';
       return false;
     }
     if (typeof frm.selectedcourse == 'undefined' || selected_subjects == '') {
       $scope.errMsg = 'Please choose Course';
       return false;
     }
     var num_of_subjects_opted = frm.new_package;
     var selected_subjects = 0;
     angular.forEach(frm.selectedcourse, function(sub, sub_key){
       if (sub != '') {
         selected_subjects++;
       }
     });
     if (num_of_subjects_opted != selected_subjects) {
       $scope.errMsg = 'Please choose the subjects equal to the subject packages';
       return false;
     }
     frm.user_id = get_uid;
     frm.child_id = $routeParams.child_id;
     var course_chosen = [];
     angular.forEach(all_courses, function(course, index) {
       angular.forEach(frm.selectedcourse, function (subject, key) {
         if (course.id == key && subject != '') {
           course_chosen.push(course);
         }
       });
     });
     frm.updatedCourses = course_chosen;
     loginHttpService.upgradePackage(frm).success(function(response){
       if (response.status) {
         $location.url('/parent/dashboard/110');
       }
     });
    }
    if (typeof $routeParams.child_id != 'undefined') {
      loginHttpService.getUserPurchaseDetails($routeParams.child_id).success(function(result) {
        if (result.status == true) {
          $scope.child_info = result.response;
          $scope.level = {id : result.response.level_id};
          loginHttpService.getCourseByGrade($scope.level).success(function(courseslistresult) {
          if(!courseslistresult.response.courses){  // value is null, empty
            $scope.msg=courseslistresult.response.message;
            $scope.records=courseslistresult.response.course_list;
            } else {
              var purchased_detail = $scope.child_info.purchase_detail;
              all_courses = courseslistresult.response.courses;
              angular.forEach(all_courses, function(course, index) {
              angular.forEach(purchased_detail, function(purchased, key) {
                 if (course.id == purchased.course_id) {
                   course.purchased = true;
                 }
               });
              });
              $scope.coursesListByGrade = all_courses;
              $scope.msg=courseslistresult.response.message;
              $scope.courserecords=courseslistresult.response.course_list;
            }
          });
        }
      });
      // call API to get packages
      loginHttpService.packageList().success(function(packrecords) {
          $scope.packages = packrecords.response.package;
      });

      // call API to get plans
      loginHttpService.planList().success(function(planrecord) {
  		$scope.plans = planrecord.response.plans;
      });
    }

  $scope.setPreference = function(data) {
    /*if (typeof $rootScope.logged_user == 'undefined') {
      alert('kindly login');
      window.location.href='/mlg_ui/app';
    }*/
   // data.user_id = $rootScope.logged_user.id;
   data.user_id = get_uid;
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
.controller('parentSubscriptionCtrl',['$rootScope','$scope','loginHttpService','$location','user_roles','$routeParams','commonActions',function($rootScope,$scope, loginHttpService, $location, user_roles, $routeParams,commonActions) {
  $scope.frm = {}
  $scope.childname={};

  console.log($routeParams.id);

  //alert(commonActions.getcookies(get_uid));
  var get_uid=commonActions.getcookies(get_uid);

	// To call dynamic step slider
	// and Call API to get child details for deshboard naming
    loginHttpService.getChildrenDetails(get_uid).success(function(chidrenName) {
			var childcount=chidrenName.response.length;
			console.log(chidrenName);
			if(childcount>0){																
					$scope.childname=chidrenName.response;
                    $scope.frm.childnames = chidrenName.response;
                    
                    for(var i in $scope.frm.childnames){

    			if($scope.frm.childnames[i].user_id==$routeParams.child_id){
    				$scope.frm.selectedchild=$scope.frm.childnames[i];
    				return false;
    			}else{

    			}
    	}
    	//window.location.href='parent/dashboard/'+$scope.frm.childnames[0].user_id;
			}else{
				$scope.childname=0;
                $scope.frm.childnames =[];
			}			
		});

    	


	// end to call dynamic step slider


 //Child Purchase history.
    $scope.child_info={}
    $scope.days_left = '';
    $scope.packages = {}
    $scope.plans = {}
    $scope.level_id = '';
    $scope.price = 0;
    $scope.dis_val = 0;
    $scope.dis_amount = 0;
    $scope.pageNumber = 0;
    $scope.new_package_name = 'NaN';
    $scope.errMsg = '';
    var all_courses = '';
    $scope.getTotalPrice = function(subject) {
      loginHttpService.pricecalc(subject).success(function(courseprice) {
        $scope.price = courseprice.response.amount;
        $scope.dis_amount = $scope.price * $scope.dis_val * 0.01;
        $scope.subtotal = $scope.price - $scope.dis_amount;
	  });
    }
    $scope.discount = function(package) {
     $scope.frm.updatedPackage = package;
     $scope.dis_val = package.discount;
     $scope.new_package_name = package.name;
     $scope.dis_amount = $scope.price * $scope.dis_val * 0.01;
     $scope.subtotal = $scope.price-$scope.dis_amount;
    }

    $scope.updatedPlan = function(plan) {
      $scope.frm.updatedPlan = plan;
    }

    $scope.upgrade = function(frm) {
     if (typeof frm.new_package == 'undefined') {
       $scope.errMsg = 'Please choose Package';
       return false;
     }
     if (typeof frm.new_plan == 'undefined' || frm.new_plan == '') {
       $scope.errMsg = 'Please choose Plan';
       return false;
     }
     if (typeof frm.selectedcourse == 'undefined' || selected_subjects == '') {
       $scope.errMsg = 'Please choose Course';
       return false;
     }
     var num_of_subjects_opted = frm.new_package;
     var selected_subjects = 0;
     angular.forEach(frm.selectedcourse, function(sub, sub_key){
       if (sub != '') {
         selected_subjects++;
       }
     });
     var all_subjects = false;
     angular.forEach($scope.packages , function(package_val , key) {
       if (package_val.no_of_subjects == num_of_subjects_opted) {
         if (package_val.name.toUpperCase() == "ALL SUBJECTS") {
           selected_subjects = package_val.no_of_subjects;
           all_subjects = true;
         }
       }
     });
     if (num_of_subjects_opted != selected_subjects) {
       $scope.errMsg = 'Please choose the subjects equal to the subject packages';
       return false;
     }
     frm.user_id = get_uid;
     frm.child_id = $routeParams.child_id;
     var course_chosen = [];
     if (all_subjects == false) {
      angular.forEach(all_courses, function(course, index) {
        angular.forEach(frm.selectedcourse, function (subject, key) {
          if (course.id == key && subject != '') {
            course_chosen.push(course);
          }
        });
      });
     } else {
       course_chosen = all_courses;
     }
     frm.updatedCourses = course_chosen;
     loginHttpService.upgradePackage(frm).success(function(response){
       if (response.status) {
         $location.url('/parent/dashboard/110');
       }
     });
    }
    if (typeof $routeParams.child_id != 'undefined') {
      loginHttpService.getUserPurchaseDetails($routeParams.child_id).success(function(result) {
        if (result.status == true) {
          $scope.child_info = result.response;
          $scope.child_info.end_date = moment($scope.child_info.order_date).add(60, 'days').calendar();
          var end_date = moment($scope.child_info.end_date).format("YYYY-MM-DD");
          $scope.days_left = moment(end_date).diff(moment(), 'days');
          $scope.level = {id : result.response.level_id};
          loginHttpService.getCourseByGrade($scope.level).success(function(courseslistresult) {
          if(!courseslistresult.response.courses){  // value is null, empty
            $scope.msg=courseslistresult.response.message;
            $scope.records=courseslistresult.response.course_list;
            } else {
              var purchased_detail = $scope.child_info.purchase_detail;
              all_courses = courseslistresult.response.courses;
              angular.forEach(all_courses, function(course, index) {
              angular.forEach(purchased_detail, function(purchased, key) {
                 if (course.id == purchased.course_id) {
                   course.purchased = true;
                 }
               });
              });
              $scope.coursesListByGrade = all_courses;
              $scope.msg=courseslistresult.response.message;
              $scope.courserecords=courseslistresult.response.course_list;
            }
          });
        }
      });
      // call API to get packages
      loginHttpService.packageList().success(function(packrecords) {
          $scope.packages = packrecords.response.package;
      });

      // call API to get plans
      loginHttpService.planList().success(function(planrecord) {
  		$scope.plans = planrecord.response.plans;
      });
    }

  /*$scope.setPreference = function(data) {
    /*if (typeof $rootScope.logged_user == 'undefined') {
      alert('kindly login');
      window.location.href='/mlg_ui/app';
    }
   // data.user_id = $rootScope.logged_user.id;
   data.user_id = get_uid;
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
  };*/
}])
.controller('emailConfirmationCtrl',['$rootScope','$scope','loginHttpService','$location','user_roles','$routeParams','commonActions',function($rootScope,$scope, loginHttpService, $location, user_roles, $routeParams,commonActions) {
if (typeof $routeParams.id != 'undefined') {
    loginHttpService.setStatusActive($routeParams).success(function(response) {
      if (response.status == false) {
        alert('Some error occured, kindly refresh the page');
      }
    }).error(function() {
      alert('Unable to activate account, contact to the administrator');
    });
  }
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
		var childcount=chidrenName.response.length;
		//console.log(chidrenName);
		if(childcount>0){
			$rootScope.childname = chidrenName.response;
		}
		else{
		$rootScope.childname =null;
		}
	});

	loginHttpService.getAddedChildren(get_uid).success(function(response) {
		$scope.remainchildAccount=$rootScope.childrencount-response.response.added_children;
	});



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

    	// validate on select of course with choosing pacakage
    	$scope.onSelectCourse = function(cdata){
    		if (!$("input[name='package']").is(':checked')) {
   				alert('Select package first before choosing courses');
   				$scope.frm.selectedcourse = [];
			}
				
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
				//console.log(data.discount);	
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


 //console.log(childdata); 
       //how many childeren has been added n
       	loginHttpService.getAddedChildren(get_uid).success(function(response) {
			if (typeof response.response.added_children !='undefined') {
					var added_children =response.response.added_children;					
					
					if( (added_children==$rootScope.childrencount) && (added_children>0 ) ){       				       		       		
		     			window.location.href=urlParams.siteRoot+'parent_preferences'; 
       				}
       			}
       		});
       	


       	// promo code implementation
       $scope.pcode={};
       //$scope.pcode.discount=0;
        $scope.submitpromocode = function(dataprm){        	
       		if(typeof dataprm=='undefined'){
       			$scope.prequire="Add promocode if you have";
      		}else{

		    	loginHttpService.promocode(dataprm.promocode).success(function(promoresponse) {
		    		if (promoresponse.response.status == "True") {
		    			$scope.pcode= {
		    				pcode_id:promoresponse.response.promocode[0].id,
		    				discount:promoresponse.response.promocode[0].discount,
		    				discount_type:promoresponse.response.promocode[0].discount_type,	    			
		    			}	    			
		    		}
		    		else{
		    			$scope.prequire=promoresponse.response.message;
		    		}
     			 	
      			 }); 
   			}

    	}





/* *************************************************************************** */
    $scope.submitChildDetails = function(data){  
    		console.log(data);
    
    //data.selectedcourses = JSON.parse(JSON.stringify(data.selectedcourse));
      data.selectedcourses = Object.assign({}, data.selectedcourse);
      $scope.today = $filter('date')(new Date(), 'yyyy-mm-dd HH:mm:ss');

      	var childdata={};
      	 childdata={
       			username 	: data.user_name,
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
       			vcode		: data.vcode,

       	}; 


       //console.log(childdata); 
       //how many childeren has been added n
       	loginHttpService.getAddedChildren(get_uid).success(function(response) {       			
			if (typeof response.response.added_children !='undefined') {
					var added_children =	response.response.added_children;					
					
					if(added_children!=$rootScope.childrencount){       				       		       		
		       		//call API to check the number of child has been added
		       		loginHttpService.addChildRecord(childdata).success(function(response_childadd) {
		       				console.log(response_childadd);
						if (response_childadd.response.status == "True") {
								console.log(response_childadd);									
								//window.location.href=urlParams.siteRoot+'add_child_account';
								window.location.reload();
						}else{
							$scope.message=response_childadd.response.message;
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
.controller('termsAndConditionsCtrl',['$scope', 'loginHttpService','commonActions','$location','$timeout', function($scope, loginHttpService,commonActions,$location,$timeout) {
//    $scope.pagehtml = '';
//    loginHttpService.getPaymentBrief(data).success(function(response) {
//      $scope.pagehtml = response.data;
//    });

	// To call dynamic step slider
	var get_uid=commonActions.getcookies(get_uid);
	loginHttpService.getChildrenDetails(get_uid).success(function(chidrenName) {
			var childcount=chidrenName.response.length;
			console.log(chidrenName);
			if(childcount>0){
				//$rootScope.childname 	= chidrenName.response;													
					$scope.childname=chidrenName.response;
			}else{
				$scope.childname=0;;
			}
			
		});
	// end to call dynamic step slider


    $scope.termsAndConditions = function () {
      $location.url('/payment_page');
    }

}])
.controller('paymentPageCtrl',['$scope', '$rootScope','loginHttpService','commonActions','$location','card_months', 'card_years',
  function($scope, $rootScope, loginHttpService,commonActions,$location, card_months, card_years) {
    $scope.children = {};
    $scope.total_amount = 0;
    console.log($rootScope.logged_user);

	// To call dynamic step slider
		var get_uid=commonActions.getcookies(get_uid);
		loginHttpService.getChildrenDetails(get_uid).success(function(chidrenName) {
				var childcount=chidrenName.response.length;
				console.log(chidrenName);
				if(childcount>0){
					//$rootScope.childname 	= chidrenName.response;													
						$scope.childname=chidrenName.response;
				}else{
					$scope.childname=0;;
				}
				
			});
		// end to call dynamic step slider    
    //if (typeof $rootScope.logged_user != 'undefined') {
     // data = {user_id : $rootScope.logged_user.id};
     data = {user_id : get_uid};
      loginHttpService.getPaymentBrief(data).success(function(response) {
        if (response.status) {
          $scope.children = response.data;
          $scope.total_amount = response.total_amount;
        }
      });
    //}
   
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
          $location.url('/parent/dashboard/110');
        } else {
          $scope.msg = response.message;
        }
      });
    };

}])


/* *************************************************************** */
.controller('parentOffers',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles) {
//$scope.abc=function(){}
	loginHttpService.offerRecords().success(function(response) {
       $scope.offers = response.response;
	   //$scope.img_root=siteRoot+'/views/offerimg';
      });
	  
}])
.controller('teacherLoginCtrl',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles) {
     $scope.msg = '';
     $scope.gohome=function(){
		window.location.href='/mlg_ui/app';
  	}

//}]);


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
.controller('parentRedeemCtrl',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles) {

}])
.controller('parentSettingCtrl',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles) {
//alert('kkkkk');
}])
.controller('guestCtrl',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http) {

    function setCookie(key, value) {
      var expires = new Date();
      expires.setTime(expires.getTime() + (15 * 60 * 1000));
      document.cookie = key + '=' + value + ';expires=' + expires.toUTCString()+';path=/';
    }
    // call API to get grades
    loginHttpService.gradeList().success(function(response) {
  		  $scope.grades = response.response.Grades;  
  	});
    $scope.form = {};
    $scope.form.email = '';
    $scope.guestlogin = function(data) {
      var email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (data.email != '') {
        if (!email_pattern.test(data.email)) {
          $scope.msg = 'Please enter valid email';
          return false;
        }
      }
      if (data.email == '') {
        $scope.msg = 'Please enter email';
        return false;
      }
      $http.get("http://ipinfo.io").success(function(response){
        data.user_ip = response.ip;
        loginHttpService.guestLogin(data).success(function(response) {
  		 if (response.status == '-1') {
           alert('you have already taken your trial');
           return false;
         } else if (response.status == '1') {
           alert('Your Trial session will be for 15 mins only');
           setCookie('userObj', '"userName='+response.user+',email='+ ' ' +',role='+ 'student'+'"');
           setCookie('uid', 0);
           setCookie('grade_id', data.levelchoice.id);
           window.location.href='/mlg_ui/sapp/journey';
           return true;
         } else if (response.status == 0) {
           if (response.message == '') {
             alert('some error occured, kindly ask to administrator');
           } else {
             alert(response.message);
           }
         }
        });
      }).error(function(err) {
        alert('some error occured , Please check your internet connection');
      });
    };
}])
.controller('parentPreferenceCtrl',['$rootScope','$scope','$filter','loginHttpService','commonActions','$location','urlParams','$http','user_roles',function($rootScope,$scope,$filter, loginHttpService,commonActions,$location,urlParams,$http,user_roles) {

var get_uid=commonActions.getcookies(get_uid);
// To call dynamic step slider
	// and Call API to get child details for deshboard naming
    loginHttpService.getChildrenDetails(get_uid).success(function(chidrenName) {
			var childcount=chidrenName.response.length;
			console.log(chidrenName);
			if(childcount>0){																
					$scope.childname=chidrenName.response;
                    $scope.frm.childnames = chidrenName.response;
                    
			}else{
				$scope.childname=0;
                $scope.frm.childnames =[];
			}			
		});





$scope.setPreference = function(data) {
   data.user_id = get_uid;
    loginHttpService.setPreference(data).success(function(response) {
      if (response.status == true) {
//        if ((typeof response.warning != 'undefined') && (response.warning == true)) {
//          alert(response.message);
//        }
        $location.url('/terms_and_conditions');
      } else {
        $scope.msg = response.message;
      }
    }).error(function(error) {
      $scope.msg = 'some error occured';
    });
  };
}]);