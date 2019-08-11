import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './styles.scss';

export class SponsorCard extends React.Component {

    render() {
        return (
            <Col sm={4}>
                <a href={this.props.link}>
                    <Card className="SponsorCard">
                        <Card.Body className="SponsorCardBody">
                            <img className="SponsorImage" src={"/sponsors/" + this.props.image} alt={"Sponsor"}></img>
                        </Card.Body>
                    </Card>
                </a>
            </Col>
        )
    }
}