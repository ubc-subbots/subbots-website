import React from 'react';
import content from '../../content';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import { ViewHeader, ViewContainer, Image } from '../../components';
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
                <div className="ProjectsContainer">
                    <h3 className="ProjectsHeader">
                        {content.home.projects.header}
                    </h3>
                    <div className="ProjectsBody">
                        {content.home.projects.body}
                    </div>
                    <Row>
                        <Col sm={6}>
                            <Carousel className="ProjectsCarousel">
                                {content.home.projects.carousels.first.images.map((item, index) => (                                    
                                    <Carousel.Item key={index}>
                                        <div className="ProjectsImageContainer">
                                            <Image src={item} folder="robots" />
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            <h4 className="ProjectsImageCaption">
                                {content.home.projects.carousels.first.caption}
                            </h4>
                        </Col>
                        <Col sm={6}>
                            <Carousel className="ProjectsCarousel">
                                {content.home.projects.carousels.second.images.map((item, index) => (                                    
                                    <Carousel.Item key={index}>
                                        <div className="ProjectsImageContainer">
                                            <Image src={item} folder="robots" />
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            <h4 className="ProjectsImageCaption">
                                {content.home.projects.carousels.second.caption}
                            </h4>
                        </Col>
                    </Row>
                </div>
            </ViewContainer>
        )
    }
}
