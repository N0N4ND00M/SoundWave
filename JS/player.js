function initPlayer() {
    const titleEl = document.querySelector("[data-player-title]");
    const artistEl = document.querySelector("[data-player-artist]");
    const progressFill = document.querySelector("[data-progress-fill]");
    const playerToggle = document.querySelector("[data-player-toggle]");
    const timeEl = document.querySelector("[data-player-time]");
  
    let audio = new Audio();
    let currentSong = null;
    let isPlaying = false;
    let progressTimer = null;
  
    audio.volume = 0.75;
  
    function playSong(song) {
      currentSong = song;
  
      audio.pause();
      audio = new Audio(song.audio);
      audio.volume = 0.75;
  
      titleEl.textContent = song.title;
      artistEl.textContent = `${song.artist} • ${capitalize(song.mood)}`;
  
      document.documentElement.style.setProperty("--accent", song.colorA);
      document.documentElement.style.setProperty("--accent-2", song.colorB);
  
      audio.play()
        .then(() => {
          isPlaying = true;
          updatePlayerButton();
          startProgressTimer();
        })
        .catch(() => {
          titleEl.textContent = "Audio file missing or blocked";
          artistEl.textContent = "Check assets/audio folder";
          isPlaying = false;
          updatePlayerButton();
        });
  
      audio.addEventListener("ended", () => {
        isPlaying = false;
        updatePlayerButton();
        progressFill.style.width = "0%";
  
        if (timeEl) {
          timeEl.textContent = "0:00 / 0:00";
        }
      });
    }
  
    function togglePlayState() {
      if (!currentSong) {
        return;
      }
  
      if (isPlaying) {
        audio.pause();
        isPlaying = false;
      } else {
        audio.play()
          .then(() => {
            isPlaying = true;
            startProgressTimer();
          })
          .catch(() => {
            titleEl.textContent = "Audio could not play";
            artistEl.textContent = "Click the song again or check the file";
          });
      }
  
      updatePlayerButton();
    }
  
    function startProgressTimer() {
      clearInterval(progressTimer);
  
      progressTimer = setInterval(() => {
        if (!audio.duration || Number.isNaN(audio.duration)) {
          return;
        }
  
        const percentage = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = `${percentage}%`;
  
        if (timeEl) {
          timeEl.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
        }
      }, 300);
    }
  
    function updatePlayerButton() {
        if (!playerToggle) {
          return;
        }
      
        const icon = playerToggle.querySelector("[data-player-icon]");
      
        playerToggle.classList.toggle("is-playing", isPlaying);
        playerToggle.setAttribute("aria-label", isPlaying ? "Pause" : "Play");
      
        if (icon) {
          icon.textContent = isPlaying ? "❚❚" : "▶";
        }
      }
  
    function formatTime(seconds) {
      const totalSeconds = Math.floor(seconds);
      const minutes = Math.floor(totalSeconds / 60);
      const rest = totalSeconds % 60;
  
      return `${minutes}:${rest.toString().padStart(2, "0")}`;
    }
  
    if (playerToggle) {
      playerToggle.addEventListener("click", togglePlayState);
    }
  
    window.SoundWavePlayer = {
      playSong
    };
  }
  
  function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }