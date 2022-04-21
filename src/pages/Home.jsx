import React from "react";
import Approach from "../components/Approach/Approach";

import Benefits from "../components/Benefits/Benefits";
import Hero from "../components/Hero/Hero";
import MyAccordion from "../components/MyAccordion/MyAcoordion";
import MySlider from "../components/MySlider/MySlider";

const Home = () => {
  return (
    <div>
      <Hero />
      <Approach />
      <Benefits />
      <MySlider />
      <MyAccordion />
    </div>
  );
};

export default Home;
