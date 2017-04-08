 $(document).ready(function(){
		// classNameTrim
		function classNameTrim(str){
			var string = str;
			string = string.replace("castle","");
			string = string.replace("subject_castle","");
			string = string.replace("inactive","");
			string = string.replace("active","");
			string = string.trim();
			return string;
		};

		// scalingBody
		function scalingBody(clsName,animateElement,scale, opacVal, time){
			var scaleVal = scale;
			var animationTime = time;
			switch(clsName){
				case "science":
					$(animateElement).transition({ scale: scaleVal,  x: 0, y: 40, opacity: opacVal},animationTime);
				break;
				case "math":
					$(animateElement).transition({ scale: scaleVal,  x: 150, y: 0, opacity: opacVal},animationTime);
				break;
				case "english":
					$(animateElement).transition({ scale: scaleVal,  x: 90, y: -	90, opacity: opacVal},animationTime);
				break;
				case "social_science":
					$(animateElement).transition({ scale: scaleVal,  x: -187, y: -21, opacity: opacVal},animationTime);
				break;
				case "challenge_mountain":
					$(animateElement).transition({ scale: scaleVal,  x: -195, y: -65, opacity: opacVal},animationTime);
				break;
				case "help":
					$(animateElement).transition({ scale: scaleVal,  x: -188, y: 136, opacity: opacVal},animationTime);
				break;
				default:
				console.log("Noting");
				break;
			}
		};
		// element on norm come on nomal state
		function bodyNormal(nomalElement,time){
				var animationTime = time;
				$(nomalElement).transition({ scale: 1,  x: 0, y: 0, opacity: 1},animationTime);
		};


		// body come on nomal state
		//   redirectPage
		function redirectPage(time,href){
			var url = document.location.href;
			url = url.replace("http://","");
			if(url.indexOf("\/")>=0){
				url = url.substr(0,url.lastIndexOf("\/"));
				url= "http://"+url+"/";
			 }
			 else {
				 url = document.location.href;
			 }
			 console.log(url);
			setTimeout(function(){
        window.location.href = (url + href);
		 },time);
		};
		//   redirectPage

		// dummy close button show
		function closeBtnShow(){
			$(".close_btn").show(1600);
		};
		// dummy close button show

// journey_map center position function
	// function mainWrapperPos(){
	// 		var winHeight = $(window).outerHeight();
	// 		var winWidth = $(window).outerWidth();
	// 		var mainWrapperHeight = $(".main_wrapper").outerHeight();
	// 		var mgTop = (winHeight-mainWrapperHeight)/2;
	// 		console.log(mgTop);
	// 		if(winWidth> 1400){
	// 			$("body").css("padding-top",mgTop + "px");
	// 		}
	// 		else {
	// 			$("body").css("padding-top","0px");
	// 		}
	//
	// };


// journey_map center position function

// journey_map center position
			// $(window).resize(function(){
			// 	mainWrapperPos();
			// });
			// mainWrapperPos();
// journey_map center position

// body fadeout
function fadeOut(element,time){
	setTimeout(function(){
		$(element).fadeOut(1000);
	},(time-400));
};

// global VARIABLES

// prevent cashles anchor tAG
$(function () {
    $('.journey_map a').on("click", function (e) {
        e.preventDefault();
    });
});



var windWidth = $(window).width();
$(window).resize(function(){
 windWidth = $(window).width();
});
var audio = $("#mysoundclip")[0];
// global VARIABLES

	$(".wooden_frame_content_cover a").not(".not_clickable").click(function(event){
      windowWidth = $(window).width();
      if(windowWidth>767){
        event.preventDefault();
        var href = $(this).attr("href");
  			var name = $(this).attr("data-castle-name").replace(".html","");
  			var time = 500;
  			audio.play();
  			$.when(scalingBody(name,".castle_cover",1.5,0.4,time))
  			.then(fadeOut("body",time))
  			.then(redirectPage(time, href));
      }
	});
  $(".conversation_block, .user_list .user_list_ul").mCustomScrollbar({
      theme:"dark"
    });
});
