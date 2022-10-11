import React from "react";
import styled from "styled-components";
// Components
import Square from "../Square";
import Button from "../Button";
import Logo from "../Logo";
import Restart from "../Restart";
import XOutline from "../XOutline";
import OOutline from "../OOutline/OOutline";
import Modal from "../Modal/Modal";
// Variables
import useLocalStorageState from "../../utils/useLocalStorageState";
import initialScores from "../../constants/initialScores";
// Helper functions
import { calculateGameStatus, calculateNextTurn } from "../../utils/gameLogic";
import computerMove from "../../utils/computerMoves";

function Board({ gameType, setGameType, marker, setMarker, score, setScore }) {
  const reset = Array(9).fill(null);
  const [squares, setSquares] = useLocalStorageState("squares", reset);
  const [status, setStatus] = React.useState(null);
  const [turn, setTurn] = React.useState("X");

  // Update state based on player choices
  async function resetGame() {
    setSquares(reset);
    setTurn(null);
    setStatus(null);
  }

  async function quitGame() {
    await resetGame();
    await setMarker("X");
    await setGameType(null);
    await setScore(initialScores);
  }

  function renderSquareChoice(square) {
    if (status || squares[square]) return;
    const nextSquares = [...squares];
    nextSquares[square] = turn;
    setSquares(nextSquares);
  }

  // Monitor and update game playing state
  React.useEffect(() => {
    setTurn(calculateNextTurn(squares));
    setStatus(calculateGameStatus(squares));
  }, [squares]);

  // Manage computer moves
  React.useEffect(() => {
    if (gameType !== "CPU") return;
    if (marker !== turn) {
      renderSquareChoice(computerMove(squares, marker));
    }
  }, [gameType, turn]);

  // Update total scores
  React.useEffect(() => {
    if (status === null) return;
    const newScore = { ...score };
    newScore[status] += 1;
    setScore(newScore);
  }, [status]);

  return (
    <Wrapper>
      <Header>
        <Logo />
        <Turn>{turn === "X" ? <XOutline /> : <OOutline />} turn</Turn>
        <Button id="restart" children={<Restart />} action={quitGame} />
      </Header>
      <Grid>
        {squares.map((_, index) => (
          <Square
            key={index}
            id={index}
            squares={squares}
            renderSquareChoice={renderSquareChoice}
          />
        ))}
      </Grid>
      <Modal
        marker={marker}
        squares={squares}
        turn={turn}
        status={status}
        gameType={gameType}
        quitGame={quitGame}
        resetGame={resetGame}
      />
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.div`
  > * ~ * {
    margin-block-start: var(--space-s);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Turn = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-xxs);
  background-color: var(--clr-dark-200);
  color: var(--clr-light-100);
  padding-inline: var(--space-s);
  padding-block: var(--space-xxs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 0.5rem;

  > svg {
    height: 1.6rem;
    width: auto;
    stroke: var(--clr-light-100);
    stroke-width: 2;
    fill: var(--clr-light-100);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(5rem, 33%));
  grid-template-rows: repeat(3, minmax(6rem, 33%));
  gap: var(--space-xs);
`;

export default Board;
