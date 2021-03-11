import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

export class HomePage extends Component {

    state = {
        firstName: window.localStorage.getItem('firstName') ? JSON.parse(window.localStorage.getItem('firstName')) : "",
    };


    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    addName = (somename) => {
        window.localStorage.setItem("firstName", JSON.stringify(somename));
        this.props.history.push("/todos")
    };

    //===== Function to change the link style ========
    makeLinkActive = () => {
        if (this.state.firstName !== "") {
            return {
                color: 'indigo',
                cursor: 'pointer',
                pointerEvents: 'initial',
                background: 'rgba(154, 222, 222, 1)'
            }
        }
    }


    render() {
        const { firstName } = this.state
        return (
            <div className="welcome-wrapper">
                <div style={{ width: '100%' }}>
                    <div className="logo" style={{ margin: '20px 0' }}>stbugyei</div>

                    <h4 style={{ margin: '20px 0' }}>Hi, This is Your Todo List App, Please Enter Your FirstName To Continue.<span role="img" aria-label="hugging face">🤗</span></h4>

                    <input type="text" className="input-field" placeholder="Please Enter First Name..." style={{ margin: '20px 0' }}
                        name="firstName"
                        value={firstName}
                        onChange={this.onChange}
                    />

                    <button className="btn_login" onClick={() => this.addName(firstName)} style={this.makeLinkActive()} ><span><i className="fas fa-sign-in-alt"></i> Sign In </span></button>
                </div>

            </div>
        )
    }
}

export default withRouter(HomePage)
