function saveScore(playerName, score) {
    const playerRef = database.ref('scores/' + playerName);
  
    playerRef.once('value', function(snapshot) {
      const existingScore = snapshot.val();
      if (!existingScore || score > existingScore) {
        playerRef.set(score);
      }
    });
  }
  
  function initLeaderboard() {
    const leaderboardRef = database.ref('scores');
  
    leaderboardRef.on('value', function(snapshot) {
      const scores = snapshot.val();
      if (!scores) return;
  
      const sorted = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10); // Top 10
  
      const leaderboard = document.getElementById("leaderboard");
      leaderboard.innerHTML = sorted
        .map(([name, score], index) => `<li>${index + 1}. ${name} - ${score}</li>`)
        .join("");
    });
  }
  