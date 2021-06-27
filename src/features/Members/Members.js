import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import content from '../../content';
import { ViewHeader, ViewContainer } from '../../components';
import { MemberCard } from './Components';
import './styles.scss';

export default class Members extends React.Component{

    render() {
        const member_list = content.members.member_list.map((item, index) => (
            <MemberCard key={index} image={item.image} name={item.name} email={item.email}
            program={item.program}/>
        ))

        return (
            <ViewContainer>
                <ViewHeader title={content.members.title} blurb={content.members.blurb} image={content.members.image}/>
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={8}>
                            <Row className="MemberRow">
                                {member_list}
                            </Row>
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
            </ViewContainer>
        )
    }
}
