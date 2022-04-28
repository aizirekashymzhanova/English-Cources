import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { firestore } from "../../firebase";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  collection,
  deleteDoc,
  doc,
  addDoc,
  getDocs,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { useAuth } from "../../contexts/AuthContextProvider";
import { Button } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import "./Chat.scss";

let moment = require("moment");
let today = moment().format("MMMM Do YYYY, h:mm a");
//console.log(collection);

const RealTimechat = () => {
  // const firestore = getFirestore();
  //console.log(getFirestore);
  const { currentUser } = useAuth();
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("");

  //Creating new message
  async function sendMessage() {
    try {
      await addDoc(collection(firestore, "messages"), {
        email: currentUser.user,
        text: msg,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }

    setMsg("");
    getMsgs();
    // console.log(collection);
  }

  //Render of messages
  const getMsgs = async () => {
    const docRef = query(
      collection(firestore, "messages"),
      orderBy("createdAt")
    );
    // const docSnap = await getDocs(docRef);
    //console.log(docSnap);

    //here
    const unsubscribe = onSnapshot(docRef, (querySnapshot) => {
      const msgs = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data(), "doc here");
        msgs.push(doc.data());
      });
      setData(msgs);
    });
    // end

    // if (docSnap.empty) {
    //   console.log("No such document!");
    //   return;
    // }
    // let allMsgs = [];
    // docSnap.forEach((doc) => {
    //   // console.log(docSnap);
    //   allMsgs.push({ id: doc.id, ...doc.data() });
    // });
    // setData(allMsgs);
  };

  useEffect(() => {
    getMsgs();
  }, []);
  // }, [data]);

  //Delete one message
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(firestore, "messages", id));
      //setData(data.filter((msg) => msg.id !== id));
    } catch (err) {
      console.log(err);
    }
    getMsgs();
  };

  return (
    <div>
      <div className="chatBox">
        <h3>Date & Time:{today}</h3>
        {data.map((messages) => (
          <div key={messages.id}>
            <div
              className={currentUser.user === messages.email ? "me" : "notMe"}
            >
              <div
                className={
                  currentUser.user === messages.email ? "mymsg" : "notMymsg"
                }
              >
                <div className="message-box">
                  <div>from: {messages.email}</div>
                  <div style={{ display: "flex" }}>
                    <div className="text"> {messages.text}</div>

                    <Button
                      onClick={() => handleDelete(messages.id)}
                      sx={{ fontSize: "20px" }}
                    >
                      ✖️
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <form
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CameraAltIcon />

          <AttachFileIcon />

          <input
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "30px",
            }}
            value={msg}
            placeholder="Type message..."
            onChange={(e) => setMsg(e.target.value)}
          />

          <Button
            onClick={() => sendMessage()}
            style={{
              color: "black",
            }}
          >
            Send
          </Button>

          <KeyboardVoiceIcon />
        </form>
      </div>
    </div>
  );
};
export default RealTimechat;
