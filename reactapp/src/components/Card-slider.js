import React, {useState} from 'react'
import '../index.css';
import { Row, Col} from 'antd';


export default function CardSlider({}) {

//Afficher image visite
var imageSource = require=('/chanel.jpg')

    return (

        <div style={card_row}>

            <Col style={card_col}>
                <p style={card_info}>PARIS</p>
                <img style={card_img} alt="visit cover" src={imageSource}/>
                <p style={card_titre}>Appartement Chanel</p>
                <div style={card_prixnotes}>
                    <p style={card_prix}>À partir de 30 €</p>
                    <div style={card_div_notes}>
                    <img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/noteG.png'/>
                    </div>
                </div>
            </Col>

            <Col style={card_col}>
                <p style={card_info}>PARIS</p>
                <img style={card_img} alt="visit cover" src={imageSource}/>
                <p style={card_titre}>Appartement Chanel</p>
                <div style={card_prixnotes}>
                    <p style={card_prix}>À partir de 30 €</p>
                    <div style={card_div_notes}>
                    <img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/note.png'/>
                    </div>
                </div>
            </Col>

            <Col style={card_col}>
                <p style={card_info}>PARIS</p>
                <img style={card_img} alt="visit cover" src={imageSource}/>
                <p style={card_titre}>Appartement Chanel</p>
                <div style={card_prixnotes}>
                    <p style={card_prix}>À partir de 30 €</p>
                    <div style={card_div_notes}>
                    <img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/note.png'/>
                    </div>
                </div>
            </Col>

            <Col style={card_col}>
                <p style={card_info}>PARIS</p>
                <img style={card_img} alt="visit cover" src={imageSource}/>
                <p style={card_titre}>Appartement Chanel</p>
                <div style={card_prixnotes}>
                    <p style={card_prix}>À partir de 30 €</p>
                    <div style={card_div_notes}>
                    <img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/noteG.png'/><img style={card_notes} alt="note" src='/noteG.png'/><img style={card_notes} alt="note" src='/noteG.png'/>
                    </div>
                </div>
            </Col>

            <Col style={card_col}>
                <p style={card_info}>PARIS</p>
                <img style={card_img} alt="visit cover" src={imageSource}/>
                <p style={card_titre}>Appartement Chanel</p>
                <div style={card_prixnotes}>
                    <p style={card_prix}>À partir de 30 €</p>
                    <div style={card_div_notes}>
                    <img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/note.png'/>
                    </div>
                </div>
            </Col>

        </div>
    )
}

// START CARD

const card_row = {
    display :'flex',
    overflow: 'hidden',
    scrollbarWidth: 'none'
}

const card_col = {
    margin: '10px',
}

const card_info = {
    fontFamily: 'Montserrat'
}

const card_titre = {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 18
}

const card_prixnotes = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

const card_prix = {
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontSize: 16
}

const card_img = {
    width:'300px',
    height:'300px'
}

const card_div_notes = {
    display: 'flex'
}

const card_notes = {
    width: '15px',
    height:'15px',
    marginLeft: '3px'
}

// END CARD