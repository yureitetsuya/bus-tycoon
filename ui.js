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

function showGameScreen() {
  document.getElementById("main-menu").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  updateUI();
}

function returnToMenu() {
  document.getElementById("game-screen").classList.add("hidden");
  document.getElementById("main-menu").classList.remove("hidden");
}

// 🃏 Sammelkarten anzeigen
function showCollection() {
  const list = document.getElementById("collection-list");
  list.innerHTML = "";

  if (collectables.length === 0) {
    const item = document.createElement("li");
    item.textContent = "Noch keine Raritäten gefunden.";
    list.appendChild(item);
  } else {
    collectables.forEach(card => {
      const item = document.createElement("li");
      item.textContent = `${card.name} – ${card.value.toLocaleString()} €`;
      list.appendChild(item);
    });
  }

  document.getElementById("collection-popup").classList.remove("hidden");
}

function closeCollection() {
  document.getElementById("collection-popup").classList.add("hidden");
}

window.onload = function () {
  // Hauptmenü
  document.getElementById("btn-start").addEventListener("click", showGameScreen);
  document.getElementById("btn-about").addEventListener("click", showAbout);
  document.getElementById("btn-about-close").addEventListener("click", closeAbout);
  document.getElementById("btn-collection").addEventListener("click", showCollection);
  document.getElementById("btn-collection-close").addEventListener("click", closeCollection);

  // Spielaktionen
  document.getElementById("draw-event").addEventListener("click", drawRandomEvent);
  document.getElementById("event-ok").addEventListener("click", closeEvent);

  // Zurück zum Hauptmenü
  document.getElementById("btn-back").addEventListener("click", returnToMenu);

  // Initiale Werte setzen
  updateUI();
};
