import React, {useEffect, useState} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Text from '../components/Text';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';

import { Row, InputNumber } from 'antd';
import {connect} from 'react-redux'
// import { Redirect } from 'react-router-dom';
  

function Book(props){

    const [visit, setVisit] = useState([])
    const [info, setInfo] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        const getinfo = async() => {
        const response = await fetch(`/visit/book/${props.match.params._id}`)
        const data = await response.json()
        setVisit(data.visit[0])
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

//Ajouter des billets
const [ticket, setTicket] = useState(1)

//Aller au panier

var goToBasket = () => {
    console.log('yes')
}

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
                    <div className="grid-item-book book-ticket"><InputNumber min={1} max={data.maxStock} defaultValue={1} onChange={e=>setTicket(e)} value={ticket}/></div>
                    <div className="grid-item-book book-button"><Button buttonTitle="Valider" onClick={ () => {props.addToBasket(visit); goToBasket()}}/></div>
            </div>
            ))}
                

            

        </div>

        <Footer/>
     
    </div>


    )
}

function mapDispatchToProps(dispatch){
    return {
      addToBasket: function(visit){
        dispatch({type: 'addVisit', visit})
      }
    }
  }

  export default connect(null, mapDispatchToProps)(Book)