import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import Sidebar from '../../sharedComponent/NavComponent/NavComponent';
import { getToken } from '../../helper';
import './Dashboard.css';
import { Col, Row, Button} from "react-bootstrap";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userdetails : {}
            }
    }

    componentDidMount() {
        try {
            // const reqObj = {
            //     email: this.state.email
            // }
            var authToken = getToken();
            console.log('authToken', authToken);
            axios.get('http://localhost:5001/api/userDetails', {
                headers: { 
                  'Authorization': `Bearer ${authToken}` 
                }}).then(resp => {
                    console.log(resp);
                if(resp.data.error == true){
                    this.props.history.push("/");
                }else{
                    const { status, userDetails } = resp.data;
                    if(userDetails.length > 0){
                        this.setState({
                            response: userDetails[0],
                            userDeatilsText: userDetails[0].userName + "(" + userDetails[0].role +")"
                        });
                        console.log(this.state);
                    }
                
                }
                
            }, (error) => {
                console.log('error =>', error);
            })
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                <Sidebar/>
                <div className="list-container">
                    <Row className="list-row">
                        <Col md="7" className="user-block mr-4 p-0 mt-4">
                            <Row className="py-4">
                                <Col md={4} className="imageHolder pr-0">
                                <img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt=""></img>
                                </Col>
                                <Col md={8} className="pl-0">
                                    <h3 className="user-name-holder"> Amrita Gupta</h3>
                                    <div className="user-info-holder">
                                        <span>Email: gupta1.amrita@gmail.com</span>
                                        <span>Address: Chingrighata, Kolkata</span>
                                        <span>Specialization: Computer</span>
                                        <span>Fees: 1000-5000(Min-Max)</span>
                                    </div>
                                    <div className="about-user pt-2">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. 
                                    </div>
                                    <div className="pt-3">
                                        <Button variant="primary" type="submit" className="read-more-btn">
                                            View Details &nbsp;&gt;
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="list-row">
                        <Col md="7" className="user-block  mr-4 p-0 mt-4">
                            <Row className="py-4">
                                <Col md={4} className="imageHolder">
                                <img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt=""></img>
                                </Col>
                                <Col md={8} className="pl-0">
                                <h3 className="user-name-holder"> Amrita Gupta</h3>
                                    <div className="user-info-holder">
                                        <span>Email: gupta1.amrita@gmail.com</span>
                                        <span>Address: Chingrighata, Kolkata</span>
                                        <span>Specialization: Computer</span>
                                        <span>Fees: 1000-5000(Min-Max)</span>
                                    </div>
                                    <div className="about-user pt-2">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. 
                                    </div>
                                    <div className="pt-3">
                                        <Button variant="primary" type="submit" className="read-more-btn">
                                            View Details &nbsp;&gt;
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}


export default Dashboard;