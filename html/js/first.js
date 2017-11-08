$(function(){
  $(".press-btn").on("touchend", function(){
    var video = document.getElementById("video");
    $(".p-msg").addClass("slide-none");
    setTimeout(function(){
      $(".con").css("display", "none");
    },500);
    setTimeout(function(){
      $(".video-con").css("display", "block");
      video.play();
      video.onended = function(){
       $(".video-con").css("display", "none");
       $(".bottom").css("display", "block");
      }
    },200)

  })
})