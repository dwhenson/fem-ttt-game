export function calculateNextTurn(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? "X" : "O";
}

export function calculateGameStatus(squares) {
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
  // Check winner
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  // Check tie
  if (squares.filter(Boolean).length === 9) return "tie";
  // else carry on
  return null;
}
