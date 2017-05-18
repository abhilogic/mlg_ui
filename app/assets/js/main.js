
// Allow CSS transitions when page is loaded
$(window).on('load', function() {
    $('body').removeClass('no-transitions');
});

// function toggle custom plugins
jQuery.fn.clickToggle = function(a,b) {
  function cb(){ [b,a][this._tog^=1].call(this); }
  return this.on("click", cb);
};

// on click add desired class  in  target element
function showTargetElement(elem, className){
  var targetElement = $(elem);
  targetElement.addClass(className);
}
// on click toggle class in target element
function toggleClassElement(elem, className){
  var targetElement = $(elem);
  targetElement.toggleClass(className);
}

$(document).ready(function(){

    // Disable CSS transitions on page load
    $('body').addClass('no-transitions');

    //  Content area height
    //--------------------------------

    // Calculate min height
    function containerHeight() {
        var availableHeight = $(window).height() - $('.page-container').offset().top - $('.footer').outerHeight();
        //var footerHeight = $('.footer').outerHeight();
        $('.page-container').attr('style', 'min-height:' + availableHeight + 'px');
    }
    // Initialize
    containerHeight();



    // Sidebars
    // ========================================

    // search bar
    $(".search_form .has-feedback .form-control-feedback").click(function(){
      $(".search_form .has-feedback").toggleClass("search_open");
    });

    // Toggle main sidebar
    $('.sidebar-mobile-main-toggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-mobile-main');
    });


    // Mobile sidebar setup
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

    // $('.mlg-selectpicker').selectpicker();

});


// goBack function
function goBack() {
    window.history.back();
    console.log("hello");
}

var switcheryHtml = '<span class="off">OFF</span>' +
                    '<span class="switchery switchery-default" >'+
                      '<small></small>'+
                    '</span>'+
                    '<span class="on">ON</span>';
$(document).ready(function(){
  $(".js-switch").each(function(){
    $(this).after(switcheryHtml);
  });

  $("body").on('click','.switchery-default', function(){
      var checked = $(this).siblings(".js-switch").attr("checked");
      $(this).toggleClass("off");
      if(checked == "checked"){
        $(this).siblings(".js-switch").attr("checked", false);
      }
      else {
        $(this).siblings(".js-switch").attr("checked", true);
      }
  });
  // Floating Input Fields animation
  var floatInput = function(){

    $(".float-input").each(function(){
       if(this.value!=''){
        $(this).parent().addClass('focus');
       }
    });

    $('.float-input').on('focusin', function() {
      $(this).parent().addClass('focus');
      console.log("hello");
    });

    $('.float-input').on('focusout', function() {
      if (!this.value) {
        $(this).parent().removeClass('focus');
      }
    });
  }
  floatInput();


  $(".icon-arrow-left").click(function(){
    goBack();
  });
});
