let money = 0;
let busCondition = 100;
let achievements = {};

function startNewGame() {
  money = 1000;
  busCondition = 100;
  achievements = {};
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

function runService(income) {
  if (busCondition <= 0) {
    alert("Dein Bus ist kaputt und muss repariert werden!");
    return;
  }

  money += income;
  busCondition -= 10;
  updateUI();
  checkAchievements();
  checkGameOver();
  saveGame();
}

function repairBus() {
  if (money < 100) {
    alert("Nicht genug Geld zum Reparieren!");
    return;
  }

  money -= 100;
  busCondition = 100;
  updateUI();
  saveGame();
}

function updateUI() {
  document.getElementById("money").textContent = money;
  document.getElementById("bus-condition").textContent = busCondition;
}

function checkGameOver() {
  if (money <= 0) {
    document.getElementById("game-ui").classList.add("hidden");
    document.getElementById("game-over").classList.remove("hidden");
  }
}

function resetGame() {
  if (confirm("Bist du sicher? Dein Speicherstand wird gelöscht.")) {
    localStorage.removeItem("busManagerSave");
    location.reload();
  }
}

function checkAchievements() {
  if (!achievements["first-service"] && money >= 1200) {
    achievements["first-service"] = true;
    showAchievement("Erster Dienst gefahren!");
  }

  if (!achievements["rich"] && money >= 10000) {
    achievements["rich"] = true;
    showAchievement("Du hast 10.000 € verdient!");
  }
}
