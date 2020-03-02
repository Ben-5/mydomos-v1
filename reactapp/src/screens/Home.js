import React from "react"
import Slider from '../components/Slider'
import Card from '../components/Card'
import Header from '../components/Header'

export default function Home() {

    return (
    
        <div>

        <Slider
        info="Paris"
        sliderTitle="Visites à la une"
        title="Appartement Klein"
        image="chanel.jpg"
        />

            <Card title="Appartement Chanel"
                info="pas cher"
                image="klein.jpg"
                visitLink="/visit"/>



<Card title="Appartement"
                info="pas cher"
                image="klein.jpg"
                visitLink="/visit"/>
                <Card title="Appartement"
                info="pas cher"
                image="klein.jpg"
                visitLink="/visit"/>
                <Card title="Appartement"
                info="pas cher"
                image="klein.jpg"
                visitLink="/visit"/>
                <Card title="Appartement"
                info="pas cher"
                image="klein.jpg"
                visitLink="/visit"/>

        </div>
    )
}