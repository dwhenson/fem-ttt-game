export default function computerMove() {
  console.log("MOVES");
  // let choice = this.offensiveComputerMove();
  // if (!choice) {
  //   choice = this.defensiveComputerMove();
  // }

  // if (!choice) {
  //   choice = this.pickCenterSquare();
  // }

  // if (!choice) {
  //   choice = this.pickRandomSquare();
  // }

  // this.board.markSquareAt(choice, this.computer.getMarker());
}

// function defensiveComputerMove() {
//   return this.findCriticalSquare(this.human);
// }

// function offensiveComputerMove() {
//   return this.findCriticalSquare(this.computer);
// }

// function findCriticalSquare(player) {
//   for (let index = 0; index < TTTGame.POSSIBLE_WINNING_ROWS.length; ++index) {
//     let row = TTTGame.POSSIBLE_WINNING_ROWS[index];
//     let key = this.criticalSquare(row, player);
//     if (key) return key;
//   }

//   return null;
// }

// function criticalSquare(row, player) {
//   if (this.board.countMarkersFor(player, row) === 2) {
//     let index = row.findIndex((key) => this.board.isUnusedSquare(key));
//     if (index >= 0) return row[index];
//   }

//   return null;
// }

// function pickCenterSquare() {
//   return this.board.isUnusedSquare("5") ? "5" : null;
// }

// function pickRandomSquare() {
//   let validChoices = this.board.unusedSquares();
//   let choice;

//   do {
//     choice = Math.floor(9 * Math.random() + 1).toString();
//   } while (!validChoices.includes(choice));

//   return choice;
// }
