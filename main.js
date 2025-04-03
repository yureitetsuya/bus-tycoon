let drivers = 2;
let vehicles = 2;
let services = 0;
let money = 1000;
let collectables = []; // 🟩 Sammlung seltener Karten

const events = [
  // --- Standard-Events ---
  {
    title: "Oh nein! Bus beschädigt.",
    description: "Ein Fahrzeug fällt aus. Du hast jetzt ein Fahrzeug weniger.",
    effect: () => { vehicles = Math.max(0, vehicles - 1); }
  },
  {
    title: "Fahrer gefunden!",
    description: "Du hast 2 neue Fahrer angeworben.",
    effect: () => { drivers += 2; }
  },
  {
    title: "Dienst gewonnen!",
    description: "Du hast einen neuen Linienauftrag erhalten.",
    effect: () => { services += 1; money += 500; }
  },
  {
    title: "Werkstattrechnung",
    description: "Du musst 300 € für Reparaturen zahlen.",
    effect: () => { money = Math.max(0, money - 300); }
  },

  // --- Geld- & Politik-Events ---
  {
    title: "Umweltpauschale",
    description: "Du erhältst eine Umweltprämie für deinen Fuhrpark: +750 €",
    effect: () => { money += 750; }
  },
  {
    title: "Betriebsprüfung!",
    description: "Der Betriebsprüfer war da. Zahle 400 € Steuernachzahlung.",
    effect: () => { money = Math.max(0, money - 400); }
  },
  {
    title: "Tankkosten steigen",
    description: "Preisschock an der Zapfsäule – du verlierst 200 €.",
    effect: () => { money = Math.max(0, money - 200); }
  },
  {
    title: "Du hast ein 9-Euro-Ticket verkauft!",
    description: "Zwar billig, aber bringt immerhin 100 € ein.",
    effect: () => { money += 100; }
  },
  {
    title: "Fördermittel erhalten!",
    description: "Das Verkehrsministerium hat dir 1.000 € überwiesen.",
    effect: () => { money += 1000; }
  },
  {
    title: "Fahrgastbeschwerde",
    description: "Ein Fahrgast hat sich beschwert – 150 € für Wiedergutmachung.",
    effect: () => { money = Math.max(0, money - 150); }
  },
  {
    title: "Stromausfall!",
    description: "Dein Betriebshof war ohne Strom – 200 € Schaden.",
    effect: () => { money = Math.max(0, money - 200); }
  },

  // --- Fahrzeuge / Dienste ---
  {
    title: "Ersatzbus gemietet",
    description: "Du bekommst 1 Fahrzeug dazu (Miete für 3 Tage).",
    effect: () => { vehicles += 1; }
  },
  {
    title: "Unfall auf Linie",
    description: "Ein Fahrer war in einen Unfall verwickelt. Du verlierst ein Fahrzeug.",
    effect: () => { vehicles = Math.max(0, vehicles - 1); }
  },
  {
    title: "Ferienzeit!",
    description: "Ein Ferienfahrplan wurde aktiviert – 2 Dienste mehr.",
    effect: () => { services += 2; }
  },
  {
    title: "Neuer Linienvertrag",
    description: "Du hast einen Linienvertrag erhalten. +1 Dienst, +1000 €.",
    effect: () => { services += 1; money += 1000; }
  },
  {
    title: "Werkstattbonus",
    description: "Du bekommst 1 neues Fahrzeug (generalüberholt).",
    effect: () => { vehicles += 1; }
  },

  // --- Personal / Probleme ---
  {
    title: "Fahrer krank",
    description: "Ein Fahrer fällt aus. Du hast jetzt einen weniger.",
    effect: () => { drivers = Math.max(0, drivers - 1); }
  },
  {
    title: "Bewerbung eingegangen",
    description: "Ein Fahrer bewirbt sich bei dir. Du hast jetzt einen mehr.",
    effect: () => { drivers += 1; }
  },
  {
    title: "Streikandrohung",
    description: "Unzufriedene Fahrer – du verlierst vorerst 1 Fahrer.",
    effect: () => { drivers = Math.max(0, drivers - 1); }
  },
  {
    title: "Fahrer gesperrt!",
    description: "Ein Fahrer wurde bei einem Verkehrsbetrieb gesperrt – du verlierst 1 Fahrer und 1 Dienst.",
    effect: () => {
      drivers = Math.max(0, drivers - 1);
      services = Math.max(0, services - 1);
    }
  },
  {
    title: "Verspätung wegen Stau",
    description: "Verspätungen führen zu Vertragskürzungen – 1 Dienst verloren.",
    effect: () => { services = Math.max(0, services - 1); }
  },
  {
    title: "Fahrerflucht!",
    description: "Ein Fahrer hat ohne Kündigung den Betrieb verlassen.",
    effect: () => { drivers = Math.max(0, drivers - 1); }
  },

  // --- Raritäten / Sammlerstücke ---
  {
    title: "Rarität gefunden!",
    description: "Du hast einen Mercedes-Benz O405N entdeckt. Kartenwert: 500.000 €.",
    effect: () => {
      collectables.push({ name: "Mercedes-Benz O405N", value: 500000 });
      showEvent("Rarität gefunden!", "Der O405N wurde deiner Sammlung hinzugefügt.");
    }
  },
  {
    title: "Rarität gefunden!",
    description: "Du hast tatsächlich einen Büssing-Emmelmann T3000 gefunden! Kartenwert: 1.500.000 €.",
    effect: () => {
      collectables.push({ name: "Büssing-Emmelmann T3000", value: 1500000 });
      showEvent("Rarität gefunden!", "Der Büssing-Emmelmann wurde deiner Sammlung hinzugefügt.");
    }
  },
  {
    title: "Rarität gefunden!",
    description: "Du hast einen MAN SL 200 in Museumszustand entdeckt! Kartenwert: 300.000 €.",
    effect: () => {
      collectables.push({ name: "MAN SL 200", value: 300000 });
      showEvent("Rarität gefunden!", "Der MAN SL 200 wurde deiner Sammlung hinzugefügt.");
    }
  },
  {
    title: "Rarität gefunden!",
    description: "Ein legendärer Kässbohrer Setra S215UL ist dir zugelaufen! Kartenwert: 750.000 €.",
    effect: () => {
      collectables.push({ name: "Setra S215UL", value: 750000 });
      showEvent("Rarität gefunden!", "Der Setra S215UL wurde deiner Sammlung hinzugefügt.");
    }
  },
  {
    title: "Rarität gefunden!",
    description: "Du hast eine Prototyp-Studie des Neoplan N4009 ausgegraben! Kartenwert: 1.000.000 €.",
    effect: () => {
      collectables.push({ name: "Neoplan N4009 Prototyp", value: 1000000 });
      showEvent("Rarität gefunden!", "Der Neoplan N4009 wurde deiner Sammlung hinzugefügt.");
    }
  },

  // --- 💀 VDL Karte ---
  {
    title: "💀 VDL CITEA gezogen!",
    description: "Du hast einen VDL CITEA gekauft. Leider war das dein Ende.",
    effect: () => {
      showEvent("💀 VDL CITEA gezogen!", "Du hast einen VDL gekauft. Leider war das dein Ende. Das Spiel wird neu gestartet...");
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  }
];

function drawRandomEvent() {
  const random = events[Math.floor(Math.random() * events.length)];

  // VDL = Sofortiger Neustart
  if (random.title.includes("VDL")) {
    random.effect();
    return;
  }

  random.effect();
  showEvent(random.title, random.description);
  updateUI();
}

function updateUI() {
  document.getElementById("driver-count").textContent = drivers;
  document.getElementById("vehicle-count").textContent = vehicles;
  document.getElementById("service-count").textContent = services;
  document.getElementById("money").textContent = money;
}
