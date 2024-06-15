import { DuckCard } from "./DuckCard";
import { v4 as uuidv4 } from "uuid";
import "./CardsBoard.css";

function CardsBoard({ cardCount }) {
  const duckCardList = Array.from({ length: cardCount }, () => (
    <DuckCard key={uuidv4()} />
  ));

  return (
    <>
      <div id="cards-board">{duckCardList}</div>
    </>
  );
}

export { CardsBoard };
