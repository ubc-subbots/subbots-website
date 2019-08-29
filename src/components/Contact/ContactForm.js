import content from '../../content'
import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            validated: false,
            first_name: "",
            last_name: "",
            email: "",
            message: ""
        };
    }

    onFirstNameChange(event){this.setState({first_name: event.target.value})}

    onLastNameChange(event){this.setState({last_name: event.target.value})}

    onEmailChange(event){this.setState({email: event.target.value})}

    onMessageChange(event){this.setState({message: event.target.value})}
    
    render() {
        return (
            <Form noValidate validated={this.state.validated} className="JoinForm" action={`https://formspree.io/${content.emails.Subbots}`} method="POST">
                <input type="hidden" name="_subject" value="Someone is requesting additional information"/>
                <input type="hidden" name="NOTE" 
                    value={`THIS IS AN AUTO GENERATED MESSAGE:\n\n You are recieving this email because someone has requested to contact Subbots for additional information. Their details are as followed below:`}
                />
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
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control onChange={this.onMessageChange.bind(this)} style={{resize:'none'}} as="textarea" rows="6" placeholder="Message" name="Contact Message"/>
                </Form.Group>
                <Button className="PrimaryButton" variant="warning" type="submit">
                    <div className="ApplyButtonText" >Submit</div>
                </Button>
            </Form>
        );
    }
}