import React from "react";
import styled from "styled-components";
import Square from "../Square";
import Button from "../Button";
import Logo from "../Logo";
import Restart from "../Restart";
import useLocalStorageState from "../../utils/useLocalStorageState";
import { calculateGameStatus, calculateNextTurn } from "../../utils/gameLogic";
import computerMove from "../../utils/computerMoves";

function Board({ gameType, setGameType, marker, setMarker }) {
  const reset = Array(9).fill(null);
  const [squares, setSquares] = useLocalStorageState("squares", reset);
  const [status, setStatus] = React.useState(null);
  const [turn, setTurn] = React.useState(null);

  function resetGame() {
    setSquares(reset);
    setGameType(null);
    setStatus(null);
    setMarker("X");
    setTurn(null);
  }

  function renderSquareChoice(square) {
    if (status || squares[square]) return;
    const nextSquares = [...squares];
    nextSquares[square] = turn;
    setSquares(nextSquares);
  }

  // HACK to prevent initial change of turn state
  const isInitialMount = React.useRef(true);
  React.useEffect(() => {
    if (isInitialMount.current) {
      setTurn("X");
      isInitialMount.current = false;
    } else {
      setTurn((turn) => (turn === "X" ? "O" : "X"));
    }
  }, [squares]);

  React.useEffect(() => {
    if (calculateGameStatus(squares)) {
      setStatus(calculateGameStatus(squares));
    }
  }, [squares]);

  React.useEffect(() => {
    if (gameType === "CPU" && marker === "O") {
      computerMove();
    }
    if (gameType === "CPU" && marker !== turn) {
      console.log({ marker, turn });
      computerMove();
    }
  }, [gameType, marker, turn]);

  return (
    <div>
      <Header>
        <Logo />
        <Turn>{calculateNextTurn(squares)} turn</Turn>
        <Button id="restart" children={<Restart />} action={resetGame} />
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
      {status === "tie" && <p>It's a tie</p>}
      {(status === "X" || status === "O") && <p>{status} is the winner</p>}
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
