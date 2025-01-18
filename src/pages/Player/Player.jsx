import React, { useEffect, useState } from "react";
import "./Player.css";
import { useNavigate, useParams } from "react-router-dom";

import back_arrow_icon from "../../assets/back_arrow_icon.png";

const Player = () => {
  const { id } = useParams();

  const usenavigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

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
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={()=> usenavigate(-2)} />
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        fwidth="90%"
        height="90%"
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type} </p>
      </div>
    </div>
  );
};

export default Player;
