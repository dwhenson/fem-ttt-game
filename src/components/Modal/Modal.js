import React from "react";
import styled from "styled-components";
// Components
import Button from "../Button/Button";
import X from "../X/X";
import O from "../O/O";

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
  // Confirm quit modal
  if (confirmQuit) {
    return (
      <StyledModal>
        <Result>Restart Game?</Result>
        <ButtonWrapper>
          <Button id="cancel" children={"No, Cancel"} action={setComfirmQuit} />
          <Button
            id="restart"
            children={"Yes, restart"}
            action={quitGame}
            dark={"var(--clr-secondary-300)"}
            medium={"var(--clr-secondary-200)"}
            light={"var(--clr-secondary-100)"}
          />
        </ButtonWrapper>
      </StyledModal>
    );
  }

  // Tie modal
  if (status === "tie") {
    return (
      <StyledModal>
        <Result>Round Tied</Result>
        <ButtonWrapper>
          <Button id="quit" children={"Quit"} action={setComfirmQuit} />
          <Button
            id="restart"
            children={"Next round"}
            action={resetGame}
            dark={"var(--clr-secondary-300)"}
            medium={"var(--clr-secondary-200)"}
            light={"var(--clr-secondary-100)"}
          />
        </ButtonWrapper>
      </StyledModal>
    );
  }

  // Winner modal
  if (status === "X" || status === "O") {
    return (
      <StyledModal>
        {gameType !== "CPU" && (
          <p>Player {squares.filter(Boolean).length % 2 ? 1 : 2} wins!</p>
        )}
        {gameType === "CPU" && (
          <p>{turn !== marker ? "You won!" : "Oh no you lost..."}</p>
        )}
        <Result status={status}>
          {status === "X" ? <X /> : <O />} Takes the round
        </Result>
        <ButtonWrapper>
          <Button id="quit" children={"Quit"} action={setComfirmQuit} />
          <Button
            id="restart"
            children={"Next round"}
            action={resetGame}
            dark={"var(--clr-secondary-300)"}
            medium={"var(--clr-secondary-200)"}
            light={"var(--clr-secondary-100)"}
          />
        </ButtonWrapper>
      </StyledModal>
    );
  }
}

// Styled Components
const StyledModal = styled.div`
  position: absolute;
  display: flex;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  flex-direction: column;
  align-items: center;
  inline-size: 100vw;
  padding-block: var(--space-xl);
  box-shadow: 0 0 0 100vw hsla(202, 32%, 15%, 0.8);
  background-color: var(--clr-dark-200);
  transform: translate(-50%, -70%);
`;

const Result = styled.p`
  display: inline-flex;
  align-items: center;
  gap: var(--space-m);
  margin-block-end: var(--space-s);
  font-size: var(--step-2);
  letter-spacing: 0.1em;
  color: ${(props) =>
    props.status === "X"
      ? "var(--clr-primary-200)"
      : props.status === "O"
      ? "var(--clr-secondary-200)"
      : "var(--clr-light-200)"};
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: var(--space-s);
  margin-block-start: var(--space-s);
`;

export default Modal;
