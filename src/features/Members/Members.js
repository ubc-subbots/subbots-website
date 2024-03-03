import React from "react";
import { Col, Row } from "react-bootstrap";
import content from "../../content";
import { ViewHeader, ViewContainer } from "../../components";
import { MemberCard } from "./Components";
import { TeamBody } from "../Teams/Components";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faLaptopCode,
  faCarBattery,
} from "@fortawesome/free-solid-svg-icons";

export default class Members extends React.Component {
  render() {
    // const member_list = content.members.member_list.map((item, index) => (
    //   <MemberCard
    //     key={index}
    //     image={item.image}
    //     name={item.name}
    //     email={item.email}
    //     link={item.link}
    //     program={item.program}
    //   />
    // ));
    const othr_members = content.members.othr_members.map((item, index) => (
      <MemberCard
        key={index}
        image={item.image}
        name={item.name}
        email={item.email}
        link={item.link}
        program={item.program}
      />
    ));
    const mech_members = content.members.mech_members.map((item, index) => (
      <MemberCard
        key={index}
        image={item.image}
        name={item.name}
        email={item.email}
        link={item.link}
        program={item.program}
      />
    ));
    const elec_members = content.members.elec_members.map((item, index) => (
      <MemberCard
        key={index}
        image={item.image}
        name={item.name}
        email={item.email}
        link={item.link}
        program={item.program}
      />
    ));
    const sftw_members = content.members.sftw_members.map((item, index) => (
      <MemberCard
        key={index}
        image={item.image}
        name={item.name}
        email={item.email}
        link={item.link}
        program={item.program}
      />
    ));

    return (
      <ViewContainer>
        <ViewHeader
          title={content.members.title}
          blurb={content.members.blurb}
          image={content.members.image}
        />
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <Row>
              <Col sm={3}>
                <h4 className="VideoHeader">Admin + Business</h4>
              </Col>
              <Col sm={3}>
                <h4 className="VideoHeader"><FontAwesomeIcon icon={faWrench} /> Mechanical</h4>
              </Col>
              <Col sm={3}>
                <h4 className="VideoHeader"><FontAwesomeIcon icon={faCarBattery} /> Electrical</h4>
              </Col>
              <Col sm={3}>
                <h4 className="VideoHeader"><FontAwesomeIcon icon={faLaptopCode} /> Software</h4>
              </Col>
            </Row>
          </Col>
          <Col sm={1}></Col>
        </Row>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <Row>
              <Col sm={3}>
                <Row className="OthrRow">{othr_members}</Row>
              </Col>
              <Col sm={3}>
                <Row className="MechRow">{mech_members}</Row>
              </Col>
              <Col sm={3}>
                <Row className="ElecRow">{elec_members}</Row>
              </Col>
              <Col sm={3}>
                <Row className="SftwRow">{sftw_members}</Row>
              </Col>
            </Row>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </ViewContainer>
    );
  }
}
