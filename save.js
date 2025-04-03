function saveGame() {
  const saveData = {
    money: money,
    busCondition: busCondition,
    achievements: achievements
  };
  localStorage.setItem("busManagerSave", JSON.stringify(saveData));
}

function loadGame() {
  const saved = localStorage.getItem("busManagerSave");
  if (!saved) {
    alert("Kein Speicherstand gefunden.");
    return;
  }

  const data = JSON.parse(saved);
  money = data.money || 0;
  busCondition = data.busCondition || 100;
  achievements = data.achievements || {};
  updateUI();
}
