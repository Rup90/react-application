import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import Sidebar from '../../sharedComponent/NavComponent/NavComponent';
import { getToken } from '../../helper';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //'email': 'rupayan.dey1990@gmail.com',
            'response': '',
            'userDeatilsText': ''
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
                <div className="list-container row">
                    <div className="col-md-8 user-block ml-5 mr-4 p-0 mt-4">
                        Test
                    </div>

                </div>
                <div className="list-container row">
                    <div className="col-md-8 user-block ml-5 mr-4 p-0 mt-4">
                        Test
                    </div>

                </div>
            </div>

        );
    }
}


export default Dashboard;