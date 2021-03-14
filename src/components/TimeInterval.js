import React, { Component } from "react";


class displayDateTime extends Component {

  state = {
    curTime: null
  }

  getTime = () => {
    const months = ["JANUARY", "FEBUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    let currentDate = new Date()
    let formatedDate = currentDate.getDate() + "-" + months[currentDate.getMonth()] + "-" + currentDate.getFullYear()/* + ' ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();*/
    this.setState({ curTime: formatedDate })
    //console.log(this.state.curTime)
  }

  componentDidMount() {
    setInterval(() => this.getTime(), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.getTime())
  }

  render() {
    return (
      <div className='calendar'>
        {this.state.curTime}
      </div>
    );
  }
}

export default displayDateTime;
