import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Fade from 'react-reveal/Fade';
import constants from '../../js/constants';
import './styles.scss';

export default class ViewHeader extends React.Component{
    render() {
        return(
            <div>
            <Fade bottom duration={constants.FADE_DURATION}>
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
                    <div className="ViewImage">
                        <img style={{visibility: 'hidden',width:'100%', height:'100%', opacity:'0.4'}} src="/software-team.jpg"/>
                    </div>
                    <div style={{visibility: 'hidden'}} className="ViewTitle">{this.props.header}</div>
            </Col>
            <Col sm={1}></Col>
            </Row>
            <Row>
                <Col sm={1}></Col>
                <Col s={10}>
                    <div className="ViewBody">{this.props.body}</div>
                </Col>
                <Col sm={1}></Col>
            </Row>
            </Fade>
            </div>
        )
    }
}
