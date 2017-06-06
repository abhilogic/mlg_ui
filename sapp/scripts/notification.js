angular.module('NOTIFICATION',['pascalprecht.translate'])
.config(['$translateProvider', function ($translateProvider) {
	
    $translateProvider.translations('en', {
    });

    $translateProvider.translations('de', {
    });
    
   // $translateProvider.preferredLanguage('en');
    
}])
.factory('NotificationService',['urlParams',function(urlParams){
	var noti = {};
	var setNotification = function( thisNoti ) {
					
					noti.msg = thisNoti.msg;
					noti.type=thisNoti.type;
					if(noti.type==='info'){
						alerttype='success';
					}
					else if(noti.type==='alert'){
						alerttype='danger';
					}
		          	var append_html='<span class="alert alert-'+alerttype+'" style="border:1px solid #ccc;" ><i  class="fa fa-info-circle"></i>&nbsp;'+noti.msg;
		          	$('#notification').html(append_html)
		          	$('#notification').css({'position':'fixed','left':'45%','top':'2%','padding':'0px;'})
			  		    $('#notification').fadeIn('4000').animate({'z-index': "99999"}, 
							{duration: '3000'}, function(){
						});
						// $('html,body').animate({scrollTop: '0px' }, "slow");
						setTimeout(function() {
  							$("#notification").fadeOut('slow');
						}, 4000);

				     
		};

	var removeNotification = function(){
		$('#notification').animate({
			'top': "-40px",'z-index': "-1"
			}, {duration: '3000'}, function() {
				$scope.showAlert = 'false';
				$scope.alert.msg = '';

				// Animation complete.
		}).fadeOut('slow');	
	};
	
	return {
		setNotification : setNotification,
		removeNotification: removeNotification
	};
}]);