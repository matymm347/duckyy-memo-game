import React from "react";
import ReactDOM from "react-dom/client";
import { ScoreBoard } from "./ScoreBoard";
import { DuckCard } from "./DuckCard";
import "./index.css";
import { CardsBoard } from "./CardsBoard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>Duckyy Memo Game</h1>
    <ScoreBoard currentScore={1} bestScore={6} />
    <CardsBoard cardCount={3} />
  </React.StrictMode>
);
