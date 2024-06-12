import { useEffect, useState } from "react";

function DuckCard() {
  const [duckImg, setDuckImg] = useState();

  const apiKey = "EctaRGZPR0oVfEiBWP1Q1QHpVTwfgy1u";
  const tag = "duck";
  const rating = "g";
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}&rating=${rating}`;

  async function fetchDuckImg() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Check if the data key is in the response JSON
        const stillImgUrl = data.data.images.fixed_height_still.url;
        console.log(stillImgUrl);

        // Optionally, display the GIFs in the HTML document
        setDuckImg(stillImgUrl);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  useEffect(() => {
    fetchDuckImg();
  }, []);

  return (
    <>
      <div className="duckCard">
        <img src={duckImg} alt="DuckyyImg" />
      </div>
    </>
  );
}

export { DuckCard };
