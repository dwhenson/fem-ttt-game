import React from "react";
import styled from "styled-components";
import Square from "../Square";
import Button from "../Button";
import Logo from "../Logo";
import Restart from "../Restart";
import useLocalStorageState from "../../utils/useLocalStorageState";
import { calculateNextTurn } from "../../utils/gameLogic";

const reset = Array(9).fill(null);

function Board({ gametype, setGameType, marker, setMarker }) {
  const [squares, setSquares] = useLocalStorageState("squares", reset);
  const currentTurn = calculateNextTurn(squares);

  function renderSquareChoice(square) {
    if (squares[square]) return;
    const nextSquares = [...squares];
    nextSquares[square] = currentTurn;
    setSquares(nextSquares);
  }

  function clearSquares() {
    setSquares(reset);
    setGameType(null);
  }

  return (
    <div>
      <Header>
        <Logo />
        <Turn>{currentTurn} turn</Turn>
        <Button id="restart" children={<Restart />} action={clearSquares} />
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
