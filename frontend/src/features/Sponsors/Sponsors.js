import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import content from './content';
import { ViewHeader, ViewContainer } from '../../components';
import './styles.scss';

export default class Sponsors extends React.Component{

    render() {
        return (
            <ViewContainer>
                <ViewHeader header={content.title} body={content.body}/>
            </ViewContainer>
        )
    }
}
