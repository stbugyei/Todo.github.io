import React, { Component } from "react";


class ConditionalGreetings extends Component {

  //===== A function to dynamically print greeting text ===
  getGreetings = () => {

    let CurrentDate = new Date()
    let Hour = CurrentDate.getHours();

    if (Hour >= 4 && Hour <= 11)
      return <>{this.props.firstName === null || this.props.firstName === "" ? <span>Good Morning Dear  &#128522;</span>
        : <> <span>Good Morning</span> <span style={{ color: '#fff', fontWeight: 'bold' }}>{`${this.props.firstName}`}  &#128522;</span></>}
      </>
    else if (Hour >= 12 && Hour <= 16)
      return <>{this.props.firstName === null || this.props.firstName === "" ? <span>Good Afternoon Dear  &#128522;</span>
        : <> <span>Good Afternoon</span> <span style={{ color: '#fff', fontWeight: 'bold' }}>{`${this.props.firstName}`}  &#128522;</span></>}
      </>
    else if (Hour >= 17 && Hour <= 20)
      return <>{this.props.firstName === null || this.props.firstName === "" ? <span>Good Evening Dear</span>
        : <> <span>Good Evening</span> <span style={{ color: '#fff', fontWeight: 'bold' }}>{`${this.props.firstName}`}  &#128522;</span></>}
      </>
    else if (Hour >= 21 || Hour <= 3)
      return <>{this.props.firstName === null || this.props.firstName === "" ? <p>Good Night Dear  &#128522;</p>
        : <> <span>Good Night</span> <span style={{ color: '#fff', fontWeight: 'bold' }}>{`${this.props.firstName}`}  &#128522;</span></>}
      </>
  }


  render() {

    return (
      <div className='conditionals'>
        {this.getGreetings()}
      </div>
    );
  }
}

export default ConditionalGreetings;
