$(document).ready(function(){
  // panel center js
  var pageContainerHeight = function(){
        var widowHeight = $(window).height();
        $(".avtar-creation-page .page-container").height(widowHeight);
      }
  pageContainerHeight();
  $(window).resize(function(){
    pageContainerHeight();
  });

  // universal variable
  var bodyTone;
  var bgColor;
  var hireStyle;
  var clothStyle;
  var capStyle;
  var specStyle;
  var stickStyle;
  // body tone js
  $("#body-tone .btn").each(function(){
    bgColor = $(this).children("input").attr("data-body-tone");
    $(this).css("background",bgColor);
  });
  $("#body-tone .btn").click(function(){
    bodyTone = $(this).children("input").attr("data-body-tone");
    $("#avtar .body-part").css("fill", bodyTone);
  });

  // HAIR STYLE
  $("#hair-style .btn").click(function(){
    hireStyle = $(this).children("input").attr("data-hire-style");
    $("#hire-style-path").html(hireStyle);
  });


  // CLOTHS
  $("#cloth-style .btn").click(function(){
    clothStyle = $(this).children("input").attr("data-cloth");
    $("#cloths").html(clothStyle);
    $("#avtar .body-part").css("fill", bodyTone);
  });

  // ACCESSORIES caps
  $("#caps .btn").click(function(){
    capStyle = $(this).children("input").attr("data-accessories");
    $("#capStyle").html(capStyle);
  });

  // ACCESSORIES SPECS
  $("#specs .btn").click(function(){
    specStyle = $(this).children("input").attr("data-accessories");
      $("#specStyle").html(specStyle);
  });

  // ACCESSOREIS magic-stick
  $("#magic-stick .btn").click(function(){
      stickStyle = $(this).children("input").attr("data-accessories");
      $("#stickStyle").html(stickStyle);
  });

});
