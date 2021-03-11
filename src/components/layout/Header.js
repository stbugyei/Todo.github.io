import React, { Component } from "react";
import { Link } from "react-router-dom";
import TimeInterval from "./../TimeInterval";
import SocialMedia from "./../SocialMedia";
import HourHandle from "./../HourHandle";
import ConditionalGreetings from "../ConditionalGreetings";
import ConditionaImages from "../ConditionaImage";
import BannerImg from "./../../images/todobg.jpg"

class Header extends Component {

  //======== Logout Function ======
  logOut = () => { return window.localStorage.removeItem('firstName') }


  //===== Function to change the link style ========
  makeTodoActive = () => {
    if (this.props.firstName !== null && this.props.firstName !== "") {
      return {
        color: '#fff',
        cursor: 'pointer',
        pointerEvents: 'initial',
      }
    }
  }


  //=== Function to alternate signout and signin text ===
  changeLinkName = () => {
    if (this.props.firstName !== null && this.props.firstName !== "") {
      return (<span><i className="fas fa-sign-out-alt"></i> Sign Out</span>)
    } else { return (<span style={{ color: '#fff' }}><i className="fas fa-sign-in-alt"></i> Sign In </span>) }
  }

  render() {

    return (
      
      <div className="banner-wrapper">
        <div className='banner_text'> <h1>TODOLIST</h1></div>
        <div className='banner'>
          <div className="banner_image">
            <img src={BannerImg} alt="logo" />
          </div>

          <div className='banner_content'>

            <div className='banner_link'>
              <Link className="header_link" to="/" onClick={() => this.logOut()}>
                {this.changeLinkName()}
              </Link>{" "}
            |{" "}
              <Link className="todo_link" to="/todos" style={this.makeTodoActive()}>
                {" "}
              Todos
            </Link>
            </div>
            <TimeInterval />
            <SocialMedia />
          </div>

          <div className='banner_greetings'>
            <HourHandle />
            <ConditionalGreetings firstName={this.props.firstName} />
            <ConditionaImages />
          </div>

        </div>
      </div>
    );
  }

}

export default Header;
