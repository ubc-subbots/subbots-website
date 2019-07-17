import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import MemberSignIn from '../MemberSignIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './styles.scss';

export default class Header extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            navbarClass: "HeaderContainer",
            navbrandClass: "NavBrand",
            isSignInOpened: false
        }

        window.onscroll = () => {
            let shrinkThresh = 125;
            if (document.body.scrollTop > shrinkThresh || document.documentElement.scrollTop > shrinkThresh){
                this.setState({navbarClass: "HeaderContainerShrunk"});
                this.setState({navbrandClass: "NavBrandShrunk"});
            } else {
                this.setState({navbarClass: "HeaderContainer"});
                this.setState({navbrandClass: "NavBrand"});
            }
        }
    }

    render() {
        return (
            <Navbar fixed="top" expand="lg"
                    className={this.state.navbarClass}>
              <Navbar.Brand className="NavBrandContainer">
                <Link to='/' className={this.state.navbrandClass}>
                    <FontAwesomeIcon className="SubbotsLogo" icon={faCog} size="lg"/>
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
                  <Nav.Link className="NavContainer">
                    <Link to='/teams'className="NavLink">The Teams</Link>
                  </Nav.Link>
                  <Nav.Link className="NavContainer">
                    <Link to='/join'className="NavLink">Join Us</Link>
                  </Nav.Link>
                  <Nav.Link className="NavContainer">
                    <Link to='/sponsors'className="NavLink">Sponsorship</Link>
                  </Nav.Link>
                </Nav>
                <Button className="SignInButton" variant="outline-warning"
                        onClick={() => this.setState({isSignInOpened: true})}>
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
