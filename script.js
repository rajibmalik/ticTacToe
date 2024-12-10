import { GameBoard } from "./GameBoard.js";
import { Player } from "./Player.js";
import { TicTacToe } from "./TicTacToe.js";

const gameBoard = new GameBoard(3, 3);
const playerOne = new Player("One");
const playerTwo = new Player("Two");
const ticTacToe = new TicTacToe(gameBoard, playerOne, playerTwo);

ticTacToe.takeTurn(0, 0);
ticTacToe.takeTurn(1, 0);
ticTacToe.takeTurn(0, 1);
ticTacToe.takeTurn(1, 1);
ticTacToe.takeTurn(0, 2);
ticTacToe.takeTurn(1, 2);
// ticTacToe.takeTurn(1, 2);
// ticTacToe.takeTurn(1, 2);
