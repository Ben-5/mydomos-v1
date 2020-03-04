import React, { useState, useEffect } from 'react';
import Input from '../components/Input'
import Button from '../components/Button'
import Text from '../components/Text'

export default function Form (props) {

    const [inputDis] = useState(props.inputList);
    const [btnDis] = useState(props.btn);
    const [linkDis] = useState(props.linkList);
    const [result, setResult] = useState([]);
    const [errorDis, setErrorDis] = useState([]);
    
    useEffect(()=> {
        var test = props.inputList
        var cpy = [];
        for (var i=0;i<test.length;i++){
            cpy.push({name: test[i].name, value: test[i].value});
        }
        setResult(cpy);
    }, [props.inputList]);

    var changeToState = (content, position) => {
        var cpy = [...result];
        cpy[position].value = content;
        setResult(cpy);
    }

    var finalPost = async() => {
        var request = '';
        for(var i=0;i<result.length;i++) {
            if (i === 0) {request = request + `${result[i].name}=${result[i].value}`}
            else {request = request + `&${result[i].name}=${result[i].value}`}
        }
        var rawRes = await fetch(props.route, {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: request
        });
        var prsRes = await rawRes.json();
        props.getRes(prsRes)
    }

    var postTheForm = async() => {
        var toPost = [...result];
        var cpy = [];
        for (var i=0;i<toPost.length;i++) {
            if (toPost[i].value === undefined || toPost[i].value === '') {
                cpy.push(toPost[i].name);
            }
        }
        setErrorDis(cpy);
        console.log('isError :', cpy);
        if (!cpy[0]) {finalPost()}
    }

    var listInput = inputDis.map((input, i) =>{
        var isError = false;

        for(var index=0;index<errorDis.length;index++) {
            if (errorDis[index] === input.name) {
                isError = true;
            }
        }

        return (
            <Input
            key={i}
            error={isError}
            name={input.name}
            placeholder={input.placeholder}
            onChange={e=>changeToState(e, i)}
            type={input.type}
            />
        );
    });

    var listBtn = btnDis.map((btn, i) =>{
        return (
            <Button
            key={i}
            onClick={()=>postTheForm()}
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
        <div className='sign-body'>
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
        </div>
    );
}