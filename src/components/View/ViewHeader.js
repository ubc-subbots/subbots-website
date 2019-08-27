import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from '../Image/Image.js';
import './styles.scss';

export default class ViewHeader extends React.Component{
    render() {
        return(
            <div>
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <div className="ViewImageContainer">
                        <Image src={this.props.image}/>
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
            <div className="HeaderSeperator"></div>
            </div>
        )
    }
}
