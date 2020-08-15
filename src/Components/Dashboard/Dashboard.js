import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import Sidebar from '../../sharedComponent/NavComponent/NavComponent';
import { getToken } from '../../helper';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //'email': 'rupayan.dey1990@gmail.com',
            'response': ''
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
                            response: userDetails[0]
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
                <Sidebar />
                <p>Hello </p>
            </div>

        );
    }
}


export default Dashboard;