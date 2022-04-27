import React from "react";
import "./Benefits.scss";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import JoinLeftIcon from "@mui/icons-material/JoinLeft";
const Benefits = () => {
  return (
    <>
      <h2 className="benefit-title">WHY YOU SHOULD CHOOSE US?</h2>
      <div className="benefits">
        <div className="benefits-img">
          <img
            src="https://media.istockphoto.com/vectors/online-education-concept-vector-id1212272710?k=20&m=1212272710&s=612x612&w=0&h=7PGgXBrWLaU-u-3nKgeQKSauGctfJ_Wv8VZPWxQCbQM="
            alt=""
            width="100%"
          />
        </div>
        <div className="benefits-details">
          <div className="benefit-item" data-aos="fade-up" data-aos-delay="150">
            <ThumbUpIcon />
            <p className="b-title">Experienced Professionals</p>
            <p>
              Training is offered by industry experts with decades of experience
              in their respective fields, ensuring you a great career.
            </p>
          </div>
          <div className="benefit-item" data-aos="fade-up" data-aos-delay="150">
            <ImportContactsIcon />
            <p className="b-title">Hands-On Training</p>
            <p>
              Trainings at our cources Training is practical rather than
              theoretical which enhances your learning experience.
            </p>
          </div>
          <div className="benefit-item" data-aos="fade-up" data-aos-delay="150">
            <EmojiEmotionsIcon />
            <p className="b-title">Learning Is Fun</p>
            <p>
              We make sure that learning is fun and interactive at the same time
              here during online/offline cources.
            </p>
          </div>
          <div className="benefit-item" data-aos="fade-up" data-aos-delay="150">
            <JoinLeftIcon />
            <p className="b-title">Offline And Online Training</p>
            <p>
              You can attend our classes at your convenience. We serve offline &
              online classes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
