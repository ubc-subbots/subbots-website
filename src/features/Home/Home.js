import React from 'react';
import content from '../../content';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { ViewHeader, ViewContainer } from '../../components';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

export default class Home extends React.Component{

    render() {
        return (
            <ViewContainer>
                <ViewHeader title={content.home.title} blurb={content.home.blurb} image={content.home.image}/>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={4}>
                        <div className="HomeImageContainer">
                            <Image className="HomeImage" src={process.env.PUBLIC_URL + "/images/" + content.home.pitch.image}></Image>
                        </div>
                    </Col>
                    <Col>
                    <div className="PitchHeader">{content.home.pitch.header}</div>
                    <div className="PitchBody">{content.home.pitch.body}</div>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
                <div className="SeperatorTop"></div>
                <div className="GoalContainer">
                    <h4 className="GoalHeader">
                        <FontAwesomeIcon icon={faRocket}/>
                        {'  ' + content.home.goal.header}
                    </h4>
                    <hr/>
                    <Row>
                        <Col sm={7}>
                            <div className="GoalBody">{content.home.goal.body}</div>
                        </Col>
                        <Col sm={5}>
                            <div className="HomeImageContainer">
                                <Image className="HomeImage" src={process.env.PUBLIC_URL + "/images/" + content.home.goal.image}></Image>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="SeperatorBottom"></div>
            </ViewContainer>
        )
    }
}
