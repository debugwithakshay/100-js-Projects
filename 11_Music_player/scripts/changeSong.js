//fetch Song from database
let currentSongNo = 0;
function fetchSong(currentSongNo) {
  //setting song name
  document.querySelector(".music-name").innerText =
    songData[currentSongNo].songName;

  //setting author name
  document.querySelector(".author-name").innerText =
    songData[currentSongNo].authorName;

  //setting cassete poster
  cassete.style.backgroundImage = `url(${songData[currentSongNo].thumbNail})`;

  //setting song
  song.src = songData[currentSongNo].songLocation;

  totalDurationFinder();
}
fetchSong(currentSongNo);

//switching to previous song
let previousSongBtn = document.querySelector(".previous_song_icon");
previousSongBtn.addEventListener("click", previousSong);
function previousSong() {
  if (currentSongNo != 0) {
    --currentSongNo;
  }
  fetchSong(currentSongNo);
  play();
  totalDurationFinder();
}

//switching to next song
let nextSongBtn = document.querySelector(".next_song_icon");
nextSongBtn.addEventListener("click", nextSong);
function nextSong() {
  if (currentSongNo != songData.length - 1) {
    ++currentSongNo;
  }
  fetchSong(currentSongNo);
  play();
  totalDurationFinder();
}
