// ⚙️ Tùy chỉnh cho từng máy (A hoặc B)
const myId = prompt("Bạn là: player1 hay player2?");
const otherId = myId === "player1" ? "player2" : "player1";

const playerLabel = document.getElementById("playerLabel");
playerLabel.textContent = myId;

const readyBtn = document.getElementById("readyBtn");
const status = document.getElementById("status");
const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const endBtn = document.getElementById("endBtn");
const resultScreen = document.getElementById("resultScreen");
const resultMessage = document.getElementById("resultMessage");

let score = 0;

// 1. Nhấn "Sẵn sàng"
readyBtn.addEventListener("click", () => {
  database.ref(`matchRoom/${myId}`).update({
    ready: true,
    name: myId
  });
  readyBtn.disabled = true;
  status.innerText = "Chờ đối thủ...";
});

// 2. Lắng nghe trạng thái matchRoom
database.ref("matchRoom").on("value", snapshot => {
  const data = snapshot.val();
  if (!data) return;

  const bothReady = data.player1?.ready && data.player2?.ready;

  if (bothReady && !data.started) {
    database.ref("matchRoom").update({ started: true });
  }

  if (data.started) {
    status.innerText = "Game bắt đầu!";
    gameArea.style.display = "block";
    status.style.display = "none";

    // Bắt đầu đếm điểm giả lập
    const timer = setInterval(() => {
      score += Math.floor(Math.random() * 10 + 1);
      scoreDisplay.textContent = score;
    }, 800);

    // 3. Khi người chơi nhấn "Kết thúc"
    endBtn.onclick = () => {
      clearInterval(timer);
      gameArea.style.display = "none";
      database.ref(`matchRoom/${myId}`).update({
        score: score,
        finished: true
      });
    };
  }

//   const bothFinished = data.player1?.finished && data.player2?.finished;

//   if (bothFinished && !data.ended) {
//     const winner =
//       data.player1.score > data.player2.score ? "player1" :
//       data.player2.score > data.player1.score ? "player2" :
//       "draw";

//     database.ref("matchRoom").update({
//       ended: true,
//       winner: winner
//     });
//   }

//   if (data.ended) {
//     resultScreen.style.display = "block";
//     if (data.winner === "draw") {
//       resultMessage.innerText = "Hòa!";
//     } else if (data.winner === myId) {
//       resultMessage.innerText = "Bạn Thắng!";
//     } else {
//       resultMessage.innerText = "Bạn Thua!";
//     }
//   }
});
