import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import content from '../../content';
import constants from '../../js/constants';
import { ViewHeader, ViewContainer } from '../../components';
import './styles.scss';

export default class Join extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            validated: false,
            first_name: "",
            last_name: "",
            email: "",
            year: 0,
            team: "",
            reason: ""
        }
    }

    onFirstNameChange(event){this.setState({first_name: event.target.value})}

    onLastNameChange(event){this.setState({last_name: event.target.value})}

    onEmailChange(event){this.setState({email: event.target.value})}

    onYearChange(event){this.setState({year: event.target.value})}

    onTeamChange(event){this.setState({team: event.target.value})}

    onReasonChange(event){this.setState({reason: event.target.value})}

    onFormSubmit(event){
        event.preventDefault();
        let form = event.currentTarget;
        if (form.checkValidity() === true){
            let form_body = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                year: this.state.year,
                team: this.state.team,
                reason: this.state.reason
            }
            axios.post('/rest/join', form_body)
            .then( response => {
                console.log(response);
                const signee_res = response.data.signee_email.status;
                const subbot_res = response.data.subbot_email.status;

                if (!signee_res && !subbot_res) {
                    alert("ERROR: An unexpected email error has occured. Please try again in a few minutes");
                } else if (!signee_res && subbot_res) {
                    alert("INFO: Subbots has recieved your infomation, but your personal confirmation failed to send");
                } else if (signee_res && !subbot_res) {
                    //Case will never occur due to backend logic
                } else {
                    alert("Success! Your application has been sent");
                }
            })
            .catch( error => {
                console.log(error);
            });
        } else {
            console.log("invalid form");
            
        }
        this.setState({validated: true});
            
    }

    render() {
        return (
            <ViewContainer>
                <ViewHeader title={content.join.title} blurb={content.join.blurb}/>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6}>
                        <div className="JoinFormBorder">
                        <Card className="JoinFormContainer">
                        <Card.Header className="JoinFormHeader">
                            UBC Subbots 2019-2020 Application
                        </Card.Header>
                        <Form noValidate validated={this.state.validated} className="JoinForm" onSubmit={this.onFormSubmit.bind(this)}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>First Name *</Form.Label>
                                    <Form.Control onChange={this.onFirstNameChange.bind(this)} placeholder="Enter first name" required />
                                    <Form.Control.Feedback type="invalid">Required Field</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Last Name * </Form.Label>
                                    <Form.Control onChange={this.onLastNameChange.bind(this)} placeholder="Enter last name" required/>
                                    <Form.Control.Feedback type="invalid">Required Field</Form.Control.Feedback>                                
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address * </Form.Label>
                                <Form.Control onChange={this.onEmailChange.bind(this)} type="email" placeholder="Enter email" required/>
                                <Form.Control.Feedback type="invalid">Required Field</Form.Control.Feedback>                            
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Year *</Form.Label>
                                    <Form.Control onChange={this.onYearChange.bind(this)} as="select" required>
                                        <option selected disabled hidden></option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">Required Field</Form.Control.Feedback>                            
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Desired Team *</Form.Label>
                                    <Form.Control onChange={this.onTeamChange.bind(this)} as="select" required>
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
                                <Form.Control onChange={this.onReasonChange.bind(this)} style={{resize:'none'}} as="textarea" rows="4" placeholder="Tell us why you want to join" />
                            </Form.Group>
                            <Button className="PrimaryButton" variant="warning" type="submit">
                                <div className="ApplyButtonText" >Apply</div>
                            </Button>
                        </Form>
                        </Card>
                        </div>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </ViewContainer>
        )
    }
}
