import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
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

    const { id, title, date, completed } = this.props.todo;

    return (
      <div className="todo_item" style={this.getStyle()}>
        <div>
          <label className="css-checkbox">
            <input
              type="checkbox"
              defaultChecked={completed}
              onChange={() => this.props.checkCompleted(id)}
            ></input>
            <span className="checkmark"></span>

            <span style={{ paddingBottom: '3px', color: 'indigo', fontStyle: 'italic' }}><i className="far fa-calendar-alt"></i> {date}</span>

          </label>
          <span style={{ display: 'block', paddingLeft: '25px' }}> {title}</span>

          <div style={{
            width: '85px', display: 'flex', justifyContent: 'space-between', marginRight: '0',
            marginLeft: 'auto'
          }}>
            <Link to={`/todo/edit/${id}`}>
              <span className='btnStyle' style={{ color: 'indigo' }}> <i className="fas fa-user-edit"></i></span>
            </Link>


            <span className='btnStyle' style={{ color: 'red' }} onClick={() => this.props.delTodo(id)} > <i className="far fa-times-circle"></i></span>
          </div>
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


export default withRouter(TodoItem);
