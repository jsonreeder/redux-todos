import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

// TODO: Remove after development
window.store = configureStore();

const App = () => (
  <div className="app">
    <h1>Todo List</h1>
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  ReactDOM.render(<App />, root);
});
