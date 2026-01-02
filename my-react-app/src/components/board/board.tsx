import React from "react";
import Square from "../square/square";
import "./board.css";

function calculateWinner(squares: Array<string | null>): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Board: React.FC = ({ xIsNext, squares, onPlay, onReset }) => {
  function handleClick(index: number) {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    console.log("clicked!");
    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? "X" : "O";
    onPlay(newSquares);
  }

  function handleResetClick() {
    onReset();
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="board">
      <div className="board-header">
        <h2>Board Component</h2>{" "}
        <button className="reset" onClick={handleResetClick}>
          Reset
        </button>
      </div>
      {/* Add your board content here */}

      <div className={`status ${winner ? "winner" : ""}`}>{status}</div>
      <div className="board-container">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
};

export default Board;
