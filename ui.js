function showEvent(title, description) {
  document.getElementById("event-title").textContent = title;
  document.getElementById("event-description").textContent = description;
  document.getElementById("event-popup").classList.remove("hidden");
}

function closeEvent() {
  document.getElementById("event-popup").classList.add("hidden");
}

window.onload = function () {
  document.getElementById("draw-event").addEventListener("click", drawRandomEvent);
  document.getElementById("event-ok").addEventListener("click", closeEvent);

  updateUI(); // Setzt initiale Werte in der Infoleiste
};
