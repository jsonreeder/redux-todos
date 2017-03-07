import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

// TODO: Remove after development
import { receiveTodo, receiveTodos } from "./actions/todo_actions";
/* import { allTodos } from "./reducers/selectors";*/

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  const store = configureStore();

  // TODO: Remove after development
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  /* window.allTodos = allTodos(state);*/

  ReactDOM.render(<Root store={store} />, root);
});
