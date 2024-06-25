import React, { useState } from "react";
import DuckCard from "./DuckCard";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import "./CardsBoard.css";

function CardsBoard({ cardCount, scoreUpdateHandler }) {
  const shuffleArray = () => {
    let newArray = duckCardList.slice();

    // Fisher-Yates shuffle algorithm
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    setDuckCardList(newArray);
  };

  const resetBoard = () => {
    setDuckCardList(
      duckCardList.map((duckCard) =>
        React.cloneElement(duckCard, { resetBroadcast: true })
      )
    );
    // setDuckCardList(
    //   duckCardList.map((duckCard) =>
    //     React.cloneElement(duckCard, { resetBroadcast: false })
    //   )
    // );
  };

  const [duckCardList, setDuckCardList] = useState(
    Array.from({ length: cardCount }, () => (
      <DuckCard
        scoreUpdateHandler={scoreUpdateHandler}
        shuffleArray={shuffleArray}
        resetBoard={resetBoard}
        resetBroadcast={false}
        key={uuidv4()}
      />
    ))
  );

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
