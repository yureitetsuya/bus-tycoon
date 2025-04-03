function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => tab.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");
}

function showAchievement(text) {
  const list = document.getElementById("achievements-list");
  const entry = document.createElement("li");
  entry.textContent = text;
  list.appendChild(entry);
  document.getElementById("achievements-popup").classList.remove("hidden");
  setTimeout(closeAchievements, 3000);
}

function showAchievements() {
  document.getElementById("main-menu").classList.add("hidden");
  document.getElementById("achievements-popup").classList.remove("hidden");
}

function closeAchievements() {
  document.getElementById("achievements-popup").classList.add("hidden");
  document.getElementById("main-menu").classList.remove("hidden");
}

window.onload = function () {
  // Hauptmenü-Buttons
  document.getElementById("btn-new").addEventListener("click", startNewGame);
  document.getElementById("btn-continue").addEventListener("click", continueGame);
  document.getElementById("btn-achievements").addEventListener("click", showAchievements);

  // Erfolge schließen
  document.getElementById("btn-achievements-close").addEventListener("click", closeAchievements);

  // Tabs (inkl. „Über das Spiel“)
  document.querySelectorAll(".tabs button").forEach((btn) => {
    btn.addEventListener("click", () => showTab(btn.dataset.tab));
  });

  // Dienste
  document.querySelectorAll("[data-service]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const income = parseInt(btn.dataset.service);
      runService(income);
    });
  });

  // Bus reparieren
  document.getElementById("btn-repair").addEventListener("click", repairBus);

  // Reset
  document.getElementById("btn-reset").addEventListener("click", resetGame);

  // Game Over
  document.getElementById("btn-restart").addEventListener("click", startNewGame);
};
