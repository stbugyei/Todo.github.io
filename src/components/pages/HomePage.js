import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

export class HomePage extends Component {

    state = {
        firstName: "",
        email: "",
    };

    //========= An onSubmit event for submitting the state(title)=========
    onSubmit = (e) => {
        this.props.addName(this.state.firstName);
        this.props.addEmail(this.state.email);
        this.setState({ [e.target.firstName]: "", [e.target.email]: "" });
    };

    //=== An onChange event for populating for updating firstname ====
    onChange = e => this.setState({ /*[e.target.title]*/ firstName: e.target.value });

    //=== An onChange event for populating for updating email ====
    onEmailChange = e => this.setState({ email: e.target.value });

    //=== email validation function ====
    emailValidator = () => {
        let validator = false
        if ((new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(this.state.email))) {
            validator = true
        }
        return validator
    }

    //===== Function to change the link style ========
    makeLinkActive = () => {
        if (this.state.firstName !== "" && this.emailValidator() === true) {
            return {
                color: 'indigo',
                cursor: 'pointer',
                pointerEvents: 'initial',
                background: 'rgba(154, 222, 222, 1)'
            }
        }
    }


    render() {

        const { firstName, email } = this.state

        return (
            <div className="welcome-wrapper">
                <div style={{ width: '100%' }}>
                    <div className="" style={{ margin: '0px 0px 15px', fontSize: '18px' }}> <p>Welcome <span role="img" aria-label="hugging face">🤗</span></p></div>

                    {/* <p style={{ margin: '10px 0', fontSize: '16px' }}> Please Enter Your First Name. Email And Upload image To Continue.</p> */}

                    <label htmlFor="myfile" className="file-upload"><span style={{ paddingRight: '10px' }}>Select image:</span>
                        <input type="file" id="myfile" name="myfile" accept='image/*' onChange={this.props.addAvatar} style={{ width: '60%' }} />
                    </label>

                    <input type="text" className="input-field" placeholder="Enter First Name..." style={{ margin: '15px 0' }}
                        name="firstName"
                        value={firstName}
                        onChange={this.onChange}
                    />

                    <input type="email" className="input-field" style={{ margin: '0px 0px 15px' }}
                        placeholder="Enter email..."
                        name="email"
                        value={email}
                        onChange={this.onEmailChange}
                    />


                    <div style={{ width: '100%', textAlign: 'right' }}><button className="btn_login" onClick={(e) => { this.onSubmit(e); this.props.history.push("/todos") }} style={this.makeLinkActive()} ><span><i className="fas fa-sign-in-alt"></i> Sign In </span></button></div>


                    <p style={{ width: '100%', padding: '10px 0px' }}><span style={{ color: 'red' }}><i className="fas fa-info-circle"></i></span> <span>Sign In is only to display First Name. Is <span style={{ color: 'red' }}> NOT </span> for Authentication or Validation.</span></p>
                </div>

            </div>
        )
    }
}

export default withRouter(HomePage)
