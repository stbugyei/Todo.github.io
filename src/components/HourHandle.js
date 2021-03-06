import React, { Component } from 'react'

class HourHandle extends Component {
    state = {
        curTime: null
    }


    GetHoursMinuteSeconds() {
        let curHour = new Date();
        let formatedTime = curHour.toLocaleString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        this.setState({ curTime: formatedTime })
    }

    interval = 0

    componentDidMount() {
        this.interval = setInterval(() => this.GetHoursMinuteSeconds(), 1000)
    }

    componentWillUnmount() {clearInterval(this.interval)}

    render() {
        return (
            <div className='hour_handle'>{this.state.curTime}</div>
        )
    }
}
export default HourHandle;