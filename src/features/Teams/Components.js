import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faLaptopCode, faCarBattery } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import content from '../../content';

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
                        <FontAwesomeIcon className="TeamIconLarge" icon={this.icons[this.props.team]} size="6x" />
                        <Card.Text className="TeamText">
                            {content.teams[this.props.team.toLowerCase()].blurb}
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
                        <FontAwesomeIcon className="TeamIconSmall" icon={this.icons[this.props.team]} size="lg" />
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
                        {content.teams[this.props.team.toLowerCase()].body}
                    </div>
                </Col>
            </div>
        )
    }
}
