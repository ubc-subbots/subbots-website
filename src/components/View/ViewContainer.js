import React from 'react';
import constants from '../../js/constants';
import Container from 'react-bootstrap/Container';
import Slide from 'react-reveal/Slide';


export default class ViewContainer extends React.Component{

    render() {
        return(
            <div className="ViewContainer">
                <Slide bottom duration={constants.FADE_DURATION}>
                    <Container fluid className="p-0">
                        {this.props.children}
                    </Container>
                </Slide> 
            </div>
        )
    }
}
