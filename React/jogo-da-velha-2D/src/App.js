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
    const nextSquares = squares.slice();
    if (nextSquares[i] || calculaVencedor(squares)) {
      return; // Não faz nada se a casa já estiver ocupada ou se o jogo já tiver um vencedor
    }
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
    <div>
      <div className="status">{status}</div>
      <div>
        <Square valor={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square valor={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square valor={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <Square valor={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square valor={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square valor={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        <Square valor={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square valor={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square valor={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;

  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <div>
      <Tabuleiro xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <button onClick={() => jumpTo(0)}>Voltar ao início</button>
    </div>
  );
}

function calculaVencedor(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas horizontais
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // linhas verticais
    [0, 4, 8], [2, 4, 6] // diagonais
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Retorna 'X' ou 'O' se houver um vencedor
    }
  }
  return null; // Se não houver vencedor
}

function calculaEmpate(squares) {
  // Verifica se o tabuleiro está cheio e não há vencedor (velha)
  return squares.every(square => square !== null) && !calculaVencedor(squares);
}
