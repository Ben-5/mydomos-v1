import React, {useState} from 'react'
import '../index.css';
import {Col} from 'antd';
import {Link} from 'react-router-dom'

export default function Card(props) {

//ATTENTION
//Penser à encapsuler toutes les cards dans <Row className="card_row"> sur la page Results



    return (

            <Col className="card_col" sm={12} md={6} lg={4}>
                <Link className="card_link" to={`/visit/${props.id}`}>
                    <p className="card_info">{props.info}</p>
                    <img className="card_img" alt="visit cover" src={props.image}/>
                    <p className="card_title">{props.title}</p>
                 </Link>
                    <div className="card_pricerate">
                        <p className="card_price">À partir de {props.price} €</p>
                        <div className="card_div_rate">
                            <img className="card_rate" alt="note" src='/note.png'/><img className="card_rate" alt="note" src='/note.png'/><img className="card_rate" alt="note" src='/note.png'/><img className="card_rate" alt="note" src='/noteG.png'/><img className="card_rate" alt="note" src='/noteG.png'/>
                        </div>
                    </div>
               
            </Col>

    )
}
