let song = document.querySelector("#song");
let playPauseBtn = document.querySelector(".play_pause_icon");
let cassete = document.querySelector(".cassete");

//playing/pausing music
let songState = "paused";
function playPauseWorking() {
  //play music
  playPauseBtn.addEventListener("click", function () {
    if (songState == "paused") {
      songState = "playing";
      play();
    } else if (songState == "playing") {
      pause();
      songState = "paused";
    }
  });
}
playPauseWorking();

//playing song
function play() {
  //playing song
  song.play();
  //rotating cassete
  cassete.style.animationPlayState = "running";
  //changing play/pause icon
  playPauseBtn.src = "assets/pause_icon.svg";
}

//pausing song
function pause() {
  //pausing song
  song.pause();
  //pausing cassete
  cassete.style.animationPlayState = "paused";
  //changing play/pause icon
  playPauseBtn.src = "assets/play_icon.svg";
}
