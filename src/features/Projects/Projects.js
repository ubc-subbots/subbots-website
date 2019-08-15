import React from 'react';
import content from '../../content';
import { ViewHeader, ViewContainer } from '../../components';
import './styles.scss';

export default class Projects extends React.Component{

    render() {
        return (
            <ViewContainer>
                <ViewHeader title={content.projects.title} blurb={content.projects.blurb} image={content.projects.image}/>
            </ViewContainer>
        )
    }
}
