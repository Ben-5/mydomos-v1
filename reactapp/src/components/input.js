import React from 'react';

export default function Input (props) {
    return (
        <input
        //*****REQUIRED***** to get the content
        onChange={e=>props.onChange(e.target.value)}
        //set value
        value={props.value}
        //set type (default text) - email - password - etc
        type={props.type}
        //set placeholder
        placeholder={props.placeholder}
        //set style
        className='input-container'
        >
        </input>
    );
}


