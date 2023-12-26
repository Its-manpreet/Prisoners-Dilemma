// Prisoner's Dilemma Game
const utils = require("./src/utils.js"); // Import utility functions
const game = require("./src/gameloop.js"); // Import the game logic
const config = require("./config/main.json"); // Load configuration settings

// Import algorithm modules based on the configuration
const algorithm1 = require(`./algorithms/${config.algorithm1}`);
const algorithm2 = require(`./algorithms/${config.algorithm2}`);

// Function to run the game
async function runGame(rounds) {
  console.clear(); // Clear the console for a clean display

  // Initialize scores for players
  let player1Score = 0;
  let player2Score = 0;

  // Loop through the specified number of rounds
  for (let i = 0; i < rounds; i++) {
    // Play a round and get scores
    const roundScores = await game.playRound(algorithm1, algorithm2);

    // Update total scores for each player
    player1Score += roundScores.player1;
    player2Score += roundScores.player2;

    // Print scores after each round
    console.log(`Player 1 score: ${player1Score}`);
    console.log(`Player 2 score: ${player2Score}`);

    // Pause for a short time between rounds for better readability
    await utils.sleep(1000);
  }

  console.log("=== Game Over ===");
  console.log(
    `Final scores:\nPlayer 1: ${player1Score}\nPlayer 2: ${player2Score}`
  );
}

// Run the game with a specified number of rounds from the configuration
const numberOfRounds = config.rounds; // You can change this as needed
runGame(numberOfRounds);
