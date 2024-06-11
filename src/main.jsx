import React from "react";
import ReactDOM from "react-dom/client";
import { ScoreBoard } from "./ScoreBoard";
import { DuckCard } from "./DuckCard";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>Duckyy Memo Game</h1>
    <ScoreBoard currentScore={1} bestScore={3} />
    <DuckCard />
  </React.StrictMode>
);
