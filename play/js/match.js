const params = new URLSearchParams(window.location.search);
const myId = params.get("side") || prompt("Bạn là player1 hay player2?");
const opponentId = myId === "player1" ? "player2" : "player1";

const playerName =
  window.playerName || localStorage.getItem("playerName") || myId;

let currentMatchId = localStorage.getItem("currentMatchId");

if (!window.database) {
  console.error("Firebase chưa được khởi tạo!");
}

async function findOrCreateMatch() {
  const latestMatchRef = database.ref("matchRoom/latestMatchId");
  const latestSnapshot = await latestMatchRef.get();

  let latestId = latestSnapshot.exists() ? latestSnapshot.val() : 0;
  let matchId = `match_${latestId}`;
  let matchRef = database.ref(`matchRoom/${matchId}`);
  let matchSnap = await matchRef.get();

  if (matchSnap.exists()) {
    const data = matchSnap.val();
    const p1 = data.player1?.finished;
    const p2 = data.player2?.finished;

    // Nếu cả 2 chưa kết thúc trận này → dùng luôn
    if (!p1 || !p2) {
      console.log("✅ Found ongoing match:", matchId);
      return matchId;
    }
  }

  // Nếu không có hoặc trận cũ đã kết thúc → tạo mới
  return await createNewMatch();
}

// Tạo trận mới với matchId tăng dần
async function createNewMatch() {
  const counterRef = database.ref("matchRoom/latestMatchId");

  const result = await counterRef.transaction((current) => {
    return (current || 0) + 1;
  });

  if (result.committed) {
    const newId = result.snapshot.val();
    const matchId = `match_${newId}`;

    await database.ref(`matchRoom/${matchId}`).set({
      player1: { score: 0, finished: false },
      player2: { score: 0, finished: false },
    });

    console.log("✅ Match created:", matchId);
    currentMatchId = matchId;
    return matchId;
  } else {
    throw new Error("❌ Failed to create match.");
  }
}

async function sendScore(score) {
  const latestMatchRef = database.ref("matchRoom/latestMatchId");
  const latestSnapshot = await latestMatchRef.get();

  let latestId = latestSnapshot.exists() ? latestSnapshot.val() : 0;
  let matchId = `match_${latestId}`;
  if (!matchId) {
    alert("❌ Không tìm thấy matchId!");
    return;
  }

  database.ref(`matchRoom/${matchId}/${myId}`).update({
    score: score,
    finished: true,
  });

  console.log("✅ Score sent for", myId);
}

function resetMatchroom() {
  const matchId = currentMatchId || localStorage.getItem("currentMatchId");
  if (!matchId) return;

  database.ref(`matchRoom/${matchId}/${myId}`).update({
    finished: false,
  });

  console.log("🔁 Matchroom reset for", myId);
}
