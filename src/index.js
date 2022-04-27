import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { HunelProvider, HunelCreditCard } from "reactjs-credit-card";

const hunel = new HunelCreditCard();

let history = createBrowserHistory();
history.listen(({ location, action }) => {
  // this is called whenever new locations come in
  // the action is POP, PUSH, or REPLACE
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HunelProvider config={hunel}>
        <App />
      </HunelProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
