# Tap Tap Tap Game

Welcome to **Tap Tap Tap**, a fun and competitive web-based game where players tap circles to score points while avoiding obstacles. This game supports single-player and two-player modes, with real-time leaderboard integration using Firebase.

## Demo
Watch the [video demo](https://drive.google.com/file/d/1W7gNYQNBSGarx0lCi5lqL3bD1lNhgHKO/view?usp=sharing) to see how to set up and play the game.

## Getting Started

### Playing on GitHub Pages
1. **Access the Game**:
   - Visit the game on [GitHub Pages](https://hieudepoet.github.io/taptaptap/).
   - The default role is **Player 1**.

2. **Two-Player Mode**:
   - Open the game URL on two laptops (or two browser windows on one laptop).
   - After clicking the **Play** button, update the URL for each player:
     - **Player 1**: Keep the default URL (e.g., `https://your-username.github.io/taptaptap/play/index.html?player=1`).
     - **Player 2**: Append `?player=2` to the URL (e.g., `https://your-username.github.io/taptaptap/play/index.html?player=2`).
   - Refer to the [video demo](https://drive.google.com/file/d/1W7gNYQNBSGarx0lCi5lqL3bD1lNhgHKO/view?usp=sharing) for detailed instructions on updating the URL.

3. **Gameplay**:
   - Tap blue circles to score points.
   - Avoid red circles to prevent losing the game.
   - Complete levels by achieving the tap goal within the time limit.
   - Check the leaderboard to see your ranking (scores are saved to Firebase).

4. **Alternative Access**:
   - From the homepage at `https://your-username.github.io/taptaptap/index.html`, click the **Play** button to start as **Player 1**.
   - To play as **Player 2**, manually append `?player=2` to the URL as shown in the [video demo](https://drive.google.com/file/d/1W7gNYQNBSGarx0lCi5lqL3bD1lNhgHKO/view?usp=sharing).

### Local Setup (if GitHub Pages performance is slow)
If you experience performance issues with GitHub Pages, you can run the game locally using **Live Server**:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/taptaptap.git
   cd taptaptap
   ```

2. **Install Live Server**:
   - Ensure you have [Node.js](https://nodejs.org/) installed.
   - Install the **Live Server** extension in Visual Studio Code or use the `live-server` npm package:
     ```bash
     npm install -g live-server
     ```

3. **Run the Game**:
   - **Play Page**:
     - Navigate to the `play` directory and open `index.html` with Live Server:
       ```bash
       cd play
       live-server
       ```
     - Access the game at `http://localhost:8080/index.html`.
     - For **Player 1**, use the default URL (`http://localhost:8080/index.html?player=1`).
     - For **Player 2**, append `?player=2` to the URL (`http://localhost:8080/index.html?player=2`).
   - **Homepage**:
     - Alternatively, open `taptaptap/index.html` with Live Server:
       ```bash
       live-server
       ```
     - Access the homepage at `http://localhost:8080/index.html`, click **Play** to start as **Player 1**, or append `?player=2` for **Player 2**.

4. **Setup Player Roles**:
   - Follow the [video demo](https://drive.google.com/file/d/1W7gNYQNBSGarx0lCi5lqL3bD1lNhgHKO/view?usp=sharing) to configure player roles by modifying the URL.

## Dependencies
- **Firebase**: Used for real-time leaderboard data. Ensure you have configured your Firebase project in `js/firebase.js`.
- **Live Server** (optional): For local development and testing.

## Notes
- Ensure a stable internet connection for Firebase leaderboard updates.
- If you encounter issues with GitHub Pages, running the game locally with Live Server is recommended for better performance.
- Refer to the [video demo](https://drive.google.com/file/d/1W7gNYQNBSGarx0lCi5lqL3bD1lNhgHKO/view?usp=sharing) for a step-by-step guide on gameplay and player setup.

