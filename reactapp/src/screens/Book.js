import React from 'react';
import {Link} from 'react-router-dom'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Text from '../components/Text';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';
import Input from '../components/Input';

import {Row, List} from 'antd';

function Book(props){

//Afficher les réservations de l'utilisateur

  return(

    <div className="background">
        <Header/>

        <div  className="body-screen">
            <Row justify="center" className="success-title">
                <Title title='Choisissez votre visite'/>
            </Row>

        {/* CALENDRIER */}
        {/* Composant calendrier ici */}

            
        {/* CRENEAU DU VISITE */}
            <div className="account-subtitle">
                <Subtitle subtitle="Les visites disponibles"/>
            </div>

            <div className="grid-container-book">

                <div className="grid-item-book book-date">
                    <div className="book-date"><Text text="lundi 3 mars 2010"/></div>
                    <div className="book-time"><Text text="15h-16h"/></div>
                    <div className="book-stock"><Text text="Il ne reste que 2 places"/></div>
                </div>
                <div className="grid-item-book book-ticket"><Input placeholder="1"/></div>
                <div className="grid-item-book book-button"><Button buttonTitle="Valider"/></div>
                    
            </div>

        </div>

        <Footer/>
     
    </div>


    )
}

export default Book;