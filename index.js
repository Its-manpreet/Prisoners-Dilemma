// Prisoner's Dilemma Game
const { runGame } = require("./src/basegame.js");
const { runTournament } = require("./src/tournament.js");
const config = require("./config/main.json"); // Load configuration settings

console.clear(); // Clear the console for a clean display

if (config.tournament) {
  //run tournament
  runTournament(config.rounds, config.include_self_matches);
} else {
  // Import algorithm modules based on the configuration
  const algorithm1 = require(`./algorithms/${config.algorithm1}`);
  const algorithm2 = require(`./algorithms/${config.algorithm2}`);

  // Run the game with a specified number of rounds from the configuration
  runGame(config.rounds, algorithm1, algorithm2, false);
}
