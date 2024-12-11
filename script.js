import { GameBoard } from "./GameBoard.js";
import { Player } from "./Player.js";
import { TicTacToe } from "./TicTacToe.js";
import { UpdateBoardUI } from "./UpdateBoardUI.js";

const gameBoard = new GameBoard(3, 3);
const playerOne = new Player("One");
const playerTwo = new Player("Two");
const ticTacToe = new TicTacToe(gameBoard, playerOne, playerTwo);

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const row = cell.getAttribute("data-row");
    const col = cell.getAttribute("data-column");
    ticTacToe.takeTurn(row, col);
    UpdateBoardUI.updateBoard(ticTacToe);
  });
});

// Draw
// ticTacToe.takeTurn(0, 0);
// ticTacToe.takeTurn(0, 1);
// ticTacToe.takeTurn(0, 2);
// ticTacToe.takeTurn(1, 0);
// ticTacToe.takeTurn(1, 1);
// ticTacToe.takeTurn(2, 2);
// ticTacToe.takeTurn(2, 1);
// ticTacToe.takeTurn(2, 0);
// ticTacToe.takeTurn(1, 2);
