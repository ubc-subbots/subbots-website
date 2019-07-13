import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import MemberSignIn from '../MemberSignIn';
import { Link } from 'react-router-dom';

import './styles.scss';

export default class Header extends React.Component{

    state = {
        isSignInOpened: false
    }

    render() {
        return (
            <Navbar bg="dark" fixed="top"
                    variant="dark" expand="lg"
                    className="HeaderContainer">
              <Navbar.Brand >
                <Link to='/' className="NavBrand">
                    <Image  className="SubbotsLogo" src="./subbots-logo.png"/>
                    {" UBC Subbots"}
                </Link>
              </Navbar.Brand>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link className="NavContainer">
                    <Link to='/' className="NavLink">Home</Link>
                  </Nav.Link>
                  <Nav.Link className="NavContainer">
                    <Link to='/projects'className="NavLink">Projects</Link>
                  </Nav.Link>
                  <NavDropdown  className="NavContainer"title={<div style={{display: "inline-block"}} className="NavLink">The Teams</div>}>
                    <NavDropdown.Item >
                        <Link to="/teams/software" className="NavLinkDropdown">Software</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to="/teams/mechanical"className="NavLinkDropdown">Mechanical</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to="/teams/electrical"className="NavLinkDropdown">Electrical</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className="NavContainer">
                    <Link to='/join'className="NavLink">Join Us</Link>
                  </Nav.Link>
                  <Nav.Link className="NavContainer">
                    <Link to='/sponsors'className="NavLink">Sponsorship</Link>
                  </Nav.Link>
                </Nav>
                <Button className="SignInButton PrimaryOutlineButton" variant="outline-warning"
                        onClick={() => this.state.isSignInOpened = true}>
                    Member Sign In
                </Button>
                <MemberSignIn show={this.state.isSignInOpened}/>
                <a href="https://www.ubc.ca/">
                    <Image className="UBCLogo" src="/ubc-logo.png" />
                </a>
              </Navbar.Collapse>
            </Navbar>
        )
    }
}
