import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Col, Row, Form, Button} from "react-bootstrap";
import './Registration.css';

class RegistrationComponent extends Component {

    constructor(props) {
        super(props);
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
                <Form>
                    <Form.Group as={Row} controlId="formPlaintextEmail">

                        <Form.Label column sm="4">
                            User Name:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="email" placeholder="Email"  />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextMobile">
                        <Form.Label column sm="4">
                            Mobile:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="Mobile" />
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

                    <Form.Group as={Row} controlId="formPlaintextConfirmPassword">
                        <Form.Label column sm="4">
                            Confirm Password:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formRole">
                        <Form.Label as="legend" column sm="4">
                          Role
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control as="select" custom>
                              <option>Student</option>
                              <option>Teacher</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm="4">
                            
                        </Col>
                        <Col sm="8">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <span className="back-prev">
                                <a onClick={() => changeEvent()}>Back</a>
                            </span>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default RegistrationComponent;