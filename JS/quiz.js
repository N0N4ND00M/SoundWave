function initQuiz() {
    const form = document.querySelector("[data-quiz-form]");
    const result = document.querySelector("[data-quiz-result]");
    const title = document.querySelector("[data-result-title]");
    const description = document.querySelector("[data-result-description]");
    const exploreLink = document.querySelector("[data-quiz-explore]");
  
    if (!form) {
      return;
    }
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const formData = new FormData(form);
  
      const values = [
        formData.get("feeling"),
        formData.get("energy"),
        formData.get("time")
      ];
  
      const mood = getMostCommonMood(values);
      const titleText = mood === "night" ? "Night Drive" : capitalize(mood);
  
      title.textContent = titleText;
      description.textContent = QUIZ_DESCRIPTIONS[mood] || "Vi hittade ett mood som passar dig.";
  
      result.hidden = false;
  
      if (exploreLink) {
        exploreLink.addEventListener("click", () => {
          setTimeout(() => {
            const filterButton = document.querySelector(`[data-filter="${mood}"]`);
  
            if (filterButton) {
              filterButton.click();
            }
          }, 50);
        }, { once: true });
      }
    });
  }
  
  function getMostCommonMood(values) {
    const score = {};
  
    values.forEach((value) => {
      score[value] = (score[value] || 0) + 1;
    });
  
    return Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
  }