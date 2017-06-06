
// on click toggle class in target element
function toggleClassElement(elem, className){
  var targetElement = $("." + elem);
  targetElement.toggleClass(className);
}

// data-center
$("*[data-center='center']").each(function(){
  var element = $(this);
  element.parent().addClass("element_center");
  element.wrap("<div><div></div></div>");
});
// data-center


$(document).ready(function(){
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


  // page-container
  function heightPageContainer() {
    var windowHeight = $(window).height();
    $(".onboarding-cover .page-container").height(windowHeight);
  }
  if($(window).width()>=768){
    heightPageContainer();
  }
  $(window).resize(function(){
    if($(window).width()>=768){
      heightPageContainer();
    }
  });
});
