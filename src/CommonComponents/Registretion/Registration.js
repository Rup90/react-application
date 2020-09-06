import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Col, Row, Form, Button} from "react-bootstrap";
import './Registration.css';
import axios from 'axios';
class RegistrationComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'email': '',
            'mobile': '',
            'password': '',
            'confirm_password':'',
            'user_role':'',
            'response': '',
            'redirect': null
        }
        this.submitRegistrationForm = this.submitRegistrationForm.bind(this);
        this.doRegister = this.doRegister.bind(this);
    }

    submitRegistrationForm(event){ 
        event.preventDefault();
        // code you want to do
        console.log('email', this.refs.email.value);
        this.setState({
            'email': this.refs.email.value,
            'mobile': this.refs.mobile.value,
            'password': this.refs.password.value,
            'confirm_password': this.refs.confirm_password.value,
            'user_role': this.refs.user_role.value,

        }, () => {
            console.log('this.state', this.state); // This.setState is asynchronous function, so we needed to add callback function to get the updated state
            this.doRegister();
        });
       
        
        
      }
    
      doRegister(){
        //   console.log(this.state);
          try {
            const reqObj = {
                email: this.state.email,
                mobile: this.state.mobile,
                password: this.state.password,
                user_role: this.state.user_role
            }
            axios.post('http://localhost:5001/api/register_user', reqObj).then(resp => {
                console.log('register', resp);
                // const { status, userDetails } = resp.data;
                // this.setState({
                //     response: userDetails[0]
                // });
                // console.log(this.state)
                // if(resp.data.isValidUser){
                //     localStorage.setItem('auth-data',resp.data.token);
                //     localStorage.setItem('user-details',JSON.stringify(resp.data.userDetails));
                //     this.setState({
                //         redirect: '/dashboard'
            
                //     }, () => {
                //         console.log('this.state', this.state); // This.setState is asynchronous function, so we needed to add callback function to get the updated state
                //         this.props.history.push("/dashboard");
                //     });
                    
                // }
                
            }, (error) => {
                console.log('error =>', error);
            })
        } catch(e) {
            console.log(e);
        }
      }
    
    render() {
        const changeEvent = () => {
            this.props.history.push("/");
        }
        return (
            <div className="registration-container">
                <div className="title-header">
                    <h5>Registration</h5>
                </div>
                <Form onSubmit={this.submitRegistrationForm}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">

                        <Form.Label column sm="4">
                            Email:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="email" placeholder="Email"  ref="email"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextMobile">
                        <Form.Label column sm="4">
                            Mobile:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="Mobile" ref="mobile"/>
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

                    <Form.Group as={Row} controlId="formPlaintextConfirmPassword">
                        <Form.Label column sm="4">
                            Confirm Password:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="password" placeholder="Confirm Password" ref="confirm_password"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formRole">
                        <Form.Label as="legend" column sm="4">
                          Role
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control as="select" custom ref="user_role">
                              <option>Student</option>
                              <option>Tutor</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm="12" className="text-center pt-3">
                            <Button variant="primary" type="submit" className="btn-app-primary">
                                Submit
                            </Button>
                            <Button variant="primary" className="btn-app-outline ml-3" onClick={() => changeEvent()}>
                                Back
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default RegistrationComponent;