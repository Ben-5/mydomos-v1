import React from 'react';

import {Col, Row} from 'antd';
import {Link} from 'react-router-dom'

import Footer from '../components/Footer';
import Header from '../components/Header';
import Text from '../components/Text';
import Button from '../components/Button';
import Title from '../components/Title';

function Success(){



return(
<div className="background">
  <Header/>

    <div  className="body-screen">
        <Row className="success-container">
            <Col>
                <Title title='Votre visite est réservée !'/>
                <img src="../success.png" className="bubble" alt="bubble"/>
                <Text text="Vous allez recevoir un email de confimation." />
            </Col>
        </Row>

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

        <div style={{paddingLeft: '2vmin', marginTop: '7vmin'}}>
          <Button buttonTitle="Voir plus"/>
        </div>
      </div>
{/* --------> END slider section */}

    </div>
  <Footer/>
</div>
    )
}

export default Success;