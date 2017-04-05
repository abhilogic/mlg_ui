$(document).ready(function(){
  // function toggle function
  jQuery.fn.clickToggle = function(a,b) {
	  function cb(){ [b,a][this._tog^=1].call(this); }
	  return this.on("click", cb);
	};

  // funciton for video duration
  function videoDuration(){
    var time = $("#tutorialVideo")[0].duration;
    var hour = Math.floor(time/3600);
    var minutes = Math.floor((time%3600)/60);
    var seconds = Math.floor((time%3600)%60);
    if(hour>0){
        $("#duration").text(hour+ ':' +minutes + ':' + seconds);
    }
    else {
      $("#duration").text(minutes + ':' + seconds);
    }
  };

  var controls = {
    video: $("#tutorialVideo").get(0),  //this is the video element
    fullscreen: $("#fullScreen").get(0)  //This is the fullscreen button.
  };
  $("#fullScreen").click(function(){
    var elem = controls.fullscreen;
    if (elem.requestFullscreen) {
        controls.video.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        controls.video.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        controls.video.webkitRequestFullscreen();
    }
  });

  function vidplay() {
        var video = $("#tutorialVideo").get(0);
        if (video.paused) {
         video.play();
      } else {
         video.pause();
      }
    };
  var video = $("#tutorialVideo")[0];
  $("#video_play_btn").click(function(){
    vidplay();
    $(".video_cover").toggleClass("start");
  });

  $(".btnPlay").click(function(){
    vidplay();
    videoDuration();
    $(".video_cover").toggleClass("start");
  });
  $("#volume_controller").click(function(){
      $(".volume_bar").toggleClass("on");
  });

  function currentVideoTime(){
    $("#tutorialVideo").on('timeupdate', function() {
          // Set to minute and seconds
          var time = $("#tutorialVideo")[0].currentTime;
          var minutes = Math.floor(time / 60);
          var seconds = Math.floor(time);
          if(seconds<10){
            seconds = "0"+seconds;
          }
          if(video.duration == time){
              $(".video_cover").removeClass("start");
          }
          // Set the current play value
          $("#current").text(minutes + ':' + seconds);
      });
 };

 currentVideoTime();

function rangeAndVolumeController(){
    $("#tutorialVideo").on({
        canplaythrough: function() {
            var video = this;
            $('#slider').slider({
                range : "max",
                min   : 0,
                max   : parseInt(video.duration, 10),
                value : 0,
                slide : function (event, ui) {
                    video.currentTime = ui.value;
                }
            });
        },
        timeupdate: function() {
            $('#slider').slider('value', this.currentTime)
        }
    });
    $("#volumeSlider").slider({
        range : "max",
        min   : 0,
        max   : 1,
        value : 1,
        step  : 0.05,
        orientation: "vertical",
        slide : function (event, ui) {
            $("#tutorialVideo").prop("volume", ui.value );
        }
    });
};

rangeAndVolumeController();

      $(".help_video_list li img").click(function(){
        var videoSrc = $(this).attr("data-video-src");
        $("#tutorialVideo source").attr("src",videoSrc);
        $("#tutorialVideo").load();
        setTimeout(function(){
          videoDuration();
        },200);
        console.log(duration);
        $("#tutorialVideo").get(0).play();
        $(".video_cover").addClass("start");
        $(".volume_bar").removeClass("on");
        rangeAndVolumeController();
        currentVideoTime();
      });

      // js play button cover
      var play_btn_cover_height = $("#tutorialVideo").height();
      $(".play_btn_cover").height(play_btn_cover_height);

});
