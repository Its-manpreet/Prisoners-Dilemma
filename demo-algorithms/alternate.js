async function makeDecision(opponentPreviousDecision, currentRound) {
  return currentRound % 2 === 0 ? "cooperate" : "betray";
}

module.exports = { makeDecision };