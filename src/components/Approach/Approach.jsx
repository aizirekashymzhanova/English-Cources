import { Button } from "@mui/material";
import React from "react";

import "./Approach.scss";

const Approach = () => {
  return (
    <div className="approach">
      <div className="right">
        <h4> WHAT TO EXPECT? </h4>
        <br />
        <h2> Our Approach</h2>

        <p>
          English Zone provides an integrated course schedule of learning
          through exploration, scrutiny, and self-reflection. Our classes
          combine hands-on experience with knowledge-based teaching
        </p>
        <br />
        <Button className="app-btn" variant="contained">
          Browse Cources
        </Button>
      </div>
      <div className="left">
        <div className="app-item">
          <div className="item-descr">
            <img
              width="65%"
              src="https://i1.wp.com/englishzone.co/wp-content/uploads/2020/04/Vocabulary-Building.png?fit=455%2C365&ssl=1"
              alt=""
            />
            <p>Vocabulary Building</p>
          </div>
        </div>
        <div className="app-item">
          <div className="item-descr">
            <img
              width="65%"
              src="https://i2.wp.com/englishzone.co/wp-content/uploads/2020/04/Group-Discussions.png?fit=795%2C518&ssl=1"
              alt=""
            />
            <p>Group Discussions</p>
          </div>
          <div className="item-descr">
            <img
              width="65%"
              src="https://i1.wp.com/englishzone.co/wp-content/uploads/2020/04/Speaking.png?fit=574%2C509&ssl=1"
              alt=""
            />
            <p>Pronounciation</p>
          </div>
        </div>
        <div className="app-item">
          <div className="item-descr">
            <img
              width="65%"
              src="https://i0.wp.com/englishzone.co/wp-content/uploads/2020/04/Presentations.png?fit=967%2C518&ssl=1"
              alt=""
            />
            <p>Presentations</p>
          </div>
          <div className="app-item">
            <div className="item-descr">
              <img
                width="65%"
                src="https://i2.wp.com/englishzone.co/wp-content/uploads/2020/04/Writing-Skills.png?fit=507%2C513&ssl=1"
                alt=""
              />
              <p>Grammar Review</p>
            </div>
          </div>
          <div className="app-item">
            <div className="item-descr">
              <img
                width="65%"
                src="https://i0.wp.com/englishzone.co/wp-content/uploads/2020/04/Games.png?fit=996%2C793&ssl=1"
                alt=""
              />
              <p>Games</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
