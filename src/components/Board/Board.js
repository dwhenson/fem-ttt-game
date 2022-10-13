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

  // Update state based on player choices
  async function resetGame() {
    setSquares(reset);
    setFocus(null);
    setTurn(null);
    setStatus(null);
  }

  async function quitGame() {
    setComfirmQuit();
    setFocus(null);
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

  // Prevent focus when modal is open
  const inertHeader = React.useRef();
  const inertGrid = React.useRef();

  // Enable return to last selected element
  function getEventTarget(event) {
    setFocus(event.target.closest("button"));
  }

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
          <Button id="restart" children={<Restart />} action={setComfirmQuit} />
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
  justify-content: space-between;
  align-items: center;
`;

const Turn = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-xxs);
  background-color: var(--clr-dark-200);
  padding-inline: var(--space-s);
  padding-block: var(--space-xxs);
  border-radius: 0.5rem;
  color: var(--clr-light-100);
  text-transform: uppercase;
  letter-spacing: 0.05em;

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
  gap: var(--space-xxs);
`;

export default Board;
