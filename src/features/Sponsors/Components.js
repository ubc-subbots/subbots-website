import React from "react";
import { Col, Card, CardBody } from "reactstrap";
import "./styles.scss";

export class SponsorCard extends React.Component {
  render() {
    return (
      <Col sm={3}>
        <a href={this.props.link}>
          <Card className="SponsorCard">
            <CardBody className="SponsorCardBody">
              <img
                className="SponsorImage"
                src={process.env.PUBLIC_URL + "/sponsors/" + this.props.image}
                alt={"Sponsor"}
              ></img>
            </CardBody>
          </Card>
        </a>
      </Col>
    );
  }
}
