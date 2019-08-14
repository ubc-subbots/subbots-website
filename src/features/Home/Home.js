import React from 'react';
import content from '../../content';
import { ViewHeader, ViewContainer } from '../../components';
import './styles.scss';

export default class Home extends React.Component{

    render() {
        return (
            <ViewContainer>
                <ViewHeader title={content.home.title} blurb={content.home.blurb}/>
            </ViewContainer>
        )
    }
}
