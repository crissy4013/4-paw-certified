import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import Reset from "../src/styles/reset.css"
import App from "./App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
   <div style={Reset}> <App /></div>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
