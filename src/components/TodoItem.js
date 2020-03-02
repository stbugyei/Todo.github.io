import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  //===== A function to dynamically style completed todos ===
  getStyle = () => {
    if (this.props.todo.completed) {
      return {
       padding: '7px 9px',
        fontColor: "rgb(2,0,36)",
        borderRadius: "30px",
        background:
       "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(107,215,209,1) 0%, rgba(247,235,247,1) 45%, rgba(154,222,222,1) 72%)"
      };
    } else {
      return {
        textDecoration: "none"
      };
    }
  };
  render() {
    const { id, title } = this.props.todo;
    return ( 
      <div style={this.getStyle()}>
        <p>
          <label className="css-checkbox">
            <input
              type="checkbox"
              onChange={this.props.checkCompleted.bind(this, id)}
            ></input>
            <span className="checkmark"></span>
            {title}
          </label>
          <button className = 'btnStyle'onClick={this.props.delTodo.bind(this, id)} >
            {" "}
            x{" "}
          </button>
        </p>{" "}
        </div>
    );
  }
}

/* <input className='css-checkbox' id='item'
            type="checkbox"
            onChange={this.props.checkCompleted.bind(this, id)}
          />{" "}<label className = 'css-label' htmlFor="item">{title}</label>
         {" "}*/

//======== creating propTypes==============
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  checkCompleted: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};


export default TodoItem;
