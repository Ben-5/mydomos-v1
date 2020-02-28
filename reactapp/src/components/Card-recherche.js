import React, {useState} from 'react'
import './index.css';

function Card() {



    return (

        <div>
            <p style={info}>Paris</p>
            <img style={img}/>
            <p style={titre}>Appartement Chanel</p>
            <p style={prix}>À partir de €</p>
            <p style={notes}>Notes</p>
        </div>

    )
}

var info = {
    fontFamily: 'Montserrat'

}

var titre = {
    fontFamily: 'Montserrat'

}

var img = {
    fontFamily: 'Montserrat'

}

var prix = {
    fontFamily: 'Montserrat'

}

var notes = {
    fontFamily: 'Montserrat'

}