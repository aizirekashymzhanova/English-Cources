import React from "react";
import "./Hero.css";
import Hpic from "../imgs/English.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <Link to="/products">
        <img className="hero" src={Hpic} alt="" />
      </Link>
    </div>
  );
};

export default Hero;
