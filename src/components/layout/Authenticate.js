import React from 'react'
import { Route, Redirect, useHistory } from "react-router-dom";

const Authenticate = ({ component: Component, ...rest }) => {
    // <Redirect to={{ pathname: "/", state: { from: props.location } }} />
    //const history = useHistory();
    //console.log(history)
    const user = JSON.parse(window.localStorage.getItem('mytodos'))

    // const checkAuth = () => {
    //     if (firstName !== null && firstName !== "") {
    //         return true
    //     }
    // }
    // console.log(firstName)
    return (
        <Route
            {...rest}
            render={(props) => {
                if (user.firstName === 'undefined' && user.firstName === '') {
                    return (<Redirect to={
                        {
                            pathname: '/',
                            state: {
                                from: props.location
                            }
                        }
                    } />)
                } else {
                    return (<Component {...props
                    } />);
                }
            }}
        />
    );
}
export default Authenticate
