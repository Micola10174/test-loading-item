import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import api from "./actions/api";
import { multiClientMiddleware } from "redux-axios-middleware";


const createStoreWithMiddleware = applyMiddleware(multiClientMiddleware(api))(
  createStore
);
const store = createStoreWithMiddleware(rootReducer(), {});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
