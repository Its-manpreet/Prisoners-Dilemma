const readline = require("readline");

// Function to get user decision
function getUserDecision() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question("Enter your decision (cooperate/betray): ", (decision) => {
      rl.close();
      resolve(decision.toLowerCase());
    });
  });
}

async function makeDecision() {
  const decision = await getUserDecision() 
  return decision;
}

module.exports = { makeDecision }