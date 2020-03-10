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
        console.log(data.list)
        }
        getslider()  
    },[])

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

                    <Col className="card_col" xs={17} sm={17} md={12} lg={6}>
                        <h3 className="card_info">Paris</h3>
                    <Link to={`/visit/5e5fb405442af412383846bf`} className="card_link">
                        <img className="card_img" alt="visit cover" src="/cover/chanel.jpg"/>
                        <h4 className="card_title">Appartement Chanel</h4>
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
                    <Col className="card_col" xs={17} sm={17} md={12} lg={6}>
                        <h3 className="card_info">Bruxelles</h3>
                    <Link className="card_link" to={`/visit/5e5fc82ee886e20628918501`}> 
                        <img className="card_img" alt="visit cover" src="/cover/tassinier.jpg"/>
                        <h4 className="card_title">Hôtel Tassinier</h4>
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
                    <Col className="card_col" xs={17} sm={17} md={12} lg={6}>
                        <h3 className="card_info">Paris</h3>
                    <Link className="card_link" to={`/visit/5e5fbe9d442af412383846c5`}>
                        <img className="card_img" alt="visit cover" src="/cover/tournelles.jpg"/>
                        <h4 className="card_title">Hôtel des Tournelles</h4>
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
                    <Col className="card_col" xs={17} sm={17} md={12} lg={6}>
                        <h3 className="card_info">Paris</h3>
                    <Link className="card_link" to={`/visit/5e5fccfde886e20628918505`}>
                        <img className="card_img" alt="visit cover" src="/cover/gainsbourg.jpg"/>
                        <h4 className="card_title">Maison de Gainsbourg</h4>
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
                    <Col className="card_col" xs={17} sm={17} md={12} lg={6}>
                        <h3 className="card_info">Paris</h3>
                    <Link className="card_link" to={`/visit/5e5fca14e886e20628918503`}>
                        <img className="card_img" alt="visit cover" src="/cover/ponti.jpg"/>
                        <h4 className="card_title">Villa Ponti</h4>
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

                <div style={{paddingLeft: '2vmin', marginTop: '7vmin'}}>
                    <Button link='/results' buttonTitle="Voir plus"/>
                </div>

            </div>

{/* Deuxieme accroche  */}
            
                <div className= "middle-caption">
                <Row>
                    <Col className="middle-caption-image" xs ={{span:24, order:1}} sm ={{span:24, order:1}} md ={{span:24, order:1}} lg ={{span:12, order:1}}>
                        <span className="middle-caption-background"><img src="../headphones.png" className="headphones" alt="headphones"/></span>  
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

                <Col className="card_col" xs={17} sm={17} md={12} lg={6}>
                        <h3 className="card_info">Paris</h3>
                    <Link className="card_link" to={`/visit/5e5fbd3f442af412383846c3`}>
                        <img className="card_img" alt="visit cover" src="/cover/rivoli.jpg"/>
                        <h4 className="card_title">Hôtel de Rivoli</h4>
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
                    <Col className="card_col" xs={17} sm={17} md={12} lg={6}>
                        <h3 className="card_info">Paris</h3>
                    <Link className="card_link" to={`/visit/5e5fc695e886e206289184ff`}>
                        <img className="card_img" alt="visit cover" src="/cover/mallet-stevens.jpg"/>
                        <h4 className="card_title">Hôtel Mallet Stevens</h4>
                    </Link>
                        <div className="card_pricerate">
                            <div>
                                <p className="card_price">À partir de 50 €</p>
                            </div>
                            <div className="card_div_rate">
                                <img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/noteG.png'/><img className="slider_rate" alt="note" src='/noteG.png'/>
                            </div>
                        </div>
                    </Col>
                    <Col className="card_col" xs={17} sm={17} md={12} lg={6}>
                        <h3 className="card_info">Paris</h3>
                    <Link className="card_link" to={`/visit/5e5fcdf8e886e20628918507`}>
                        <img className="card_img" alt="visit cover" src="/cover/collectionneur.jpg"/>
                        <h4 className="card_title">Maison de collectionneur</h4>
                    </Link>
                        <div className="card_pricerate">
                            <div>
                                <p className="card_price">À partir de 59 €</p>
                            </div>
                            <div className="card_div_rate">
                                <img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/noteG.png'/><img className="slider_rate" alt="note" src='/noteG.png'/>
                            </div>
                        </div>
                    </Col>
                    <Col className="card_col" xs={17} sm={17} md={12} lg={6}>
                        <h3 className="card_info">Paris</h3>
                    <Link className="card_link" to={`/visit/5e5fbb46442af412383846c1`}>
                        <img className="card_img" alt="visit cover" src="/cover/klein.jpg"/>
                        <h4 className="card_title">Appartement d'Yves klein</h4>
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
                    <Col className="card_col" xs={17} sm={17} md={12} lg={6}>
                        <h3 className="card_info">Paris</h3>
                    <Link className="card_link" to={`/visit/5e5fc53de886e206289184fd`}>
                        <img className="card_img" alt="visit cover" src="/cover/bievre.jpg"/>
                        <h4 className="card_title">Château de la Bièvre</h4>
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