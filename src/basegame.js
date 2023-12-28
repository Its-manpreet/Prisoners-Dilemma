const game = require("./gameloop.js"); // Import the game logic
const config = require("../config/main.json");

// Function to run the game
async function runGame(rounds, algorithm1, algorithm2, isTournament) {
  // Initialize scores for players
  let player1Score = 0;
  let player2Score = 0;

  let player1move;
  let player2move;

  let winner;

  let results = {}; // Store results for each algorithm

  // Loop through the specified number of rounds
  for (let i = 0; i < rounds; i++) {
    // Play a round and get scores
    const round = await game.playRound(
      algorithm1,
      algorithm2,
      i,
      player1move,
      player2move
    );

    // Update total scores for each player
    player1Score += round.player1Score;
    player2Score += round.player2Score;

    // Get the last move
    player1move = round.player1move;
    player2move = round.player2move;

    // Print scores after each round
    if (config.per_round_scores) console.log("=== New Round ===");
    if (config.per_round_scores) console.log(`Player 1 score: ${player1Score}`);
    if (config.per_round_scores) console.log(`Player 2 score: ${player2Score}`);
  }

  //choose winnervand record scores
  if (player1Score > player2Score) {
    winner = `Player 1`;
    results = {
      totalPoints1: player1Score,
      Win1: 1,
      Lose1: 0,
      Draw1: 0,
      totalPoints2: player2Score,
      Win2: 0,
      Lose2: 1,
      Draw2: 0,
    };
  } else if (player2Score > player1Score) {
    winner = `Player 2`;
    results = {
      totalPoints1: player1Score,
      Win1: 0,
      Lose1: 1,
      Draw1: 0,
      totalPoints2: player2Score,
      Win2: 1,
      Lose2: 0,
      Draw2: 0,
    };
  } else {
    winner = "Draw";
    results = {
      totalPoints1: player1Score,
      Win1: 0,
      Lose1: 0,
      Draw1: 1,
      totalPoints2: player2Score,
      Win2: 0,
      Lose2: 0,
      Draw2: 1,
    };
  }
  // Display final scores for a single game
  if (!isTournament) console.log("=== Game Over ===");
  if (!isTournament) console.log(`Winner is:\n${winner}`);
  if (!isTournament)
    console.log(
      `Final scores:\nPlayer 1: ${player1Score}\nPlayer 2: ${player2Score}`
    );
  if (config.show_tournaments_round_scores)
    console.log(
      `Player 1: ${player1Score} | Player 2: ${player2Score} | Winner is: ${winner}`
    );

  if (isTournament) return results;
}

module.exports = { runGame };
