import React, {useState, useEffect} from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Text from '../components/Text';
import Input from '../components/Input';
import Button from '../components/Button';

import {Col, List} from 'antd';
import {Link} from 'react-router-dom'

function Account(props) {

//   const [content, setContent] = useState('')
//   const [resultList, setResultList] = useState([])
  
//   //Récupérer les visites de la BDD
//     useEffect(() => {
//         const findResults = async() => {
//         const response = await fetch('/results/')
//         const data = await response.json()
//         setResultList(data) 
//         }
//         findResults()  
//     },[])

//     //Afficher par recherche
//     var getSearch = () => {
//         const findResults = async() => {
//         const response = await fetch(`/results/${props.match.params.id}`)
//         const data = await response.json()
//         setResultList(data) 
//         }

//         findResults()  
//     }

//     //Afficher champ pour modifier ses coordonnées

//     // var accountInput
//     // var updateInfo = () => {
//     //     console.log("oh yeah")
//         var accountInput = <Input placeholder="info"/>
    
//Afficher une bordure sur le portrait sélectionné    
    var border = {}
    var choosePortrait = () => {
        border = {border: 'solid 1px #791212'} 
        console.log('la bordure', border)
    }

//Afficher les réservations de l'utilisateur

const data = [
    {
        title: 'Réservation 357',
        description: 'lundi 1 janvier 2020'
    },{
        title: 'Réservation 841',
        description: 'lundi 1 janvier 2020'
    },
    ];
  
    return (

        <div  className="background">
    
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

                <div>
                    <Button buttonTitle="Modifier mes informations"/> 
                </div>

            {/* AVATAR */}
                <div className="account-subtitle">
                <Subtitle subtitle="Mon portrait"/>
                </div>

                <div className="avatar">

                    <div className="middle-caption-image">
                        <span className="background-wig" style={border}><img src="../picto-wig.png" className="picto-portrait" alt="picto-portrait" onClick={ () => choosePortrait() }/></span>  
                    </div>

                    <div className="middle-caption-image">
                        <span className="background-armor"><img src="../picto-armor.png" className="picto-portrait" alt="picto-portrait" onClick={ () => choosePortrait() }/></span>  
                    </div>

                    <div className="middle-caption-image">
                        <span className="background-medusa"><img src="../picto-medusa.png" className="picto-medusa" alt="picto-portrait" onClick={ () => choosePortrait() }/></span>  
                    </div>

                </div>

            {/* RESERVATIONS DU COMPTE */}
                <div className="account-subtitle">
                    <Subtitle subtitle="Mes réservations"/>
                </div>

                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <List.Item
                        actions={[<Button buttonTitle="Voir ma réservation" />]}>
                        <List.Item.Meta
                        title={<Text text={item.title}></Text>}
                        description={item.description}
                        />
                    </List.Item>
                    )}
                />



            {/* CHANGER MDP */}
                <div className="account-subtitle">
                    <Subtitle subtitle="Modifier mon mot de passe"/>
                </div>


            {/* SLIDER */}
            <div className="breaking-visits">
            
            <h3 className="sliderTitle">Visites à la une</h3>

            <div className="scrolling-wrapper">

                <Col className="card_col" sm={8} md={6} lg={6}>
                    <h3 className="card_info">Paris</h3>
                <Link className="card_link">
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
                <Col className="card_col" sm={8} md={6} lg={6}>
                    <h3 className="card_info">Bruxelles</h3>
                <Link className="card_link">
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
                <Col className="card_col" sm={8} md={6} lg={6}>
                    <h3 className="card_info">Paris</h3>
                <Link className="card_link">
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
                <Col className="card_col" sm={8} md={6} lg={6}>
                    <h3 className="card_info">Paris</h3>
                <Link className="card_link">
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
                <Col className="card_col" sm={8} md={6} lg={6}>
                    <h3 className="card_info">Paris</h3>
                <Link className="card_link">
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

            </div>

            </div>
            
            
            <Footer/>

      </div>
    )
  }


export default Account;