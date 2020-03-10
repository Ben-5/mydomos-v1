import React, {useState, useEffect} from 'react';

import {Col} from 'antd';
import {Link} from 'react-router-dom';

import '../index.css';


export default function SliderNow() {

    const [slider, setSlider] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        const getslider = async() => {
        const response = await fetch('/visit/slidernow')
        const data = await response.json()
        setSlider(data.list)
        }
        getslider()  
    },[])


// recuperation info pour slider NOW (à la une) + Mise en place des notes

const tabSlider = slider.map((visit, i) => {
    const rateTAB = []
    if(visit.rate < 0){
        visit.rate = 0
    }
    if(visit.rate > 5){
        visit.rate = 5
    }
     for(var i=0;i<5;i++){
         var backgroundColor = {}
         if(i<visit.rate){
             backgroundColor = {backgroundColor:'#791212'}
         }
         rateTAB.push(<span style={backgroundColor}  className="card_rate"></span>)
     }
        if(visit.slider === 'now'){
            
    return ( 
        <Col key={i} className="card_col" xs={17} sm={17} md={12} lg={6}>
                <h3 className="card_info">{visit.address.city}</h3>
                <Link  className="card_link" to={`/visit/${visit._id}`}>
                    <img className="card_img" alt="visit cover" src={visit.cover}/>
                    <h4 className="card_title">{visit.title}</h4>
                </Link>
                <div className="card_pricerate">
                <div>
                    <p className="card_price">À partir de {visit.info[0].price} €</p>
                    </div>
                    <div className="card_div_rate">
                        {rateTAB} 
                    </div>
                </div>
        </Col>)
}
})
return (
    <div className="scrolling-wrapper"> 
    {tabSlider}
    </div>
)
}
