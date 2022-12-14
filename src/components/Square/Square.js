import React from "react";
import styled from "styled-components";
import X from "../X";
import O from "../O";

function Square({ id, squares, turn, marker, gameType, renderSquareChoice }) {
  const icon = squares[id] === "X" ? <X /> : squares[id] === "O" ? <O /> : null;
  return (
    <Button
      onClick={() => renderSquareChoice(id)}
      aria-label={squares[id] ?? "blank"}
      disabled={!!icon || (gameType !== "player" && turn !== marker)}>
      {icon}
    </Button>
  );
}

// Styled Components
const Button = styled.button`
  display: grid;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0 0.25em var(--clr-dark-300);
  background-color: var(--clr-dark-200);
  transition: filter 250ms;
  cursor: pointer;

  &:hover,
  &:focus {
    filter: brightness(130%);
  }
`;

export default React.memo(Square);
