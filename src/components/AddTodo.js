import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: "",
    date: "",
  };

  //========= An onSubmit event for submitting the state(title)=========
  onSubmit = (e) => {
    this.props.addTodo(this.state.title, this.state.date);
    this.setState({ [e.target.title]: "", [e.target.date]: "" });
  };

  //========= An onChange event for populating the state =========
  // onChange = e => this.setState({ /*[e.target.title]*/ title: e.target.value, date: e.target.value });
  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {

    return (

      <form className="form_content" onSubmit={(e) => e.preventDefault()}>

        <h3 style={{ margin: '12px 0px 12px', textAlign: 'left', fontFamily: 'Poppins, sans-serif' }}>Add a new schedule</h3>

        <div className="Search_Submit, text-area__wrapper">
          {/* <input
            type="text"
            name="title"
            placeholder="Type new schedule here +"
            value={this.state.title}
            onChange={this.onChange}
          /> */}

          <input style={{marginBottom:'15px'}}
            type="datetime-local"
            name="date"
            value={this.state.date}
            onChange={this.onChange}
          />

          <textarea name="title" className="textarea" placeholder="Type new schedule here +" cols="50" rows="4" height='100px' onChange={this.onChange} value={this.state.title}></textarea>

        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'rigth' }}>
          <Link to="/todos" style={{ marginRight: "0px", marginLeft: 'auto', marginBottom: '15px', marginTop: '5px' }}>
            <button className="btn-add btn-add__annex" onClick={(e) => this.onSubmit(e)}><i className="fas fa-plus"></i></button>
          </Link>

          <Link to="/todos" style={{ marginRight: "0px", marginLeft: 'auto' }}>
            <button className="btn-close btn-close__annex" ><i className="fas fa-times"></i></button>
          </Link>
        </div>


      </form>
    );
  }
}

//=========== creating propTypes ===========
AddTodo.propTypes = {
  Addtodo: PropTypes.func
};

export default AddTodo;
