import React, { Component } from 'react';

class LoginComponent extends Component {

    constructor(props) {
        super(props);
    }
   
    render() {
        const changeEvent = (url) => {
            this.props.history.push(`/${url}`);
        }
        return (
            <div>
                <h1>Login</h1>
                <a onClick={() => changeEvent('forgot-password')}>Forget Password</a> || 
                <a onClick={() => changeEvent('registration')}> Registration</a>
            </div>
        );
    }
}

export default LoginComponent;