import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faLaptopCode, faCarBattery } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

export class TeamCard extends React.Component{

    icons = {
        Software: faLaptopCode,
        Mechanical: faWrench,
        Electrical: faCarBattery
    }

    render() {
        return(
            <Col>
            <Card className="TeamCard">
                <Card.Header className="TeamCardHeader">
                    {this.props.team}
                </Card.Header>
                <Card.Body>
                    <FontAwesomeIcon className="TeamIcon" icon={this.icons[this.props.team]} size="6x"/>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   </Card.Text>
                    <Button className="SecondaryButton" variant="primary">
                        Learn More
                    </Button>
                </Card.Body>
            </Card>
            </Col>
        )
    }
}
