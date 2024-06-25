import { useState, useCallback } from "react";
import { ScoreBoard } from "./ScoreBoard";
import CardsBoard from "./CardsBoard";

function App() {
  const [currentScore, setCurrentScore] = useState(0);

  const scoreUpdateHandler = useCallback((action) => {
    if (action === "raise") {
      setCurrentScore((prevScore) => prevScore + 1);
    } else if (action === "reset") {
      setCurrentScore(0);
    }
  }, []);

  return (
    <>
      <div>
        <ScoreBoard currentScore={currentScore} />
        <CardsBoard cardCount={12} scoreUpdateHandler={scoreUpdateHandler} />
      </div>
    </>
  );
}

export default App;
