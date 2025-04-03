let money = 1000;
let busCondition = 100;

function updateUI() {
  document.getElementById("money").textContent = money;
  document.getElementById("bus-condition").textContent = busCondition;
}

function startNewGame() {
  money = 1000;
  busCondition = 100;
  saveGame();
  document.getElementById("main-menu").classList.add("hidden");
  document.getElementById("game-ui").classList.remove("hidden");
  showTab("dashboard");
  updateUI();
}

function continueGame() {
  loadGame();
  document.getElementById("main-menu").classList.add("hidden");
  document.getElementById("game-ui").classList.remove("hidden");
  showTab("dashboard");
  updateUI();
}

function resetGame() {
  localStorage.removeItem("bus-money");
  localStorage.removeItem("bus-condition");
  location.reload();
}

function runService(income) {
  if (busCondition <= 0) return;

  money += income;
  busCondition -= 10;

  if (money <= 0) {
    showPopup("popup-gameover");
    return;
  }

  // Erfolge
  if (money >= 1200 && !localStorage.getItem("achievement1")) {
    localStorage.setItem("achievement1", "true");
    showAchievement("Erster Dienst gefahren!");
  }

  if (money >= 10000 && !localStorage.getItem("achievement2")) {
    localStorage.setItem("achievement2", "true");
    showAchievement("Du hast 10.000 € verdient!");
  }

  updateUI();
  saveGame();
}

function repairBus() {
  if (money < 100 || busCondition >= 100) return;
  money -= 100;
  busCondition = 100;
  updateUI();
  saveGame();
}
