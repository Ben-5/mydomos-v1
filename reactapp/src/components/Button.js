import React from 'react';
import '../App.css';

export default function Button(props){

    return(
              <button onClick={props.onClick} className="square-button"> <p> {props.buttonTitle} </p> </button>
        );
}