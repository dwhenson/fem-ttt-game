import LINES from "../constants/winningLines";

/**
 * Returns the a string X|O indicating the player's turn
 * @param   {array}  squares  The array of squares used in the game
 * @return  {string}          The symbol showing the player who's turn it is
 */
export function calculateNextTurn(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? "X" : "O";
}

/**
 * Returns a string value indicating the current status of the game
 * @param   {array}  squares  The array of squares used in the game
 * @return  {string}           winning symbol (X/O), tie or null
 */
export function calculateGameStatus(squares) {
  // Check winner, return winning symbol
  for (let i = 0; i < LINES.length; i++) {
    const [a, b, c] = LINES[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  // Check tie, return tie if true
  if (squares.filter(Boolean).length === 9) return "tie";
  // else return null and carry on
  return null;
}
