async function makeDecision(opponentPreviousDecision, currentRound) {
  return Math.random() < 0.5 ? "cooperate" : "betray";
}


module.exports = { makeDecision };
