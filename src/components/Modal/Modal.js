import React from "react";
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
}) {
  if (status === "tie") {
    return (
      <div>
        <p>Round Tied</p>
        <Button id="quit" children={"Quit"} action={quitGame} />
        <Button id="restart" children={<Restart />} action={resetGame} />
      </div>
    );
  }

  if (status === "X" || status === "O") {
    return (
      <div>
        {gameType !== "CPU" && (
          <p>Player {squares.filter(Boolean).length % 2 ? 1 : 2} wins!</p>
        )}
        {gameType === "CPU" && (
          <p>{turn !== marker ? "You won!" : "Oh no you lost..."}</p>
        )}
        <p>{status === "X" ? <X /> : <O />} Takes the round</p>
        <Button id="quit" children={"Quit"} action={quitGame} />
        <Button id="restart" children={"Next round"} action={resetGame} />
      </div>
    );
  }
}

export default Modal;
