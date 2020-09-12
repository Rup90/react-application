import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import Sidebar from '../../sharedComponent/NavComponent/NavComponent';
import { getToken } from '../../helper';
import './MyProfile.css';
import { Col, Row, Form, Button } from "react-bootstrap";
import { getLoggedInUserDetails } from '../../helper';



class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userdetails: {}
        }

    }
    componentDidMount() {
        // var loggedInUserData = getLoggedInUserDetails();
        // console.log('userData', loggedInUserData);
        // this.setState({
        // userdetails: JSON.parse(loggedInUserData)
        // });
        try {
            // const reqObj = {
            //     email: this.state.email
            // }
            var authToken = getToken();
            console.log('authToken', authToken);
            axios.get('http://localhost:5001/api/userDetails', {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            }).then(resp => {
                console.log(resp);
                if (resp.data.error == true) {
                    this.props.history.push("/");
                } else {
                    const { status, userDetails } = resp.data;
                    if (userDetails.length > 0) {
                        this.setState({
                            userdetails: userDetails[0]
                        });
                        console.log(this.state);
                    }

                }

            }, (error) => {
                console.log('error =>', error);
            })
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <div>
                <Sidebar />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row profileFormContainer mt-2">
                                <div className="col-md-4 pl-0">
                                        <div className="col-md-12 pt-1 whiteBg p-0">
                                            <div className="col-md-12 imgHolder">
                                            </div>
                                            <Form className="p-2">
                                            <h4>Profile - <strong>{this.state.userdetails.role}</strong></h4>
                                                <Form.Row>
                                                    <Form.Group as={Col} md="12" controlId="">
                                                        <Form.Label>{this.state.userdetails.userName}</Form.Label>
                                                        {/* <Form.Control type="text" placeholder="Enter user name" value={this.state.userdetails.userName} readOnly /> */}
                                                    </Form.Group>

                                                    <Form.Group as={Col} md="12" controlId="">
                                                        <Form.Label>{this.state.userdetails.email}</Form.Label>
                                                        {/* <Form.Control type="email" placeholder="" value={this.state.userdetails.email} readOnly /> */}
                                                    </Form.Group>

                                                    <Form.Group as={Col} md="12" controlId="">
                                                        <Form.Label>{this.state.userdetails.experience}</Form.Label>
                                                        {/* <Form.Control type="email" placeholder="" value={this.state.userdetails.email} readOnly /> */}
                                                    </Form.Group>
                                                </Form.Row>

                                                <Form.Group controlId="formGridAddress1">
                                                    <Form.Label>Address</Form.Label>
                                                    <Form.Control placeholder="Add address.." />
                                                </Form.Group>



                                                {/* <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridLocality">
                                                        <Form.Label>Locality</Form.Label>
                                                        <Form.Control placeholder="Apartment, studio, or floor" />
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="">
                                                        <Form.Label>Phone</Form.Label>
                                                        <Form.Control />
                                                    </Form.Group>
                                                </Form.Row>

                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridCity">
                                                        <Form.Label>City</Form.Label>
                                                        <Form.Control />
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="formGridState">
                                                        <Form.Label>State</Form.Label>
                                                        <Form.Control as="select" defaultValue="Choose...">
                                                            <option>Choose...</option>
                                                            <option>...</option>
                                                        </Form.Control>
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="formGridZip">
                                                        <Form.Label>Zip</Form.Label>
                                                        <Form.Control />
                                                    </Form.Group>
                                                </Form.Row>

                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="">
                                                        <Form.Label>Experience</Form.Label>
                                                        <Form.Control />
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="">
                                                        <Form.Label>Qualification</Form.Label>
                                                        <Form.Control />
                                                    </Form.Group>
                                                </Form.Row>
 */}
                                                <h5 className="mt-2">Skills</h5>
                                                <Form.Row>
                                                    <Form.Group as={Col} md="12" controlId="">
                                                        <Form.Label>{this.state.userdetails.specialization}</Form.Label>
                                                        <Form.Control value={this.state.userdetails.otherSpecialization} />
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="">
                                                        <Form.Label>Other Specialization</Form.Label>
                                                        {/* <Form.Control as="select" defaultValue="Choose...">
                                                            <option>Choose...</option>
                                                            <option>...</option>
                                                        </Form.Control> */}
                                                        {/* {this.state.userdetails.otherSpecialization.map(name => (
                                                                    <li>
                                                                    {name}
                                                                    </li>
                                                                ))} */}
                                                    </Form.Group>
                                                </Form.Row>

                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="">
                                                        <Form.Label>Minimum Fees</Form.Label>
                                                        <Form.Control value={this.state.userdetails.monthly_fees_min} />
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="">
                                                        <Form.Label>Maximum Fees</Form.Label>
                                                        <Form.Control value={this.state.userdetails.monthly_fees_max} />
                                                    </Form.Group>
                                                </Form.Row>


                                                {/* <Button variant="primary" type="submit">
                                                    Update
                                        </Button> */}
                                            </Form>
                                        </div>
                                    
                                </div>

                                <div className="col-md-8 px-0">
                                    {/* <div className="row"> */}
                                        <div className="col-md-12 pt-1 whiteBg tempHeight">
                                        <h2>Work Experience</h2>
                                        </div>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default MyProfile;
