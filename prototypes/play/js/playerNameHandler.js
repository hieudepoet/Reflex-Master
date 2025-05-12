// playerNameHandler.js
const nameInput = document.getElementById("playerNameInput");
const statusSpan = document.getElementById("nameStatus");
newGameBtn = document.getElementById("newGameBtn");

let isNameValid = false;

function isNameTaken(name) {
  const scores = JSON.parse(localStorage.getItem("highScores") || "[]");
  return scores.some(score => score.name.toLowerCase() === name.toLowerCase());
}

nameInput.addEventListener("input", function () {
  const name = nameInput.value.trim();

  if (name.length < 3) {
    statusSpan.textContent = "Too short (at least 3 characters)!";
    statusSpan.style.color = "red";
    newGameBtn.disabled = true;
    return;
  }

  if (isNameTaken(name)) {
    statusSpan.textContent = "Existed playername!";
    statusSpan.style.color = "red";
    newGameBtn.disabled = true;
    isNameValid = false;
  } else {
    statusSpan.textContent = "Valid playername!";
    statusSpan.style.color = "green";
    newGameBtn.disabled = false;
    isNameValid = true;
  }
});

newGameBtn.addEventListener("click", function () {
  if (!isNameValid) return;

  const name = nameInput.value.trim();
  window.playerName = name;
  localStorage.setItem("playerName", name);

  toolsBox.hidePage(pageGameMenu);
  toolsBox.showPage(pagePlayArea); // hoặc gameEngine.start();
  gameEngine.start();
});
