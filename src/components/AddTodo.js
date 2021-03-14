import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  //========= An onSubmit event for submitting the state(title)=========
  onSubmit = (e) => {
    // e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ [e.target.title]: "" });
  };

  //========= An onChange event for populating the state(title)=========
  onChange = e => this.setState({ /*[e.target.title]*/ title: e.target.value });

  render() {

    return (

      <form className="form_content" onSubmit={(e) => e.preventDefault()}>

        <h3 style={{ margin: '25px 0px', textAlign: 'left', fontFamily: 'Poppins, sans-serif' }}>Add a new schedule</h3>

        <div className="Search_Submit">
          <input
            type="text"
            id=""
            placeholder="+ Type new schedule here"
            value={this.state.title}
            onChange={this.onChange}
          />
        </div>

        <Link to="/todos" style={{ marginRight: "0px", marginLeft: 'auto', marginBottom: '15px', marginTop:'5px' }}>
          <button className="btn-add btn-add__annex" onClick={(e) => this.onSubmit(e)}><i className="fas fa-plus"></i></button>
        </Link>

        <Link to="/todos" style={{ marginRight: "0px", marginLeft: 'auto' }}>
          <button className="btn-close btn-close__annex" ><i className="fas fa-times"></i></button>
        </Link>
      </form>
    );
  }
}

//=========== creating propTypes ===========
AddTodo.propTypes = {
  Addtodo: PropTypes.func
};

export default AddTodo;
