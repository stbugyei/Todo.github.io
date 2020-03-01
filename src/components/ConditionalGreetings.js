import React, { Component } from "react";


class ConditionalGreetings extends Component {
  //===== A function to dynamically print text ===

  getGreetings() {
    let CurrentDate = new Date()
    let Hour = CurrentDate.getHours();
    if (Hour >= 4 && Hour <= 11)
      return 'Good Morning Emmanuel!';
    else if (Hour >= 12 && Hour <= 16)
      return 'Good Afternoon, Emmanuel!';
    else if (Hour >= 17 && Hour <= 20)
      return 'Good Evening Emmanuel!';
    else if (Hour >= 21 || Hour <= 3)
      return 'Good Night Dearest!';
  }


  render() {
    return (
        <div>
        {this.getGreetings()}
      </div>      
    );
  }
}

export default ConditionalGreetings ;
