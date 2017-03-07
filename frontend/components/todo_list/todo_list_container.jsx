import { connect } from "react-redux";
import TodoList from "./todo_list";

const mapStateToProps = (state) => ({
  todos: allTodos(state),
  state
});
