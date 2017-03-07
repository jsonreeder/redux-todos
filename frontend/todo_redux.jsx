import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  const store = configureStore();

  // TODO: Remove after development
  window.store = store;
  window.receiveTodo = receiveTodo;

  ReactDOM.render(<Root store={store} />, root);
});
