// Sleep function
function sleep(ms) {
  // Returns a promise that resolves after a specified number of milliseconds
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Export the sleep function for use in other modules
module.exports = { sleep };
