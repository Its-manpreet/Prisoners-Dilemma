const utils = require("./utils.js"); // Import utility functions
const points = require("../config/points.json"); // Load points configuration

const split_keywords = [
  "split",
  "SPLIT",
  "cooperate",
  "COOPERATE",
  "sp",
  "SP",
  "c",
  "C",
];
const steal_keywords = [
  "steal",
  "STEAL",
  "betray",
  "BETRAY",
  "st",
  "ST",
  "b",
  "B",
];

// Function to simulate a round
async function playRound(algorithm1, algorithm2) {
  let player1Score = 0;
  let player2Score = 0;
  console.log("=== New Round ===");

  // Get decisions from two players using their algorithms
  const player1Decision = await algorithm1.makeDecision();
  const player2Decision = await algorithm2.makeDecision();

  console.log(`Player 1 decision: ${player1Decision}`);
  console.log(`Player 2 decision: ${player2Decision}`);

  // Evaluate the decisions and update scores
  if (
    split_keywords.includes(player1Decision) &&
    split_keywords.includes(player2Decision)
  ) {
    console.log("Both players cooperate. Both get a point.");
    player1Score += points.split_both;
    player2Score += points.split_both;
  } else if (
    split_keywords.includes(player1Decision) &&
    steal_keywords.includes(player2Decision)
  ) {
    console.log(
      "Player 1 cooperates, but Player 2 betrays. Player 1 gets 0 points, and Player 2 gets 2 points."
    );
    player2Score += points.steal;
  } else if (
    steal_keywords.includes(player1Decision) &&
    split_keywords.includes(player2Decision)
  ) {
    console.log(
      "Player 1 betrays, but Player 2 cooperates. Player 1 gets 2 points, and Player 2 gets 0 points."
    );
    player1Score += points.steal;
  } else if (
    steal_keywords.includes(player1Decision) &&
    steal_keywords.includes(player2Decision)
  ) {
    console.log("Both players betray. Both get 1 point.");
    player1Score += points.steal_both;
    player2Score += points.steal_both;
  } else {
    console.log("An error occurred. Did you enter a valid option?");
  }

  // Return scores for this round
  return { player1: player1Score, player2: player2Score };
}

module.exports = { playRound };
