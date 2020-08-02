import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Col, Row, Form, Button} from "react-bootstrap";
import './Login.css';

class LoginComponent extends Component {

    constructor(props) {
        super(props);
    }
   
    render() {
        const changeEvent = (url) => {
            this.props.history.push(`/${url}`);
        }
        return (
            <div className="login-container">
                <div className="title-header">
                    <h5>Log In</h5>
                </div>
                <Form>
                    <Form.Group as={Row} controlId="formPlaintextEmail">

                        <Form.Label column sm="4">
                            User Name:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="email" placeholder="Email"  />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="4">
                            Password:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm="12" className="text-center pt-3">
                            <Button variant="primary" type="submit" onClick={() => changeEvent('dashboard')} className="btn-app-primary">
                                Submit
                            </Button>
                            <span className="forgot-password">
                                <a onClick={() => changeEvent('forgot-password')}>Forgot Password?</a>
                            </span>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                            <Col sm="12" className="font-13">
                                <span className="registration">
                                   <a onClick={() => changeEvent('registration')}>New User ? Registration</a>
                                </span>
                            </Col>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default LoginComponent;