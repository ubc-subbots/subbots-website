import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import content from './content';
import { ViewHeader, ViewContainer } from '../../components/View';
import './styles.scss';

export default class Home extends React.Component{

    render() {
        return (
            <ViewContainer>
                <ViewHeader header={content.title} body={content.body}/>
            </ViewContainer>
        )
    }
}
