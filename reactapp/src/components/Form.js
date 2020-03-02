import React, { useState, useEffect } from 'react';
import Input from '../components/Input'
import Button from '../components/Button'
import Text from '../components/Text'

export default function Form (props) {

    const [inputDis] = useState(props.inputList);
    const [btnDis] = useState(props.btnList);
    const [linkDis] = useState(props.linkList);

    var result = [];

    var listInput = inputDis.map((input, i) =>{
        result.push({name: input.name, value: input.value});

        return (
            <Input
            key={i}
            name={input.name}
            placeholder={input.placeholder}
            value={input.value}
            onChange={e=>{props.inputList.value=e;result[i].value = e}}
            type={input.type}
            />
        );
    });

    var listBtn = btnDis.map((btn, i) =>{
        var space = <div />;
        if(!i+1 === btnDis.length){
            space = <div className='space-between-btn'/>
        }
        return (
            <div key={i}>
            <Button
            onClick={()=>console.log('result :', result)}
            buttonTitle={btn.title}
            />
            {space}
            </div>
        );
    });

    var listLink = linkDis.map((link, i) =>{
        return (
            <Text key={i} text={link.title} isLink={true} link={link.link}/>
        );
    });


    return (
        <div className='form-container'>
            <div className='form-top-container'>
                {listInput}
            </div>

            <div className='form-submit-container'>
                <div className='form-button-container'>
                <Button
            onClick={()=>console.log('result :', result)}
            buttonTitle={'bhdk'}
            />
            <div className='space-between-btn'/>
            <Button
            onClick={()=>console.log('result :', result)}
            buttonTitle={'bhdk'}
            />
                </div>
            </div>

            <div className='form-bottom-container'>
                {listLink}
            </div>
        </div>
    );
}