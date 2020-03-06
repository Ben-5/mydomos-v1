import React, { useState } from 'react';

import {Redirect} from 'react-router-dom';

import Header   from '../components/Header';
import Footer   from '../components/Footer';
import Form     from '../components/Form';

export default function Signin() {

    const [isLogged, setIsLogged] = useState(false);


    var handleRes = (attempt) => {
        if (attempt.result) {
            setIsLogged(true);
        }
    }

    if (isLogged) {
        return (
            <Redirect to='/account' />
        );
    }
    return (
        <div className='background'>
            <Header />
            <div className='body-screen'>
                <div className="sign-body">
                    <div className="main-caption-image">
                        <img src="../hand.png" className="hand" alt="hand" />  
                    </div>
                    <Form
                        containerClassName='sign-form'
                        route = 'users/signin'
                        inputList={[
                            {name: 'email', placeholder:'email'},
                            {name: 'password',placeholder:'password', type:'password'}
                        ]}

                        btn={[{title: "Connect"}]}

                        linkList={[
                            {title: "J'ai perdu mes clefs !", link: '/home'},
                            {title: "Je n'ai pas de clefs...", link: '/signup'},
                        ]}

                        getRes={e=>handleRes(e)}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}