import React, { useState } from 'react';
import {Collapse,Navbar,NavbarToggler,Nav,NavItem,NavLink} from 'reactstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./Routes";

function App() {
 
  return (
    <Router>
      <Navbar color="light" light expand="md">
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link to="/ToDo">to-do</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/Books">Books</Link></NavLink>
            </NavItem>
            <NavItem >
              <NavLink ><Link to="/login">Login</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Routes/>
    </Router>
  );
}

export default App;
