import React from "react";
import styled from "styled-components";

import Square from "../Square";
import Button from "../Button";
import Logo from "../Logo";
import Restart from "../Restart";
import useLocalStorageState from "../../utils/useLocalStorageState";
import { calculateGameStatus, calculateNextTurn } from "../../utils/gameLogic";

function Board({ gameType, setGameType, marker, setMarker }) {
  const reset = Array(9).fill(null);
  const [squares, setSquares] = useLocalStorageState("squares", reset);
  const [status, setStatus] = React.useState(null);
  const [turn, setTurn] = React.useState("X");

  function resetGame() {
    setSquares(reset);
    setGameType(null);
    setStatus(null);
    setTurn("X");
  }

  function renderSquareChoice(square) {
    if (status || squares[square]) return;
    const nextSquares = [...squares];
    nextSquares[square] = turn;
    setSquares(nextSquares);
    setTurn(turn === "X" ? "O" : "X");
  }

  React.useEffect(() => {
    if (calculateGameStatus(squares)) {
      setStatus(calculateGameStatus(squares));
    }
  }, [squares]);

  if (status === "tie") {
    return <p>It's a tie</p>;
  }

  if (status === "X" || status === "O") {
    return <p>{status} wins</p>;
  }

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
