import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  //========= An onSubmit event for submitting the state(title)=========
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ [e.target.title]: "" });
  };

  //========= An onChange event for populating the state(title)=========
  onChange = e => this.setState({ /*[e.target.title]*/ title: e.target.value });

  render() {

    return (

      <form className="form_content" onSubmit={this.onSubmit}>
          <div className="Search_Submit">
            <input
              type="text"
              id=""
              placeholder="+ Type New Task Here"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>

          <input
            type="submit"
            value="Click Here Or Press Enter To Add New Task"
            className="btn_submit"
          />
      </form>
    );
  }
}

//=========== creating propTypes ===========
AddTodo.propTypes = {
  Addtodo: PropTypes.func
};

export default AddTodo;
