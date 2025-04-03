function showEvent(title, description) {
  document.getElementById("event-title").textContent = title;
  document.getElementById("event-description").textContent = description;
  document.getElementById("event-popup").classList.remove("hidden");
}

function closeEvent() {
  document.getElementById("event-popup").classList.add("hidden");
}

function showAbout() {
  document.getElementById("about-popup").classList.remove("hidden");
}

function closeAbout() {
  document.getElementById("about-popup").classList.add("hidden");
}

// Screen-Wechsel
function showGameScreen() {
  document.getElementById("main-menu").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  updateUI();
}

function returnToMenu() {
  document.getElementById("game-screen").classList.add("hidden");
  document.getElementById("main-menu").classList.remove("hidden");
}

window.onload = function () {
  // Menü-Buttons
  document.getElementById("btn-start").addEventListener("click", showGameScreen);
  document.getElementById("btn-about").addEventListener("click", showAbout);
  document.getElementById("btn-about-close").addEventListener("click", closeAbout);

  // Spielaktionen
  document.getElementById("draw-event").addEventListener("click", drawRandomEvent);
  document.getElementById("event-ok").addEventListener("click", closeEvent);

  // Zurück zum Hauptmenü
  document.getElementById("btn-back").addEventListener("click", returnToMenu);

  // Startwerte anzeigen
  updateUI();
};
