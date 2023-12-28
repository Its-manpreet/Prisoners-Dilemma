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

let betrayed = false

async function makeDecision(prevDecision, curround) {
  if (steal_keywords.includes(prevDecision) || betrayed){
    betrayed = true
    return "betray";
  } else {
    return "split"
  }
}

module.exports = { makeDecision };
