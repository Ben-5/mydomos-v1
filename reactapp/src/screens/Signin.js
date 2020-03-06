import React from 'react';

import Header   from '../components/Header';
import Footer   from '../components/Footer';
import Form     from '../components/Form';

export default function Signin() {
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
                        containerStyle={{paddingLeft: '10vmin'}}
                        route = '/user/signin'
                        inputList={[
                            {name: 'email', placeholder:'email'},
                            {name: 'password',placeholder:'password', type:'password'}
                        ]}

                        btn={[{title: "Connect"}]}

                        linkList={[
                            {title: "J'ai perdu mes clefs !", link: '/home'},
                            {title: "Je n'ai pas de clefs...", link: '/signup'},
                        ]}

                        getRes={e=>console.log(e)}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}