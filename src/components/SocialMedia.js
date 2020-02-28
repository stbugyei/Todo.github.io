import React, { Component } from "react";
import Twitter from "./images/twitter.png";
import Facebook from "./images/facebook.png";
import Linkedin from "./images/linkedin.png";
import Github from "./images/github (1).png";
import Pinterest from "./images/pinterest.png";

class SocialMedia extends Component {
  render() {
    return (
        <div className="container">
          <div className="footer_bottom">
            <div className="icon_group">
              <div className="bottom_icons">
                <div className="twitter">
                  <a href="https://twitter.com/login">
                    <img
                      className="footer_bottom--subimg"
                      src={Twitter}
                      alt=" "
                    />
                  </a>
                </div>
              </div>
              <div className="bottom_icons">
                <div className="facebook">
                  <a href="https://en-gb.facebook.com/login/">
                    <img
                      className="footer_bottom--subimg"
                      src={Facebook}
                      alt=" "
                    />
                  </a>
                </div>
              </div>
              <div className="bottom_icons">
                <div className="linkedin">
                  <a href="https://www.linkedin.com/">
                    <img
                      className="footer_bottom--subimg"
                      src={Linkedin}
                      alt=" "
                    />
                  </a>
                </div>
              </div>

              <div className="bottom_icons">
                <div className="github">
                  <a href="https://github.com/join">
                    <img
                      className="footer_bottom--subimg"
                      src={Github}
                      alt=" "
                    />
                  </a>
                </div>
              </div>

              <div className="bottom_icons">
                <div className="pinterest">
                  <a href="https://www.pinterest.com/">
                    <img
                      className="footer_bottom--subimg"
                      src={Pinterest}
                      alt=" "
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default SocialMedia;
