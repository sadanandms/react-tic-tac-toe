import React from "react";
import Board from "../board/board";

const Game: React.FC = () => {
  const [xIsNext, setXIsNext] = React.useState<boolean>(true);
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares: string[]) {
    console.log(nextSquares);
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setXIsNext(true);
    setHistory([Array(9).fill(null)]);
  }

  function jumpTo(nextMove) {
    console.log(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    return (
      <li>
        <button
          onClick={() => {
            jumpTo(move);
          }}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          onReset={handleReset}
        ></Board>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
