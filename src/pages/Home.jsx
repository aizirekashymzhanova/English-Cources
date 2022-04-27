import React from "react";
import { useNavigate } from "react-router-dom";
import About from "../components/About/About";
import Approach from "../components/Approach/Approach";

import Benefits from "../components/Benefits/Benefits";
import Hero from "../components/Hero/Hero";
import MyAccordion from "../components/MyAccordion/MyAcoordion";
import MySlider from "../components/MySlider/MySlider";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Approach />
      <Benefits />
      <MySlider />
      <MyAccordion />
    </div>
  );
};

export default Home;
