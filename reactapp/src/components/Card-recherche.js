import React, {useState} from 'react'
import '../index.css';

function Card() {


    return (

        <div>
            <p style={info}>PARIS</p>
            <img src='..//public/chanel.jpg'/>
            <p style={titre}>Appartement Chanel</p>
            <div style={prixnotes}>
                <p style={prix}>À partir de 30 €</p>
                <p style={notes}>Notes</p>
            </div>
        </div>

    )
}

const info = {
    fontFamily: 'Montserrat'
}

const titre = {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 18
}

const prixnotes = {
    display: 'flex',
}

const prix = {
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontSize: 16
}

const notes = {
    fontFamily: 'Montserrat'
}

export default Card;