import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Col, Row, Form, Button} from "react-bootstrap";
import axios from 'axios';
import './Login.css';
import { Redirect } from "react-router-dom";

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'email': '',
            'password': '',
            'response': '',
            'redirect': null
        }
        this.submitLoginForm = this.submitLoginForm.bind(this);
        this.doLogin = this.doLogin.bind(this);
    }

    submitLoginForm(event){ 
        event.preventDefault();
        // code you want to do
        console.log('email', this.refs.email.value);
        this.setState({
            'email': this.refs.email.value,
            'password': this.refs.password.value

        }, () => {
            console.log('this.state', this.state); // This.setState is asynchronous function, so we needed to add callback function to get the updated state
            this.doLogin();
        });
       
        
        
      }
    
      doLogin(){
        //   console.log(this.state);
          try {
            const reqObj = {
                email: this.state.email,
                password: this.state.password
            }
            axios.post('http://localhost:5001/api/login', reqObj).then(resp => {
                // const { status, userDetails } = resp.data;
                // this.setState({
                //     response: userDetails[0]
                // });
                // console.log(this.state)
                if(resp.data.isValidUser){
                    localStorage.setItem('auth-data',resp.data.token);
                    localStorage.setItem('user-details',JSON.stringify(resp.data.userDetails));
                    this.setState({
                        redirect: '/dashboard'
            
                    }, () => {
                        console.log('this.state', this.state); // This.setState is asynchronous function, so we needed to add callback function to get the updated state
                        this.props.history.push("/dashboard");
                    });
                    
                }
                
            }, (error) => {
                console.log('error =>', error);
            })
        } catch(e) {
            console.log(e);
        }
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
                <Form onSubmit={this.submitLoginForm}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">

                        <Form.Label column sm="4">
                            User Name:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="email" placeholder="Email"  ref="email"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="4">
                            Password:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="password" placeholder="Password" ref="password"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm="12" className="text-center pt-3">
                            <Button variant="primary" type="submit" className="btn-app-primary">
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