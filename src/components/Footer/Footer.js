import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
import {
  faFacebookF,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="FooterContainer">
        <Container fluid>
          <Row className="IconRow">
            <Col sm={3} className="my-auto">
              <div className="CopyrightText">Copyright © UBC Subbots 2024</div>
            </Col>
            <Col>
              <a href="https://www.facebook.com/ubc.subbots/">
                <FontAwesomeIcon
                  className="SocialIcon"
                  icon={faFacebookF}
                  size="2x"
                />
              </a>
              <a href="https://github.com/ubc-subbots">
                <FontAwesomeIcon
                  className="SocialIcon"
                  icon={faGithub}
                  size="2x"
                />
              </a>
              <a href="https://ca.linkedin.com/company/ubc-subbots">
                <FontAwesomeIcon
                  className="SocialIcon"
                  icon={faLinkedin}
                  size="2x"
                />
              </a>
            </Col>
            <Col sm={3}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
