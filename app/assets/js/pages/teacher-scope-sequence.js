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
    // mlg-selectpicker
    $('.mlg-selectpicker').selectpicker();
});
