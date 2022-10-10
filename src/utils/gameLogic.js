import LINES from "../constants/winningLines";

export function calculateNextTurn(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? "X" : "O";
}

export function calculateGameStatus(squares) {
  // Check winner
  for (let i = 0; i < LINES.length; i++) {
    const [a, b, c] = LINES[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  // Check tie
  if (squares.filter(Boolean).length === 9) return "tie";
  // else carry on
  return null;
}
