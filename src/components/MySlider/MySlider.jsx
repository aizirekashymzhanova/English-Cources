import { Container } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";
import "./Myslider.scss";

export default class MySlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div className="sliders">
        <Container>
          <h2>Feedbacks from our students.</h2>
          <Slider {...settings}>
            <div className="slider-item">
              <h3>Bermet </h3>

              <p>
                Hello! My name is Bermet, I studied at the Logos company and my
                teacher was Miss Olga, I went to preparatory courses for IELTS
                and I was satisfied with my results. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Repellendus, placeat consequuntur
                ratione harum consectetur rem.
              </p>
            </div>
            <div className="slider-item">
              <h3>Azamov Nursultan </h3>
              <p>
                I am Azamov Nursultan, I study at the Lyceum named after Ch.
                Aitmatov, at the moment I go to the language courses of the
                company Logos. The training takes place at the level, everything
                is clear, easy and accessible.
              </p>
            </div>
            <div className="slider-item">
              <h3>Meerim Miizamova </h3>
              <p>
                I visit TOEFL courses are in their third week and I really like
                it. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum asperiores neque doloremque obcaecati numquam porro sed
                placeat dolor nemo excepturi! Assumenda incidunt quisquam
                deleniti veniam fuga molestiae quod. Assumenda doloremque
                possimus fugit autem eius quisquam alias expedita.
              </p>
            </div>
            <div className="slider-item">
              <h3>Ali ALiev </h3>
              <p>
                Thanks to these courses, I figured out the structure of the test
                and improved my level English, began to perceive the fast speech
                of native speakers well.
              </p>
            </div>
            <div className="slider-item">
              <h3>Aliya Alieva</h3>
              <p>
                I like the team, the atmosphere, and this is not the course
                where they just gave you books and cram yourself, but they will
                drive and you will see the results.
              </p>
            </div>
            <div className="slider-item">
              <h3>Ariel Arietova</h3>
              <p>
                It's only been three classes and I already feel that the level
                of my knowledge has become higher. I like teaching method,
                because it gives a lively spoken language, and also teaches the
                correct pronunciation.
              </p>
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}
