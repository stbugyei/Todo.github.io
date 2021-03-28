import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom";

export default class ProtectedRoute extends Component {

    user = JSON.parse(window.localStorage.getItem('mytodos')) 

    render() {
        const { component: Component, ...rest } = this.props

       console.log(this.props)
        // firstName !== 'undefined' || firstName !== '' ?
        // (this.state.todos.firstName === null || this.state.todos.firstName === "")
          // <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        //this.user.firstName !== 'undefined' && this.user.firstName !== '' ?
        return (
            <Route
                {...rest}
                render={props => (
                    this.user.firstName !== 'undefined' && this.user.firstName !== '' ?
                        <Component {...props} /> :
                        <Redirect to='/' />
                )}
            />
        )
    }
}
