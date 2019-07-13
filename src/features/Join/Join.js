import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import content from './content';
import { ViewBody, ViewContainer } from '../../components/View';
import './styles.scss';

export default class Join extends React.Component{

    render() {
        return (
            <ViewContainer>
                <ViewBody header={content.header} body={content.body}/>
                <Row>
                    <Col sm={3}>
                    </Col>
                    <Col sm={6}>
                        <div className="JoinFormBorder">
                        <Card className="JoinFormContainer">
                        <Card.Header className="JoinFormHeader">
                            UBC Subbots 2019-2020 Application
                        </Card.Header>
                        <Form className="JoinForm">
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control placeholder="Enter first name" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control placeholder="Enter last name" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Year</Form.Label>
                                    <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Desired Team</Form.Label>
                                    <Form.Control as="select">
                                        <option>Electrical</option>
                                        <option>Software</option>
                                        <option>Mechanical</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Reason for Application</Form.Label>
                                <Form.Control style={{resize:'none'}} as="textarea" rows="4" placeholder="Tell us why you want to join" />
                            </Form.Group>
                            <Button className="PrimaryButton" variant="warning" type="submit">
                                <div className="ApplyButtonText" >Apply</div>
                            </Button>
                        </Form>
                        </Card>
                        </div>
                    </Col>
                    <Col sm={3}>
                    </Col>
                </Row>
            </ViewContainer>
        )
    }
}
