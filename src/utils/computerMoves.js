import LINES from "../constants/winningLines";

function pickRandomSquare(squares) {
  const squaresLeft = squares
    .map((square, index) => (square === null ? index : null))
    .filter((square) => !!square);

  let choice = squaresLeft[Math.floor(Math.random() * squaresLeft.length)];
  return choice;
}

function pickCenterSquare(squares) {
  let choice = null;
  if (!squares[4]) {
    choice = 4;
  }
  return choice;
}

function offensiveComputerMove(squares, marker) {
  const computerMarker = marker === "X" ? "O" : "X";
  let choice = null;
  const squaresUsed = squares.map((square, index) =>
    square === computerMarker ? index : null
  );

  for (const line of LINES) {
    let count = [];
    for (const number of squaresUsed) {
      if (line.includes(number)) {
        count.push(number);
        if (count.length === 2) {
          const possibleChoice = line.filter(
            (number) => !count.includes(number)
          )[0];
          if (squares[possibleChoice]) {
            continue;
          } else {
            choice = possibleChoice;
          }
        }
      }
    }
  }
  return choice;
}

function defensiveComputerMove(squares, marker) {
  let choice = null;
  const squaresUsed = squares.map((square, index) =>
    square === marker ? index : null
  );

  for (const line of LINES) {
    let count = [];
    for (const number of squaresUsed) {
      if (line.includes(number)) {
        count.push(number);
        if (count.length === 2) {
          const possibleChoice = line.filter(
            (number) => !count.includes(number)
          )[0];
          if (squares[possibleChoice]) {
            continue;
          } else {
            choice = possibleChoice;
          }
        }
      }
    }
  }
  return choice;
}

export default function computerMove(squares, marker) {
  if (offensiveComputerMove(squares, marker) !== null) {
    return offensiveComputerMove(squares, marker);
  } else if (defensiveComputerMove(squares, marker) !== null) {
    return defensiveComputerMove(squares, marker);
  } else if (pickCenterSquare(squares) !== null) {
    return pickCenterSquare(squares);
  } else {
    return pickRandomSquare(squares);
  }
}
