export class GameBoard {
  #board;
  #rowLength;
  #columnLength;

  constructor(row, column) {
    this.initaliseBoard(row, column);
  }

  initaliseBoard(row, column) {
    this.#board = new Array(row);

    for (let i = 0; i < this.#board.length; i++) {
      this.#board[i] = new Array(column).fill(0);
    }

    this.#rowLength = row;
    this.#columnLength = column;
  }

  isFull() {
    for (let i = 0; i < this.#rowLength; i++) {
      for (let k = 0; k < this.#columnLength; k++) {
        if (this.#board[i][k] === 0) {
          return false;
        }
      }
    }

    return true;
  }

  isEmptyCell(row, column) {
    if (this.#board[row][column] === 0) {
      return true;
    } else {
      return false;
    }
  }

  getCellValue(row, col) {
    return this.#board[row][cell];
  }

  getBoard() {
    return this.#board;
  }

  getRowLength() {
    return this.#rowLength;
  }

  getColumnLength() {
    return this.#columnLength;
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
