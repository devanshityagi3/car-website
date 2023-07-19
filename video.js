function togglePlayPause(vid, bid) {
  var ppbutton = document.getElementById(bid);
  ppbutton.addEventListener("click", playPause);
  myVideo = document.getElementById(vid);
  function playPause() {
    if (myVideo.paused) {
      myVideo.play();
      ppbutton.src = "icons/pause-button.png";
    }
    else {
      myVideo.pause();
      ppbutton.src = "icons/play-button.png";
    }
  }
}
