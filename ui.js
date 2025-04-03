function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => tab.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");
}

// Erfolg anzeigen
function showAchievement(text) {
  const list = document.getElementById("achievements-list");
  const entry = document.createElement("li");
  entry.textContent = text;
  list.appendChild(entry);

  document.getElementById("achievements-popup").classList.remove("hidden");

  // Nach 3 Sekunden automatisch ausblenden
  setTimeout(() => {
    closeAchievements();
  }, 3000);
}

// Erfolge manuell öffnen
function showAchievements() {
  document.getElementById("main-menu").classList.add("hidden");
  document.getElementById("achievements-popup").classList.remove("hidden");
}

// Schließen
function closeAchievements() {
  document.getElementById("achievements-popup").classList.add("hidden");
  document.getElementById("main-menu").classList.remove("hidden");
}

// "Über das Spiel" öffnen/schließen
function showAbout() {
  document.getElementById("about-popup").classList.remove("hidden");
  document.getElementById("main-menu").classList.add("hidden");
}

function closeAbout() {
  document.getElementById("about-popup").classList.add("hidden");
  document.getElementById("main-menu").classList.remove("hidden");
}
