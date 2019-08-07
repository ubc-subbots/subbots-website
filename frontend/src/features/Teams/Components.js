import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faLaptopCode, faCarBattery } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

export class TeamCard extends React.Component {

    icons = {
        Software: faLaptopCode,
        Mechanical: faWrench,
        Electrical: faCarBattery
    }

    render() {
        return (
            <Col >
                <Card className="TeamCard">
                    <Card.Header className="TeamCardHeader">
                        {this.props.team}
                    </Card.Header>
                    <Card.Body>
                        <FontAwesomeIcon className="TeamIcon" icon={this.icons[this.props.team]} size="6x" />
                        <Card.Text className="TeamText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   </Card.Text>
                        <Button className="SecondaryButton" variant="primary" href={"#" + this.props.team}>
                            Learn More
                    </Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export class TeamBody extends React.Component {

    icons = {
        Software: faLaptopCode,
        Mechanical: faWrench,
        Electrical: faCarBattery
    }

    names = {
        Software: "Software Team",
        Mechanical: "Mechanical Team",
        Electrical: "Electrical Team"
    }

    render() {
        return (
            <div>
                <div id={this.props.team} className="HeaderBuffer"></div>
                <Col>
                    <h3 className="TeamBodyHeader my-auto">
                        <FontAwesomeIcon className="TeamIcon" icon={this.icons[this.props.team]} size="lg" />
                        {this.names[this.props.team]}
                    </h3>
                    <hr />
                    <Row>
                        <Col sm={6} >
                            <h4 className="text-center">What We Do</h4>
                            <div className="TeamBodyFrame">
                            </div>
                        </Col>
                        <Col sm={6} >
                             <h4 className="text-center">What You'll Learn</h4>
                            <div className="TeamBodyFrame">

                            </div>
                        </Col>
                    </Row>
                    <div className="TeamBodyText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </Col>
            </div>
        )
    }
}
