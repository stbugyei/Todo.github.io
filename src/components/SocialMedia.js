import React, { Component } from "react";
import Twitter from "./../images/twitter.png";
import Facebook from "./../images/facebook.png";
import Linkedin from "./../images/linkedin.png";
import Github from "./../images/github (1).png";
import Pinterest from "./../images/pinterest.png";

class SocialMedia extends Component {

  render() {

    return (

      <div className="icon_group">
        <div className="media-icon">
          <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer" >
            <img
              src={Twitter}
              alt=" "
            />
          </a>
        </div>
        <div className="media-icon">
          <a href="https://en-gb.facebook.com/login/" target="_blank" rel="noopener noreferrer" >
            <img
              src={Facebook}
              alt=" "
            />
          </a>
        </div>

        <div className="media-icon">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" >
            <img
              src={Linkedin}
              alt=" "
            />
          </a>
        </div>

        <div className="media-icon">
          <a href="https://github.com/join" target="_blank" rel="noopener noreferrer" >
            <img
              src={Github}
              alt=" "
            />
          </a>
        </div>

        <div className="media-icon">
          <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" >
            <img
              src={Pinterest}
              alt=" "
            />
          </a>

        </div>
      </div>

    );
  }
}
export default SocialMedia;
