// tournament.js
const { runGame } = require("./basegame.js");
const fs = require("fs");
const config = require("../config/main.json");

async function runTournament(rounds, includeSelfMatches) {
  const algorithms = fs.readdirSync("./algorithms");

  let tournamentResults = {};

  for (let i = 0; i < algorithms.length; i++) {
    const algorithm1 = require(`../algorithms/${algorithms[i]}`);
    tournamentResults[algorithm1.name] = { points: 0, wins: 0 };

    for (let j = 0; j < algorithms.length; j++) {
      if (!includeSelfMatches && i === j) continue;

      const algorithm2 = require(`../algorithms/${algorithms[j]}`);

      if (config.show_tournaments_members)
        console.log(`=== Match: ${algorithm1.name} vs. ${algorithm2.name} ===`);

      const result = await runGame(rounds, algorithm1, algorithm2, true); // Pass true for tournament mode
      tournamentResults[algorithm1.name].points += result.totalPoints1;
      tournamentResults[algorithm1.name].wins += result.Win1;
    }
  }

  // Save tournament results to a text file
  const resultsText = formatResultsText(tournamentResults);
  fs.writeFileSync("./tournamentResults.txt", resultsText);

  // Display tournament results
  console.log("=== Tournament Results ===");
  console.log(tournamentResults);
}

function formatResultsText(results) {
  let text = "=== Tournament Results ===\n";
  for (const [algorithm, data] of Object.entries(results)) {
    text += `${algorithm}: Points - ${data.points}, Wins - ${data.wins}\n`;
  }
  return text;
}

module.exports = { runTournament };
