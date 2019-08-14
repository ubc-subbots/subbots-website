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
                    <div className="ViewHeaderImage">
                        <img style={{visibility: 'hidden',width:'100%', height:'100%', opacity:'0.4'}} src="/software-team.jpg" alt="Error!"/>
                    </div>
            </Col>
            <Col sm={1}></Col>
            <div className="ViewHeaderTitle">{this.props.title}</div>
            </Row>
            <Row>
                <Col sm={1}></Col>
                <Col s={10}>
                    <div className="ViewHeaderBlurb">{this.props.blurb}</div>
                </Col>
                <Col sm={1}></Col>
            </Row>
            </Fade>
            </div>
        )
    }
}
