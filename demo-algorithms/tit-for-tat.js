
async function makeDecision(opponentPreviousDecision, currentRound) {
  return currentRound === 0 ? "cooperate" : opponentPreviousDecision;
}


module.exports = { makeDecision };
