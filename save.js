function saveGame() {
  localStorage.setItem("bus-money", money);
  localStorage.setItem("bus-condition", busCondition);
}

function loadGame() {
  const savedMoney = localStorage.getItem("bus-money");
  const savedCondition = localStorage.getItem("bus-condition");

  money = savedMoney !== null ? parseInt(savedMoney) : 1000;
  busCondition = savedCondition !== null ? parseInt(savedCondition) : 100;
}
