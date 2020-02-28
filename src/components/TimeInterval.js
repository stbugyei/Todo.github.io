import React, { Component } from "react";

  
class displayDateTime extends Component {
  
    constructor() {
       super();
       this.state = {
       curTime: null
       }
  }
  
  componentDidMount() {
       setInterval( 
         () => this.getTime(), 1000) 
  }


  getTime() {
    const months = ["JANUARY", "FEBUARY", "MARCH","APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
      let currentDate = new Date()
    let formatedDate = currentDate.getDate() + "-" + months[currentDate.getMonth()] + "-" + currentDate.getFullYear() + ' ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
    this.setState({ curTime: formatedDate })
    //console.log(this.state.curTime)

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
