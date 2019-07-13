import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import content from './content';
import { ViewBody, ViewContainer } from '../../components/View';
import './styles.scss';

export default class Sponsors extends React.Component{

    render() {
        return (
            <ViewContainer>
                <ViewBody header={content.header} body={content.body}/>
            </ViewContainer>
        )
    }
}
