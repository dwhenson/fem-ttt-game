import React from "react";
import styled from "styled-components";
import X from "../X";
import O from "../O";

function Square({ id, squares, renderSquareChoice }) {
  const icon = squares[id] === "X" ? <X /> : squares[id] === "O" ? <O /> : null;

  return <Button onClick={() => renderSquareChoice(id)}>{icon}</Button>;
}

// Styled Components
const Button = styled.button`
  display: grid;
  place-items: center;
  padding: 0;
`;

export default Square;
