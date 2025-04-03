function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.classList.add("hidden"));
  const target = document.getElementById(tabId);
  if (target) target.classList.remove("hidden");
}

function showPopup(id) {
  const popup = document.getElementById(id);
  if (popup) popup.classList.remove("hidden");
}

function closePopup(id) {
  const popup = document.getElementById(id);
  if (popup) popup.classList.add("hidden");
}

function showAchievement(text) {
  const list = document.getElementById("achievements-list");
  const entry = document.createElement("li");
  entry.textContent = text;
  list.appendChild(entry);
  showPopup("popup-achievements");
}

window.onload = function () {
  // Hauptmenü
  document.getElementById("btn-new").addEventListener("click", startNewGame);
  document.getElementById("btn-continue").addEventListener("click", continueGame);
  document.getElementById("btn-achievements").addEventListener("click", () => showPopup("popup-achievements"));
  document.getElementById("btn-about").addEventListener("click", () => showPopup("popup-about"));

  // Popups schließen
  document.getElementById("btn-achievements-close").addEventListener("click", () => closePopup("popup-achievements"));
  document.getElementById("btn-about-close").addEventListener("click", () => closePopup("popup-about"));
  document.getElementById("btn-restart").addEventListener("click", startNewGame);

  // Tabs
  document.querySelectorAll(".tabs button").forEach(button => {
    button.addEventListener("click", () => {
      showTab(button.dataset.tab);
    });
  });

  // Dienste
  document.querySelectorAll("[data-service]").forEach(button => {
    button.addEventListener("click", () => {
      const value = parseInt(button.dataset.service);
      runService(value);
    });
  });

  // Reparieren
  document.getElementById("btn-repair").addEventListener("click", repairBus);

  // Zurücksetzen
  document.getElementById("btn-reset").addEventListener("click", resetGame);
};
