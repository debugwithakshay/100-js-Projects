// song total duration finder
function totalDurationFinder() {
  setTimeout(() => {
    let songDuration = song.duration;

    // setting total duration second
    document.querySelector(".total-sec").innerText = padWithZero(
      Math.floor(songDuration) % 60
    );

    // setting total duration min
    document.querySelector(".total-min").innerText = padWithZero(
      Math.floor(songDuration / 60)
    );
  }, 600);
}
totalDurationFinder();

//song current duration finder
function currentDurationFinder() {
  setInterval(() => {
    //storing second
    let currentSec = padWithZero(Math.floor(song.currentTime));

    //update song progress line
    document.querySelector(".music-track-current").style.width = `${
      (currentSec / song.duration) * 100
    }%`;

    //if currunt second is not equal to 60
    if (currentSec < 60) {
      //setting current sec if it is < 60
      document.querySelector(".current-sec").innerText = currentSec;
    } else if (currentSec >= 60) {
      //setting current min
      document.querySelector(".current-min").innerText = Math.floor(
        currentSec / 60
      );

      //setting current sec if it is > 60
      document.querySelector(".current-sec").innerText = padWithZero(
        currentSec % 60
      );
    }
  }, 1000);
}

// pad second/minute with zero if less than 10
function padWithZero(time) {
  return time < 10 ? "0" + time : time;
}
