import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import AppRouter from "./router";
import SuccessSnackbar from "./common/components/SuccessSnackbar";
import FailSnackbar from "./common/components/FailSnackbar";

import configureStore from "./configureStore";

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <FailSnackbar />
    <SuccessSnackbar />
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
