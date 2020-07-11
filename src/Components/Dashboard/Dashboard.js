import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import Sidebar from '../../sharedComponent/NavComponent/NavComponent';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'email': 'rupayan.dey1990@gmail.com',
            'response': ''
        }
    }

    componentDidMount() {
        try {
            const reqObj = {
                email: this.state.email
            }
            axios.post('http://localhost:5001/api/userDetails', reqObj).then(resp => {
                const { status, userDetails } = resp.data;
                this.setState({
                    response: userDetails[0]
                });
                console.log(this.state)
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