import {
  RECEIVE_TODOS,
  RECEIVE_TODO
} from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: "Call Stan Dupp",
    body: "While sitting down",
    done: false
  },
  2: {
    id: 2,
    title: "Email Rick O’Shea",
    body: "Make sure it doesn't bounce back",
    done: false
  },
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      const newState = {};
      action.todos.forEach((todo) => (newState[todo.id] = todo));
      return newState;
    case RECEIVE_TODO:
      const newTodo = {
        [action.todo.id]: action.todo
      };
      return Object.assign({}, state, newTodo);
    default:
      return state;
  }
};

export default todosReducer;
