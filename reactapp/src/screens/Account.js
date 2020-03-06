import React, {useState} from 'react';

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

  const [wig, setWig] = useState(true)
  const [armor, setArmor] = useState(false)
  const [medusa, setMedusa] = useState(false)
  
//   //Récupérer les infos de l'utilisateur depuis la BDD

//     useEffect(() => {
//         const findResults = async() => {
//         const response = await fetch('/results/')
//         const data = await response.json()
//         setResultList(data) 
//         }
//         findResults()  
//     },[])

    
//Sélectionner avatar

    var chooseWig = () => {
        setWig(true)
        setArmor(false)
        setMedusa(false)
    }

    var chooseArmor = () => {
        setWig(false)
        setArmor(true)
        setMedusa(false)
    }

    var chooseMedusa = () => {
        setWig(false)
        setArmor(false)
        setMedusa(true)
    }

    if(wig) {
       var borderW = {border: 'solid 2px #791212'}
       var borderA = {border: 'none'} 
       var borderM = {border: 'none'} 
    } else if (armor) {
         borderA = {border: 'solid 2px #791212'}
         borderW = {border: 'none'} 
         borderM = {border: 'none'} 
    } else if (medusa) {
         borderM = {border: 'solid 2px #791212'}
         borderW = {border: 'none'} 
         borderA = {border: 'none'} 
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

            <div style={{marginLeft: '2vmin', marginTop: '4vmin'}}>

                <Title title="Mon compte"/>

            </div>

            {/* COORDONNEES */}

            <div className="my-account-main">

            <div className="my-account">

                <Subtitle subtitle="Mes informations"/>
                
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
                    <Button buttonTitle="Modifier mes informations"/> 

                </div>

                {/* AVATAR */}

                <div className="my-avatar">
                    
                    <Subtitle subtitle="Mon portrait"/>

                    <div className="avatar">

                    <div className="middle-caption-image">
                        <span className="background-wig" style={borderW}><img src="../wig.png" className="picto-portrait" alt="picto-portrait" onClick={() => chooseWig() }/></span>  
                    </div>

                    <div className="middle-caption-image">
                        <span className="background-armor" style={borderA}><img src="../armor.png" className="picto-portrait" alt="picto-portrait" onClick={() => chooseArmor() }/></span>  
                    </div>

                    <div className="middle-caption-image">
                        <span className="background-medusa" style={borderM}><img src="../medusa.png" className="picto-medusa" alt="picto-portrait" onClick={() => chooseMedusa() }/></span>  
                    </div>

                    </div>

                </div>

                </div>
                
                {/* CHANGER MDP */}


                <div className="my-password">

                    <Subtitle subtitle="Modifier mon mot de passe"/>

                <div className="grid-container">

                    <div className="grid-item account-info"><Text text="Mot de passe actuel"/></div>
                    <div className="grid-item "><Input placeholder="Mot de passe actuel" type="password"/></div>

                    <div className="grid-item account-info"><Text text="Nouveau mot de passe"/></div>
                    <div className="grid-item"><Input placeholder="Nouveau mot de passe" type="password"/></div>

                    <div className="grid-item account-info"><Text text="Confirmez le nouveau mot de passe"/></div>
                    <div className="grid-item"><Input placeholder="Confirmez le nouveau mot de passe" type="password"/></div>
                </div>

                <Button buttonTitle="Valider mon nouveau mot de passe"/>

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
                        actions={[<Button buttonTitle="Voir"/>]}>
                        <List.Item.Meta
                        title={<Text text={item.title}></Text>}
                        description={item.description}
                        />
                    </List.Item>
                    )}
                />



            

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