import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src="https://www.online-tech-tips.com/wp-content/uploads/2022/03/image-41.jpeg"
        alt=""
        width="100%"
        height="600px"
      />
      <br />
      <button
        onClick={() => navigate(-1)}
        style={{
          height: "50px",
          width: "100px",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default Error;
