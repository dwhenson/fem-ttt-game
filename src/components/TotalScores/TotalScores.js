import React from "react";

function TotalScores({ score }) {
  return (
    <div>
      <div>X {score.X}</div>
      <div>Ties {score.tie}</div>
      <div>O {score.O}</div>
    </div>
  );
}

export default TotalScores;
