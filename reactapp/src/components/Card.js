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

    return (

        <Row className="card_row" >

            <Col className="card_col"sm={12} md={6} lg={4}>
                <p className="card_info">{ville}</p>
                <img className="card_img" alt="visit cover" src={imageSource}/>
                <p className="card_titre">{titre}</p>
                <div className="card_prixnotes">
                    <p className="card_prix">À partir de {prix} €</p>
                    <div className="card_div_notes">
                        <img className="card_notes" alt="note" src='/note.png'/><img className="card_notes" alt="note" src='/note.png'/><img className="card_notes" alt="note" src='/note.png'/><img className="card_notes" alt="note" src='/noteG.png'/><img className="card_notes" alt="note" src='/noteG.png'/>
                    </div>
                </div>
            </Col>

            <Col className="card_col"sm={12} md={6} lg={4}>
                <p className="card_info">{ville}</p>
                <img className="card_img" alt="visit cover" src={imageSource}/>
                <p className="card_titre">{titre}</p>
                <div className="card_prixnotes">
                    <p className="card_prix">À partir de {prix} €</p>
                    <div className="card_div_notes">
                        <img className="card_notes" alt="note" src='/note.png'/><img className="card_notes" alt="note" src='/note.png'/><img className="card_notes" alt="note" src='/note.png'/><img className="card_notes" alt="note" src='/noteG.png'/><img className="card_notes" alt="note" src='/noteG.png'/>
                    </div>
                </div>
            </Col>

        </Row>
    )
}
