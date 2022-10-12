import React from "react";
import styled from "styled-components";
// Components
import Button from "../Button";
import Restart from "../Restart";
import X from "../X";
import O from "../O";

function Modal({
  turn,
  marker,
  squares,
  status,
  gameType,
  quitGame,
  resetGame,
  confirmQuit,
  setComfirmQuit,
}) {
  if (confirmQuit) {
    return (
      <StyledModal>
        <Result>Restart Game?</Result>
        <ButtonWrapper>
          <Button id="cancel" children={"No, Cancel"} action={setComfirmQuit} />
          <Button id="restart" children={"Yes, restart"} action={quitGame} />
        </ButtonWrapper>
      </StyledModal>
    );
  }

  if (status === "tie") {
    return (
      <StyledModal>
        <Result>Round Tied</Result>
        <ButtonWrapper>
          <Button id="quit" children={"Quit"} action={setComfirmQuit} />
          <Button id="restart" children={"Next round"} action={resetGame} />
        </ButtonWrapper>
      </StyledModal>
    );
  }

  if (status === "X" || status === "O") {
    return (
      <StyledModal>
        {gameType !== "CPU" && (
          <p>Player {squares.filter(Boolean).length % 2 ? 1 : 2} wins!</p>
        )}
        {gameType === "CPU" && (
          <p>{turn !== marker ? "You won!" : "Oh no you lost..."}</p>
        )}
        <Result>{status === "X" ? <X /> : <O />} Takes the round</Result>
        <ButtonWrapper>
          <Button id="quit" children={"Quit"} action={setComfirmQuit} />
          <Button id="restart" children={"Next round"} action={resetGame} />
        </ButtonWrapper>
      </StyledModal>
    );
  }
}

// Styled Components
const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  inline-size: 100vw;
  background-color: var(--clr-dark-200);
  padding-block: var(--space-m);
  margin-inline-start: calc(50% - 50vw);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
`;

// TODO adjust color based on prop: X|O
const Result = styled.p`
  display: inline-flex;
  font-size: var(--step-2);
  align-items: center;
  gap: var(--space-m);
  margin-block-end: var(--space-s);
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: var(--space-s);
`;

export default Modal;
