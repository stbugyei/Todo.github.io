import React, { Component } from "react";


class ConditionalGreetings extends Component {

  //===== A function to dynamically print greeting text ===
  getGreetings = () => {

    let CurrentDate = new Date()
    let Hour = CurrentDate.getHours();

    if (Hour >= 4 && Hour <= 11)
      return <>{this.props.firstName === null || this.props.firstName === "" ? <p>Good Morning, Dear</p>
        : <> <p>Good Morning,</p> <p style={{ color: '#fff', fontWeight: 'bold' }}>{`${this.props.firstName}`}</p></>}
      </>
    else if (Hour >= 12 && Hour <= 16)
      return <>{this.props.firstName === null || this.props.firstName === "" ? <p>Good Afternoon, Dear</p>
        : <> <p>Good Afternoon,</p> <p style={{ color: '#fff', fontWeight: 'bold' }}>{`${this.props.firstName}`}</p></>}
      </>
    else if (Hour >= 17 && Hour <= 20)
      return <>{this.props.firstName === null || this.props.firstName === "" ? <p>Good Evening, Dear</p>
        : <> <p>Good Evening,</p> <p style={{ color: '#fff', fontWeight: 'bold' }}>{`${this.props.firstName}`}</p></>}
      </>
    else if (Hour >= 21 || Hour <= 3)
      return <>{this.props.firstName === null || this.props.firstName === "" ? <p>Good Night, Dear</p>
        : <> <p>Good Night,</p> <p style={{ color: '#fff', fontWeight: 'bold' }}>{`${this.props.firstName}`}</p></>}
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
