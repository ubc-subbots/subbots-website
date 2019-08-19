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

    // onFirstNameChange(event){this.setState({first_name: event.target.value})}

    // onLastNameChange(event){this.setState({last_name: event.target.value})}

    // onEmailChange(event){this.setState({email: event.target.value})}

    // onYearChange(event){this.setState({year: event.target.value})}

    onTeamChange = (event) => {this.setState({team: event.target.value})}

    // onReasonChange(event){this.setState({reason: event.target.value})}

    // onFormSubmit(event){
    //     event.preventDefault();
    //     let form = event.currentTarget;
    //     if (form.checkValidity() === true){
    //         let form_body = {
    //             first_name: this.state.first_name,
    //             last_name: this.state.last_name,
    //             email: this.state.email,
    //             year: this.state.year,
    //             team: this.state.team,
    //             reason: this.state.reason
    //         }
    //         axios.post('/rest/join', form_body)
    //         .then( response => {
    //             console.log(response);
    //             const signee_res = response.data.signee_email.status;
    //             const subbot_res = response.data.subbot_email.status;

    //             if (!signee_res && !subbot_res) {
    //                 alert("ERROR: An unexpected email error has occured. Please try again in a few minutes");
    //             } else if (!signee_res && subbot_res) {
    //                 alert("INFO: Subbots has recieved your infomation, but your personal confirmation failed to send");
    //             } else if (signee_res && !subbot_res) {
    //                 //Case will never occur due to backend logic
    //             } else {
    //                 alert("Success! Your application has been sent");
    //             }
    //         })
    //         .catch( error => {
    //             console.log(error);
    //         });
    //     } else {
    //         console.log("invalid form");
            
    //     }
    //     this.setState({validated: true});
            
    // }

    render() {

        let teamLeadEmail = content.emails[this.state.team];

        if (!teamLeadEmail) {
            teamLeadEmail = content.emails.SUBBOTS;
        }

        return (
            <ViewContainer>
                <ViewHeader title={content.join.title} blurb={content.join.blurb} image={content.join.image}/>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6}>
                        <div className="JoinFormContainer">
                        <Card className="JoinFormCard">
                        <Card.Header className="JoinFormHeader">
                            UBC Subbots 2019-2020 Application
                        </Card.Header>
                            <form id="fs-frm" 
                                name="survey-form" 
                                accept-charset="utf-8" 
                                action={`https://formspree.io/${teamLeadEmail}`} method="post"
                                className="JoinForm">
                                <input type="hidden" name="_subject" id="email-subject" value="Someone has requested to join Subbots"/>
                                {
                                    teamLeadEmail !== content.emails.SUBBOTS &&
                                    <input type="hidden" name="_cc" value={content.emails.SUBBOTS} />
                                }
                                <div className="first-name-wrapper">
                                    <label for="first_name">First Name*</label>
                                    <input type="text" name="First Name" id="first-name" placeholder="First Name" required="true"/>
                                </div>

                                <div className="last-name-wrapper">
                                    <label for="last-name">Last Name*</label>
                                    <input type="text" name="Last Name" id="last-name" placeholder="Last Name" required="true"/>
                                </div>
                                <br style={{clear: "both"}} />                            
                                
                                <div className="email-wrapper">
                                    <label for="email-address">Email Address*</label>
                                    <input type="email" name="Email" id="email-address" placeholder="email@domain.tld" required="true" className="email"/>
                                </div>
                                <br style={{clear: "both"}} />                            
                                <div className="year-wrapper">
                                    <label for="year">Year*</label>
                                    <select name="Year" id="year" required="true">
                                        <option value="Choose" selected="" disabled="">Choose</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="team-wrapper">
                                    <label for="team">Desired Team*</label>
                                    <select name="Desired Team" id="team" required="true" value={this.state.team} onChange={this.onTeamChange}>
                                        <option value="Choose" selected="" disabled="">Choose</option>
                                        <option value="ELECTRICAL">Electrical</option>
                                        <option value="MECHANICAL">Mechanical</option>
                                        <option value="SOFTWARE">Software</option>
                                        <option value="OTHER">Other</option>
                                    </select>
                                </div>
                                <br style={{clear: "both"}} />                            

                                <div className="reason-wrapper">
                                    <label for="reason">Reason For Application*</label>
                                    <textarea rows="3" name="Reason For Application" id="reason" placeholder="Why do you want to join?" required=""></textarea>
    
                                </div>
                                <br style={{clear: "both"}} />                            
                                <input className="submit" type="submit" value="Apply"/>
                            </form>
                        </Card>
                        </div>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </ViewContainer>
        )
    }
}
