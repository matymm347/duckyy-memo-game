import { useEffect, useState } from "react";

function DuckCard() {
  const [duckImg, setDuckImg] = useState();

  async function fetchDuckImg() {
    const response = await fetch("https://random-d.uk/api/randomimg", {
      mode: "no-cors",
    });
    if (!response.ok) {
      throw new Error("Network response not ok");
    }
    const blob = await response.blob();
    const localObjectUrl = URL.createObjectURL(blob);
    setDuckImg(localObjectUrl);
  }

  async function fetchRandomDuck() {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://random-d.uk/api/random"
      );
      const data = await response.json();
      const duckImageUrl = data.url;
      setDuckImg(duckImageUrl);
    } catch (error) {
      console.error("Error fetching the duck image:", error);
    }
  }

  useEffect(() => {
    fetchRandomDuck();
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
