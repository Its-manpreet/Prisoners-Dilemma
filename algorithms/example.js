const name = "Example"

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
  // Implement your second algorithm logic here
  // You can use user input, randomization, or any strategy you prefer
  // round number starts from 0 eg- 0,1,2
  return "betray";
}

module.exports = { makeDecision, name };
