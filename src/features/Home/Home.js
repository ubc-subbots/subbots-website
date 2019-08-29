import React from 'react';
import content from '../../content';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ViewHeader, ViewContainer, Image } from '../../components';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

export default class Home extends React.Component{

    render() {
        return (
            <ViewContainer>
                <img className="logo" src={process.env.PUBLIC_URL + "/logo/vector_images/RGB(for_screen)/SVG/subbots-logo-rgb-svg-black-large.svg"}/>
                <ViewHeader title={content.home.title} blurb={content.home.blurb} disableImage={true}/>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={4}>
                        <div className="PitchImageContainer">
                            <Image src={content.home.pitch.image}/>
                        </div>
                    </Col>
                    <Col>
                        <div className="PitchHeader">{content.home.pitch.header}</div>
                        <div className="PitchBody">{content.home.pitch.body}</div>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
                <div className="ContentSeperatorTop"/>
                    <div className="ContentContainer">
                        <h4 className="GoalHeader">
                            <FontAwesomeIcon icon={faRocket}/>{'  ' + content.home.goal.header}
                        </h4>
                        <hr/>
                        <Row>
                            <Col sm={6}>
                                <div className="GoalBody">{content.home.goal.body}</div>
                            </Col>
                            <Col sm={6}>
                                <div className="GoalImageContainer">
                                    <Image src={content.home.goal.image}/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                <div className="ContentSeperatorBottom"/>
            </ViewContainer>
        )
    }
}
