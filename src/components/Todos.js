import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <div className="head">
        <div className="container">
          <div className="Todo">
            <TodoItem
              key={todo.id}
              todo={todo}
              checkCompleted={this.props.checkCompleted}
              delTodo={this.props.delTodo}
            />
          </div>
        </div>
      </div>
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  checkCompleted: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
