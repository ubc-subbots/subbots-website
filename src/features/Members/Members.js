import React from "react";
import { Col, Row } from "react-bootstrap";
import content from "../../content";
import { ViewHeader, ViewContainer } from "../../components";
import { MemberCard } from "./Components";
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

    const MemberCount = () => {
      return othr_members.length + mech_members.length + elec_members.length + sftw_members.length;
    }

    return (
      <ViewContainer>
        <ViewHeader
          title={content.members.title}
          blurb=""
          image={content.members.image}
        />
        <div class="CenteredBlurb">{MemberCount() + content.members.blurb}</div>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <Row>
              <Col sm={3}>
                <h4 className="TeamTitle">Admin + Business</h4>
              </Col>
              <Col sm={3}>
                <h4 className="TeamTitle"><FontAwesomeIcon icon={faWrench} /> Mechanical</h4>
              </Col>
              <Col sm={3}>
                <h4 className="TeamTitle"><FontAwesomeIcon icon={faCarBattery} /> Electrical</h4>
              </Col>
              <Col sm={3}>
                <h4 className="TeamTitle"><FontAwesomeIcon icon={faLaptopCode} /> Software</h4>
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
