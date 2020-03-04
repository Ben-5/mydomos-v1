import React, {useState, useEffect} from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Text from '../components/Text';
import Input from '../components/Input';
import Button from '../components/Button';

import {Col} from 'antd';
import {Link} from 'react-router-dom'

function Account(props) {

  const [content, setContent] = useState('')
  const [resultList, setResultList] = useState([])
  
  //Récupérer les visites de la BDD
    useEffect(() => {
        const findResults = async() => {
        const response = await fetch('/results/')
        const data = await response.json()
        setResultList(data) 
        }
        findResults()  
    },[])

    //Afficher par recherche
    var getSearch = () => {
        const findResults = async() => {
        const response = await fetch(`/results/${props.match.params.id}`)
        const data = await response.json()
        setResultList(data) 
        }

        findResults()  
    }

    //Afficher champ pour modifier ses coordonnées

    // var accountInput
    // var updateInfo = () => {
    //     console.log("oh yeah")
        var accountInput = <Input placeholder="info"/>
    
    
    
    
  
    return (

        <div>
    
            <Header/>

            <div className="body-screen">


                <div style={{marginLeft: '2vmin', marginBottom: '4vmin'}}>
                    <Title title="Mon compte"/>

             {/* COORDONNEES */}
                    <Subtitle subtitle="Mes informations"/>
                </div>

                <div className="grid-container">

                    <div className="grid-item account-info"><Text text="Nom"/></div>
                    <div className="grid-item "><Text text="Lala"/></div>

                    <div className="grid-item account-info"><Text text="Prénom"/></div>
                    <div className="grid-item"><Text text="Soso"/></div>

                    <div className="grid-item account-info"><Text text="Email"/></div>
                    <div className="grid-item"><Text text="soso@soso.fr"/></div>
                   
                    <div className="grid-item account-info"><Text text="Date de naissance"/></div>
                    <div className="grid-item"><Text text="1 janvier 2000"/></div>

                    <div className="grid-item account-info"><Text text="Adresse"/></div>
                    <div className="grid-item"><Text text="151 rue Saint Denis"/></div>

                    <div className="grid-item account-info"><Text text="Code postal"/></div>
                    <div className="grid-item"><Text text="75002"/></div>

                    <div className="grid-item account-info"><Text text="Ville"/></div>
                    <div className="grid-item"><Text text="Paris"/></div>

                    <div className="grid-item account-info"><Text text="Pays"/></div>
                    <div className="grid-item"><Text text="France"/></div>
                    
                </div> 

                <div className="accountUpdateInfo">
                    <Button  buttonTitle="Modifier mes informations"/> 
                </div>

            {/* AVATAR */}
                <Subtitle subtitle="Mon portrait"/>


            {/* RESERVATIONS DU COMPTE */}
                <Subtitle subtitle="Mes réservations"/>



            {/* CHANGER MDP */}
                <Subtitle subtitle="Modifier mon mot de passe"/>


            {/* SLIDER */}
                <div>

                    <p className="sliderTitle">Découvrez d'autres lieux d'exception</p>

                    <div className="scrolling-wrapper">

                        <Col className="card_col" sm={8} md={6} lg={4}>
                            <p className="card_info">{props.info}</p>
                            <Link className="card_link" to={`/visit/${props.id}`}>
                                <img className="card_img" alt="visit cover" src={props.image}/>
                                <p className="card_title">{props.title}</p>
                            </Link>
                            <div className="card_pricerate">
                                <div>
                                <p className="card_price">À partir de {props.price} €</p>
                                </div>
                                <div className="card_div_rate">
                                    <img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/note.png'/><img className="slider_rate" alt="note" src='/noteG.png'/><img className="slider_rate" alt="note" src='/noteG.png'/>
                                </div>
                            </div>
                        </Col>

                    </div>

                </div>

            </div>
            
            <Footer/>

      </div>
    )
  }


export default Account;