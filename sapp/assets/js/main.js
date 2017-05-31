//js plugin for the radio button
$.fn.radio_button = function(color){
    var opts = $.extend( {}, $.fn.radio_button.defaults, color );
    this.filter( "input[type='radio']" ).each(function() {
    var element = $(this);
    element.addClass("radio-proceed");
    element.after("<a class='radio-btn'></a>");
  });
};

//js plugin for the checkbox button
$.fn.checkbox_button = function(color){
  var opts = $.extend( {}, $.fn.radio_button.defaults, color );
  this.filter( "input[type='checkbox']" ).each(function() {
  var element = $(this);
  element.addClass("checkbox-proceed");
  element.after("<a class='checkbox-btn'></a>");
});
};

// data-center
$("*[data-center='center']").each(function(){
  var element = $(this);
  element.parent().addClass("element_center");
  element.wrap("<div><div></div></div>");
});
// data-center


// universal veriable

var windowHeight = $(window).height();
var windowWidth = $(window).width();

// universal veriable

// navbar-toggle js
$(".navbar-default .navbar-toggle").click(function(){
  $(".navbar-default .navbar-header").toggleClass("fixed");
})
// Main App JS

// masscourt-animation
$(document).ready(function(){
  $("#hint").click(function(){
    $(".masscourt-block").addClass("active");
    setTimeout(function(){
        $(".masscourt-block .masscourt-cover").addClass("in");
    }, 500);
  });
  $("#gotIt").click(function() {
    $(".masscourt-block .masscourt-cover").removeClass("in");
    setTimeout(function(){
      $(".masscourt-block").removeClass("active");
    }, 500);
  });
});

// masscourt-animation

// chat js
$(document).ready(function() {
  $(".user_list .bg__chat").click(function(){
    $(".user_list").toggleClass("in");
  });
  $(".user_list_ul li").click(function(){
    $(".user_list").toggleClass("out");
    $(".chating_block").toggleClass("in");
  });
  $(".chating_block .close").on("click", function(){
      $(this).parent().parent().css({"display":"none"});
      $(".chating_block").toggleClass("in");
      $(".user_list").toggleClass("out");
  });
// chat js

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

  // .student_growth .growth_value
  $(".student_growth .growth_value").each(function(){
    var text = $(this).text();
    if(text.length>10){
      text = text.slice(0,3) + "+" + ' pts';
      $(this).text(text);
    }
  });
  // .navbar-default .profile_bar .user_name
  $(".navbar-default .profile_bar .user_name").each(function(){
    var text = $(this).text();
    if(text.length>12){
      text = text.slice(0,9) + "...";
      $(this).text(text);
    }
  });

});

$(".conversation_block, .user_list .user_list_ul").mCustomScrollbar({
    theme:"dark"
  });


// goback function
 function goback(){
  window.history.back();
  };

  $(".go-back-btn").click(function(){
    goback();
  });


// goback function

// loader js
$(".loader").height(windowHeight);
$(window).load(function(){
  setTimeout(function(){
      $(".loader").fadeOut();
  },1000);
});
