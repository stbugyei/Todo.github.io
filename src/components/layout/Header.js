import React from "react";
import { Link } from "react-router-dom";
import TimeInterval from "./../TimeInterval";
import SocialMedia from "./../SocialMedia";
import HourHandle from "./../HourHandle";
import ConditionalGreetings from "../ConditionalGreetings";
import ConditionaImages from "../ConditionaImage";

function createHeader() {
  return (
    <div className="head">
      <div className="container">
        <div className='banner'>   
        <div className='banner_image'></div>  
        <div className='banner_content'>
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
          <div className = 'calendar'><TimeInterval /></div>
          <div className = 'social_media'><SocialMedia /></div>      
          </div>    
       
          <div className='banner_greetings'>
          <div className='hour_handle'><HourHandle /></div>
            <div className='conditionals'><ConditionalGreetings /></div> 
            <div className='img'><ConditionaImages /></div> 
          </div>
      
      </div>
    </div>
    </div>
  );
}

export default createHeader;
