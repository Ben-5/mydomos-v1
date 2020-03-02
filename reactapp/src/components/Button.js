import React from 'react';
import '../App.css';

export default function Button(props){

    return(
              <button className="button-container"> <p> {props.buttonTitle} </p> </button>
        );
}