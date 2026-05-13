function initSongsAndFilters() {
    const grid = document.querySelector("[data-song-grid]");
    const filterButtons = document.querySelectorAll("[data-filter]");
    const currentFilterText = document.querySelector("[data-current-filter]");
    const searchInput = document.querySelector("[data-search-input]");
    const sortSelect = document.querySelector("[data-sort-select]");
  
    let activeFilter = "all";
    let searchQuery = "";
    let activeSort = "default";
  
    if (!grid) {
      return;
    }
  
    function createSongCard(song) {
      const article = document.createElement("article");
  
      article.className = "song-card";
      article.dataset.mood = song.mood;
      article.dataset.songId = song.id;
  
      article.innerHTML = `
        <button class="favorite-btn" type="button" aria-label="Markera ${song.title} som favorit" data-favorite-btn>♡</button>
        <div class="song-cover" style="background: linear-gradient(135deg, ${song.colorA}, ${song.colorB});"></div>
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
        <div class="song-meta">
          <span class="mood-pill">${capitalize(song.mood)}</span>
          <span class="small-label">Play</span>
        </div>
      `;
  
      article.addEventListener("click", () => {
        window.SoundWavePlayer.playSong(song);
      });

      return article;
    }
  
    function getFilteredSongs() {
      let visibleSongs = [...SONGS];
  
      if (activeFilter !== "all") {
        visibleSongs = visibleSongs.filter((song) => song.mood === activeFilter);
      }
  
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
  
        visibleSongs = visibleSongs.filter((song) => {
          return (
            song.title.toLowerCase().includes(query) ||
            song.artist.toLowerCase().includes(query) ||
            song.mood.toLowerCase().includes(query)
          );
        });
      }
  
      if (activeSort === "title") {
        visibleSongs.sort((a, b) => a.title.localeCompare(b.title));
      }
  
      if (activeSort === "artist") {
        visibleSongs.sort((a, b) => a.artist.localeCompare(b.artist));
      }
  
      if (activeSort === "mood") {
        visibleSongs.sort((a, b) => a.mood.localeCompare(b.mood));
      }
  
      return visibleSongs;
    }
  
    function renderSongs() {
      grid.innerHTML = "";
  
      const visibleSongs = getFilteredSongs();
  
      if (visibleSongs.length === 0) {
        grid.innerHTML = `
          <article class="song-card">
            <h3>No songs found</h3>
            <p>Try another search word or mood filter.</p>
          </article>
        `;
  
        return;
      }
  
      visibleSongs.forEach((song) => {
        grid.appendChild(createSongCard(song));
      });
  
      initFavoriteButtonsInside(grid);
  
      if (currentFilterText) {
        const filterName = MOOD_TEXT[activeFilter] || "Custom filter";
        currentFilterText.textContent = `${filterName} • ${visibleSongs.length} result(s)`;
      }
    }
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;
  
        filterButtons.forEach((btn) => {
          btn.classList.remove("active-filter");
        });
  
        button.classList.add("active-filter");
  
        renderSongs();
      });
    });
  
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        searchQuery = searchInput.value;
        renderSongs();
      });
    }
  
    if (sortSelect) {
      sortSelect.addEventListener("change", () => {
        activeSort = sortSelect.value;
        renderSongs();
      });
    }
  
    window.SoundWaveFilters = {
      renderSongs
    };
  
    renderSongs();
  }