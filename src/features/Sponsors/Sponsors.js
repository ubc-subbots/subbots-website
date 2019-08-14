import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import content from '../../content';
import { ViewHeader, ViewContainer } from '../../components';
import { SponsorCard } from './Components';
import constants from '../../js/constants';
import './styles.scss';

export default class Sponsors extends React.Component{

    render() {
        
        const sponsor_list = content.sponsors.sponsor_list.map((item, index) => (
            <SponsorCard key={index} image={item.image} link={item.link} />
        ))

        return (
            <ViewContainer>
                <ViewHeader title={content.sponsors.title} blurb={content.sponsors.blurb}/>
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={8}>
                            <Row className="SponsorRow">
                                {sponsor_list}
                            </Row>
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
            </ViewContainer>
        )
    }
}
