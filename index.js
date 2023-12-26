// Prisoner's Dilemma Game
const utils = require("./src/utils.js");
const game = require("./src/gameloop.js");
const config = require("./config/main.json");

const algorithm1 = require(`./algorithms/${config.algorithm1}`)
const algorithm2 = require(`./algorithms/${config.algorithm2}`)
// Function to run the game
async function runGame(rounds) {
  console.clear();

  // Initialize scores
  let player1Score = 0;
  let player2Score = 0;

  for (let i = 0; i < rounds; i++) {
    const roundScores = await game.playRound(algorithm1, algorithm2);
    player1Score += roundScores.player1;
    player2Score += roundScores.player2;
    // Print scores
    console.log(`Player 1 score: ${player1Score}`);
    console.log(`Player 2 score: ${player2Score}`);
    await utils.sleep(1000);
  }

  console.log("=== Game Over ===");
  console.log(
    `Final scores:\nPlayer 1: ${player1Score}\nPlayer 2: ${player2Score}`
  );
}

// Run the game with a specified number of rounds
const numberOfRounds = config.rounds; // You can change this as needed
runGame(numberOfRounds);
