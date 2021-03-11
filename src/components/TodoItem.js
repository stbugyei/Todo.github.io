import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  //===== A function to dynamically style completed todos ===
  getStyle = () => {
    if (this.props.todo.completed) {
      return {
        fontColor: "rgb(2,0,36)",
        backgroundColor: "#e3e9ff",
        boxShadow: ' 0 3px 6px rgb(0 0 0 / 16%), 0 1px 2px rgb(0 0 0 / 23%)',
      };
    }
  };
  render() {

    const { id, title, completed } = this.props.todo;

    return (
      <div className="todo_item" style={this.getStyle()}>
        <div>
          <label className="css-checkbox">
            <input
              type="checkbox"
              defaultChecked={completed}
              onChange={this.props.checkCompleted.bind(this, id)}
            ></input>
            <span className="checkmark"></span>
            {title}
          </label>

          <span className='btnStyle' onClick={this.props.delTodo.bind(this, id)} > <i className="far fa-times-circle"></i></span>
        </div>
      </div>
    );
  }
}


//======== creating propTypes==============
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  checkCompleted: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};


export default TodoItem;
