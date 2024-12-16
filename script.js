import { GameBoard } from "./gameBoard.js";
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
  ticTacToe.setCurrentPlayer(1);
  UpdateBoardUI.enableBoard();
  UpdateBoardUI.updateBoard(ticTacToe);
});
