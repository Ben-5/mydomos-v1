import React from 'react';
import Button from '../components/Button';
import Text from '../components/Text';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import OkButton from '../components/OkButton';
import Input from '../components/Input';


import '../App.css';


export default function Home(){

    return(
        <div>
          <Title title="SDFzefEF" />
          <Subtitle subtitle="ljhhjkqsd" />
          <Text text="qsefzeferf" />
          <Button buttonTitle="blablablablablabla"/>
          <Input placeholder='hello' onChange={e=>console.log(e)} />
          <OkButton />
        </div>

    );
}
