import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

class MenuBar extends Component {
    
    render() {
        return (   
            <Navbar collapseOnSelect className="navbar-dark bg-primary">
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavItem to="/">D8 Headless</NavItem>
                    </Navbar.Brand>                    
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href='/'>Home</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default MenuBar;


