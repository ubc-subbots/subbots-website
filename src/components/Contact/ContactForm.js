// Make sure to run npm install @formspree/cli @formspree/react
// This form is defined in your formspree.json using the Formspree CLI
// For more help see https://formspr.ee/cli-help


import React from 'react';
import { FormspreeProvider, useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("contact");
  if (state.succeeded) {
      return <p> Message sent successfully </p>;
  }
  return (
      <form onSubmit={handleSubmit}>

<p> 
<div>
      <label htmlFor="full-name" >
        Full Name 
      </label>
</div>
<div>
      <input
        id="full-name"
        type="text" 
        name="full-name"
	placeholder="First and Last" 
      />
</div>

      <ValidationError 
        prefix="Full name" 
        field="full-name"
        errors={state.errors}
      />
</p>
<p>
<div>
      <label htmlFor="email">
        Email Address
      </label>
</div>
<div>
      <input 
        id="email"
        type="email" 
        name="email"
	placeholder="email@example.com" 
      />
</div>

      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
</p>
<p>	
 <div>
      <label htmlFor="message">
        Message
      </label>
</div> 

<div>
      <textarea rows="5"
	cols="45"
        id="message"
        name="message"
	placeholder="Enter message here"
      />
</div>


      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
</p>
<div>	
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
</div>	
    </form>
  );
}

function App() {
  return (
  <FormspreeProvider project="1709408347058339311">
      <ContactForm />
    </FormspreeProvider>
  );
}
export default App;

/*

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

    onFormSubmit(event){
        const form = event.currentTarget;
        if (form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        } 
        this.setState({validated: true});     
    }   
    
    render() {
        return (
            <Form noValidate validated={this.state.validated} onSubmit={this.onFormSubmit.bind(this)} className="JoinForm" action={`https://formspree.io/${content.emails.Subbots}`} method="POST">
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
                    <Form.Label>Message *</Form.Label>
                    <Form.Control onChange={this.onMessageChange.bind(this)} style={{resize:'none'}} as="textarea" rows="6" placeholder="Message" required name="Contact Message"/>
                    <Form.Control.Feedback type="invalid">Required Field</Form.Control.Feedback>                            

                </Form.Group>
                <Button className="PrimaryButton" variant="warning" type="submit">
                    <div className="ApplyButtonText" >Submit</div>
                </Button>
            </Form>
        );
    }
}

*/