import React from 'react';
import '../App.css';
// import { PromiseProvider } from 'mongoose';


export default function Text(props){

    return(
            <p className="Text paragraphe-container">{props.text}</p>
    );
}
