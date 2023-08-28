import React from "react";
import { Col, Row } from "react-bootstrap"
import content from "../../content";
import { ViewHeader, ViewContainer } from "../../components";
import "./styles.scss";

export default class Join extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      first_name: "",
      last_name: "",
      email: "",
      year: 0,
      team: "",
      reason: "",
    };
  }

  onFirstNameChange(event) {
    this.setState({ first_name: event.target.value });
  }

  onLastNameChange(event) {
    this.setState({ last_name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onYearChange(event) {
    this.setState({ year: event.target.value });
  }

  onTeamChange(event) {
    this.setState({ team: event.target.value });
  }

  onReasonChange(event) {
    this.setState({ reason: event.target.value });
  }

  onFormSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }

  render() {
    let teamLeadEmail = content.emails[this.state.team];

    if (!teamLeadEmail) {
      teamLeadEmail = content.emails.Subbots;
    }

    return (
      <ViewContainer>
        <ViewHeader
          title={content.join.title}
          blurb={content.join.blurb}
          disableImage={true}
          // image={content.join.image}
        />
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <div className="AltLink">
              <a href={content.join.link} target="_blank" rel="noreferrer">Open form in a new tab</a>
            </div>
          </Col>
          <Col sm={2}></Col>
        </Row>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <div>
            alsdfjalsdjflksdj
            </div>
          </Col>
          <Col sm={2}></Col>
        </Row>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <div>
              <iframe
                src={content.join.link}
                width= "100%"
                height="800"
                frameborder="0"
                marginHeight="0"
                marginWidth="0"
                title="JoinFormTitle"
              >
                Loading…
              </iframe>
            </div>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </ViewContainer>
    );
  }
}
