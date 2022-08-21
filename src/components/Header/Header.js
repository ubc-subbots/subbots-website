import React from "react";
import { Navbar, Nav, Button, NavbarBrand } from "react-bootstrap";
import MemberSignIn from "../MemberSignIn/MemberSignIn.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./styles.scss";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarClass: "HeaderContainer",
      navbrandClass: "NavBrand",
      isSignInOpened: false,
    };

    window.onscroll = () => {
      let shrinkThresh = 60;
      if (
        document.body.scrollTop > shrinkThresh ||
        document.documentElement.scrollTop > shrinkThresh
      ) {
        this.setState({ navbarClass: "HeaderContainerShrunk" });
        this.setState({ navbrandClass: "NavBrandShrunk" });
      } else {
        this.setState({ navbarClass: "HeaderContainer" });
        this.setState({ navbrandClass: "NavBrand" });
      }
    };
  }

  render() {
    return (
      <Navbar fixed="top" expand="lg" className={this.state.navbarClass}>
        <NavbarBrand className="NavBrandContainer">
          <Link to="/" className={this.state.navbrandClass}>
            <FontAwesomeIcon className="HeaderLogo" icon={faCog} size="lg" />
            {/* <img className="HeaderLogo" src={process.env.PUBLIC_URL + "/logo/vector_images/RGB(for_screen)/SVG/subbots-logo-rgb-yellow-large.svg"}/> */}
            {"UBC Subbots"}
          </Link>
        </NavbarBrand>
        ]
        <Nav className="mr-auto">
          <Link to="/" className="NavLink">
            Home
          </Link>
          <Link to="/projects" className="NavLink">
            Projects
          </Link>
          {/*<Link to='/teams'className="NavLink">The Teams</Link>*/}
          <Link to="/members" className="NavLink">
            Members
          </Link>
          <Link to="/join" className="NavLink">
            Join Us
          </Link>
          <Link to="/sponsors" className="NavLink">
            Sponsorship
          </Link>
          {/* <Link to='/projects'className="NavLink">Projects</Link> */}
        </Nav>
        <Button
          className="SignInButton"
          variant="outline-warning"
          onClick={() => this.setState({ isSignInOpened: true })}
        >
          Member Sign In
        </Button>
        <MemberSignIn show={this.state.isSignInOpened} />
        <a href="https://www.ubc.ca/">
          <img
            className="UBCLogo"
            src={process.env.PUBLIC_URL + "/images/ubc-logo.png"}
          />
        </a>
      </Navbar>
    );
  }
}
