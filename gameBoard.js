export class GameBoard {
  #board;
  #rowLength;
  #columnLength;

  constructor(row, column) {
    this.#board = new Array(row);

    for (let i = 0; i < this.#board.length; i++) {
      this.#board[i] = new Array(column).fill(0);
    }

    this.#rowLength = row;
    this.#columnLength = column;
  }

  isEmptyCell(row, column) {
    if (this.#board[row][column] === 0) {
      return true;
    } else {
      return false;
    }
  }

  getBoard() {
    return this.#board;
  }

  updateCell(row, column, value) {
    if (row >= this.#rowLength || row < 0) {
      console.log("Invalid row");
      return;
    }

    if (column >= this.#columnLength || column < 0) {
      console.log("Invalid column");
      return;
    }

    this.#board[row][column] = value;
  }
}
