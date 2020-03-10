import React, {useEffect, useState} from 'react';
import {Col, Row} from 'antd';
import {Link} from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';
import LightButton from '../components/LightButton';

function App(props) {

    const [slider, setSlider] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        const getslider = async() => {
        const response = await fetch('/visit/results')
        const data = await response.json()
        setSlider(data.list)
        }
        getslider()  
    },[])

// recuperation info pour slider NOW (à la une) 

let sliderNow = slider.map((visit, i) => {
    if(visit.slider === 'now'){
        return ( 
            <Col key={i} className="card_col" xs={17} sm={17} md={12} lg={6}>
                    <h3 className="card_info">{visit.address.city}</h3>
                    <Link  className="card_link" to={`/visit/${visit._id}`}>
                        <img className="card_img" alt="visit cover" src={visit.cover}/>
                        <h4 className="card_title">{visit.title}</h4>
                    </Link>
                    <div className="card_pricerate">
                    <div>
                        <p className="card_price">À partir de {visit.info[0].price} €</p>
                        </div>
                        <div className="card_div_rate">
                            <img className="card_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/note.png'/><img className="card_rate" alt="note" src='/note.png'/><img className="card_rate" alt="note" src='/noteG.png'/><img className="card_rate" alt="note" src='/noteG.png'/>
                        </div>
                    </div>
            </Col>)
}})

// recuperation info pour slider CITY (en ce moment à Paris)
let sliderCity = slider.map((visit, i) => {
    if(visit.slider === 'city'){
        return ( 
            <Col key={i} className="card_col" xs={17} sm={17} md={12} lg={6}>
                    <h3 className="card_info">{visit.address.city}</h3>
                    <Link  className="card_link" to={`/visit/${visit._id}`}>
                        <img className="card_img" alt="visit cover" src={visit.cover}/>
                        <h4 className="card_title">{visit.title}</h4>
                    </Link>
                    <div className="card_pricerate">
                    <div>
                        <p className="card_price">À partir de {visit.info[0].price} €</p>
                        </div>
                        <div className="card_div_rate">
                            <img className="card_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/note.png'/><img className="card_rate" alt="note" src='/note.png'/><img className="card_rate" alt="note" src='/noteG.png'/><img className="card_rate" alt="note" src='/noteG.png'/>
                        </div>
                    </div>
            </Col>)
    }})

    return (
      <div className="background">
        <Header/>
            <div className="body-screen">

{/* Accroche  */}

            <div className= "main-caption">
                <Row>

                <Col className= "main-caption-text" xs ={{span:24, order:2}} sm ={{span:24, order:2}} md ={{span:24, order:2}} lg ={{span:12, order:1}} xl ={{span:12, order:1}}>
                    <Title title="Voulez-vous visiter ?"/>
                    <Subtitle subtitle="Réservez des visites exclusives de maisons historiques privées animées par des propriétaires passionés"/>
                </Col>

                <Col className="main-caption-image" xs ={{span:24, order:1}} sm ={{span:24, order:1}} md ={{span:24, order:1}} lg ={{span:12, order:2}} xl ={{span:12, order:2}}>
                    <img src="../hand.png" className="hand" alt="hand" />  
                </Col>

                </Row>

            </div>
        </div>
 {/* Slider visites à la une  */}
 


            <div className="breaking-visits">
            
                <h3 className="sliderTitle">Visites à la une</h3>

                <div className="scrolling-wrapper"> 
                {sliderNow}
                </div>

                <div style={{paddingLeft: '2vmin', marginTop: '7vmin'}}>
                    <Button link='/results' buttonTitle="Voir plus"/>
                </div>

            </div>

{/* Deuxieme accroche  */}
            
                <div className= "middle-caption">
                <Row>
                    <Col className="middle-caption-image" xs ={{span:24, order:1}} sm ={{span:24, order:1}} md ={{span:24, order:1}} lg ={{span:12, order:1}}>
                        <span className="middle-caption-background"><img src="../headset.png" className="headset" alt="headset"/></span>  
                    </Col>
                    <Col className="middle-caption-text-button" xs ={{span:24, order:2}} sm ={{span:24, order:2}} md ={{span:24, order:2}} lg ={{span:12, order:2}}>
                        <div className="middle-caption-text">
                            <h1 className="middle-caption-title">Ceci n'est pas un musée</h1>
                            <Subtitle subtitle="Résérvéz des visites exclusives de maisons historiques privées animées par des propriétaires passionés"/>
                        </div>
                        <LightButton link='/about' buttonTitle="Découvrir"/>
                    </Col>
                </Row>
                </div>
            
{/* Slider 'En ce moment à Paris'  */}

        <div className="paris-visits">
            
            <h3 className="sliderTitle">En ce moment à Paris</h3>

            <div className="scrolling-wrapper">
            {sliderCity}

                </div>
                    <div style={{paddingLeft: '2vmin', marginTop: '7vmin'}}>
                    <Button link='/results' buttonTitle="Voir plus"/>
                    </div>
                </div>
        

{/* Troisieme accroche  */}

        <div className= "bottom-caption">
                        <span className="bottom-caption-image"><img src="../closer.png" className="closer" alt="closer"/></span>  
                        <h1 className="closer-title">Y'a quelq'un ?</h1>
                        <LightButton link='/about' buttonTitle="Entrez !"/>
        </div>
      <Footer/>
      <Navigation/>
    </div>
    )
  }

export default App;