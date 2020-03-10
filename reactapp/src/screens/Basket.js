import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from '../components/Header';
import Text from '../components/Text';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';

import {Row, Col} from 'antd';

function Basket(props){

    const [basketList, setBasketList] = useState([]);

    useEffect(() => {
        async function fetchData() {

            var list = props.visitInBasket;

            for (var i=0;i<list.length;i++) {
                const rawVisit = await fetch(`/visit/visitpage/${list[i].visitId}`);
                const fetchVisit = await rawVisit.json();

                for (var j=0;j<fetchVisit.visit[0].info.length;j++) {
                    if (fetchVisit.visit[0].info[j]._id === list[i].infoId) {
                        var toPush = {
                            title: fetchVisit.visit[0].title,
                            date: fetchVisit.visit[0].info[j].date,
                            time: fetchVisit.visit[0].info[j].time,
                            price: fetchVisit.visit[0].info[j].price,
                            quantity: list[i].orderNb,
                        }
                        setBasketList([...basketList, toPush]);
                        console.log('basketList :', basketList);
                    }
                }
            }
        }
        fetchData();
      }, [props.visitInBasket]);



    //Afficher un texte différent si le panier est vide
    var subVisit
    var sliderTitle
    var buttonConfirm
    var buttonLink

    if(props.visitInBasket === 0){
        subVisit = "Vous n'avez aucune visite dans votre sélection."
        sliderTitle = "Pourquoi ne pas commencez par celles-ci ?"
        buttonConfirm = "Rechercher des visites"
        buttonLink = "/results"
    } else {
        subVisit = "Réservez des visites exclusives de maisons historiques privées animées par des propriétaires passionés"
        sliderTitle = "Découvrez d'autres lieux"
        buttonConfirm = "Valider la commande"
        buttonLink = "/signin"
    }

    return(

    <div className="background">
    <Header/>

        <div  className="body-screen">

            <div className= "main-caption">
                
                <Row>

                <Col className= "main-caption-text" xs ={{span:24, order:2}} sm ={{span:24, order:2}} md ={{span:24, order:2}} lg ={{span:12, order:1}} xl ={{span:12, order:1}}>
                    <Title title="Votre sélection"/>
                    <Subtitle subtitle={subVisit}/>
                </Col>

                <Col className="main-caption-image" xs ={{span:24, order:1}} sm ={{span:24, order:1}} md ={{span:24, order:1}} lg ={{span:12, order:2}} xl ={{span:12, order:2}}>
                    <img src="../fan.png" className="fan" alt="fan" />  
                </Col>

                </Row>

            </div>


        {/* ---->ROW className="success-container" A MAPPER AVEC BDD<---- */}

        {/* {basketList.map((visit,i) => (

            <Row className="success-container">

                <Col xs={{span:24}}>
                <Subtitle subtitle={visit.title} />
                    <Col style={{borderTopStyle: "inset"}}>
                        <Text text={visit.info.date}/>
                        <Text text={visit.info.time} />
                    </Col>
                        <Row justify="space-between" align='middle'>
                            <Text text={`${visit.info.price} € par personne`}/>
                            <div>35€</div>
                        </Row>
                        <Text text={`2 places`} />
                </Col>
            </Row>

        ))} */}

        {/* start partie remplacée par className=fixed-menu-visit  */}
        <Row align="middle" className="menu-basket">
            <Button link={buttonLink} buttonTitle={buttonConfirm}/>
        </Row>
        
    </div>


    {/*START slider section */}

    <div style={{paddingBottom: '8vmin', paddingTop: '8vmin'}} className="paris-visits">
            
            <h3 className="sliderTitle">{sliderTitle}</h3>

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
                                <p className="card_price">À partir de 59 €</p>
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

            <Row className="menu-success" >
                <p className="menu-basket-text" >Valider la commande</p>
            </Row>
            
            {/*  end partie mobile-fixed qui remplace className=menu-visit  */}

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

function mapStateToProps(state) {
    return {visitInBasket: state.visit}
}

export default connect(mapStateToProps, null)(Basket)