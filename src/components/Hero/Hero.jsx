import React from "react";
import "./Hero.css";
import Hpic from "../imgs/English.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero" src={Hpic} alt="" />
    </div>
  );
};

export default Hero;
