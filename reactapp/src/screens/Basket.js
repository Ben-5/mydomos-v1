import React from 'react';
import {Link} from 'react-router-dom'


import Header from '../components/Header';
import Text from '../components/Text';
import Button from '../components/Button';

import Title from '../components/Title';

import {Row, Col} from 'antd';
import Subtitle from '../components/Subtitle';


function Basket(){

    return(
<div className="background">
  <Header/>

    <div  className="body-screen">
    <Row justify="center" className="success-title">
                <Title title='Votre Selection'/>
            </Row>
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
                        <Button buttonTitle="35€" />
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
                        <Button buttonTitle="35€" />
                    </Row>
                     <Text text="1 place" />
            </Col>            
        </Row>


 {/* start partie remplacé par className=fixed-menu-visit  */}
    <Row align="middle" className="menu-basket">
        <Button lien="/success" buttonTitle="Valider la commande" />
    </Row>
    
    </div>


{/*-------->START slider section */}
<div >
            <h3 className="sliderTitle">Découvrez d'autres lieux</h3>
              <div className="scrolling-wrapper">
                <Col className="card_col" sm={8} md={6} lg={6}>
                    <h3 className="card_info">Paris</h3>
                        <Link className="card_link">
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
                <Col className="card_col" sm={8} md={6} lg={6}>
                    <h3 className="card_info">Paris</h3>
                    <Link className="card_link">
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
                <Col className="card_col" sm={8} md={6} lg={6}>
                  <h3 className="card_info">Paris</h3>
                    <Link className="card_link">
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
                <Col className="card_col" sm={8} md={6} lg={6}>
                  <h3 className="card_info">Paris</h3>
                    <Link className="card_link">
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
                <Col className="card_col" sm={8} md={6} lg={6}>
                    <h3 className="card_info">Paris</h3>
                <Link className="card_link">
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
      </div>
{/* --------> END slider section */}


      {/*  start partie mobile-fixed qui remplace className=menu-visit  */}
      <Row className="menu-success" >
        <p className="menu-basket-text" >Valider la commande</p>
    </Row>
                     {/*  end partie mobile-fixed qui remplace className=menu-visit  */}
    </div>


    )
}

export default Basket;