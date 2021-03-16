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
                    <div className="" style={{ margin: '20px 0', fontSize:'18px' }}> <p>Welcome <span role="img" aria-label="hugging face">🤗</span>,</p></div>

                    <p style={{ margin: '15px 0', fontSize:'18px' }}>This is Your Todo List App, Please Enter Your First Name To Continue.</p>

                    <input type="text" className="input-field" placeholder="Please Enter First Name..." style={{ margin: '15px 0' }}
                        name="firstName"
                        value={firstName}
                        onChange={this.onChange}
                    />

                    <div style={{ width:'100%', textAlign:'right'}}><button className="btn_login" onClick={(e) => { this.onSubmit(e); this.props.history.push("/todos") }} style={this.makeLinkActive()} ><span><i className="fas fa-sign-in-alt"></i> Sign In </span></button></div>

                    
                    <p style={{ width:'100%', padding:'10px 0px'}}><span style={{ color: 'red' }}><i className="fas fa-info-circle"></i></span> <span>Sign In is only to display First Name. Is <span style={{ color: 'red' }}> NOT </span> for Authentication or Validation.</span></p>
                </div>

            </div>
        )
    }
}

export default withRouter(HomePage)
