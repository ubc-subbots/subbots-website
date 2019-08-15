import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import './styles.scss';

export default class Footer extends React.Component{

    render() {
        return (
            <div className="FooterContainer">
                <Container fluid>
                    <Row className="IconRow">
                            <Col sm={3}  className="my-auto">
                                <div className="CopyrightText">
                                    Copyright © UBC Subbots 2018
                                </div>
                            </Col>
                            <Col>
                                <a href="https://www.facebook.com/ubc.subbots/">
                                    <FontAwesomeIcon className="Icon" icon={faFacebookF} size="2x"/>
                                </a>
                                <a href="https://github.com/ubc-subbots">
                                    <FontAwesomeIcon className="Icon" icon={faGithub} size="2x"/>
                                </a>
                                <a href="https://ca.linkedin.com/company/ubc-subbots">
                                    <FontAwesomeIcon className="Icon" icon={faLinkedin} size="2x"/>
                                </a>
                            </Col>
                            <Col sm={3}></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
