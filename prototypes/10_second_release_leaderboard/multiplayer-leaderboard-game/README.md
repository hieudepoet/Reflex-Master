# Multiplayer Leaderboard Game

## Overview
This project is a multiplayer tapping game where players can compete for high scores. The game features a continuously updating leaderboard that reflects score changes in real-time. Players can enter their names, and the game will validate the names to ensure uniqueness. When a player achieves a new record, celebratory effects and sounds are triggered.

## Features
- Multiplayer functionality allowing multiple players to compete.
- Real-time leaderboard that updates as scores change.
- Player name validation to ensure unique names.
- Sound effects for scoring and achieving new records.
- Responsive design for various devices.

## Project Structure
```
multiplayer-leaderboard-game
├── public
│   ├── index.html          # Main HTML document for the game
│   ├── style.css          # Styles for the game interface
│   └── sounds             # Directory containing sound files for effects
├── src
│   ├── js
│   │   ├── habibiScript.js # Main game logic
│   │   ├── leaderboard.js   # Leaderboard functionality
│   │   ├── playerNameHandler.js # Player name input validation
│   │   └── firebase.js      # Firebase initialization and database connection
│   └── assets               # Directory for other assets (images, icons, etc.)
├── package.json             # npm configuration file
└── README.md                # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd multiplayer-leaderboard-game
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Open `public/index.html` in a web browser to play the game.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes. Make sure to follow the coding standards and include tests for new features.

## License
This project is open-source and available under the MIT License.