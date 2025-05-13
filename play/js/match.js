// // Lấy ID máy (player1 hoặc player2)
// const params = new URLSearchParams(window.location.search);
// const myId = params.get("side") || prompt("Bạn là player1 hay player2?");
// const opponentId = myId === "player1" ? "player2" : "player1";

// // Lấy tên người chơi từ biến toàn cục hoặc localStorage
// const playerName = window.playerName || localStorage.getItem("playerName") || myId;


// // Khi kết thúc game, gọi hàm này để ghi kết quả
// function sendScore(score) {
//     database.ref(`matchRoom/${currentId}/${myId}`).set({
//         //name: playerName,
//         score: score,
//         finished: true
//     });
// }

// // Reset trạng thái matchroom
// function resetMatchroom() {
//     database.ref(`matchRoom/player1`).update({
//         //name: playerName,
//         finished: false
//     });
//     database.ref('matchRoom/player2').update({
//         finished: false
//     });
// }


const params = new URLSearchParams(window.location.search);
const myId = params.get("side") || prompt("Bạn là player1 hay player2?");
const opponentId = myId === "player1" ? "player2" : "player1";

const playerName = window.playerName || localStorage.getItem("playerName") || myId;

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

    const result = await counterRef.transaction(current => {
        return (current || 0) + 1;
    });

    if (result.committed) {
        const newId = result.snapshot.val();
        const matchId = `match_${newId}`;

        await database.ref(`matchRoom/${matchId}`).set({
        player1: { score: 0, finished: false },
        player2: { score: 0, finished: false }
        });

        console.log("✅ Match created:", matchId);
        currentMatchId = matchId;
        return matchId;
    } else {
        throw new Error("❌ Failed to create match.");
    }
}

// async function createNewMatch() {
//     const matchCounterRef = database.ref("latestMatchId");
//     let newMatchId = 1;

//     await matchCounterRef.transaction((currentId) => {
//         return (currentId || 0) + 1;
//     });

//     const updatedSnapshot = await matchCounterRef.get();
//     newMatchId = updatedSnapshot.val();

//     currentMatchId = `match_${newMatchId}`;
//     localStorage.setItem("currentMatchId", currentMatchId);

//     const matchId = `match_${latestId}`;
//     const matchRef = database.ref(`matchRoom/${matchId}`);
//     // Ghi dữ liệu cho cả 2 người chơi
//     await matchRef.set({
//         player1: {
//         score: 0,
//         finished: false
//         },
//         player2: {
//         score: 0,
//         finished: false
//         }
//     });

//     console.log("✅ New match created:", currentMatchId);
//     return currentMatchId;
// }

function sendScore(score) {
    const matchId = currentMatchId || localStorage.getItem("currentMatchId");
    if (!matchId) {
        alert("❌ Không tìm thấy matchId!");
        return;
    }

    database.ref(`matchRoom/${matchId}/${myId}`).update({
        score: score,
        finished: true
    });

    console.log("✅ Score sent for", myId);
}

function resetMatchroom() {
    const matchId = currentMatchId || localStorage.getItem("currentMatchId");
    if (!matchId) return;

    database.ref(`matchRoom/${matchId}/${myId}`).update({
        finished: false
    });

    console.log("🔁 Matchroom reset for", myId);
}
