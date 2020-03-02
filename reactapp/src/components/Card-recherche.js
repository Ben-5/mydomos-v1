import React, {useState} from 'react'
import '../index.css';
import { Row, Col} from 'antd';
import 'antd/dist/antd.css'


export default function Card({}) {

//Infos visite

var ville = 'PARIS'
var imageSource = require=('/chanel.jpg')
var titre = 'Appartement Chanel'
var prix = '30'


// var displayVisit = () => {
//     redirect  
// }

    return (

        <Row style={card_row}>

            <Col style={card_col} sm={12} md={6} lg={4}>
                <p style={card_info}>{ville}</p>
                <img style={card_img} alt="visit cover" src={imageSource}/>
                <p style={card_titre}>{titre}</p>
                <div style={card_prixnotes}>
                    <p style={card_prix}>À partir de {prix} €</p>
                    <div style={card_div_notes}>
                    <img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/note.png'/><img style={card_notes} alt="note" src='/noteG.png'/>
                    </div>
                </div>
            </Col>

        </Row>
    )
}

// START CARD

const card_row = {
    display :'flex'
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
    width:'100%'
}

const card_div_notes = {
    display: 'flex'
}

const card_notes = {
    width: '12px',
    height:'12px',
    marginLeft: '3px'
}

// END CARD