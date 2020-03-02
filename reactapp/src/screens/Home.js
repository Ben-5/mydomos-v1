import React from 'react';
import Form from '../components/Form'



export default function Home () {
    return (
        <div style={{padding: 80 }}>
            <Form
            route= '/test'
            inputList={[
                {name: 'username', placeholder: 'username'},
                {name: 'mail',placeholder:'mdp', type:'password'}
            ]}
            btnList={[
                {title: 'YESS'},
                {title: 'YESS'}
            ]}
            linkList={[
                {title: 'YESS', link: '/home'},
                {title: "J'ai oublier mon mdp", link: '/home'},
            ]}
            />
        </div>
    );
}