import React, {useState} from 'react';

import {Redirect} from 'react-router-dom';

import Header   from '../components/Header';
import Footer   from '../components/Footer';
import Form     from '../components/Form';

export default function Signup() {

    const [isLogged, setIsLogged] = useState(false);


    var handleRes = (attempt) => {
        console.log('attempt :', attempt);
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
                        route = 'users/signup'
                        inputList={[
                            {name: 'firstname', placeholder: 'firstname'},
                            {name: 'lastname',placeholder:'lastname'},
                            {name: 'email',placeholder:'email'},
                            {name: 'password',placeholder:'password', type:'password'},
                            {name: 'confirmpassword',placeholder:'confirm password',type:'password', match: 3}
                        ]}

                        btn={[{title: "S'inscrire"}]}

                        linkList={[
                            {title: "J'ai déja les clefs !", link: '/signin'},
                        ]}

                        getRes={e=>handleRes(e)}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}