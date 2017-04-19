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


  // body tone js
  $("#body-tone .btn").each(function(){
      var bgColor = $(this).children("input").attr("data-body-tone");
      $(this).css("background",bgColor);
  });
  $("#body-tone .btn").click(function(){
    var bodyTone = $(this).children("input").attr("data-body-tone");
    $("#avtar .cls-1").css("fill", bodyTone);
  });
  // $("#hair-style .btn").click(function(){
  //     var hireStyle = $(this).children("input").attr("data-hire-style");
  //     var hireStyleposition = $(this).children("input").attr("data-hire-transform");
  //     var hireColor = $(this).children("input").attr("data-fill");
  //     $("#hire-style").attr("d",hireStyle).attr("fill", hireColor).css({"display":"block", "transform": hireStyleposition});
  // });


  $("#hair-style .btn").click(function(){
      var hireStyle = $(this).children("input").attr("data-hire-style");
      $("#hire-style-path").append(hireStyle);
  });
});
