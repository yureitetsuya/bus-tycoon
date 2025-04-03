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
}

window.onload = function () {
  // Hauptmenü-Buttons
  document.getElementById("btn-new").addEventListener("click", startNewGame);
  document.getElementById("btn-continue").addEventListener("click", continueGame);

  // Tabs (inkl. Game Over, Achievements, Info)
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

  // Game Over Tab → Neustart
  document.getElementById("btn-restart").addEventListener("click", startNewGame);
};
