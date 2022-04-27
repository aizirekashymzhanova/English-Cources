import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="ab-left">
        <img
          src="https://i0.wp.com/englishzone.co/wp-content/uploads/2020/04/header3-min.png?w=1342&ssl=1"
          alt=""
          width="90%"
        />
      </div>
      <div className="right">
        <h2>ENGLISH ZONE COURCES</h2>
        <h4>
          Since 2015 we provide English courses with affordable prices and
          excellent services.
        </h4>
        <p className="about-text">
          Welcome to our English learning community, the place where you can
          learn new skills, meet new friends and feel accomplished, every single
          day. Take a look at our courses, read about our instructors and get in
          touch to find out more.
        </p>
        <Link to="/products">
          <Button className="app-btn" variant="contained">
            Browse Cources
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
