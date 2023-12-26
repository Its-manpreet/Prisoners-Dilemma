# Prisoner's Dilemma Game

This project implements a simple text-based version of the Prisoner's Dilemma game in Node.js. In the Prisoner's Dilemma, two players must decide whether to "cooperate" or "betray" without knowing the other player's decision. The outcome is based on a set of rules, and players earn points accordingly.

## Setup

1. ### Clone the Repository:

```bash
git clone <repository-url>
```

2. ### Run the Game:

```bash
node index.js
```

## Configuration

- `config/main.json`: Configure the number of rounds and choose algorithms for each player.

```json
{
  "rounds": 3,
  "algorithm1": "manual.js",
  "algorithm2": "example.js"
}
```

- `config/points.json`: Set the points awarded for different outcomes in the game.

```json
{
  "split_both": 3,
  "steal": 5,
  "steal_both": 1
}
```

## Algorithms

- Algorithms for each player are stored in the algorithms directory.
- You can create custom algorithms by implementing the makeDecision function in separate files.
- Sample algorithms (manual.js and example.js) are provided for reference.

## Folder Structure

- `src/`: Contains utility functions and the main game loop.
- `algorithms/`: Store individual algorithm files here.
- `config/`: Configuration files for the game.

## Contributions

Feel free to contribute to this project by creating new algorithms, enhancing the game logic, or improving documentation. Submit a pull request to share your changes.
<!-- 
## License

This project is licensed under the MIT License. -->
