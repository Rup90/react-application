import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import './NavComponent.css';


const NavigationBar = () => (
  <div>
    <Navbar expand="lg">
      <Navbar.Brand  className="white-col">Welcome</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      {/* <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link className="white-col" href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link  className="white-col" href="/about">Profile</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default NavigationBar;