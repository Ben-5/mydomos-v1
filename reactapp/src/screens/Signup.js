import React from 'react';

import Header   from '../components/Header';
import Footer   from '../components/Footer';
import Form     from '../components/Form';

export default function Signup() {
    return (
        <div className='background'>
            <Header />
            <div className='body-screen'>
                <Form
                    route = '/user/signup'
                    inputList={[
                        {name: 'firstname', placeholder: 'firstname'},
                        {name: 'lastname',placeholder:'lastname'},
                        {name: 'email',placeholder:'email'},
                        {name: 'password',placeholder:'password', type:'password'},
                        {name: 'confirmpassword',placeholder:'confirm password', type:'password'}
                    ]}

                    btn={[{title: "S'inscrire"}]}

                    linkList={[
                        {title: "J'ai déja les clefs !", link: '/signin'},
                    ]}

                    getRes={e=>console.log(e)}
                />
            </div>
            <Footer />
        </div>
    );
}