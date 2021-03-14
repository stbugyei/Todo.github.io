import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

export class HomePage extends Component {

    state = {
        firstName: ""
    };

    //========= An onSubmit event for submitting the state(title)=========
    onSubmit = (e) => {
        this.props.addName(this.state.firstName);
        this.setState({ [e.target.firstName]: "" });
    };

    //========= An onChange event for populating the state(title)=========
    onChange = e => this.setState({ /*[e.target.title]*/ firstName: e.target.value });


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
                    <div className="" style={{ margin: '20px 0' }}> <h4>Welcome,</h4></div>

                    <h4 style={{ margin: '20px 0' }}>This is Your Todo List App, Please Enter Your First Name To Continue.<span role="img" aria-label="hugging face">🤗</span></h4>

                    <input type="text" className="input-field" placeholder="Please Enter First Name..." style={{ margin: '20px 0' }}
                        name="firstName"
                        value={firstName}
                        onChange={this.onChange}
                    />

                    <button className="btn_login" onClick={(e) => { this.onSubmit(e); this.props.history.push("/todos")}} style={this.makeLinkActive()} ><span><i className="fas fa-sign-in-alt"></i> Sign In </span></button>
                </div>

            </div>
        )
    }
}

export default withRouter(HomePage)
