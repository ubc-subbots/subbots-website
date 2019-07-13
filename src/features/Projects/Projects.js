import React from 'react';
import content from './content';
import { ViewBody, ViewContainer } from '../../components/View';
import './styles.scss';

export default class Projects extends React.Component{

    render() {
        return (
            <ViewContainer>
                <ViewBody header={content.header} body={content.body}/>
            </ViewContainer>
        )
    }
}
