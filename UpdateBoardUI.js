export const UpdateBoardUI = (function () {
  function updateBoard(ticTacToe) {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      const row = cell.getAttribute("data-row");
      const col = cell.getAttribute("data-column");
      cell.textContent = ticTacToe.getCellValue(row, col);
    });
  }

  function updatePlayerScores(playerOne, playerTwo) {
    const playerOneScore = document.querySelector("#playerOneScore");
    const playerTwoScore = document.querySelector("#playerTwoScore");

    playerOneScore.textContent = `${playerOneScore.getAttribute(
      "data-info"
    )} ${playerOne.getScore()}`;

    playerTwoScore.textContent = `${playerTwoScore.getAttribute(
      "data-info"
    )} ${playerTwo.getScore()}`;
  }

  function enableBoard() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.classList.remove("clicked");
      cell.style.pointerEvents = "auto";
    });
  }

  function disableBoard() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.classList.add("clicked");
      cell.style.pointerEvents = "none";
    });
  }

  return {
    updateBoard,
    updatePlayerScores,
    disableBoard,
    enableBoard,
  };
})();
