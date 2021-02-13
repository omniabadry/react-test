import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./Routes";
import { useSelector } from "react-redux";

function App() {
    let c = useSelector((state) => state.counterReducer.counter)
        let products = useSelector((state) => state.productReducer.data.productReducer);


    return (
        <Router>
            <Navbar color="light" light expand="md" >
                <NavbarToggler/>
                <Collapse navbar >
                    <Nav className="mr-auto" navbar>
                        <NavItem >
                            <NavLink > <Link Link to="/ToDo" >ToDo </Link></NavLink >
                        </NavItem>
                        <NavItem >
                            <NavLink >
                                < Link to="/Books" > Books </Link></NavLink >
                        </NavItem>
                        <NavItem >
                            <NavLink >
                                < Link to="/login"> Login </Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/counter" > Counter {c} </Link></NavLink >
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/home"> Home {products} </Link></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Routes />
        </Router>
    );
}

export default App;