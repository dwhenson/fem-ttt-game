import LINES from "../constants/winningLines";

function pickRandomSquare(squares) {
  const squaresLeft = squares
    .map((square, index) => (square === null ? index : null))
    .filter((square) => !!square);
  let choice = squaresLeft[Math.floor(Math.random() * squaresLeft.length)];
  return choice;
}

function pickCenterSquare(squares) {
  return squares[4] ? null : 4;
}

function offensiveComputerMove(squares, marker) {
  const computerMarker = marker === "X" ? "O" : "X";

  const squaresUsed = squares.map((square, index) =>
    square === computerMarker ? index : null
  );
  console.log(squaresUsed);
  let choice = null;

  for (const line of LINES) {
    let count = [];
    for (const number of squaresUsed) {
      if (line.includes(number)) {
        count.push(number);
        if (count.length === 2) {
          choice = line.filter((number) => !count.includes(number));
        }
      }
    }
  }
  return choice;
}

function defensiveComputerMove(squares, marker) {
  const squaresUsed = squares.map((square, index) =>
    square === marker ? index : null
  );
  let choice = null;

  for (const line of LINES) {
    let count = [];
    for (const number of squaresUsed) {
      if (line.includes(number)) {
        count.push(number);
        if (count.length === 2) {
          choice = line.filter((number) => !count.includes(number));
        }
      }
    }
  }
  return choice;
}

export default function computerMove(squares, marker) {
  console.log(squares, marker);
  if (offensiveComputerMove(squares, marker)) {
    console.log("attack", offensiveComputerMove(squares, marker));
    return offensiveComputerMove(squares, marker);
  } else if (defensiveComputerMove(squares, marker)) {
    console.log("attack", defensiveComputerMove(squares, marker));
    return defensiveComputerMove(squares, marker);
  } else if (pickCenterSquare(squares)) {
    console.log("center", pickCenterSquare(squares));
    return pickCenterSquare(squares);
  } else {
    return pickRandomSquare(squares);
  }
}
