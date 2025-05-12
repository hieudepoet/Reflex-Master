// Lấy ID máy (player1 hoặc player2)
const params = new URLSearchParams(window.location.search);
const myId = params.get("side") || prompt("Bạn là player1 hay player2?");
const opponentId = myId === "player1" ? "player2" : "player1";

// Lấy tên người chơi từ biến toàn cục hoặc localStorage
const playerName = window.playerName || localStorage.getItem("playerName") || myId;

// Khi kết thúc game, gọi hàm này để ghi kết quả
function sendScore(score) {
  database.ref(`matchRoom/${myId}`).set({
    name: playerName,
    score: score,
    finished: true
  });
}
