import React, { useEffect, useRef } from "react";

import "./TitleCards.css";

import cards_data from "../../assets/cards/Cards_data";

const TitleCards = () => {
  const cardsRef = useRef();

  const handleWheel = (e) => {
    e.preventDefault();
    console.log("hii");
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-Cards">
      <h2>Popular On MovieHub</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
