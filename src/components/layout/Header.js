import React from "react";
import { Link } from "react-router-dom";
//import Time from "./../Time";
import TimeInterval from "./../TimeInterval";
//import TimeInterval from "./../Time";
import SocialMedia from "./../SocialMedia";

function Header() {
  return (
    <div className="head">
      <div className="container">
        <div className='banner_wrapper'>
     
        <header className="banner">
          <div className ='banner_text'> <h1 style={{textAlign:'left'}}><span style={{fontSize:'larger'}}>T</span>  <span style={{ fontSize:'larger'}} >o</span>  <span style={{fontSize:'larger'}}>d</span>  <span style={{fontSize:'larger'}}>o</span>  <span style={{ fontSize:'larger'}}>L</span>  <span style={{fontSize:'larger'}}>i</span>  <span style={{fontSize:'larger'}}>s</span> <span style={{fontSize:'larger'}}>t</span></h1></div>
         <div className= 'banner_link'>
          <Link className="headerLink" to="/">
            Home
          </Link>{" "}
          |{" "}
          <Link className="headerLink" to="/About">
            {" "}
            About
          </Link>
          </div>
          <div className='calendar'><TimeInterval /></div>
            <SocialMedia />       
          </header>    
          <div className = 'banner_image'></div>
      </div>
    </div>
    </div>
  );
}

export default Header;
