$(document).ready(function () {
  const video = document.getElementById("video");
  const playIcon = document.getElementById("playIcon");
  const video2 = document.getElementById("video2");
  let isPlaying = false;

  // Function to toggle play/pause on the video
  function togglePlayPause(video) {
    if (isPlaying) {
      video.pause();
      isPlaying = false;
      playIcon.src = "icons/play-button.png";
    } else {
      video.play();
      isPlaying = true;
      playIcon.src = "icons/pause-button.png";
    }
  }

  playIcon.addEventListener("click", togglePlayPause);

  video.addEventListener("play", function () {
    isPlaying = true;
    playIcon.src = "icons/pause-button.png";
  });

  video.addEventListener("pause", function () {
    isPlaying = false;
    playIcon.src = "icons/play-button.png";
  });
});

