import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

export default function ViewContainer(props){
    return(
        <Button className="ContactButton" variant="warning">
            <div className="ContactText">
                <FontAwesomeIcon className="MailIcon" icon={faEnvelope} size='lg'/>
                Contact Us
            </div>
        </Button>
    )
}
