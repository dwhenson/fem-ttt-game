import React from "react";
import styled from "styled-components";
import GlobalStyles from "../../GlobalStyles";
import Board from "../Board/Board";
import SelectGame from "../SelectGame";
import TotalScores from "../TotalScores";
import useLocalStorageState from "../../utils/useLocalStorageState";

function App() {
  const [gameType, setGameType] = useLocalStorageState("type", null);
  const [marker, setMarker] = React.useState("X");
  const [score, setScore] = useLocalStorageState("score", {
    X: 0,
    O: 0,
    tie: 0,
  });

  return (
    <>
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
      </Wrapper>
      <GlobalStyles />
    </>
  );
}

// Styled Components
const Wrapper = styled.div`
  display: grid;
  place-content: center;
  min-block-size: 100vh;
  overflow-y: scroll;
  background-color: #fff;
  text-rendering: optimizeSpeed;
  font-family: var(--ff-body);
  font-size: var(--step--0);
  font-weight: 400;
  line-height: 1.5;
  color: var(--clr-dark-100);
`;

export default App;
