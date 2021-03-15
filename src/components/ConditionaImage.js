import React, { Component } from "react";
import Afternoon from "./../images/afternoon.svg";
import SunRise from "./../images/sunrise.svg";
import Sunset from "./../images/sunset.svg";
// import Goodnight from "./images/moon.svg";
import Goodnight from "./../images/cloudy.svg";

class ConditionaImage extends Component {

  //===== A function to dynamically change Images===
  getImages() {

    let Hour = new Date().getHours();
    if (Hour >= 4 && Hour <= 11) {
      return SunRise

    } else if (Hour >= 12 && Hour <= 16) {
      return Afternoon
    }
    else if (Hour >= 17 && Hour <= 20) {
      return Sunset
    }
    else if (Hour >= 21 || Hour <= 3) {
      return Goodnight
    };

  }

  render() {
    return (
      <div style={{ position:'relative', width:'44px', minHeight:'44px' }}>
        <img className="conditinal_img"
          src={this.getImages()}
          alt=" "
        />
      </div>
    );
  }
}

export default ConditionaImage;
