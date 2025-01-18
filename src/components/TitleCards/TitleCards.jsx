import React, { useEffect, useRef, useState } from "react";

import "./TitleCards.css";
import {Link} from 'react-router-dom'

import cards_data from "../../assets/cards/Cards_data";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();

  const [apiData, setApiData] = useState([]);

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2ExZWIzNTI1MzYzOTllOTdhOTVmYmRiODMzNWNlZiIsIm5iZiI6MTczNzE4OTM4My4zOTgwMDAyLCJzdWIiOiI2NzhiNjgwNzFhZmMzNDY0Njc2NGU0N2EiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FaA2XqtqmltjaIjfXIQjQtRKNEtRazD-ECXTYg_L6Nw",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category? category : 'now_playing'}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-Cards">
      <h2>{title ? title : "Popular On MovieHub"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
