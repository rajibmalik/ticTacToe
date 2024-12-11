export const UpdateBoardUI = (function () {
  const cells = document.querySelectorAll(".cell");

  function updateBoard(ticTacToe) {
    cells.forEach((cell) => {
      const row = cell.getAttribute("data-row");
      const col = cell.getAttribute("data-column");
      cell.textContent = ticTacToe.getCellValue(row, col);
    });
  }

  return {
    updateBoard,
  };
})();
