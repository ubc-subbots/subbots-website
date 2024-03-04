import React from "react";
import {
  Col,
  Card,
} from "react-bootstrap";
import "./styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faWrench,
  faLaptopCode,
  faCarBattery,
  faLink,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

export class MemberCard extends React.Component {
  icons = {
    software: faLaptopCode,
    mechanical: faWrench,
    electrical: faCarBattery,
  };

  render() {
    const CutName = (name) => {
      if (name.length <= 20) return name;
      var names = name.split(" ");
      var newName = "";
      for (var index in names) {
        name = names[index];
        if (name.length > 20) {
          name = name.substring(0, 16) + "...";
        }
        newName = newName + name + " ";
      }
      return newName.trim();
    };

    const LinkIcon = (url) => {
      if (url.substring(0, 8) == "linkedin") {
        return faLinkedin;
      }
      else if (url.substring(0, 6) == "github") {
        return faGithub;
      }
      else if (url != "") {
        return faLink;
      }
      return {};
    };

    const LinkDisp = (url) => {
      if (url.substring(0, 8) == "linkedin") {
        return url.substring(16);
      }
      else if (url.substring(0, 6) == "github") {
        return url.substring(11);
      }
      return url;
    };

    const EmailIcon = (address) => {
      if (address != "") {
        return faEnvelope;
      }
      return {};
    }

    const EmailDisp = (address) => {
      if (address != "") {
        return address + "\n\n";
      }
      return "";
    };

    return (
      <Col sm={12}>
        <Card className="MemberCard">
          <Card.Body className="MemberCardBody">
            <img
              className="MemberImage"
              src={process.env.PUBLIC_URL + "/members/" + this.props.image}
              alt="Error!"
            ></img>
            <Card.Title className="MemberCardTitle">
              {CutName(this.props.name)}
            </Card.Title>
            <Card.Text className="MemberCardText">{this.props.program}</Card.Text>
            <Card.Subtitle className="MemberCardSubtitle">
              <a href={"mailto:" + this.props.email}>
                <FontAwesomeIcon icon={EmailIcon(this.props.email)} /> {EmailDisp(this.props.email)}
              </a>
              <a href={"https://" + this.props.link} target="_blank">
                <FontAwesomeIcon icon={LinkIcon(this.props.link)} /> {LinkDisp(this.props.link)}
              </a>
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
