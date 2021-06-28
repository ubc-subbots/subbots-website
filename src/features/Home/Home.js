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
                <svg  className="Logo" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216">
                    <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" >
                        <stop offset="25%" stop-color="#fed136" />
                        <stop offset="100%" stop-color="#ffba38" />
                    </linearGradient>
                    </defs>
                    <title>subbots-logo-rgb-svg-white-large</title>
                    <path class="LogoSpin" d="M194.85,129.49a89.84,89.84,0,0,0-.43-44.67l8.9-3.47a99,99,0,0,0-28.44-46.28l-7.52,6A89.21,89.21,0,0,0,134,22.39l-.14,0H134l1.44-9.44v0a99.53,99.53,0,0,0-54.76,0v0l1.44,9.44h.14l-.14,0A89.33,89.33,0,0,0,47.68,42l-7.49-6A98.78,98.78,0,0,0,12.43,82.51L21.34,86a89.75,89.75,0,0,0-.18,43.29l-8.93,3.48a99,99,0,0,0,27.48,46.79l7.5-6a89.41,89.41,0,0,0,34.65,20l.17.05h-.17L80.42,203v.05a99.56,99.56,0,0,0,54.94.09v-.05l-1.44-9.44h-.17l.17,0a89.19,89.19,0,0,0,34.77-19.89l7.49,6A98.91,98.91,0,0,0,203.77,133ZM183.4,111.78a75.46,75.46,0,0,1-68.32,71.36q-3.48.33-7,.33t-7-.33a75.47,75.47,0,0,1-68.33-71.36c-.07-1.25-.1-2.51-.1-3.78s0-2.53.1-3.78a75.47,75.47,0,0,1,150.75,0c.07,1.25.1,2.51.1,3.78S183.47,110.53,183.4,111.78Z"/>
                    <path class="cls-1" d="M178,98.13,142.39,94.2v0c-2.3-12.43-9.64-22.73-19.46-28H150v-5H114.93l-1.72-15h-9.82l-1.72,15H66.6v5H93.67c-9.82,5.26-17.16,15.56-19.46,28v0L38.59,98.13a68.86,68.86,0,0,0-.59,8.78l5-2.09a29.24,29.24,0,0,1,22.78,0l4.14,1.75a27.6,27.6,0,0,0,3.87,1.32L74,108c.33.09.67.17,1,.24a29.11,29.11,0,0,0,12.6,0l2.7-.73c.74-.31,1.48-.58,2.2-.89l4.14-1.75a29.08,29.08,0,0,1,10-2.27c.45,0,.91,0,1.36,0h.6c.45,0,.91,0,1.36,0a29.08,29.08,0,0,1,10,2.27l4.14,1.75c.72.31,1.46.58,2.2.89l2.7.73a29.11,29.11,0,0,0,12.6,0c.33-.07.67-.15,1-.24l.22-.06a27.6,27.6,0,0,0,3.87-1.32l4.14-1.75a29.24,29.24,0,0,1,22.78,0l4.95,2.09A68.86,68.86,0,0,0,178,98.13ZM91.48,85.52c-2.65,4.6-6.22,7.52-8,6.51s-1-5.55,1.67-10.15,6.21-7.51,8-6.51S94.14,80.92,91.48,85.52ZM133.08,92c-1.74,1-5.31-1.91-8-6.51s-3.4-9.14-1.66-10.15,5.3,1.91,8,6.51S134.81,91,133.08,92Z"/>
                    <path class="cls-1" d="M178.29,115.7a69.66,69.66,0,0,1-3.68,15.45l-.77-.33a29.24,29.24,0,0,0-22.78,0l-4.14,1.75a29.2,29.2,0,0,1-17.42,1.67,27.93,27.93,0,0,1-5.36-1.67L120,130.82a29.24,29.24,0,0,0-22.78,0l-4.14,1.75a29.31,29.31,0,0,1-22.78,0l-4.14-1.75a29.24,29.24,0,0,0-22.78,0l-.75.32A69.19,69.19,0,0,1,39,115.68l.29-.11,4.14-1.75a29.24,29.24,0,0,1,22.78,0l4.14,1.75a28.53,28.53,0,0,0,5,1.6,29.17,29.17,0,0,0,17.75-1.6l4.14-1.75a29.24,29.24,0,0,1,22.78,0l4.14,1.75a29.15,29.15,0,0,0,16.5,1.85,28.6,28.6,0,0,0,6.28-1.85l4.14-1.75a29.24,29.24,0,0,1,22.78,0Z"/>
                    <path class="cls-1" d="M170.83,139.74a69.75,69.75,0,0,1-10.42,14.85,28.85,28.85,0,0,0-9.35,2.23l-4.14,1.75a29.24,29.24,0,0,1-22.78,0L120,156.82a29.24,29.24,0,0,0-22.78,0l-4.14,1.75a29.24,29.24,0,0,1-22.78,0l-4.14-1.75a28.93,28.93,0,0,0-9.33-2.23,69.75,69.75,0,0,1-10.42-14.85,29.19,29.19,0,0,1,19.75,1.08l4.14,1.75a29.24,29.24,0,0,0,22.78,0l4.14-1.75.18-.07c.16-.06.31-.13.47-.18a2.65,2.65,0,0,1,.44-.17,29,29,0,0,1,20-.2,2.5,2.5,0,0,1,.43.16l.48.17c.25.08.5.19.75.29l4.14,1.75a29.24,29.24,0,0,0,22.78,0l4.14-1.75A29.25,29.25,0,0,1,170.83,139.74Z"/>
                    <path class="cls-1" d="M136,171.87a70.41,70.41,0,0,1-54.8,0,29.19,29.19,0,0,0,11.86-2.3l4.14-1.75a29.24,29.24,0,0,1,22.78,0l4.14,1.75A29.11,29.11,0,0,0,136,171.87Z"/>
                    <path class="cls-1" d="M126.34,107.46c-.81-.26-1.61-.56-2.39-.89l-4.14-1.75a29,29,0,0,0-9.85-2.27,29.08,29.08,0,0,1,10,2.27l4.14,1.75C124.86,106.88,125.6,107.15,126.34,107.46Z"/>
                    <path class="cls-1" d="M129,108.19c-.42-.09-.84-.2-1.26-.31s-1-.27-1.44-.42Z"/>
                </svg>      
                {/* <img className="Logo" src={process.env.PUBLIC_URL + "/logo/vector_images/RGB(for_screen)/SVG/subbots-logo-rgb-yellow-large.svg"}/> */}
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
                                <div className="GoalBody">
                                  {content.home.goal.body}
                                </div>
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
                            <h4 className="ProjectsSubheader">
                                {content.home.projects.old_robot.header}
                            </h4>
                            <Carousel className="ProjectsCarousel" fade="true">
                                {content.home.projects.old_robot.carousels.second.images.map((item, index) => (
                                    <Carousel.Item key={index}>
                                        <div className="ProjectsImageContainer">
                                            <Image src={item} folder="robots" />
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            <h4 className="ProjectsImageCaption">
                                {content.home.projects.old_robot.carousels.second.caption}
                            </h4>
                        </Col>
                        <Col sm={6}>
                            <h4 className="ProjectsSubheader">
                                {content.home.projects.current_robot.header}
                            </h4>
                            <Carousel className="ProjectsCarousel" fade="true">
                                {content.home.projects.current_robot.carousels.first.images.map((item, index) => (
                                    <Carousel.Item key={index}>
                                        <div className="ProjectsImageContainer">
                                            <Image src={item} folder="robots" />
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            <h4 className="ProjectsImageCaption">
                                {content.home.projects.current_robot.carousels.first.caption}
                            </h4>
                        </Col>
                    </Row>
                </div>
            </ViewContainer>
        )
    }
}
