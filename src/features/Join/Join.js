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
          image={content.join.image}
        />
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <div>
              <iframe
                src="https://forms.gle/7s7gdepgdGp9gsHr7"
                width="640"
                height="1744"
                frameborder="0"
                marginHeight="0"
                marginWidth="0"
                title="JoinFormTitle"
              >
                Loading…
              </iframe>
            </div>
            {/* <div className="JoinFormContainer">
                        <Card className="JoinFormCard">
                        <Card.Header className="JoinFormHeader">
                            UBC Subbots 2019-2020 Application
                        </Card.Header>
                        <Form noValidate validated={this.state.validated} onSubmit={this.onFormSubmit.bind(this)} className="JoinForm" action={`https://formspree.io/${teamLeadEmail}`} method="POST">
                            <input type="hidden" name="_subject" value="Someone has requested to join Subbots"/>
                            <input type="hidden" name="NOTE" 
                                value={`THIS IS AN AUTO GENERATED MESSAGE:\n\n You are recieving this email because someone has filled an application to join Subbots from the website. Their details are as followed below:`}
                            />
                            {
                                teamLeadEmail !== content.emails.Subbots &&
                                <input type="hidden" name="_cc" value={content.emails.Subbots} />
                            }
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>First Name *</Form.Label>
                                    <Form.Control onChange={this.onFirstNameChange.bind(this)} placeholder="Enter first name" required name="First Name" />
                                    <Form.Control.Feedback type="invalid">Required Field</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Last Name * </Form.Label>
                                    <Form.Control onChange={this.onLastNameChange.bind(this)} placeholder="Enter last name" required name="Last Name"/>
                                    <Form.Control.Feedback type="invalid">Required Field</Form.Control.Feedback>                                
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address * </Form.Label>
                                <Form.Control onChange={this.onEmailChange.bind(this)} type="email" placeholder="Enter email" required name="Email"/>
                                <Form.Control.Feedback type="invalid">Required Field</Form.Control.Feedback>                            
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Year *</Form.Label>
                                    <Form.Control onChange={this.onYearChange.bind(this)} as="select" required name="Year">
                                        <option selected disabled hidden></option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>Other</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">Required Field</Form.Control.Feedback>                            
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Desired Team *</Form.Label>
                                    <Form.Control onChange={this.onTeamChange.bind(this)} as="select" required name="Team">
                                        <option selected disabled hidden></option>
                                        <option>{constants.ELECTRICAL_TEAM}</option>
                                        <option>{constants.SOFTWARE_TEAM}</option>
                                        <option>{constants.MECHANICAL_TEAM}</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">Required Field</Form.Control.Feedback>                            
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Reason for Application</Form.Label>
                                <Form.Control onChange={this.onReasonChange.bind(this)} style={{resize:'none'}} as="textarea" rows="4" placeholder="Tell us why you want to join" name="Application Reason"/>
                            </Form.Group>
                            <Button className="PrimaryButton" variant="warning" type="submit">
                                <div className="ApplyButtonText" >Apply</div>
                            </Button>
                        </Form>
                        </Card>
                        </div> */}
          </Col>
          <Col sm={3}></Col>
        </Row>
      </ViewContainer>
    );
  }
}
