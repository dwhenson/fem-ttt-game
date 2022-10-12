import React from "react";
import styled from "styled-components";

function TotalScores({ gameType, score, marker }) {
  function player1() {
    if (gameType === "CPU") {
      return marker === "X" ? "(You)" : "(CPU)";
    } else return "(Player 1)";
  }

  function player2() {
    if (gameType === "CPU") {
      return marker === "O" ? "(You)" : "(CPU)";
    } else return "(Player 2)";
  }

  return (
    <Scores>
      <X>
        <Result>X {player1()}</Result>
        <Score> {score.X}</Score>
      </X>
      <Tie>
        <Result>Ties</Result>
        <Score> {score.tie}</Score>
      </Tie>
      <O>
        <Result>O {player2()}</Result>
        <Score> {score.O}</Score>
      </O>
    </Scores>
  );
}

const Scores = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-xxs);

  > * {
    flex: 1 0 min(5rem, 33%);
    text-align: center;
    border-radius: 0.5rem;
    color: var(--clr-dark-100);
    padding-block: calc(var(--space-xs) / 2);
  }
`;

const X = styled.div`
  background-color: var(--clr-primary-100);
`;
const Tie = styled.div`
  background-color: var(--clr-light-200);
`;
const O = styled.div`
  background-color: var(--clr-secondary-100);
`;

const Result = styled.p`
  letter-spacing: 0;
`;

const Score = styled.p`
  font-size: var(--step-0);
`;

export default TotalScores;
