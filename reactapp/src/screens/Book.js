import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Text from '../components/Text';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';
import Input from '../components/Input';

import { Row, List} from 'antd';
  

function Book(props){

    const [info, setInfo] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        const getinfo = async() => {
        const response = await fetch(`/visit/book/${props.match.params._id}`)
        const data = await response.json()
        setInfo(data.visit[0].info) 
        }
        getinfo()
    },[])


// Formater la date

function formatDate(date) {
    console.log("c'est passé")
    const currentDate = date.getDate();
    const dateString = currentDate >= 10 ? currentDate : `0${currentDate}`;
    const currentMonth = date.getMonth();
    const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
    return `${dateString} ${monthString} ${date.getFullYear()}`;

}

console.log(formatDate(new Date))

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

            {info.map((data,i) => (

            <div className="grid-container-book">

                <div className="grid-item-book book-date">
                    <div className="book-date"><Text text={data.date}/></div>
                    <div className="book-time"><Text text={data.time}/></div>
                    <div className="book-stock"><Text text={`Il ne reste que ${data.stock} places`}/></div>
                </div>
                    <div><Text text={`${data.price} €`}/></div>
                    <div className="grid-item-book book-ticket"><Input placeholder="1"/></div>
                    <div className="grid-item-book book-button"><Button buttonTitle="Valider"/></div>
            </div>
            ))}
                

            

        </div>

        <Footer/>
     
    </div>


    )
}

export default Book;