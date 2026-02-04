function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function showSurprise() {
  document.getElementById("surpriseContent").style.display = "block";
}
