
// Allow CSS transitions when page is loaded
$(window).on('load', function() {
    $('body').removeClass('no-transitions');
});

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
});
