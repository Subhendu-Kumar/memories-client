import { createStore, applyMiddleware, compose } from "redux";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import React from "react";

import reducers from "./reducers";
import App from "./App.jsx";
import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
