import React from "react";
import {
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
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
          <CardBody className="MemberCardBody">
            <img
              className="MemberImage"
              src={process.env.PUBLIC_URL + "/members/" + this.props.image}
            ></img>
            <CardTitle className="MemberCardTitle">
              {CutName(this.props.name)}
            </CardTitle>
            <CardSubtitle className="MemberCardSubtitle">
              {this.props.email}
            </CardSubtitle>
            <CardText className="MemberCardText">{this.props.program}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
