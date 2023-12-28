// Prisoner's Dilemma Game
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

  let player1move
  let player2move

  // Loop through the specified number of rounds
  for (let i = 0; i < rounds; i++) {
    // Play a round and get scores
    const round = await game.playRound(algorithm1, algorithm2, i, player1move, player2move);

    // Update total scores for each player
    player1Score += round.player1Score;
    player2Score += round.player2Score;

    //get the last move
    player1move = round.player1move;
    player2move = round.player2move;

    // Print scores after each round
    if (config.per_round_scores) console.log("=== New Round ===");
    if (config.per_round_scores) console.log(`Player 1 score: ${player1Score}`);
    if (config.per_round_scores) console.log(`Player 2 score: ${player2Score}`);
  }

  console.log("=== Game Over ===");
  console.log(
    `Final scores:\nPlayer 1: ${player1Score}\nPlayer 2: ${player2Score}`
  );
}

// Run the game with a specified number of rounds from the configuration
const numberOfRounds = config.rounds; // You can change this as needed
runGame(numberOfRounds);
