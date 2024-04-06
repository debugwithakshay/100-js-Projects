let songVolume = 0.5;
let volumeTrack = document.querySelector(".volume-track-current");

function volumeManager(volume) {
  //set volume to 50% as page gets load
  song.volume = volume;

  //setting volume indicator according to volume
  volumeTrack.style.height = `${songVolume.toPrecision(1) * 100}%`;
}
volumeManager(songVolume);

//volume up
let volumeUpBtn = document.querySelector(".volume_up_btn");
volumeUpBtn.addEventListener("click", volumeUp);
function volumeUp() {
  if (songVolume < 0.999) {
    volumeManager((songVolume = songVolume + 0.1));
    console.log(songVolume);
  }
}

//volume down
let volumeDownBtn = document.querySelector(".volume_down_btn");
volumeDownBtn.addEventListener("click", volumeDown);
function volumeDown() {
  if (songVolume > 0.1) {
    volumeManager((songVolume = songVolume - 0.1));
    console.log(songVolume);
  }
}
