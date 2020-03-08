import React from 'react';
import {Link} from 'react-router-dom'


import Header from '../components/Header';
import Text from '../components/Text';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Title from '../components/Title';

import {Row, Col} from 'antd';
import Subtitle from '../components/Subtitle';


function Basket(){

    return(

<div className="background">
  <Header/>

    <div  className="body-screen">

        <div className= "main-caption">
                
                <Row>

                <Col className= "main-caption-text" xs ={{span:24, order:2}} sm ={{span:24, order:2}} md ={{span:24, order:2}} lg ={{span:12, order:1}} xl ={{span:12, order:1}}>
                    <Title title="Votre selection"/>
                    <Subtitle subtitle="Réservez des visites exclusives de maisons historiques privées animées par des propriétaires passionés"/>
                </Col>

                <Col className="main-caption-image" xs ={{span:24, order:1}} sm ={{span:24, order:1}} md ={{span:24, order:1}} lg ={{span:12, order:2}} xl ={{span:12, order:2}}>
                    <img src="../fan.png" className="fan" alt="fan" />  
                </Col>

                </Row>

            </div>


        {/* ---->ROW className="success-container" A MAPPER AVEC BDD<---- */}

        <Row className="success-container">
            <Col xs={{span:24}}>
              <Subtitle subtitle="Hotel MALLET" />
                <Col style={{borderTopStyle: "inset"}}>
                    <Text text="Mercredi 18 Mars" />
                    <Text text="19h - 20h" />
                </Col>
                    <Row justify="space-between" align='middle'>
                        <Text text="35€ par personne " />
                        <div>35€</div>
                    </Row>
                     <Text text="1 place" />
            </Col>            
        </Row>
        {/* END---->ROW className="success-container" A MAPPER AVEC BDD<---- */}
        <Row className="success-container">
            <Col xs={{span:24}}>
              <Subtitle subtitle="Hotel MALLET" />
                <Col style={{borderTopStyle: "inset"}}>
                    <Text text="Mercredi 18 Mars" />
                    <Text text="19h - 20h" />
                </Col>
                    <Row justify="space-between" align='middle'>
                        <Text text="35€ par personne " />
                        <div>35€</div>
                    </Row>
                     <Text text="1 place" />
            </Col>            
        </Row>


 {/* start partie remplacé par className=fixed-menu-visit  */}
    <Row align="middle" className="menu-basket">
        <Button link="/signin" buttonTitle="Valider la commande" />
    </Row>
    
    </div>


{/*-------->START slider section */}

    <div style={{paddingBottom: '8vmin', paddingTop: '8vmin'}} className="paris-visits">
            
            <h3 className="sliderTitle">Découvrez d'autres lieux</h3>

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
             
        {/* --------> END slider section */}


        {/*  start partie mobile-fixed qui remplace className=menu-visit  */}

        <div className="menu-success" >
            <Link to='/signin'>
                <p className="menu-basket-text">Valider la commande</p>
            </Link>
        </div>
        

        {/*  end partie mobile-fixed qui remplace className=menu-visit  */}
        
        <Footer/>

    </div>  

    
    )
}

export default Basket;