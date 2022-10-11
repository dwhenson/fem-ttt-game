import LINES from "../constants/winningLines";

/**
 * Picks a random square from the reminaing squares on the board
 * @param   {array}  squares  The array of squares already used in the game
 * @return  {number}          The index of a random remaining square to select
 */
function pickRandomSquare(squares) {
  const squaresLeft = squares
    .map((square, index) => (square === null ? index : null))
    .filter((square) => typeof square === "number");
  return squaresLeft[Math.floor(Math.random() * squaresLeft.length)];
}

/**
 * Picks the center square if it is not already taken
 * @param   {array}  squares  The array of squares already used in the game
 * @return  {number}          The index of the center square
 */
function pickCenterSquare(squares) {
  return !squares[4] ? 4 : null;
}

function findCriticalSquare(squares, marker) {
  const squaresUsed = squares.map((square, index) =>
    square === marker ? index : null
  );
  return LINES.find(
    (line) => squaresUsed.filter((number) => line.includes(number)).length === 2
  )?.filter(
    (number) => !squaresUsed.includes(number) && squares[number] === null
  )[0];
}

/**
 * If two opposing markers found on one row, select remaining square
 * @param   {squares}  squares  The array of squares used in the game
 * @param   {marker}  marker   The human player marker
 * @return  {number}           The index of the square to choose
 */
function defensiveComputerMove(squares, marker) {
  return findCriticalSquare(squares, marker);
}

/**
 * If the game can be won, choose the winning square
 * @param   {squares}  squares  The array of squares used in the game
 * @param   {marker}  marker   The human player marker
 * @return  {number}           The index of the square to choose
 */
function offensiveComputerMove(squares, marker) {
  const computerMarker = marker === "X" ? "O" : "X";
  return findCriticalSquare(squares, computerMarker);
}

export default function computerMove(squares, marker) {
  let squareToChoose = offensiveComputerMove(squares, marker);
  if (!squareToChoose) {
    squareToChoose = defensiveComputerMove(squares, marker);
  }
  if (!squareToChoose) {
    squareToChoose = pickCenterSquare(squares);
  }
  if (!squareToChoose) {
    squareToChoose = pickRandomSquare(squares);
  }
  return squareToChoose;
}
