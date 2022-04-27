import React from "react";

import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { notify } from "../components/Toastify/Toastify";
import { useAuth } from "../contexts/AuthContextProvider";

const MainLayout = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const handleChat = () => {
    if (currentUser.user === null) {
      notify("info", "Please LogIn/Register to join Chatroom!");
      navigate("/register");
    } else {
      navigate("/chat");
    }
  };
  return (
    <div
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
      <Navbar />
      <div className="chatRoom" onClick={handleChat}>
        <img
          src="https://www.freeiconspng.com/thumbs/live-chat-icon/live-chat-icon-0.png"
          alt=""
          width="90px"
        />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
