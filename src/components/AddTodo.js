import React, { Component } from "react";
import PropTypes from "prop-types";
//import DateTimePicker from 'react-datetime-picker';

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
      <div className="head">
        <div className="container">
          <form className="form_content" onSubmit={this.onSubmit}>
            <fieldset className="fieldset">
              <div className="fieldset_content">
                <div className="Search_Submit">
                  <input
                    type="text"
                    id=""
                    placeholder="+ Add New"
                    value={this.state.title}
                    onChange={this.onChange}
                  ></input>
                </div>
                <input
                  type="submit"
                  value="Add Item"
                  className="btn_submit"
                ></input>
              </div>
            </fieldset>
          </form>
      
        </div>
      </div>
    );
  }
}

//=========== creating propTypes ===========
AddTodo.propTypes = {
  Addtodo: PropTypes.func
};

export default AddTodo;
