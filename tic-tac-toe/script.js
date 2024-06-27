const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const updateBoard = (index, marker) => {
    if (board[index] === "") {
      board[index] = marker;
      return true;
    }
    return false;
  };

  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  return { getBoard, updateBoard, resetBoard };
})();

const Player = (name, marker) => {
  return { name, marker };
};

const Game = (() => {
  let players = [];
  let currentPlayerIndex = 0;
  let gameActive = false;

  const startGame = (player1Name, player2Name) => {
    players = [Player(player1Name, "X"), Player(player2Name, "O")];
    currentPlayerIndex = 0;
    Gameboard.resetBoard();
    gameActive = true;
    renderBoard();
  };

  const playTurn = (index) => {
    if (
      gameActive &&
      Gameboard.updateBoard(index, players[currentPlayerIndex].marker)
    ) {
      if (checkWin()) {
        displayResult(`${players[currentPlayerIndex].name} Kazandı!`);
        gameActive = false;
      } else if (checkTie()) {
        displayResult("It's a tie!");
        gameActive = false;
      } else {
        currentPlayerIndex = 1 - currentPlayerIndex;
        renderBoard();
      }
    }
  };

  const checkWin = () => {
    const board = Gameboard.getBoard();
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winPatterns.some((pattern) => {
      const [a, b, c] = pattern;
      return board[a] && board[a] === board[b] && board[a] === board[c];
    });
  };

  const checkTie = () => {
    return Gameboard.getBoard().every((cell) => cell !== "");
  };

  const displayResult = (result) => {
    document.getElementById("game-result").textContent = result;
  };

  const renderBoard = () => {
    const board = Gameboard.getBoard();
    const gameboardDiv = document.getElementById("gameboard");
    gameboardDiv.innerHTML = "";
    board.forEach((cell, index) => {
      const cellDiv = document.createElement("div");
      cellDiv.textContent = cell;
      cellDiv.addEventListener("click", () => playTurn(index));
      gameboardDiv.appendChild(cellDiv);
    });
  };

  return { startGame };
})();

document.getElementById("start-btn").addEventListener("click", () => {
  const player1Name = document.getElementById("player1").value || "Player 1";
  const player2Name = document.getElementById("player2").value || "Player 2";
  Game.startGame(player1Name, player2Name);
});
