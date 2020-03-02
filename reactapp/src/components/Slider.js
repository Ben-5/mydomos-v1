import React from 'react'
import '../index.css';
import {Col} from 'antd';
import {Link} from 'react-router-dom'

export default function Slider(props) {

//ATTENTION
//Penser à encapsuler les cards du slider dans <div className="scrolling-wrapper"></div>


    return (

        <div>

            <p className="sliderTitle">{props.sliderTitle}</p>

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
    )
}
