import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from '../components/Header';
import Text from '../components/Text';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import SliderNow from '../components/SliderNow';


import {Row, Col} from 'antd';

function Basket(props){

    const [basketList] = useState(props.visitInBasket);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //Formater la date
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };

    //Afficher un texte différent si le panier est vide
    var subVisit;
    var sliderTitle;
    var buttonConfirm;
    var buttonLink;

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
console.log('basketList :', basketList);
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

        {basketList.map((order, i) => (

            <Row key={i} className="success-container">

                <Col xs={{span:24}}>
                <Subtitle subtitle={order.title} />
                    <Col style={{borderTopStyle: "inset"}}>
                        <Text text={new Date(order.date).toLocaleDateString('fr-FR', options)}/>
                        <Text text={order.time} />
                    </Col>
                        <Row justify="space-between" align='middle'>
                            <Text text={`${order.price} € par personne`}/>
                            <div>{`${order.price * order.quantity} €`}</div>
                        </Row>
                        <Text text={`2 places`} />
                </Col>
            </Row>

        ))}

        {/* start partie remplacée par className=fixed-menu-visit  */}
        <Row align="middle" className="menu-basket">
            <Button link={buttonLink} buttonTitle={buttonConfirm}/>
        </Row>
        
    </div>


{/*START slider section */}
    <div style={{paddingBottom: '8vmin', paddingTop: '8vmin'}} className="paris-visits">
            
            <h3 className="sliderTitle">{sliderTitle}</h3>

            <SliderNow />

                    <div style={{paddingLeft: '2vmin', marginTop: '7vmin'}}>
                        <Button link='/results' buttonTitle="Voir plus"/>
                    </div>
            </div>
{/* --------> END slider section  */}


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