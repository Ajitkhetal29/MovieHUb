import React from "react";

import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <div className="hero">
        <img src={hero_banner} alt="" srcset="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" srcset="" className="caption-img" />
          <p>
            Descovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy
          </p>
          <div className="hero-btns">
            <button className="btn ">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
        </div>
      </div>
      <TitleCards></TitleCards>
      <div className="more-cards">
        <TitleCards title={"Popular"} category={"popular"}></TitleCards>
        <TitleCards
          title={"Top Pick For You"}
          category={"top_rated"}
        ></TitleCards>
        <TitleCards title={"Upcoming"} category={"upcoming"}></TitleCards>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
