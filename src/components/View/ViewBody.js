import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './styles.scss';

export default class ViewBody extends React.Component{
    render() {
        return(
            <div>
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <div className="ViewHeader">{this.props.header}</div>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <Row>
                <Col sm={2}></Col>
                <Col s={8}>
                    <div className="ViewBody">{this.props.body}</div>
                </Col>
                <Col sm={2}></Col>
            </Row>
            </div>
        )
    }
}
