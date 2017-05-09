$(function() {
    // Basic examples
    // ------------------------------

    // Basic initialization
    $('.multiselect.peopleSelect').multiselect({
      nonSelectedText: 'Select People',
        onChange: function() {
            $.uniform.update();
        }
    });

    // Styled checkboxes and radios
    $(".styled, .multiselect-container input").uniform({ radioClass: 'choice'});
});

$(document).ready(function(){
  $("#btnGenerate").click(function(){
    $(".question-block-cover").show();
  });
  // mlg-selectpicker
  $('.mlg-selectpicker').selectpicker();
});
