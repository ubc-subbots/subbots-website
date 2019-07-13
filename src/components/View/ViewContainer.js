import React from 'react';
import Container from 'react-bootstrap/Container';

export default function ViewContainer(props){
    return(
        <div className="ViewContainer">
            <Container fluid>
                {props.children}
            </Container>
        </div>
    )
}
