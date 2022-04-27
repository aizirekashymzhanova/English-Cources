import React from "react";
import "./ProdHero.scss";

const ProdHero = () => {
  return (
    <div className="products-hr">
      <div className="pr-hero">
        <h2>Success And Nothing Less </h2>
        <div className="prod-hero-descr">
          <ul>
            <p> By the end of the courses you will:</p>
            <li>
              Develop and demonstrate the speaking skills for group discussions:
              how to agree or disagree, how to clarify, restate and summarize.
            </li>
            <li>
              Improve your pronunciation and fluency ,increase your English
              vocabulary,writing and reading skills.
            </li>
            <li>
              Know statements, questions and responses for different situations
            </li>
          </ul>
        </div>
        <div className="four-parent">
          <div className="four">
            <img
              src="https://englishshow.ru/img/kursy/grammar_img.jpg"
              alt="readin"
              width="70%"
            />
            <p>READING</p>
          </div>
          <div className="four">
            <img
              src="https://englishshow.ru/img/kursy/writing_img.jpg"
              alt="writing"
              width="70%"
            />
            <p>WRITING</p>
          </div>
          <div className="four">
            <img
              src="https://englishshow.ru/img/kursy/speaking_img.jpg"
              alt="speaking"
              width="70%"
            />
            <p>SPEAKING</p>
          </div>
          <div className="four">
            <img
              src="https://englishshow.ru/img/kursy/listening_and_reading_img.jpg"
              alt="listening"
              width="70%"
            />
            <p>LISTENING</p>
          </div>
        </div>
      </div>
      <h2>Take a look at our courses ⬇ </h2>
    </div>
  );
};

export default ProdHero;
