import { useState } from "react";
import { ScoreBoard } from "./ScoreBoard";
import { CardsBoard } from "./CardsBoard";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function updateCurrentScore(type) {
    if (type === "raise") {
      setCurrentScore(currentScore + 1);
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
    } else if (type === "reset") {
      setCurrentScore(0);
    }
  }

  return (
    <>
      <div>
        <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
        <CardsBoard cardCount={3} scoreUpdateHandler={updateCurrentScore} />
      </div>
    </>
  );
}

export default App;
