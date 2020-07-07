import React, { Component } from 'react';

class ForgotPasswordComponent extends Component {

    constructor(props) {
        super(props);
    }
    changeEvent = () => {
        this.props.history.push("/login");
    }
    render() {
        return (
            <div>
                <h1>Forgot Password</h1>
                <button onClick={this.changeEvent.bind(this)}>Back</button>
            </div>
            
        );
    }
}

export default ForgotPasswordComponent;