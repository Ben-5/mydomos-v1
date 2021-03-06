import React, {useEffect, useState} from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Text from '../components/Text';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';

import { Row, Col, InputNumber } from 'antd';
import {connect} from 'react-redux'
  

function Book(props){

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

    const [visit, setVisit] = useState([]);
    const [info, setInfo] = useState([]);



//Formater la date
const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };


//Ajouter des billets
const [quantity, setQuantity] = useState(1)

//Aller au panier

var goToBasket = () => {
    props.history.push("/basket")
}

var handleAdd = (visit, save) => {
    var toAdd = {
        infoId: save._id,
        title: visit.title,
        date: save.date,
        time: save.time,
        price: save.price,
        quantity: quantity,
        stock: save.stock,
        img: visit.cover,
    }
    props.addVisitToBasket(toAdd);
}

console.log(visit.title)

    //Afficher les billets restants
    // let stock
    // for (var i = 0; i < visit.info[i].opt.length; i ++) {
    //     if (visit.info[i].opt.stock <= 3) {
    //         let stock = <Text text={`Il ne reste que ${visit.info[i].stock} places`}/>
    //     }
    // }

  return(

    <div className="background">
        <Header/>

        <div  className="body-screen">

            <div className="main-caption" style={{marginBottom:"6vmin"}}>
                
                <Row>

                <Col className= "main-caption-text" xs ={{span:24, order:2}} sm ={{span:24, order:2}} md ={{span:24, order:2}} lg ={{span:12, order:1}} xl ={{span:12, order:1}}>
                    <Title title="Faites votre choix !"/>
                    <Subtitle subtitle="Réservez des visites exclusives de maisons historiques privées animées par des propriétaires passionés"/>
                </Col>

                <Col className="olive-animation" xs ={{span:24, order:1}} sm ={{span:24, order:1}} md ={{span:24, order:1}} lg ={{span:12, order:2}} xl ={{span:12, order:2}}>
                    <img src="../hand-olive.png" className="hand-olive" alt="hand-olive" />
                    <img src="../stick-olive.png" className="stick-olive" alt="stick-olive" />     
                </Col>

                </Row>

            </div>

        {/* CALENDRIER */}
        {/* Composant calendrier ici */}

            
        {/* CRENEAU DU VISITE */}
            <div className="account-subtitle">
                <Subtitle subtitle={`Les visites disponibles pour ${visit.title}`}/>
            </div>

            {info.map((data,i) => (

            <div key={i} className="grid-container-book">

                <div className="grid-item-book book-date">
                    <div className="book-date"><Text text={new Date(data.date).toLocaleDateString('fr-FR', options)}/></div>
                    <div className="book-time"><Text text={data.time}/></div>
                    <div className="book-time"><Text text={data.lang}/></div>
                    <div className="book-time"><Text text={data.opt.join(" / ")}/></div>
                    {/* <div className="book-stock">{stock}</div> */}
                </div>
                    <div><Text text={`${data.price} €`}/></div>
                    <div className="grid-item-book book-ticket"><InputNumber min={1} max={data.maxStock} defaultValue={1} onChange={e=>setQuantity(e)} value={quantity}/></div>
                    <div className="grid-item-book book-button"><Button buttonTitle="Valider" onClick={ () => {handleAdd(visit, data); goToBasket()}}/></div>
            </div>
            ))}
                
        </div>

        <Footer/>
        <Navigation/>
     
    </div>


    )
}

function mapDispatchToProps(dispatch){
    return {
      addVisitToBasket: function(visit){
        dispatch({type: 'addVisit', visit})
      }
    }
}

  export default connect(null, mapDispatchToProps)(Book)