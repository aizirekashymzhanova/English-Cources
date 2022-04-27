import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import "./Approach.scss";

const Approach = () => {
  return (
    <div className="approach" id="about">
      <div className="right">
        <h4 className="h4"> WHAT TO EXPECT? </h4>

        <h2> Our Approach</h2>

        <p>
          English Zone provides an integrated course schedule of learning
          through exploration, scrutiny, and self-reflection. Our classes
          combine hands-on experience with knowledge-based teaching
        </p>
        <br />
        <Link to="/products">
          <Button className="app-btn" variant="contained">
            Browse Cources
          </Button>
        </Link>
      </div>
      <div className="left">
        <div className="app-item">
          <div className="item-descr" data-aos="fade-up" data-aos-delay="150">
            <img
              src="https://i1.wp.com/englishzone.co/wp-content/uploads/2020/04/Vocabulary-Building.png?fit=455%2C375&ssl=1"
              alt=""
            />
            <span>Vocabulary Building</span>
          </div>
        </div>
        <div className="app-item">
          <div className="item-descr" data-aos="fade-up" data-aos-delay="150">
            <img
              src="https://i2.wp.com/englishzone.co/wp-content/uploads/2020/04/Group-Discussions.png?fit=795%2C518&ssl=1"
              alt=""
            />
            <span>Grous Discussions</span>
          </div>
          <div className="item-descr" data-aos="fade-up" data-aos-delay="150">
            <img
              src="https://i1.wp.com/englishzone.co/wp-content/uploads/2020/04/Speaking.png?fit=574%2C509&ssl=1"
              alt=""
            />
            <span>Pronounciation</span>
          </div>
        </div>
        <div
          className="app-item app-item-3"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="item-descr">
            <img
              src="https://i0.wp.com/englishzone.co/wp-content/uploads/2020/04/Presentations.png?fit=967%2C518&ssl=1"
              alt=""
            />
            <span>Presentations</span>
          </div>

          <div className="item-descr" data-aos="fade-up" data-aos-delay="150">
            <img
              src="https://i2.wp.com/englishzone.co/wp-content/uploads/2020/04/Writing-Skills.png?fit=507%2C513&ssl=1"
              alt=""
            />
            <span>Grammar Review</span>
          </div>

          <div className="item-descr" data-aos="fade-up" data-aos-delay="150">
            <img
              src="https://i0.wp.com/englishzone.co/wp-content/uploads/2020/04/Games.png?fit=996%2C793&ssl=1"
              alt=""
            />
            <span>Games</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
