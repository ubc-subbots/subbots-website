import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import content from './content';
import { ViewBody, ViewContainer } from '../../components/View';
import './styles.scss';

export default class Home extends React.Component{

    render() {
        return (
            <ViewContainer>
                <ViewBody header={content.header} body={content.body}/>
            </ViewContainer>
        )
    }
}
