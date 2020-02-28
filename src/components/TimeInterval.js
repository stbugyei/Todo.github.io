import React, { Component } from "react";

class displayDateTime extends Component {
  
    constructor() {
       super();
       this.state = {
         curTime : null
       }
     }
     componentDidMount() {
       setInterval( () => {
         this.setState({
           curTime : new Date().toLocaleString()
         })
       },1000)
     }
    render() {
         return(
           <div>
             <p>{this.state.curTime}</p>
           </div>
         );
       }
}
     
export default displayDateTime;
