import React, { useState } from 'react';
import Input from '../components/Input'
import Button from '../components/Button'
import Text from '../components/Text'

export default function Form (props) {

    const [inputDis] = useState(props.inputList);
    const [btnDis] = useState(props.btn);
    const [linkDis] = useState(props.linkList);
    const [errorDis, setErrorDis] = useState([])

    var formPost = async (req) => {
        var errors = [];
        var request = '';

        for(var i=0;i<req.length;i++) {
            if(req[i].value === undefined) {
                errors.push({name: req[i].name});
            } else {
                request = request + `&${req[i].name}=${req[i].value}`
            }
        }

        console.log('errors :', errors);
        
        if (errors[0]) {
            setErrorDis(errors);
            return false;
        }

        var rawRes = await fetch(props.route, {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: request
        });

        var parseRes = await rawRes.json();
        props.getRes(parseRes);
    }


    var result = [];

    var listInput = inputDis.map((input, i) =>{
        result.push({name: input.name, value: input.value});
        var isEmpty = false;
        if (errorDis[i]) {
            if (errorDis[i].name === input.name) {
                isEmpty = true;
            }
        }
        return (
            <Input
            error={isEmpty}
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
        return (
            <Button
            key={i}
            onClick={()=>formPost(result)}
            buttonTitle={btn.title}
            />
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
                    {listBtn}
                </div>
            </div>

            <div className='form-bottom-container'>
                {listLink}
            </div>
        </div>
    );
}