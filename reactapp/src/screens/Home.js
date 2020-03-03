import React from 'react';
import {Col} from 'antd';
import {Link} from 'react-router-dom'

import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';

function App() {
    return (
      <div className="background">
        <Header/>
        <div className= "body-screen">

{/* Accroche  */}

            <div className= "main-caption">

                <div className= "main-caption-text">
                    <Title title="Voulez-vous visiter ?"/>
                    <Subtitle subtitle="Résérvéz des visites exclusives de maisons historiques privées animées par des propriétaires passionés"/>
                </div>

                <div className="main-caption-image">
                    <img src="../hand.png" className="hand" alt="hand" />  
                </div>

            </div>
 
 {/* Slider visites à la une  */}

            <div className="breaking-visits">
            
                <p className="sliderTitle">Visites à la une</p>

                <div className="scrolling-wrapper">

                    <Col className="card_col" sm={8} md={6} lg={4}>
                        <p className="card_info">Paris</p>
                    <Link className="card_link">
                        <img className="card_img" alt="visit cover" src="/cover/chanel.jpg"/>
                        <p className="card_title">Appartement Chanel</p>
                    </Link>
                        <div className="card_pricerate">
                            <div>
                                <p className="card_price">À partir de 39 €</p>
                            </div>
                            <div className="card_div_rate">
                                <img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/noteG.png'/><img className="slider_rate" alt="note" src='/noteG.png'/>
                            </div>
                        </div>
                    </Col>
                    <Col className="card_col" sm={8} md={6} lg={4}>
                        <p className="card_info">Bruxelles</p>
                    <Link className="card_link">
                        <img className="card_img" alt="visit cover" src="/cover/tassinier.jpg"/>
                        <p className="card_title">Hôtel Tassinier</p>
                    </Link>
                        <div className="card_pricerate">
                            <div>
                                <p className="card_price">À partir de 49 €</p>
                            </div>
                            <div className="card_div_rate">
                                <img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/noteG.png'/><img className="slider_rate" alt="note" src='/noteG.png'/>
                            </div>
                        </div>
                    </Col>
                    <Col className="card_col" sm={8} md={6} lg={4}>
                        <p className="card_info">Paris</p>
                    <Link className="card_link">
                        <img className="card_img" alt="visit cover" src="/cover/tournelles.jpg"/>
                        <p className="card_title">Hôtel des Tournelles</p>
                    </Link>
                        <div className="card_pricerate">
                            <div>
                                <p className="card_price">À partir de 35 €</p>
                            </div>
                            <div className="card_div_rate">
                                <img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/noteG.png'/><img className="slider_rate" alt="note" src='/noteG.png'/>
                            </div>
                        </div>
                    </Col>
                    <Col className="card_col" sm={8} md={6} lg={4}>
                        <p className="card_info">Paris</p>
                    <Link className="card_link">
                        <img className="card_img" alt="visit cover" src="/cover/gainsbourg.jpg"/>
                        <p className="card_title">Maison de Gainsbourg</p>
                    </Link>
                        <div className="card_pricerate">
                            <div>
                                <p className="card_price">À partir de 39 €</p>
                            </div>
                            <div className="card_div_rate">
                                <img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/noteG.png'/><img className="slider_rate" alt="note" src='/noteG.png'/>
                            </div>
                        </div>
                    </Col>
                    <Col className="card_col" sm={8} md={6} lg={4}>
                        <p className="card_info">Paris</p>
                    <Link className="card_link">
                        <img className="card_img" alt="visit cover" src="/cover/ponti.jpg"/>
                        <p className="card_title">Villa Ponti</p>
                    </Link>
                        <div className="card_pricerate">
                            <div>
                                <p className="card_price">À partir de 45 €</p>
                            </div>
                            <div className="card_div_rate">
                                <img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/noteG.png'/><img className="slider_rate" alt="note" src='/noteG.png'/>
                            </div>
                        </div>
                    </Col>

                </div>

{/* Deuxieme accroche  */}

                <div className= "middle-caption">
                    <div className="middle-caption-image">
                        <span className="middle-caption-background"><img src="../headset.png" className="headset" alt="headset"/></span>  
                    </div>
                    <div className="middle-caption-text-button">
                        <div>
                            <Title title="Ceci n'est pas un musée"/>
                            <Subtitle subtitle="Résérvéz des visites exclusives de maisons historiques privées animées par des propriétaires passionés"/>
                        </div>
                        <Button buttonTitle="Découvrir"/>
                    </div>
                </div>

             </div>
  
        </div>
      <Footer/>
    </div>
    )
  }

export default App;