$(document).ready(function(){

  // plugins
  var windowWidth = $(window).width();
  if(windowWidth>= 768){
    $("#option_nav").tabCollapse();
    $(".panel-avatar-creation .tab-content .tab-pane").mCustomScrollbar({
      theme:"dark-3"
    });
  }
  else {
    $(".panel-avatar-creation .tab-content .tab-pane").mCustomScrollbar({
      horizontalScroll: true,
      theme:"dark-3"
    });
  }


  // panel center js
  var pageContainerHeight = function(){
        var widowHeight = $(window).height();
        $(".avtar-creation-page .page-container").height(widowHeight);
      }
  pageContainerHeight();
  $(window).resize(function(){
    pageContainerHeight();
  });

// length of the btn-group
 $(".btn-group").each(function(){
   var numberOfBtn = $(this).find(".btn").length;
   var widthOfBtnGroup = numberOfBtn*(90) + "px";
   $(this).css("min-width",widthOfBtnGroup);
 });


  // universal variable
  var bodyTone;
  var bgColor;
  var hireStyle;
  var clothStyle;
  var capStyle;
  var specStyle;
  var stickStyle;
  var hireColor;
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
    hireColor = $(this).children("input").attr("data-hire-color");
    $("#hire-style-path").html(hireStyle);
    $("#capStyle").html('');
    $("#eye-brow .eye-brow").css("fill", hireColor);
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
    var capHireStyle = $(this).children("input").attr("data-hire-style");
    $("#capStyle").html(capStyle);
    $("#hire-style-path").html(capHireStyle);
    setTimeout(function(){
      $("#hire-style-path path").css("fill", hireColor);
    },100);
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


  $("#skip").click(function(){
    // js for tableOfContent
    var targetLiIndex = $("#option_nav li.active").index();
    targetLiIndex = Math.abs(targetLiIndex);
    var noOfLi = $("#option_nav li").length;
    if (targetLiIndex==noOfLi-1){
      $("#option_nav li").removeClass("active");
      $("#option_nav li:first").addClass("active");
    }
    else if(targetLiIndex<noOfLi){
      $("#option_nav li.active").removeClass("active").next("li").addClass("active");
    }

    // js for tab-content
    var targetpaneIndex = $(".tab-content .tab-pane.in").index();
    targetpaneIndex = Math.abs(targetpaneIndex);
    var noOfpane = $(".tab-content .tab-pane").length;
    if (targetLiIndex==noOfLi-1){
      $(".tab-content .tab-pane").removeClass("in active");
      $(".tab-content .tab-pane:first").addClass("in active");
    }
    else if(targetLiIndex<noOfLi){
       $(".tab-content .tab-pane.in").removeClass("in active").next(".tab-pane").addClass("in active");
    }

  });

});

// canvas for avatar creation
// $(document).ready(function(){
//   var btn = document.getElementById("downloadAvtar");
//   var svg = document.getElementById("avtar");
//   var canvas = document.getElementById("canvas");

//   function triggerDownload (imgURI) {
//   var evt = new MouseEvent('click', {
//     view: window,
//     bubbles: false,
//     cancelable: true
//   });

//   var a = document.createElement('a');
//   a.setAttribute('download', 'Avtar_profile_pick.png');
//   a.setAttribute('href', imgURI);
//   a.setAttribute('target', '_blank');

//   a.dispatchEvent(evt);
//   }

//   btn.addEventListener('click', function () {
//   var canvas = document.getElementById('canvas');
//   var ctx = canvas.getContext('2d');
//   var data = (new XMLSerializer()).serializeToString(svg);
//   var DOMURL = window.URL || window.webkitURL || window;

//   var img = new Image();
//   var svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
//   var url = DOMURL.createObjectURL(svgBlob);

//   img.onload = function () {
//     ctx.drawImage(img, 0, 0);
//     DOMURL.revokeObjectURL(url);

//     var imgURI = canvas
//         .toDataURL('image/png')
//         .replace('image/png', 'image/octet-stream');

//     triggerDownload(imgURI);
//   };

//   img.src = url;
//   console.log(url);
//   });
// });
