let favoriteIds = new Set();

function initFavoriteButtonsInside(container = document) {
  const buttons = container.querySelectorAll("[data-favorite-btn]");

  buttons.forEach((button) => {
    const card = button.closest("[data-song-id]");
    const id = Number(card.dataset.songId);

    if (favoriteIds.has(id)) {
      button.classList.add("is-favorite");
      button.textContent = "♥";
      card.classList.add("is-favorite-card");
    }

    button.addEventListener("click", (event) => {
      event.stopPropagation();

      if (favoriteIds.has(id)) {
        favoriteIds.delete(id);
        button.classList.remove("is-favorite");
        button.textContent = "♡";
        card.classList.remove("is-favorite-card");
      } else {
        favoriteIds.add(id);
        button.classList.add("is-favorite");
        button.textContent = "♥";
        card.classList.add("is-favorite-card");
      }

      updateFavoriteCount();
    });
  });

  updateFavoriteCount();
}

function updateFavoriteCount() {
  const countEl = document.querySelector("[data-favorite-count]");

  if (countEl) {
    countEl.textContent = `Favorites: ${favoriteIds.size}`;
  }
}