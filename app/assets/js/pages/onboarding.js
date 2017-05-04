

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
});
