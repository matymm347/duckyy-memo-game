import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./DuckCard.css";

function DuckCard({ scoreUpdateHandler }) {
  const [duckImg, setDuckImg] = useState();
  const [clicked, setClicked] = useState(false);
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
    if (hasFetched.current) return;
    fetchDuckImg();
    hasFetched.current = true;
  }, []);

  const handleClick = () => {
    if (clicked === false) {
      setClicked(true);
      scoreUpdateHandler("raise");
    } else if (clicked === true) {
      setClicked(false);
      scoreUpdateHandler("reset");
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

export { DuckCard };
