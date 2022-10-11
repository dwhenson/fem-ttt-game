import React from "react";
import Button from "../Button";
import OOutline from "../OOutline/Ooutline";
import XOutline from "../XOutline";

function SelectGame({ setGameType, marker, setMarker }) {
  return (
    <>
      <p>Pick player 1's mark</p>
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
      <p>Remember: X goes first</p>
      <Button id="CPU" action={(event) => setGameType(event.target.id)}>
        New Game (vs CPU)
      </Button>
      <Button id="player" action={(event) => setGameType(event.target.id)}>
        New Game (vs player)
      </Button>
    </>
  );
}

export default SelectGame;
