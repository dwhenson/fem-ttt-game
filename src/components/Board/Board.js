import React from "react";
import styled from "styled-components";
import Square from "../Square";
import Button from "../Button";
import Logo from "../Logo";
import Restart from "../Restart";
import X from "../X";
import O from "../O";
import useLocalStorageState from "../../utils/useLocalStorageState";
import { calculateGameStatus, calculateNextTurn } from "../../utils/gameLogic";
import computerMove from "../../utils/computerMoves";

function Board({ gameType, setGameType, marker, setMarker, score, setScore }) {
  const reset = Array(9).fill(null);
  const [squares, setSquares] = useLocalStorageState("squares", reset);
  const [status, setStatus] = React.useState(null);
  const [turn, setTurn] = React.useState("X");

  async function resetGame() {
    setSquares(reset);
    setTurn(null);
    setStatus(null);
  }

  async function quitGame() {
    await resetGame();
    await setMarker("X");
    await setGameType(null);
  }

  function renderSquareChoice(square) {
    if (status || squares[square]) return;
    const nextSquares = [...squares];
    nextSquares[square] = turn;
    setSquares(nextSquares);
  }

  // Update turn
  React.useEffect(() => {
    setTurn(calculateNextTurn(squares));
  }, [squares]);

  // Check winner each time
  React.useEffect(() => {
    setStatus(calculateGameStatus(squares));
  }, [squares]);

  // Manage first computer move
  // React.useEffect(() => {
  //   if (gameType !== "CPU") return;
  //   if (marker === "O") {
  //     renderSquareChoice(computerMove(squares, marker));
  //   }
  // }, [gameType]);

  // Manage computer moves
  React.useEffect(() => {
    if (gameType !== "CPU") return;
    if (marker !== turn) {
      renderSquareChoice(computerMove(squares, marker));
    }
  }, [gameType, turn]);

  // Update total scores
  React.useEffect(() => {
    // if (gameType !== "CPU") return;
    if (status === null) return;
    const newScore = { ...score };
    newScore[status] += 1;
    setScore(newScore);
  }, [status]);

  // Reset total scores
  React.useEffect(() => {
    setScore({
      X: 0,
      O: 0,
      tie: 0,
    });
  }, [marker, gameType]);

  return (
    <div>
      <Header>
        <Logo />
        <Turn>{turn} turn</Turn>
        <Button id="restart" children={<Restart />} action={quitGame} />
      </Header>
      <Grid>
        {squares.map((square, index) => (
          <Square
            key={index}
            id={index}
            squares={squares}
            renderSquareChoice={renderSquareChoice}
          />
        ))}
      </Grid>
      {status === "tie" && (
        <p>
          Round Tied
          <Button id="quit" children={"Quit"} action={quitGame} />
          <Button id="restart" children={<Restart />} action={resetGame} />
        </p>
      )}
      {(status === "X" || status === "O") && (
        <p>
          {gameType !== "CPU" && (
            <p>Player {squares.filter(Boolean).length % 2 ? 1 : 2} wins!</p>
          )}
          {gameType === "CPU" && (
            <p>{turn !== marker ? "You won!" : "Oh no you lost..."}</p>
          )}
          {status === "X" ? <X /> : <O />} Takes the round
          <Button id="quit" children={"Quit"} action={quitGame} />
          <Button id="restart" children={"Next round"} action={resetGame} />
        </p>
      )}
    </div>
  );
}

const Header = styled.div`
  display: flex;
`;

// Styled Components
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(4.5rem, 33%));
  grid-template-rows: repeat(3, minmax(4.5rem, 33%)); ;
`;

const Turn = styled.div`
  background-color: var(--clr-dark-100);
  color: var(--clr-light-100);
  font-weight: 700;
  font-size: var(--step--1);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export default Board;
