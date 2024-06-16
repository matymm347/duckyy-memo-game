import React from "react";
import DuckCard from "./DuckCard";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import "./CardsBoard.css";

function CardsBoard({ cardCount, scoreUpdateHandler }) {
  const duckCardList = Array.from({ length: cardCount }, () => (
    <DuckCard scoreUpdateHandler={scoreUpdateHandler} key={uuidv4()} />
  ));

  return (
    <>
      <div id="cards-board">{duckCardList}</div>
    </>
  );
}

CardsBoard.propTypes = {
  cardCount: PropTypes.number,
  scoreUpdateHandler: PropTypes.func,
};

export default React.memo(CardsBoard);
