import React from "react";
import styled from "styled-components";
// Components
import Square from "../Square/Square";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Restart from "../Restart/Restart";
import Xsmall from "../Xsmall/Xsmall";
import Osmall from "../Osmall/Osmall";
import Modal from "../Modal/Modal";
// Variables
import initialScores from "../../constants/initialScores";
// Helper functions
import useLocalStorageState from "../../utils/useLocalStorageState";
import useToggle from "../../utils/useToggle";
import { calculateGameStatus, calculateNextTurn } from "../../utils/gameLogic";
import computerMove from "../../utils/computerMoves";

function Board({ gameType, setGameType, marker, setMarker, score, setScore }) {
  const reset = Array(9).fill(null);
  const [squares, setSquares] = useLocalStorageState("squares", reset);
  const [confirmQuit, setComfirmQuit] = useToggle(false);
  const [status, setStatus] = React.useState(null);
  const [turn, setTurn] = React.useState("X");
  const [focus, setFocus] = React.useState(null);

  // Reset state but keep playing game
  async function resetGame() {
    setSquares(reset);
    setTurn(null);
    setStatus(null);
  }

  // Reset all state and return to initial screen
  async function quitGame() {
    setComfirmQuit();
    setFocus(null);
    await resetGame();
    await setMarker("X");
    await setGameType(null);
    await setScore(initialScores);
  }

  // Update UI to reflect square chosen
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
    // FIXME React Hook React.useEffect has missing dependencies: 'marker', 'renderSquareChoice', and 'squares'. Either include them or remove the dependency array.
    // eslint-disable-next-line
  }, [gameType, turn]);

  // Update total scores
  React.useEffect(() => {
    if (status === null) return;
    const newScore = { ...score };
    newScore[status] += 1;
    setScore(newScore);
    // FIXME React Hook React.useEffect has missing dependencies: 'score' and 'setScore'. Either include them or remove the dependency array. If 'setScore' changes too often, find the parent component that defines it and wrap that definition in useCallback.
    // eslint-disable-next-line
  }, [status]);

  // Prevent focus on other components when modal is open
  const inertHeader = React.useRef();
  const inertGrid = React.useRef();

  // Enable return to last selected element
  function getEventTarget(event) {
    setFocus(event.target.closest("button"));
  }

  // Set and remove inert attribute when modal is open
  React.useEffect(() => {
    if (confirmQuit || Boolean(status)) {
      inertHeader.current.setAttribute("inert", "");
      inertGrid.current.setAttribute("inert", "");
    } else {
      inertHeader.current.removeAttribute("inert");
      inertGrid.current.removeAttribute("inert");
      if (focus) {
        focus.focus();
      }
    }
  }, [confirmQuit, status, focus]);

  return (
    <>
      <Wrapper onClick={getEventTarget}>
        <Header ref={inertHeader}>
          <Logo />
          <Turn>{turn === "X" ? <Xsmall /> : <Osmall />} turn</Turn>
          <Button
            id="restart"
            aria-label="Restart"
            children={<Restart />}
            action={setComfirmQuit}
          />
        </Header>
        <Grid ref={inertGrid}>
          {squares.map((_, index) => (
            <Square
              key={index}
              id={index}
              squares={squares}
              renderSquareChoice={renderSquareChoice}
            />
          ))}
        </Grid>
      </Wrapper>
      <Modal
        marker={marker}
        squares={squares}
        turn={turn}
        status={status}
        gameType={gameType}
        quitGame={quitGame}
        resetGame={resetGame}
        confirmQuit={confirmQuit}
        setComfirmQuit={setComfirmQuit}
        setStatus={setStatus}
      />
    </>
  );
}

// Styled Components
const Wrapper = styled.div`
  position: relative;

  > * ~ * {
    margin-block-start: var(--space-s);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Turn = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-xxs);
  padding-block: var(--space-xxs);
  padding-inline: var(--space-s);
  border-radius: 0.5rem;
  background-color: var(--clr-dark-200);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--clr-light-100);

  > svg {
    inline-size: auto;
    block-size: 1.6rem;
    stroke: var(--clr-light-100);
    stroke-width: 2;
    fill: var(--clr-light-100);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, minmax(6rem, 33%));
  grid-template-columns: repeat(3, minmax(5rem, 33%));
  gap: var(--space-xxs);
`;

export default Board;
