
angular.module('mlg').filter('moment', function() {
    return function(dateString, format) {
        return moment(dateString).format(format);
    };
}).filter('daysLeft', function() {
    return function(timestamp) {
      var validity = moment.unix(timestamp).format("YYYY-MM-DD");
      return moment(validity).diff(moment(), 'days');
    };
})
.factory('loginHttpService',['$http','urlParams',function($http,urlParams){
	
	var loginHttpResponse={};	
	
	loginHttpResponse.contactus=function(data){
		return $http({
			method:'POST',
			data  : data,
			url   : urlParams.baseURL+urlParams.contactus
		});
	}

	loginHttpResponse.getStaticContent=function(data){
		return $http({
			method:'POST',
			data  : data,
			url   : urlParams.baseURL+urlParams.getStaticContent
		});
	}

	loginHttpResponse.getUserDetails=function(uid){
		return $http({
			method:'GET',
			url   : urlParams.baseURL+urlParams.getUserDetails + '/' + uid
		});
	}

	loginHttpResponse.getUserPreferences = function(uid){
		return $http({
			method:'GET',
			url   : urlParams.baseURL+urlParams.getUserPreferences + '/' + uid
		});
	}

    loginHttpResponse.setUserPassword = function(uid, data){
		return $http({
			method:'POST',
			data  : data,
			url   : urlParams.baseURL+urlParams.setUserPassword + '/' + uid
		});
	}

    loginHttpResponse.updateMyAccount = function(data){
		return $http({
			method:'POST',
			data  : data,
			url   : urlParams.baseURL+urlParams.updateMyAccount
		});
	}
	
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

	loginHttpResponse.logout=function(data){
		return $http({
			method:'POST',
            data : data,
			url   : urlParams.baseURL+urlParams.logout
		});
	}

	loginHttpResponse.setUserStatus=function(data){
		return $http({
			method:'POST',
            data  : data,
			url   : urlParams.baseURL+urlParams.setUserStatus
		});
	}

	loginHttpResponse.getPaymentBrief=function(data, child_id) {
        var url = urlParams.baseURL+urlParams.getPaymentBrief;
        if (typeof child_id != 'undefined' && child_id != null) {
          url = urlParams.baseURL+urlParams.getPaymentBrief + '/' + child_id;
        }
		return $http({
			method:'POST',
            data  : data,
			url   : url
		});
	};

	loginHttpResponse.gradeList=function(){
		return $http({
			method:'GET',			
			url   : urlParams.baseURL+urlParams.gradeList
		});
	};

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
	loginHttpResponse.offerRecords=function(data){
      return $http({
          method:'POST',
          data : data,
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

	loginHttpResponse.setStepNum=function(uid,step_num){
		return $http({
			method:'GET',
			url   : urlParams.baseURL+urlParams.setStepNum+'?user_id='+uid+'&step_num='+step_num
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

    loginHttpResponse.getUserSetting = function(data) {
		return $http({
			method:'POST',
			data  : data,
			url   : urlParams.baseURL+urlParams.getUserSetting
		});
	}

    loginHttpResponse.setUserSetting = function(data) {
		return $http({
			method:'POST',
			data  : data,
			url   : urlParams.baseURL+urlParams.setUserSetting
		});
	}

    loginHttpResponse.getCouponByUserType = function(data) {
		return $http({
			method:'POST',
			data  : data,
			url   : urlParams.baseURL+urlParams.getCouponByUserType
		});
	}

    loginHttpResponse.updateProfilePic = function(data) {
		return $http({
          withCredentials: true,
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined },
          method:'POST',
			data  : data,
			url   : urlParams.baseURL+urlParams.updateProfilePic
		});
	};

	loginHttpResponse.getTeacherGrades=function(tid,type){
        return $http({
          method:'GET',			
          url  : urlParams.baseURL+urlParams.getTeacherGrades+'/'+tid+'/'+type
        });
      }

    loginHttpResponse.deactivateChildrenAccount = function(data) {
        return $http({
            method:'POST',
            data  : data,
            url   : urlParams.baseURL+urlParams.deactivateChildrenAccount
        });
	}

    loginHttpResponse.getUserOrders = function(data) {
        return $http({
            method:'POST',
            data  : data,
            url   : urlParams.baseURL+urlParams.getUserOrders
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
        
        //Need to be correct with upper value
		commonActions.getCookieValues = function(cookie_name){
          var result = getCookie(cookie_name);
          return result;
		}

        commonActions.parseUser = function(cookie){
          var keyVals=cookie.split(',');
          var obj={};
          angular.forEach(keyVals,function(value,key){
              var vals=value.split('=');
              obj[vals[0]]=vals[1];
          });
          return obj;
        }

		
		// To find number of children
		commonActions.chidrenNameFactory = function (get_uid) {
			
				var childname= loginHttpService.getChildrenDetails(get_uid).success(function(chidrenName) {
                  var childcount=chidrenName.response.length;
                    if(childcount>0){
                      //$rootScope.childname 	= chidrenName.response;													
                      return  chidrenName.response;
                    }
				});

				return childname;
		}

		return commonActions;
	}])

.controller('loginCtrl',['$rootScope','$scope','loginHttpService','urlParams','$location','user_roles', 'subscription_days',function($rootScope,$scope,
   loginHttpService,urlParams,$location,user_roles,subscription_days) {
    $scope.form={};	
    $scope.msg='';
    $scope.baseURL= urlParams.baseURL;
    $scope.baseStudentURL= urlParams.studentsiteRoot;

    $scope.range = function(n) {
        return new Array(n);
    }; 

    $scope.teacher_signup_page=function(){
    	$("#modalFreeTrail").modal('hide');
		$(".modal-backdrop").remove();		
    	$location.url('teacher/signup');
    }

     $scope.parent_signup_page=function(){
     	$("#modalFreeTrail").modal('hide');
		$(".modal-backdrop").remove();
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
	   loginHttpService.login(data).success(function(response) {
           var role_id = response.role_id;
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
         if (response.status=='false') {
           if ((response.warning == 1) && (response.role_id == user_roles['student'])) {
             setCookie('userObj', '"userName='+response.user.first_name+',email='+response.user.email+',userStatus='+response.user.status+',role='+role_name+',extra='+'extra'+'"');
             $rootScope.logged_user = response.user;
             setCookie('uid', $rootScope.logged_user.id);
             window.location.href='/mlg_ui/sapp/journey';
           }
           $scope.msg = response.message;
         } else {
           $rootScope.logged_user = response.user;
           setCookie('uid', $rootScope.logged_user.id);
           setCookie('userObj', '"userName='+response.user.first_name+',email='+response.user.email+',userStatus='+response.user.status+',role='+role_name+',extra='+'extra'+'"');
           if (role_id == '2') {
             if ((response.no_of_child == 0) && !(response.first_time_login)) {
               alert('Please add child and subscribe');
             }
            if (response.warning == 1) {
              var children_name = [];
              var child_info = response.child_info;
              var user_id = child_info['0'].user_id;
              angular.forEach(child_info, function(child, key){
                children_name.push(child.children_name);
              });
              alert("Your following child has ended with their subcription.\n" + children_name.join("\n"));
              $location.url('parent/dashboard/subscription/' + user_id);
              return true;
            }
          }
          
            // To Redirect User on his account last step page.
             // call API to get last step track for Parent            
             if (role_id == '2') {            
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

    	// call API to get last step track for Teacher
    	if (role_id == '3') {    		
			loginHttpService.getStepNum(response.user.id).success(function(stepNum) {    			
				if(stepNum.response.step.step_completed!=null ){    				
					//var step_page = stepNum.response.step.step_completed; 
					if(stepNum.response.step.step_completed==0 ){ 
						$location.url('teacher/create_account'); 
         			}
					else if(stepNum.response.step.step_completed==1){
						 $location.url('teacher/select_courses');
					}
					else if(stepNum.response.step.step_completed==2){
							 $location.url('teacher/payment_page');
						}
						else if(stepNum.response.step.step_completed==3){

							loginHttpService.getTeacherGrades(response.user.id,user_roles['teacher']).success(function(response) {
                                    if (response.status == true) {
                                        $scope.subject_grade = response.response;
                                        $scope.level = response.grade;
                                        $scope.subject = (response.subject.course_name).split(',');
                                        var grade = response.urlData.level_id;
                                        var subjectName = response.urlData.course_name;
                                        var subjectCode = response.urlData.course_id;
                                        $location.url('teacher/dashboard/class/'+grade+'/'+subjectName+'/'+subjectCode);
                                    }else{
                                        $location.url('teacher/dashboard/class/'+grade+'/'+subjectName+'/'+subjectCode);
                                    }
                                });


							//$location.url('teacher/dashboard');
						}								
							
				   	}
				});

    	}

    	// Track for Students
    	if (role_id == '4') {
    		
    		loginHttpService.getStepNum(response.user.id).success(function(stepNum) {         
        		if(stepNum.response.step.step_completed!=null ){            
          			//var step_page = stepNum.response.step.step_completed; 
          			if(stepNum.response.step.step_completed==0 ){             				 
            				window.location.href=$scope.baseStudentURL+'avtar1';
             		 }
          			else if(stepNum.response.step.step_completed==1){            			 
            			 window.location.href=$scope.baseStudentURL+'journey';
          			}
          			else{

          				window.location.href=$scope.baseStudentURL+'journey';
          			}                  
              
       			 }
        	});
          }



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
            data.subscription_days = subscription_days[user_type];
            data.source_url = $location.protocol()+'://'+$location.host() + '/mlg_ui/app/';
			loginHttpService.register(data).success(function(response) {
				if(!response.data.response){
					$scope.msg=response.message;
				}else{
					$("#emailConfirmation").modal();					
				}
			
					//alert('registered succefully');
			}).error(function(error) {
				alert('Some Error occured, registration fail');
			});
	};


	// For subscription 


	//$scope.cfrm={};
	$scope.submitContactUs = function(cfrmdata){			
		loginHttpService.contactus(cfrmdata).success(function(response) {				
				console.log(response);
				if(response.data.status = "True"){
						$scope.msg=response.data.message;
						$scope.cfrm={};
				}else{
					$scope.msg=response.data.message;	
				}					
			});
	};
}])
.controller('parentDashboardCtrl',['$rootScope','$scope','loginHttpService','$location','user_roles','$routeParams','commonActions',function($rootScope,$scope, loginHttpService, $location, user_roles, $routeParams,commonActions) {
  $scope.frm = {}
  $scope.childname={};

  //alert(commonActions.getcookies(get_uid));
  var get_uid=commonActions.getcookies(get_uid);

	// To call dynamic step slider
	// and Call API to get child details for deshboard naming
    loginHttpService.getChildrenDetails(get_uid).success(function(chidrenName) {
			var childcount=chidrenName.response.length;
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
.controller('parentSubscriptionCtrl',['$rootScope','$scope','loginHttpService','$location','user_roles','$routeParams','commonActions','urlParams','subscription_days',function($rootScope,$scope, loginHttpService, $location, user_roles, $routeParams,commonActions,urlParams,subscription_days) {
  $scope.frm = {}
  $scope.site_root = urlParams.siteRoot;
  $scope.childname={};
  var get_uid=commonActions.getcookies(get_uid);

	// To call dynamic step slider
	// and Call API to get child details for deshboard naming
    loginHttpService.getChildrenDetails(get_uid).success(function(chidrenName) {
			var childcount=chidrenName.response.length;
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

    	
      //available subjects will be automatically selected, when clicked to all subjects.
        $(document.body).on('click','.all_subjects', function() {
          $('.available_subjects').each(function() {
            if ($(this).prop('checked') !== true) {
              $(this).click();
            }
         });
        });

	// end to call dynamic step slider


 //Child Purchase history.
    $scope.child_info={}
    $scope.days_left = '';
    $scope.packages = {};
    $scope.plans = {};
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
    };
    $scope.discount = function(package) {
     $scope.frm.updatedPackage = package;
     $scope.dis_val = package.discount;
     $scope.new_package_name = package.name;
     $scope.dis_amount = $scope.price * $scope.dis_val * 0.01;
     $scope.subtotal = $scope.price-$scope.dis_amount;
    };

    $scope.updatedPlan = function(plan) {
      $scope.frm.updatedPlan = plan;
    };

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
     var previously_purchased_subjects_count = $scope.child_info.purchase_detail.length;
     var selected_subjects = 0;
     angular.forEach(frm.selectedcourse, function(sub_value, sub_key){
       if (sub_value !== '') {
         selected_subjects++;
       }
     });
     angular.forEach($scope.packages , function(package_val , key) {
       if ((package_val.name.toUpperCase() == "ALL SUBJECTS") && package_val.no_of_subjects == num_of_subjects_opted) {
         if (selected_subjects + previously_purchased_subjects_count == package_val.no_of_subjects) {
           selected_subjects = selected_subjects + previously_purchased_subjects_count;
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
     angular.forEach(all_courses, function(course, index) {
       angular.forEach(frm.selectedcourse, function (subject, key) {
         if (course.id == key && subject != '') {
           course_chosen.push(course);
         }
       });
     });
     frm.updatedCourses = course_chosen;
     loginHttpService.upgradePackage(frm).success(function(response){
       if (response.response.status == true) {
         $location.url('/payment_page/' + $routeParams.child_id);
       }
     });
    };
    if (typeof $routeParams.child_id != 'undefined') {
      $scope.subscription_type = 'NaN';
      loginHttpService.getUserPurchaseDetails($routeParams.child_id).success(function(result) {
        if (result.status == true) {
          $scope.child_info = result.response;
          $scope.student_subscription_days = subscription_days['student'];
          $scope.child_info.end_date = moment($scope.child_info.order_date).add(subscription_days['student'], 'days').calendar();
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
          loginHttpService.getUserOrders({child_id : $routeParams.child_id, last_order : true}).success(
            function (order) {
              if (order.status == true) {
                if (order.data[0].trial_period == 1) {
                  $scope.subscription_type = 'TRIAL';
                } else {
                  $scope.subscription_type = $scope.child_info.plan_duration.toUpperCase();
                }
              }
            }
          );
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
}])
.controller('emailConfirmationCtrl',['$rootScope','$scope','loginHttpService','$location','user_roles','$routeParams','commonActions',function($rootScope,$scope, loginHttpService, $location, user_roles, $routeParams,commonActions) {
if (typeof $routeParams.id != 'undefined') {
    loginHttpService.setUserStatus($routeParams).success(function(response) {
      if (response.status == true) {
        $('.confirmed').removeClass('hidden');
      } else {
        $('.rejected').removeClass('hidden');
        alert('Some error occured, kindly refresh the page');
      }
    }).error(function() {
      $('.rejected').removeClass('hidden');
      alert('Unable to activate account, contact to the administrator');
    });
  }
}]).controller('staticCtrl',['$rootScope','$scope','loginHttpService','$location','$routeParams',function($rootScope,$scope, loginHttpService, $location,  $routeParams) {
if (typeof $routeParams.slug != 'undefined') {
	var data={title:$routeParams.slug}
    loginHttpService.getStaticContent(data).success(function(response) {
      $scope.html_value=response.content.description;
    }).error(function() {
     // alert('Unable to activate account, contact to the administrator');
    });
  }
}])
/* ****************************** */
.controller('addChild',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles','subscription_days',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles,subscription_days) {
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

	}

    //how many childeren has been added
      loginHttpService.getAddedChildren(get_uid).success(function(response) {
        if (typeof response.response.added_children !='undefined') {
          var added_children =response.response.added_children;					

          if ((added_children==$rootScope.childrencount) && (added_children>0 ) ){       				       		       		
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
                subscription_days : subscription_days['student'],
       	}; 

 
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
.controller('paymentPageCtrl',['$scope', '$rootScope','loginHttpService','commonActions','$location','card_months', 'card_years','$routeParams', 'urlParams',
  function($scope, $rootScope, loginHttpService,commonActions,$location, card_months, card_years, $routeParams, urlParams) {
    $scope.children = {};
    $scope.total_amount = 0;

	// To call dynamic step slider
		var get_uid=commonActions.getcookies(get_uid);
		loginHttpService.getChildrenDetails(get_uid).success(function(chidrenName) {
				var childcount=chidrenName.response.length;
				if(childcount>0){
					//$rootScope.childname 	= chidrenName.response;													
						$scope.childname=chidrenName.response;
				}else{
					$scope.childname=0;;
				}
				
			});
		// end to call dynamic step slider    
     var data = {user_id : get_uid};
     var child_id = (typeof $routeParams.child_id != 'undefined' && $routeParams.child_id != '') ? $routeParams.child_id : '';
      loginHttpService.getPaymentBrief(data,child_id).success(function(response) {
        if (response.status) {
          $scope.children = response.data;
          $scope.total_amount = response.total_amount;
        }
      });

    $scope.frm = {};
    $scope.frm.line1 = '';
    $scope.frm.line2 = '';
    $scope.frm.city = '';
    $scope.frm.state = '';
    $scope.frm.postal_code = '';
    $scope.frm.country_code = '';
    $scope.frm.phone = '';
    $scope.frm.name = '';
    $scope.frm.card_number = '';
    $scope.frm.expiry_year = '';
    $scope.frm.cvv = '';
    $scope.card_months = card_months;
    $scope.card_years = card_years;
    $scope.frm.expiry_month = card_months['1'];
    $scope.submitCardDetail = function(data) {
      var err_msg = validate_submission(data);
      if (err_msg !== null) {
        $scope.msg = err_msg;
        return false;
      }
      data.user_id = get_uid;
      var children_ids = [];
      angular.forEach($scope.children, function(value, key) {
        children_ids.push(value.child_id);
      });
      if (children_ids.length <= 0) {
        alert('please add atleast one child');
        return false;
      }
      data.children_ids = children_ids;
      data.amount = $scope.total_amount;
      loginHttpService.saveCardToPaypal(data).success(function(response) {
        if (response.status === true) {
          $location.url('/parent/dashboard/110');
        } else {
          if (response.message != null) {
            $scope.msg = response.message;
          } else {
            $scope.msg = 'Some Error occured, Kindly contact to administrator';
          }
        }
      }).error(function() {
        $scope.msg = 'Some Error occured, Kindly contact to administrator';
      });
    };

    function validate_submission(data) {
      if (typeof get_uid === 'undefined' || get_uid === null) {
        alert('Kindly login');
        window.location.href='/mlg_ui/app/signin';
        return false;
      }
      if (data.line1 === '') {
        return 'Please enter Address line 1';
      }
      if (data.line2 === '') {
        return 'Please enter Address line 2';
      }
      if (data.city === '') {
        return 'Please enter city';
      }
      if (data.state === '') {
        return 'Please enter state';
      }
      if (data.postal_code === '') {
        return 'Please enter postal code';
      }
      if (data.country_code === '') {
        return 'Please enter country code';
      }
      if (data.phone === '') {
        return 'Please enter phone number';
      }
      if (data.name === '') {
        return 'Please enter your name';
      }
      if (data.card_number === '') {
        return 'Please enter your card number';
      }
      if (data.expiry_year === '') {
        return 'Please enter your expiry year';
      }
      if (data.cvv === '') {
        return 'Please enter your cvv';
      }

      return null;
    }

    var step_num =1;
	$scope.onSkipClick=function(){		
			loginHttpService.setStepNum(get_uid,step_num).success(function(resp) { 
            if (resp.response.status == "True") {                 
                  $location.url('journey');
            }else{
                $location.url('journey');
          } 
    });

	};


}])

/* *************************************************************** */
.controller('parentOffers',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles','commonActions',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles,commonActions) {
  var get_uid = commonActions.getcookies(get_uid);
  $scope.offers = {};
  loginHttpService.offerRecords({user_type : 'PARENT', user_id: get_uid})
    .success(
    function(response) {
      if (response.status) {
        $scope.offers = response.result;
      }
    }
  );

  $scope.requestOffer = function (offer) {
    if (offer.coupon_code != '' && offer.external_coupon == 0) {
      var data = {user_id: get_uid, coupon_id: offer.id, status: 'acquired', updated_by_user_id: get_uid};
      loginHttpService.setAvailableCoupon(data).success(function (response) {
        if (response.status) {
          var html = '<center><span style ="border: 2px solid #1688eb; border-radius: 5px;" class="btn">'+ offer.coupon_code +'</span></center>';
          $('#showOffer' + offer.id).before(html);
          $('#showOffer' + offer.id).remove();
        } else {
          if (response.message != '') {
            alert(response.message);
          } else {
            alert('Some Error Occured');
          }
        }
      }).error(function(err) {
        alert('Some Error Occured');
      });
    } else {
      var data = {user_id: get_uid, coupon_id: offer.id, status: 'Mlg approval pending', updated_by_user_id: get_uid};
      loginHttpService.setAvailableCoupon(data).success(function (response) {
        if (response.status) {
          var html = '<center><span style ="border: 2px solid #1688eb; border-radius: 5px;" class="btn">'+ 'Mlg approval pending' + '</span></center>';    
          $('#showOffer' + offer.id).before(html);
          $('#showOffer' + offer.id).remove();
        } else {
          if (response.message != '') {
            alert(response.message);
          } else {
            alert('Some Error Occured');
          }
        }
      })
    }
  }
}])
.controller('teacherSingnupCtrl',['$rootScope','$scope','$filter','loginHttpService','$location','urlParams','$http','user_roles','subscription_days',function($rootScope,$scope,$filter, loginHttpService,$location,urlParams,$http,user_roles,subscription_days) {
     $scope.msg = '';
     $scope.gohome=function() {
		window.location.href='/mlg_ui/app';
  	};
    $scope.userObj ={};
    $scope.userObj.first_name = '';
    $scope.userObj.last_name = '';
    $scope.userObj.email = '';
    $scope.userObj.username = '';
    $scope.userObj.password = '';
    $scope.userObj.repass = '';
    $scope.userObj.selected_faculty = '';
    $scope.faculty_roles = {teacher : 'Teacher','guest_teacher' : 'Guest Teacher','principal': 'Principal'};
	 $scope.register = function(data,user_type) {
            if (data.first_name == '') {
              $scope.msg = 'Kindly enter First name';
              return false;
            }
            if (data.last_name == '') {
              $scope.msg = 'Kindly enter Last name';
              return false;
            }
            if (data.email == '') {
              $scope.msg = 'Kindly enter Email';
              return false;
            }
            if (data.username == '') {
              $scope.msg = 'Kindly select Username';
              return false;
            }
            if (data.password == '') {
              $scope.msg = 'Kindly enter Password';
              return false;
            }
            if (data.repass == '') {
              $scope.msg = 'Kindly enter Re-password';
              return false;
            }
            if (data.repass != data.password) {
              $scope.msg = 'Password and Re-password did not match';
              return false;
            }
            if  (data.selected_faculty == '') {
              $scope.msg = 'Kindly select role';
              return false;
            }
	 		var role_id=user_roles[data.selected_faculty];
	 		if(typeof data=='undefined'){
	 			data={};
	 		}
	 		data.role_id=role_id;
            data.subscription_days = subscription_days[user_type];
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
.controller('parentRedeemCtrl',['$rootScope','$scope','$filter','$routeParams','commonActions','loginHttpService','$location','urlParams','$http','user_roles',
  function($rootScope, $scope, $filter, $routeParams, commonActions, loginHttpService, $location, urlParams, $http, user_roles) {
    var get_uid = commonActions.getcookies(get_uid);
    if (get_uid == '') {
      alert('Kindly login');
       window.location.href='/mlg_ui/app/signin';
      return false;
    }
    $scope.automatic_approval_status = false;
    $scope.init = function() {
      var setting_request = {'user_id': get_uid};
      loginHttpService.getUserSetting(setting_request).success(function (response) {
        if (response.status == true) {
          var user_settings = JSON.parse(response.result.settings);
          if (user_settings.automatic_approval === 'true') {
            $scope.automatic_approval_status = true;
          }
        }
      });
    }

    $scope.changeStatus = function() {
      var set_setting = {user_id : get_uid, settings : {automatic_approval: !$scope.automatic_approval_status}, child_id : $routeParams.id };
      loginHttpService.setUserSetting(set_setting).success(function (response) {
        if (response.status == true) {
          $scope.automatic_approval_status = !$scope.automatic_approval_status;
        }
      });
    }
    $scope.avail_coupons = [];
    var coupon_data = {user_id: $routeParams.id};
    loginHttpService.getUsedCoupon(coupon_data).success(function (avail_coupons) {
      $scope.avail_coupons = avail_coupons.result;
    });

    function setCoupon(coupon_id, updated_status, coupon_value) {
      var param = {};
      param.user_id = $routeParams.id;
      param.coupon_id = coupon_id;
      param.status = updated_status;
      param.updated_by_user_id = get_uid;
      param.conditional_value = coupon_value;
      loginHttpService.setAvailableCoupon(param).success(function (response) {
       if (response.status == true) {
         if (updated_status.toLowerCase() == 'acquired') {
           $('#modal-couponAccept .modal-content').addClass('success');
           $('#'+coupon_id).html('<a class="btn btn-background-none text-success text-uppercase">\n\
              <i class="icon icon-tick"></i> Approved   </a>');
           $("#modal-couponAccept").fadeOut('slow');
           $("#modal-couponAccept").modal('hide');
         } else if (updated_status.toLowerCase() == 'rejected') {
           $('#modal-couponReject .modal-content').addClass('success');
           $('#'+coupon_id).html('<a class="btn btn-background-none text-danger text-uppercase">\n\
              <i class="icon icon-cross"></i> Rejected</a>');
           $('#modal-couponReject').fadeOut('slow');
           $("#modal-couponReject").modal('hide');
         }
       }
      });
    }
    $scope.coupon_accepted = function() {
      if ($scope.coupon_prev_state.toLowerCase() == 'acquired') {
        alert('coupon already acquired');
        return false;
      }
      setCoupon($scope.accepted_coupon_id, 'Acquired', $scope.conditional_value);
      $scope.accepted_coupon_id = '';
      $scope.coupon_prev_state = '';
      $scope.conditional_value = '';
    }
    $scope.coupon_rejected = function() {
      if ($scope.coupon_prev_state.toLowerCase() == 'acquired') {
        alert('coupon already acquired');
        return false;
      }
      setCoupon($scope.rejected_coupon_id, 'Rejected', $scope.conditional_value);
      $scope.rejected_coupon_id = '';
      $scope.coupon_prev_state = '';
      $scope.conditional_value = '';
    }

    $scope.accepted_coupon_id = '';
    $scope.rejected_coupon_id = '';
    $scope.coupon_prev_state = '';
    $scope.conditional_value = '';
    $scope.modal_couponAccept = function(coupon) {
      $("#modal-couponAccept").modal();
      $scope.accepted_coupon_id = coupon.coupon_id;
      $scope.coupon_prev_state = coupon.status;
      $scope.conditional_value = coupon.coupon_conditions.condition_value;
    }

    $scope.modal_couponReject = function(coupon) {
      console.log(coupon);
      $("#modal-couponReject").modal();
      $scope.rejected_coupon_id = coupon.coupon_id;
      $scope.coupon_prev_state = coupon.status;
      $scope.conditional_value = coupon.coupon_conditions.condition_value;
    }
  }
])
.controller('parentSettingCtrl',['$rootScope','$scope','$filter','loginHttpService', 'commonActions', '$location','urlParams','$http','user_roles',function($rootScope,$scope,$filter, loginHttpService,commonActions,$location,urlParams,$http,user_roles) {
  var get_uid = commonActions.getcookies(get_uid);
  $scope.page_url = $location.path();
  $scope.frm = {};
  $scope.pfrm = {};
  $scope.user = {};
  $scope.global_automatic_approval_status = false;
  $scope.full_name = '';
  $scope.email = '';
  $scope.profile_image = '';
  $scope.frm.profile_picture = '';
  $scope.frm.deactivate = false;
  loginHttpService.getUserDetails(get_uid).success(function (response) {
    if (response.data.user_all_details != '') {
      var user = response.data.user_all_details[0];
      $scope.full_name = user.first_name + ' ' + user.last_name;
      $scope.email = user.email;
      if (user.user_detail.profile_pic != '') {
        $scope.profile_image = response.data.image_directory + '/' + user.user_detail.profile_pic;
      }
      $scope.frm.address_line_1 = user.user_detail.address_line_1;
      $scope.frm.address_line_2 = user.user_detail.address_line_2;
      $scope.frm.district = user.user_detail.district;
      $scope.frm.city = user.user_detail.city;
      $scope.frm.state = user.user_detail.state;
      $scope.frm.country = user.user_detail.country;
    }
    loginHttpService.getUserPreferences(get_uid).success(function (resp) {
      if (resp.status == true) {
        $scope.frm.mobile = resp.data.mobile;
        $scope.frm.sms_subscription = (resp.data.sms_subscription == 0) ? false : true;
      } else {
        $scope.frm.mobile = '';
        $scope.frm.sms_subscription = false;
      }
    });
  }).error(function(err) {
    alert('Some Error occured while getting your data');
  });

  $("#imgInp").on('change', function() {
      readURL(this);
  });
  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ImgShw').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
  }

  $scope.updateMyAccount = function(frm) {
    if ((typeof frm.profile_picture != 'undefined') && frm.profile_picture != '') {
      var fd = new FormData();
      fd.append('file', frm.profile_picture);
      fd.append('user_id', get_uid);
      loginHttpService.updateProfilePic(fd).success(function (resp) {
        if (resp.status == false) {
          alert('unable to update profile picture');
        }
      });
    }
    if ($scope.frm.deactivate == true) {
      var deactivate = confirm('Do you really want to deactivate your account,\n\
        Your all relative account if existed (eg. children account) will also be deactivated');
      if (deactivate == false) {
        return false;
      } else {
        loginHttpService.setUserStatus({id: get_uid, status: 0}).success(function(response) {
          if (response.status) {
            alert('Your account deactivated successfully');
            loginHttpService.deactivateChildrenAccount({parent_id: get_uid}).success(
              function(resp) {
                if (resp.status == true) {
                  alert('Your all relavtive account has been deactivated');
                } else {
                  alert('Unable to deactivate your relative accounts');
                }
              }
            ).error(
              function(err) {
                alert('Some error occured, Kindly contact the Administrator');
              }
            );
          } else {
            alert('Unable to deactivate your account, Some Error occured');
          }
        }).error(function(err) {
          alert('Some error occured');
        });
      }
    }
    frm.user_id = get_uid;
    frm.sms_subscription = (frm.sms_subscription == true) ? 1 : 0;
    loginHttpService.updateMyAccount(frm).success(function (resp) {
      if (resp.status == true) {
        $scope.frm.sms_subscription = (frm.sms_subscription == 1) ? true : false;
        alert('your Details saved successfully');
      } else {
        if (resp.message != '') {
          alert(resp.message);
        } else {
          alert('Some Error occured while saving data');
        }
      }
    }).error(function(x) {
      alert('Some Error occured while saving data');
    });
  }

  $scope.changePassword = function(user) {
    loginHttpService.setUserPassword(get_uid, user).success(function (resp) {
      if (resp.response == true) {
        alert('Your Password changed sucessfully');
      } else {
        alert(resp.response);
      }
    });
  }
  $scope.privacy_init = false;
  $scope.initPrivacySettingsPage = function(privacy_init) {
    //initialize only once
    if ($scope.privacy_init) {
      return false;
    }
    $scope.privacy_init = privacy_init;
    loginHttpService.getUserSetting({user_id : get_uid}).success(function (resp) {
      if (resp.status == true) {
        var result = JSON.parse(resp.result.settings);
        if (typeof result.text_notification != 'undefined') {
          $scope.pfrm.text_notification = result.text_notification;
        }
        if (typeof result.email_notification != 'undefined') {
          $scope.pfrm.email_notification = result.email_notification;
        }
        if (typeof result.mlg_offers != 'undefined') {
          $scope.pfrm.mlg_offers = result.mlg_offers;
        }
        if (typeof result.global_automatic_approval != 'undefined') {
            $scope.global_automatic_approval_status = result.global_automatic_approval;
        }
      }
    }).error(function(err) {
      alert('Some Error occured while getting your data');
    });
  };

  $scope.updatePrivacySettings = function(pfrm) {
    var data = {};
    data.user_id = get_uid;
    data.settings ={
      text_notification : pfrm.text_notification,
      email_notification : pfrm.email_notification,
      mlg_offers : pfrm.mlg_offers,
      global_automatic_approval: $scope.global_automatic_approval_status,
    }
    loginHttpService.setUserSetting(data).success(function (resp) {
      if (resp.status == true) {
        alert('Your settings saved successfuly');
      } else {
        if (resp.message != '') {
          alert(resp.message);
        } else {
          alert('Some Error occured while saving data');
        }
      }
    }).error(function(err) {
      alert('Some Error occured while saving data');
    });
  }

  $scope.changeStatus = function() {
    $scope.global_automatic_approval_status = !$scope.global_automatic_approval_status;
  }
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
           setCookie('userObj', '"userName='+response.user+',email='+ ' ' +',userStatus='+response.status+',role='+ 'student'+'"');
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
    $scope.frm = {};
    // To call dynamic step slider
	// and Call API to get child details for deshboard naming
    loginHttpService.getChildrenDetails(get_uid).success(function(chidrenName) {
      var childcount=chidrenName.response.length;
      if (childcount > 0) {
        $scope.childname=chidrenName.response;
        $scope.frm.childnames = chidrenName.response;
      } else {
        $scope.childname=0;
        $scope.frm.childnames =[];
      }
	});

    $scope.setPreference = function(data) {
      data.user_id = get_uid;
      loginHttpService.setPreference(data).success(function(response) {
        if (response.status == true) {
          $location.url('/terms_and_conditions');
        } else {
          $scope.msg = response.message;
        }
      }).error(function(error) {
        $scope.msg = 'some error occured';
      });
    };
}])
.controller('addMoreChildCntrl', ['$scope', 'loginHttpService', '$location', 'urlParams',
   function ($scope, loginHttpService, $location, urlParams) {
      // get children count
      $scope.number = 5;
      $scope.counter = Array;

      //get cookies
      function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
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

      var get_uid = getCookie('uid');
      if (typeof get_uid == '') {
        alert('kindly login');
        window.location.href = urlParams.siteRoot;
      }

      var number_of_children = 0;
      loginHttpService.getChildrenCount(get_uid).success(function(resp) {
        if (resp.response.number_of_children > 0) {
          number_of_children = resp.response.number_of_children;
        } else {
          alert('Kindly add at least one child');
          $location.url('/select_children');
        }
      });

      // Call to redirect on add child after child selection
      $scope.submitChildrenCount = function(childrencount) {
        //call API to save number of children of a parents
        var data = {};
        data.uid = get_uid;
        data.numofchild = childrencount + number_of_children;
        loginHttpService.setChildrenCount(data).success(function(response) {
        if (response.response.status == "True") {
          $location.url('/add_child_account');
        }
        });
      };
    }
 ]);