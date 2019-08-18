import React from 'react';
import './styles.scss';

export default function Image(props){
    return(
        <div className="ImageContainer">
            <img className="Image" src={process.env.PUBLIC_URL + "/images/" + props.src} alt="Error!"/>
        </div>
    )
}