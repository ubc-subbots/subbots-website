import React from 'react';
import constants from '../../js/constants';
import Container from 'react-bootstrap/Container';
import Slide from 'react-reveal/Slide';


export default class ViewContainer extends React.Component{

    renderAnimation(){
        console.log(window.scrollX, window.scrollY);
        
        if (window.scrollX === 0 && window.scrollY === 0){
            return(
                <Slide bottom duration={constants.FADE_DURATION}>
                    <Container fluid className="p-0">
                        {this.props.children}
                    </Container>
                </Slide>
            )
        } else {
            return(
                 <Container fluid className="p-0">
                    {this.props.children}
                </Container>
            )
        }
    }

    render() {
        return(
            <div className="ViewContainer">
                {this.renderAnimation()}
            </div>
        )
    }
}
