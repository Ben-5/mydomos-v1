import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

import {Row} from 'antd'

function App() {
    return (

      <div style={{marginTop: '15vmin'}}>

        <Header/>


        <div style={{marginLeft: '2vmin'}}>
            <Title title="Trouvez des visites"/>
        </div>

        <div style={{display:'flex', alignItems : 'center', marginLeft: '8vh', marginTop:'4vmin', marginBottom:'4vmin'}}>

            <div style={{width:'60vw'}}>
                <Input 
                    placeholder="essayer 'Paris'"/>
            </div>
            <div style={{width:'75px', height: '32px', marginLeft: '3vmin'}}>
                <Button buttonTitle="Valider"/>
            </div>

        </div>
    

        <Row className="card_row">

            <Card
                info="paris"
                image="/cover/chanel.jpg"
                title="Appartement Chanel"
                price="39"/>

            <Card
                info="bruxelles"
                image="/cover/tassinier.jpg"
                title="Hôtel Tassinier"
                price="49"/>

            <Card
                info="paris"
                image="/cover/tournelles.jpg"
                title="Hôtel des Tournelles"
                price="35"/>

            <Card
                info="paris"
                image="/cover/gainsbourg.jpg"
                title="Maison de Gainsbourg"
                price="39"/>

            <Card
                info="paris"
                image="/cover/ponti.jpg"
                title="Villa Ponti"
                price="45"/>

            <Card
                info="paris"
                image="/cover/rivoli.jpg"
                title="Hôtel de Rivoli"
                price="35"/>

            <Card
                info="paris"
                image="/cover/mallet-stevens.jpg"
                title="Hôtel Mallet-Stevens"
                price="50"/>

            <Card
                info="paris"
                image="/cover/collectionneur.jpg"
                title="Maison de collectionneur"
                price="59"/>

            <Card
                info="paris"
                image="/cover/klein.jpg"
                title="Appartement d'Yves Klein"
                price="39"/>

            <Card
                info="paris"
                image="/cover/bievre.jpg"
                title="Château de la Bièvre"
                price="45"/>

        </Row>

        <Footer/>

      </div>
    )
  }


export default App;