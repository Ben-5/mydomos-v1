import React, { useState } from 'react';

export default function Input (props) {

    const [content, setContent] = useState(props.value || '')

    return (
        <input
        name={props.name}
        //*****REQUIRED***** to get the content
        onChange={e=>{props.onChange(e.target.value); setContent(e.target.value)}}
        //set value
        value={content}
        //set type (default text) - email - password - etc
        type={props.type || 'text'}
        //set placeholder
        placeholder={props.placeholder || 'PLACE HOLDER PROPS MISSING'}
        //style
        className='input-container'
        >
        </input>
    );
}