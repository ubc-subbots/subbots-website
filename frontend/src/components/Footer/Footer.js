import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faInstagram,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import './styles.scss';

export default class Footer extends React.Component{

    render() {
        return (
            <div className="FooterContainer">
                <Container fluid>
                    <Row className="IconRow">
                            <Col>
                                <FontAwesomeIcon className="Icon" icon={faFacebookF} size="2x"/>
                                <FontAwesomeIcon className="Icon" icon={faInstagram} size="2x"/>
                                <FontAwesomeIcon className="Icon" icon={faTwitter} size="2x"/>

                            </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
