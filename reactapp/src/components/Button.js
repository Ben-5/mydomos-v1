import React, { useState } from 'react';
import '../App.css';
import {Redirect} from 'react-router-dom'


export default function Button(props){

const [lien, setLien] = useState(null)

var handleClick = () => {if (lien) {setLien(props.lien)} else {props.onClick()}}
    if(lien){
        return <Redirect to={lien} />
    }
        return(
            <div>
                <button 
                        //style
                        className="button-container" 
                        //for redirect
                        onClick={()=>handleClick()}
                        > 
                        {/* set youy title button */}
                    <p>{props.buttonTitle} </p> 
                </button>
            </div>
        );
}