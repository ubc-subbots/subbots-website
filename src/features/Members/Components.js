import React from "react";
import {
  Col,
  Card,
} from "react-bootstrap";
import "./styles.scss";

import {
  faWrench,
  faLaptopCode,
  faCarBattery,
} from "@fortawesome/free-solid-svg-icons";

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

    return (
      <Col sm={4}>
        <Card className="MemberCard">
          <Card.Body className="MemberCardBody">
            <img
              className="MemberImage"
              src={process.env.PUBLIC_URL + "/members/" + this.props.image}
            ></img>
            <Card.Title className="MemberCardTitle">
              {CutName(this.props.name)}
            </Card.Title>
            <Card.Subtitle className="MemberCardSubtitle">
              {this.props.email}
            </Card.Subtitle>
            <Card.Text className="MemberCardText">{this.props.program}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
