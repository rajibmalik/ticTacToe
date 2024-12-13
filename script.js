import { GameBoard } from "./GameBoard.js";
import { Player } from "./Player.js";
import { TicTacToe } from "./TicTacToe.js";
import { UpdateBoardUI } from "./UpdateBoardUI.js";

const gameBoard = new GameBoard(3, 3);
const ticTacToe = new TicTacToe(gameBoard);

const cells = document.querySelectorAll(".cell");
const restartBtn = document.querySelector("#restartBtn");

UpdateBoardUI.highlightPlayerOne();

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const row = cell.getAttribute("data-row");
    const col = cell.getAttribute("data-column");
    ticTacToe.takeTurn(row, col);

    UpdateBoardUI.updateBoard(ticTacToe);

    if (!cell.classList.contains("clicked")) {
      cell.classList.add("clicked");
    }

    const result = ticTacToe.hasFinished();

    if (result != -1) {
      if (result === 1) {
        console.log(`Player ${result} has won`);
        ticTacToe.getPlayerOne().addScore();
      } else if (result === 2) {
        console.log(`Player ${result} has won `);
        ticTacToe.getPlayerTwo().addScore();
      } else {
        console.log("The game has been drawn");
      }
      UpdateBoardUI.disableBoard();
      UpdateBoardUI.updatePlayerScores(
        ticTacToe.getPlayerOne(),
        ticTacToe.getPlayerTwo()
      );
    } else {
      UpdateBoardUI.highlightCurrentPlayer(ticTacToe.getCurrentPlayer());
    }
  });
});

restartBtn.addEventListener("click", () => {
  ticTacToe.getBoard().resetBoard();
  UpdateBoardUI.enableBoard();
  UpdateBoardUI.updateBoard(ticTacToe);
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
