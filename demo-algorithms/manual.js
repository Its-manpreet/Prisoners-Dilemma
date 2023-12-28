const readline = require("readline");

// Function to get user decision
function getUserDecision() {
  // Create a readline interface for user input
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Return a promise to handle asynchronous input
  return new Promise((resolve) => {
    // Ask the user to enter their decision
    rl.question("Enter your decision (cooperate/betray): ", (decision) => {
      // Close the readline interface
      rl.close();

      // Resolve the promise with the lowercase version of the user's decision
      resolve(decision.toLowerCase());
    });
  });
}

// Function to make a decision (this is just a wrapper around getUserDecision for now)
async function makeDecision() {
  // Call getUserDecision to get the user's decision
  const decision = await getUserDecision();

  // Return the decision
  return decision;
}

// Export the makeDecision function for use in other modules
module.exports = { makeDecision };
