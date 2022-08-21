import React from "react";
import { Col, Card} from "react-bootstrap";
import "./styles.scss";

export class SponsorCard extends React.Component {
  render() {
    return (
      <Col sm={3}>
        <a href={this.props.link}>
          <Card className="SponsorCard">
            <Card.Body className="SponsorCardBody">
              <img
                className="SponsorImage"
                src={process.env.PUBLIC_URL + "/sponsors/" + this.props.image}
                alt={"Sponsor"}
              ></img>
            </Card.Body>
          </Card>
        </a>
      </Col>
    );
  }
}
