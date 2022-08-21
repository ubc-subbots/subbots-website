import React from "react";
import { Row, Col } from "react-bootstrap";
import content from "../../content";
import constants from "../../js/constants";
import { TeamCard, TeamBody } from "./Components";
import { ViewHeader, ViewContainer } from "../../components";
import "./styles.scss";

export default class Teams extends React.Component {
  render() {
    return (
      <ViewContainer>
        <ViewHeader
          title={content.teams.title}
          blurb={content.teams.blurb}
          image={content.teams.image}
        />
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <Row>
              <TeamCard team={"software"} />
              <TeamCard team={"electrical"} />
              <TeamCard team={"mechanical"} />
            </Row>
          </Col>
          <Col sm={2}></Col>
        </Row>
        <div className="ContentSeperatorTop"></div>
        <div className="ContentContainer">
          <TeamBody team={"software"} />
          <TeamBody team={"electrical"} />
          <TeamBody team={"mechanical"} />
        </div>
        <div className="ContentSeperatorBottom"></div>
      </ViewContainer>
    );
  }
}
