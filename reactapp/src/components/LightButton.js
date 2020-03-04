import React, { useState } from 'react';
import '../App.css';
import {Redirect} from 'react-router-dom'


export default function LightButton(props){

const [lien, setLien] = useState(null)

var handleClick = () => {
    setLien(props.lien)
}
    if(lien){
        return <Redirect to={lien} />
    }
        return(
            <div>
                <button 
                        //style
                        className="button-light" 
                        //for redirect
                        onClick={ ()=>handleClick() }
                        > 
                        {/* set youy title button */}
                    <p>{props.buttonTitle} </p> 
                </button>
            </div>
        );
}