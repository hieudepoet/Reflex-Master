document.addEventListener("DOMContentLoaded", function () {
  function saveScore(playerName, score) {
    const playerRef = database.ref("scores/" + playerName);
    playerRef.once("value", (snapshot) => {
      const existingData = snapshot.val();
      if (!existingData || score > existingData.score) {
        playerRef.set({ name: playerName, score });
      }
    });
  }

  function initLeaderboard() {
    const leaderboardRef = database.ref("scores");
    const leaderboardList = document.getElementById("leaderboardList");

    if (leaderboardList) {
      leaderboardRef
        .orderByChild("score")
        .limitToLast(10)
        .on("value", (snapshot) => {
          leaderboardList.innerHTML = "";
          const scores = [];
          snapshot.forEach((child) => scores.push(child.val()));
          scores.reverse();

          scores.forEach((s, i) => {
            const li = document.createElement("li");
            li.innerHTML = `<span class="rank">${
              i + 1
            }</span><span class="name">${s.name}</span><span class="score">${
              s.score
            }</span>`;
            li.classList.add(`rank-${i + 1}`);
            leaderboardList.appendChild(li);
          });
        });
    } else {
      console.error("Element with ID 'leaderboardList' not found.");
    }
  }

  window.initLeaderboard = initLeaderboard;
});
