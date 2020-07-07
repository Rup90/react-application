import React, {Component} from 'react';


class HomeComponent extends Component {

    constructor(props) {
        super(props);
    }
    changeEvent = () => {
        this.props.history.push("/login");
    }
    render() {
        return (
            <div>
               <button onClick={this.changeEvent.bind(this)}>Switch User</button>
             
            </div>
        );
    }
}

export default HomeComponent;