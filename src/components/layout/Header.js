import React, { Component } from "react";
import { Link } from "react-router-dom";
import TimeInterval from "./../TimeInterval";
import SocialMedia from "./../SocialMedia";
import HourHandle from "./../HourHandle";
import ConditionalGreetings from "../ConditionalGreetings";
import ConditionaImages from "../ConditionaImage";
import BannerImg from "./../../images/todobg.jpg"
import Speaker from "./../../images/speaker2.gif"
import ProgressIndicator from "../ProgressIndicator";

class Header extends Component {


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
        <div className="logo">
          <span>StBugyei☻</span>
          <a href="https://radiobruce.netlify.app/" target="_blank" rel="noopener noreferrer"> <span style={{ textTransform: 'initial', marginRight: '24px', position: 'relative', color: '#fff' }}>Live Radio</span>
            <img src={Speaker} alt="headphone" style={{ transform: 'scale(.4)', position: 'absolute', top: '-20px', right: '-24px' }} /></a>
        </div>

        <div className='banner_text'> <h1>MY-TODO-LIST</h1></div>

        <div className='banner'>
          <div className="banner_image">
            {this.props.avarta ?
              <img src={this.props.avarta} alt="logo" /> :
              <img src={BannerImg} alt="logo" style={{ borderRadius: 'initial' }} />
            }
          </div>

          <div className='banner_content'>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ display: 'flex' }}>
                <span className="avarta">
                  {this.props.avarta ? <img src={this.props.avarta} alt="" style={{ width: '55px', height: '55px', borderRadius: '50%', marginRight: '10px' }} /> : ''}
                </span>

                <div className='banner_link'>
                  <Link className="header_link" to="/" onClick={() => this.props.logOut()}>
                    {this.changeLinkName()}
                  </Link>{" "}
            |{" "}
                  <Link className="todo_link" to="/todos" style={this.makeTodoActive()}>
                    {" "}
              Todos
            </Link>
                </div>
              </div>

            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap" }}>
                <TimeInterval />
                <div style={{ margin: "0px 15px", width:"100px"}}>
                  <HourHandle />
                </div>
                <div>
                  <ConditionaImages />
                </div>
              </div>
            </div>

            <ConditionalGreetings firstName={this.props.firstName} />
            <SocialMedia />
          </div>
        </div>

        <ProgressIndicator todos={this.props.todos} />
      </div>
    );
  }
}

export default Header;
