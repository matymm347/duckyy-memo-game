import { React, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./DuckCard.css";

function DuckCard({ scoreUpdateHandler, shuffleArray, resetHandler, clicked }) {
  const [duckImg, setDuckImg] = useState(null);
  const hasFetched = useRef(false);

  const apiKey = "EctaRGZPR0oVfEiBWP1Q1QHpVTwfgy1u";
  const tag = "duck";
  const rating = "g";
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}&rating=${rating}`;

  async function fetchDuckImg() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const stillImgUrl = data.data.images.fixed_height_still.url;
        setDuckImg(stillImgUrl);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  useEffect(() => {
    if (!hasFetched.current) {
      fetchDuckImg();
      hasFetched.current = true;
    }
  }, []);

  const handleClick = () => {
    if (clicked === false) {
      setClicked(true);
      scoreUpdateHandler("raise");
      shuffleArray();
    } else if (clicked === true) {
      scoreUpdateHandler("reset");
      resetHandler();
    }
  };

  let cardStyle = "";

  if (clicked) {
    cardStyle = "duck-img-clicked";
  } else if (!clicked) {
    cardStyle = "duck-img-not-clicked";
  }

  return (
    <>
      <div onClick={handleClick} className="duck-card">
        <img
          className={cardStyle}
          src={duckImg}
          alt="DuckyyImg"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        />
      </div>
    </>
  );
}

DuckCard.propTypes = {
  scoreUpdateHandler: PropTypes.func,
};

export default DuckCard;
