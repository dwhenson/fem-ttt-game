import React from "react";
import Button from "../Button";
import OOutline from "../OOutline/Ooutline";
import XOutline from "../XOutline";

function SelectGame({ setGameType, marker, setMarker }) {
  function handleButtonClick(event) {
    setGameType(event.target.id);
  }

  return (
    <>
      <input
        type="radio"
        name="X"
        id="X"
        value="X"
        checked={marker === "X"}
        onChange={(event) => {
          setMarker(event.target.value);
        }}
      />
      <label htmlFor="X">
        <XOutline />
      </label>
      <input
        type="radio"
        name="O"
        id="O"
        value="O"
        checked={marker === "O"}
        onChange={(event) => {
          setMarker(event.target.value);
        }}
      />
      <label htmlFor="O">
        <OOutline />
      </label>
      <Button id="CPU" action={(event) => handleButtonClick(event)}>
        New Game (vs CPU)
      </Button>
      <Button id="player" action={(event) => handleButtonClick(event)}>
        New Game (vs player)
      </Button>
    </>
  );
}

export default SelectGame;
