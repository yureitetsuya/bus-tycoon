// Startwerte
let drivers = 2;
let vehicles = 2;
let services = 0;
let money = 1000;

// Zufallsereignisse
const events = [
  {
    title: "Oh nein! Bus beschädigt.",
    description: "Ein Fahrzeug fällt aus. Du hast jetzt ein Fahrzeug weniger.",
    effect: () => {
      vehicles = Math.max(0, vehicles - 1);
    }
  },
  {
    title: "Fahrer gefunden!",
    description: "Du hast 2 neue Fahrer angeworben.",
    effect: () => {
      drivers += 2;
    }
  },
  {
    title: "Dienst gewonnen!",
    description: "Du hast einen neuen Linienauftrag erhalten.",
    effect: () => {
      services += 1;
      money += 500;
    }
  },
  {
    title: "Werkstattrechnung",
    description: "Du musst 300 € für Reparaturen zahlen.",
    effect: () => {
      money = Math.max(0, money - 300);
    }
  },
  {
    title: "💀 VDL CITEA gezogen!",
    description: "Du hast einen VDL CITEA gekauft. Leider war das ein Fehler. GAME OVER.",
    effect: () => {
      showEvent("💀 VDL CITEA gezogen!", "Du hast einen VDL gekauft. Leider war das dein Ende. Das Spiel wird neu gestartet...");
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  }
];

// Zufälliges Ereignis
function drawRandomEvent() {
  const random = events[Math.floor(Math.random() * events.length)];

  if (random.title.includes("VDL")) {
    random.effect(); // gleiches wie bei showEvent, aber mit Reload
    return;
  }

  random.effect();
  showEvent(random.title, random.description);
  updateUI();
}

// Update der Infoleiste
function updateUI() {
  document.getElementById("driver-count").textContent = drivers;
  document.getElementById("vehicle-count").textContent = vehicles;
  document.getElementById("service-count").textContent = services;
  document.getElementById("money").textContent = money;
}
