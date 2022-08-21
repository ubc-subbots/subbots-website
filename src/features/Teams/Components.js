import React from "react";
import {
  Button,
  Row,
  Col,
  Card,
  CardHeader,
  CardText,
  CardBody,
} from "reactstrap";
import { Image } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faLaptopCode,
  faCarBattery,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

import content from "../../content";

export class TeamCard extends React.Component {
  icons = {
    software: faLaptopCode,
    mechanical: faWrench,
    electrical: faCarBattery,
  };

  scrollToTeam(team) {
    let element = document.getElementById(team);
    element.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    console.log(window.location.hash);
    return (
      <Col>
        <Card className="TeamCard">
          <CardHeader className="TeamCardHeader">
            {this.props.team.charAt(0).toUpperCase() + this.props.team.slice(1)}
          </CardHeader>
          <CardBody>
            <FontAwesomeIcon
              className="TeamIconLarge"
              icon={this.icons[this.props.team]}
              size="6x"
            />
            <CardText className="TeamCardText">
              {content.teams[this.props.team.toLowerCase()].blurb}
            </CardText>
            <Button
              className="SecondaryButton"
              variant="primary"
              onClick={() => this.scrollToTeam(this.props.team)}
            >
              Learn More
            </Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export class TeamBody extends React.Component {
  icons = {
    software: faLaptopCode,
    mechanical: faWrench,
    electrical: faCarBattery,
  };

  text = {
    software: "Software Team",
    mechanical: "Mechanical Team",
    electrical: "Electrical Team",
  };

  render() {
    return (
      <div>
        <div id={this.props.team} className="HeaderBuffer"></div>
        <Col>
          <h3 className="TeamBodyHeader my-auto">
            <FontAwesomeIcon
              className="TeamIconSmall"
              icon={this.icons[this.props.team]}
              size="lg"
            />
            {this.text[this.props.team]}
          </h3>
          <hr />
          <Row>
            <TeamBodyItemList
              title={"What We Do"}
              images={content.teams[this.props.team].items.images.do}
              names={content.teams[this.props.team].items.names.do}
              descriptions={
                content.teams[this.props.team].items.descriptions.do
              }
            />
            <TeamBodyItemList
              title={"What You'll Learn"}
              images={content.teams[this.props.team].items.images.learn}
              names={content.teams[this.props.team].items.names.learn}
              descriptions={
                content.teams[this.props.team].items.descriptions.learn
              }
            />
          </Row>
          {/*
                    <div className="TeamBodyText">
                        {content.teams[this.props.team.toLowerCase()].body}
                    </div>
                    */}
        </Col>
      </div>
    );
  }
}

function TeamBodyItemList(props) {
  return (
    <Col sm={6}>
      <h4 className="TeamBodyItemHeader text-center">{props.title}</h4>
      <div className="TeamBodyItemFrame">
        <div className="TeamBodyItemContainer">
          <TeamBodyItem
            image={props.images[0]}
            name={props.names[0]}
            description={props.descriptions[0]}
          />
          <TeamBodyItem
            image={props.images[1]}
            name={props.names[1]}
            description={props.descriptions[1]}
          />
          <TeamBodyItem
            image={props.images[2]}
            name={props.names[2]}
            description={props.descriptions[2]}
          />
        </div>
      </div>
    </Col>
  );
}

function TeamBodyItem(props) {
  return (
    <div className="TeamBodyItemContainer">
      <div className="TeamBodyItem">
        <div className="TeamBodyItemIconContainer">
          <img
            className="TeamBodyItemIcon"
            src={process.env.PUBLIC_URL + "/images/" + props.image}
            alt="Error!"
          />
        </div>
        <div className="TeamBodyItemTextPrimary">{props.name}</div>
        <div className="TeamBodyItemTextSecondary">{props.description}</div>
      </div>
    </div>
  );
}
