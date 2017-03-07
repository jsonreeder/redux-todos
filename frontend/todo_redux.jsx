import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import App from "./components/App";

// TODO: Remove after development
window.store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  ReactDOM.render(<App />, root);
});
