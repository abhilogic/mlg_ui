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

// custom plugins

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
});
