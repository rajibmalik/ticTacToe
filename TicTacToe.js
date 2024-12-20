import { Player } from "./Player.js";

export class TicTacToe {
  #board;
  #playerOne = new Player("Player One");
  #playerTwo = new Player("Player Two");
  #currentTurn = 1;

  constructor(board) {
    this.#board = board;
  }

  getBoard() {
    return this.#board;
  }

  getPlayerOne() {
    return this.#playerOne;
  }

  getPlayerTwo() {
    return this.#playerTwo;
  }

  getCurrentPlayer() {
    return this.#currentTurn;
  }

  setCurrentPlayer(number) {
    if (number < 1 || number > 2) {
      console.log("Number must be equal to 1 or 2");
      return;
    }
    this.#currentTurn = number;
  }

  takeTurn(row, column) {
    // Player one is X , Player two is O

    // Cancels, if targeted cell is already occupied
    if (!this.#board.isEmptyCell(row, column)) {
      console.log("This cell is already occupied");
      return false;
    }

    console.log(`Current player: ${this.#currentTurn}`);

    // Updates the gameboard
    this.#board.updateCell(row, column, this.#currentTurn);

    // Changes the player turn
    this.#currentTurn = this.#currentTurn === 1 ? 2 : 1;
    return true;
  }

  hasFinished() {
    if (
      this.checkRows() === 1 ||
      this.checkColumns() === 1 ||
      this.checkDiagonals() === 1
    ) {
      return 1;
    } else if (
      this.checkRows() === 2 ||
      this.checkColumns() === 2 ||
      this.checkDiagonals() === 2
    ) {
      return 2;
    } else if (this.#board.isFull()) {
      return 3;
    }

    return -1;
  }

  checkRows() {
    const board = this.#board.getBoard();

    for (let i = 0; i < 3; i++) {
      let xCount = 0;
      let oCount = 0;
      for (let k = 0; k < 3; k++) {
        if (board[i][k] === 1) {
          xCount++;
        } else if (board[i][k] === 2) {
          oCount++;
        }

        if (xCount === 3) {
          return 1;
        } else if (oCount === 3) {
          return 2;
        }
      }
    }

    return 0;
  }

  checkColumns() {
    const board = this.#board.getBoard();

    for (let i = 0; i < 3; i++) {
      let xCount = 0;
      let oCount = 0;
      for (let k = 0; k < 3; k++) {
        if (board[k][i] === 1) {
          xCount++;
        } else if (board[k][i] === 2) {
          oCount++;
        }

        if (xCount === 3) {
          return 1;
        } else if (oCount === 3) {
          return 2;
        }
      }
    }

    return 0;
  }

  checkDiagonals() {
    const board = this.#board.getBoard();

    // top left to bottom right
    if (board[0][0] == 1 && board[1][1] == 1 && board[2][2] == 1) {
      return 1;
    } else if (board[0][0] == 2 && board[1][1] == 2 && board[2][2] == 2) {
      return 2;
    }

    // bottom left to top right
    if (board[0][2] == 1 && board[1][1] == 1 && board[2][0] == 1) {
      return 1;
    } else if (board[0][2] == 2 && board[1][1] == 2 && board[2][0] == 2) {
      return 2;
    }

    return 0;
  }

  getCellValue(row, col) {
    const value = this.#board.getBoard()[row][col];

    if (value === 1) {
      return "X";
    } else if (value === 2) {
      return "O";
    }
  }
}
