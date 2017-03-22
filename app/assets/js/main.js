
// Allow CSS transitions when page is loaded
$(window).on('load', function() {
    $('body').removeClass('no-transitions');
});


$(function() {

    // Disable CSS transitions on page load
    $('body').addClass('no-transitions');



    //  Content area height

    // Calculate min height
    function containerHeight() {
        var availableHeight = $(window).height() - $('.page-container').offset().top - $('.footer').outerHeight();
        //var footerHeight = $('.footer').outerHeight();
        $('.page-container').attr('style', 'min-height:' + availableHeight + 'px');
    }
    // Initialize
   // containerHeight();



    // Sidebars
    // ========================================


    // Mobile sidebar controls
    // -------------------------

    // Toggle main sidebar
    $('.sidebar-mobile-main-toggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-mobile-main');
    });


    // Mobile sidebar setup
    // -------------------------
    $(window).on('resize', function() {
        setTimeout(function() {
            containerHeight();

            if($(window).width() <= 768) {

            }
            else {
                // Remove all mobile sidebar classes
                $('body').removeClass('sidebar-mobile-main');
            }
        }, 100);
    }).resize();


    // Floating Input Fields animation
    var floatInput = function(){
      $(".float-input").each(function(){
         if(this.value!=''){
          $(this).parent('.form-group').addClass('focus');
         }
      });

      $('.float-input').on('focusin', function() {
        $(this).parent('.form-group').addClass('focus');
      });
      $('.float-input').on('focusout', function() {
        if (!this.value) {
          $(this).parent('.form-group').removeClass('focus');
        }
      });
    }
    floatInput();



});



$(document).ready(function(){
	// universal VARIABLES
	var windowWidth = $(window).width();
	console.log(windowWidth);
	// universal VARIABLES

  // custom plugins
  $.fn.centerfy = function(){
  			var winHeight = $(window).outerHeight();
  			var winWidth = $(window).outerWidth();
  			var mainWrapperHeight = this.outerHeight();
  			var mgTop = (winHeight-mainWrapperHeight)/2;
  			console.log(mgTop);
  			if(winWidth> 1400){
  				this.css("margin-top",mgTop + "px");
  			}
  			else {
  				this.css("margin-top","0px");
  			}
  	};

	// toggle function plugins
	jQuery.fn.clickToggle = function(a,b) {
	  function cb(){ [b,a][this._tog^=1].call(this); }
	  return this.on("click", cb);
	};
	// toggle function plugins

	//js plugin for the radio button
	$.fn.radio_button = function(color){
			var opts = $.extend( {}, $.fn.radio_button.defaults, color );
			this.filter( "input[type='radio']" ).each(function() {
			var element = $(this);
			element.addClass("radio-proceed");
			element.after("<span class='radio-btn'></span>");
		});
	};

	//js plugin for the checkbox button
  $.fn.checkbox_button = function(color){
  		var opts = $.extend( {}, $.fn.radio_button.defaults, color );
  		this.filter( "input[type='checkbox']" ).each(function() {
  		var element = $(this);
  		element.addClass("checkbox-proceed");
  		element.after("<span class='checkbox-btn'></span>");
  	});
  };

  // custom plugins

  // signpage center
  $(".signpage_block").centerfy();

  $(window).resize(function(){
  	$(".signpage_block").centerfy();
  });

	// main right side width
	function mainRightWidth(){
		windowWidth = $(window).width();
		if(windowWidth>1023){
			var mainLeftSideWidth = $(".main_left_side").outerWidth();
			$(".main_right_side").css("width","calc(100% - "+mainLeftSideWidth+"px)");
		}
  };
	mainRightWidth();
	$(window).resize(function(){
		mainRightWidth();
	});

	// main left side height
	function mainLeftSideHeight(){
		var mainRightSideHeight = $(".main_right_side").outerHeight();
		var sidebarMarginTop = $(".main_left_side .sidebar").css("margin-top");
			sidebarMarginTop = parseInt(sidebarMarginTop);
		$(".main_left_side").css("max-height",(mainRightSideHeight)+"px");
		$(".main_left_side .sidebar").css("min-height",(mainRightSideHeight-sidebarMarginTop)+"px");
	}
	mainLeftSideHeight();
	$(window).resize(function(){
		mainLeftSideHeight();
	});
	$(document).scroll(function(){
		mainLeftSideHeight();
	});

	// universal_searchbar focus event
	$(".universal_searchbar input").focusin(function(){
			$(this).attr("placeholder",'');
			$(this).addClass("active");
	}).focusout(function(){
			$(this).attr("placeholder",'Search');
		$(this).removeClass("active");
	});


	// menu-toggle button
	$("#menu_toggle_btn").click(function(){
		$(this).toggleClass("bar cross");
	});
	$("#menu_toggle_btn").clickToggle(function() {
		$(".main_left_side").css("transform","translateX(0px)");
		console.log("clickfirst");
	},
	function() {
		var leftTransVal = $(".main_left_side").outerWidth();
		$(".main_left_side").css("transform","translateX(-"+leftTransVal+"px)");
		console.log("clicksecond");
	});


  // radio button js
  $("body").on('click','.radio-btn', function(){
  		var name = $(this).siblings("input[type='radio']").attr("name");
  		$("input[type='radio'][name='" +name+"']").attr("checked", false);
  		$(this).siblings("input[type='radio']").attr("checked", true);
  		$(".radio-btn").each(function(){
  			if($(this).siblings("input").attr("name") == name){
  				$(this).removeClass("checked");
  			}
  		});
  		$(this).toggleClass("checked");

  });

  // chechbox button
  $("body").on('click','.checkbox-btn', function(){
  		var checked = $(this).siblings("input[type='checkbox']:checked").length>0;
  		console.log(checked);
  		if(checked == false){
  			$(this).siblings("input[type='checkbox']").attr("checked", true);
  		}
  		else {
  			$(this).siblings("input[type='checkbox']").attr("checked", false);
  		}
  		$(this).toggleClass("checked");

  });


});
