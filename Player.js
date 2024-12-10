export class Player {
  #name;
  #score = 0;
  static playerCount = 0;

  constructor(name) {
    name = name.trim();

    if (typeof name !== "string") {
      throw new Error("Player name must be a string");
    }

    if (name === "") {
      this.#name = `Player ${Player.playerCount}`;
    } else {
      this.#name = name;
    }

    Player.playerCount++;
  }

  getName() {
    return this.#name;
  }

  getScore() {
    return this.#score;
  }

  addScore(score = 1) {
    if (typeof score !== "number") {
      console.log("Score must be a number");
      return;
    }

    if (score <= 0) {
      console.log("Score must be a positive number");
      return;
    }

    this.#score += score;
  }
}
