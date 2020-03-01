import React, { Component } from 'react'

class HourHandle extends Component {
    state = {
        curTime: ''
    }
    componentDidMount() {
        setInterval(
            () => this.GetHoursMinuteSeconds(), 1000)
    }

    GetHoursMinuteSeconds() {
        let curHour = new Date();
        let formatedTime = curHour.toLocaleString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        this.setState({ curTime: formatedTime })
    }

    render() {
        return (
          <div>{this.state.curTime}</div>                       
        )
    }
}
export default HourHandle;