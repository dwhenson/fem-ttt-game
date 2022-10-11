import React from "react";
import styled from "styled-components";
// Components
import GlobalStyles from "../../GlobalStyles";
import Board from "../Board/Board";
import SelectGame from "../SelectGame";
import TotalScores from "../TotalScores";
// Variables
import useLocalStorageState from "../../utils/useLocalStorageState";
import initialScores from "../../constants/initialScores";

function App() {
  const [gameType, setGameType] = useLocalStorageState("type", null);
  const [marker, setMarker] = React.useState("X");
  const [score, setScore] = useLocalStorageState("score", initialScores);

  return (
    <Wrapper>
      {!gameType && (
        <SelectGame
          gameType={gameType}
          setGameType={setGameType}
          marker={marker}
          setMarker={setMarker}
        />
      )}
      {gameType && (
        <Board
          gameType={gameType}
          setGameType={setGameType}
          marker={marker}
          setMarker={setMarker}
          score={score}
          setScore={setScore}
        />
      )}
      {gameType && <TotalScores score={score} />}
      <GlobalStyles />
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: min(100%, 20rem);
  min-block-size: 100vh;
  overflow-y: scroll;
  background-color: var(--clr-dark-100);
  text-rendering: optimizeSpeed;
  font-family: var(--ff-body);
  font-size: var(--step--2);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--clr-light-100);
`;

export default App;
