import React from 'react';
import content from './content';
import { ViewHeader, ViewContainer } from '../../components/View';
import './styles.scss';

export default class Projects extends React.Component{

    render() {
        return (
            <ViewContainer>
                <ViewHeader header={content.title} body={content.body}/>
            </ViewContainer>
        )
    }
}
