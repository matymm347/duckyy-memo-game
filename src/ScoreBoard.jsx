import { useState } from "react";
import PropTypes from "prop-types";
import "./ScoreBoard.css";

function ScoreBoard({ currentScore }) {
  const [bestScore, setBestScore] = useState(0);

  if (bestScore < currentScore) {
    setBestScore(currentScore);
  }

  return (
    <>
      <div id="score-grid">
        <p className="grid-element">Current Score</p>
        <p className="grid-element">Best</p>
        <p className="grid-element">{currentScore}</p>
        <p className="grid-element">{bestScore}</p>
      </div>
    </>
  );
}

ScoreBoard.propTypes = {
  currentScore: PropTypes.number,
  bestScore: PropTypes.number,
};

export { ScoreBoard };
