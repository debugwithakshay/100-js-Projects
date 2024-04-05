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

// pad second/minute with zero if less than 10
function padWithZero(time) {
  return time < 10 ? "0" + time : time;
}
