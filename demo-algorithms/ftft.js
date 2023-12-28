const name = "Forgiving tit-for-tat"

//allowed keywords for split
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
//allowed keywords for steal
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

async function makeDecision(prevDecision, curround) {
  if (steal_keywords.includes(prevDecision) && Math.random() > 0.9) {
    return "betray";
  } else {
    return curround === 0 ? "cooperate" : prevDecision;
  }
}

module.exports = { makeDecision, name };
