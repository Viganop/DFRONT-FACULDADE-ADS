import { useState } from 'react';
import './App.css';

function Square({ valor, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {valor}
    </button>
  );
}

function Tabuleiro({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculaVencedor(squares)) {
      return; // Não faz nada se a casa já estiver ocupada ou se o jogo já tiver vencedor
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const vencedor = calculaVencedor(squares);
  const empate = calculaEmpate(squares);
  let status;

  if (vencedor) {
    status = 'Vencedor: ' + vencedor;
  } else if (empate) {
    status = 'Empate!';
  } else {
    status = 'Próximo jogador: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="tabuleiro">
      <div className="status">{status}</div>
      <div className="board-row">
        <Square valor={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square valor={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square valor={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square valor={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square valor={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square valor={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square valor={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square valor={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square valor={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default function Game() {
  // Array de 3 tabuleiros, cada um com squares e xIsNext
  const [games, setGames] = useState([
    { squares: Array(9).fill(null), xIsNext: true },
    { squares: Array(9).fill(null), xIsNext: true },
    { squares: Array(9).fill(null), xIsNext: true },
  ]);

  function handlePlay(iGame, nextSquares) {
    setGames(prevGames => {
      const newGames = prevGames.slice();
      newGames[iGame] = {
        squares: nextSquares,
        xIsNext: !prevGames[iGame].xIsNext,
      };
      return newGames;
    });
  }

  function resetAll() {
    setGames([
      { squares: Array(9).fill(null), xIsNext: true },
      { squares: Array(9).fill(null), xIsNext: true },
      { squares: Array(9).fill(null), xIsNext: true },
    ]);
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {games.map((game, index) => (
          <Tabuleiro
            key={index}
            xIsNext={game.xIsNext}
            squares={game.squares}
            onPlay={(nextSquares) => handlePlay(index, nextSquares)}
          />
        ))}
      </div>
      <button onClick={resetAll} style={{ marginTop: 20 }}>
        Reiniciar todos os jogos
      </button>
    </div>
  );
}

function calculaVencedor(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontais
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // verticais
    [0, 4, 8], [2, 4, 6]             // diagonais
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function calculaEmpate(squares) {
  return squares.every(square => square !== null) && !calculaVencedor(squares);
}
