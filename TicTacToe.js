export class TicTacToe {
  #board;
  #playerOne;
  #playerTwo;
  #currentTurn = 1;

  constructor(board, playerOne, playerTwo) {
    this.#board = board;
    this.#playerOne = playerOne;
    this.#playerTwo = playerTwo;
  }

  takeTurn(row, column) {
    // Player one is X , Player two is O

    if (!this.#board.isEmptyCell(row, column)) {
      console.log("This cell is already occupied");
      return;
    }

    console.log(`Current player: ${this.#currentTurn}`);

    if (this.#currentTurn === 1) {
      // Player one takes a turn
      this.#board.updateCell(row, column, 1);
      if (this.playerOneHasWonRound()) {
        console.log("PLAYER ONE WINS");
      }
      this.#currentTurn = 2;
    } else if (this.#currentTurn === 2) {
      // Player two takes a turn
      this.#board.updateCell(row, column, 2);
      if (this.playerTwoHasWonRound()) {
        console.log("PLAYER TWO WINS");
      }
      this.#currentTurn = 1;
    }
  }

  playerOneHasWonRound() {
    return (
      this.checkRows() === 1 ||
      this.checkColumns() === 1 ||
      this.checkDiagonals() === 1
    );
  }

  playerTwoHasWonRound() {
    return (
      this.checkRows() === 2 ||
      this.checkColumns() === 2 ||
      this.checkDiagonals() === 2
    );
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
}