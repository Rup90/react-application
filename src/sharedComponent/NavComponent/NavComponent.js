import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './NavComponent.css';
import { getLoggedInUserDetails } from '../../helper';


// const NavigationBar = (props) => (
//   <div>
//     <Navbar expand="lg">
//       <Navbar.Brand  className="white-col"><span className="bolder-font"> Welcome </span> Rupayan</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//       {/* <Form className="form-center">
//         <FormControl type="text" placeholder="Search" className="" />
//       </Form> */}
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Item><Nav.Link className="white-col" href="/">Home</Nav.Link></Nav.Item> 
//           <Nav.Item><Nav.Link  className="white-col" href="/about">Profile</Nav.Link></Nav.Item>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   </div>
// )

// export default NavigationBar;


class NavigationBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      userdetails : {}
      }
    }
  componentDidMount(){
    var loggedInUserData = getLoggedInUserDetails();
    console.log('userData', loggedInUserData);
    this.setState({
      userdetails: JSON.parse(loggedInUserData)
    });
    
  }
  render() {
    return (
      <div>
        <Navbar expand="lg">
          <Navbar.Brand  className="white-col"><span className="bolder-font"> Welcome </span> {this.state.userdetails.email}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link className="white-col" href="/">Home</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link  className="white-col" href="/about">Profile</Nav.Link></Nav.Item>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    );
  }
}

export default NavigationBar;
