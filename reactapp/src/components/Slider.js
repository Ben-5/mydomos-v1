import React, {useState} from 'react'
import {Col} from 'antd';
import '../index.css';
import Card from './Card'

export default function Slider(props) {

    return (

        <div>
            <p className="sliderTitle">{props.sliderTitle}</p>

            <div class="scrolling-wrapper">

                <Card title="balbal"
                info="pas cher"
                image="chanel.jpg"
                visitLink="/visit"/>

                <Card title="balbal"
                info="pas cher"
                image="chanel.jpg"/>

                <Card title="balbal"
                info="pas cher"
                image="chanel.jpg"/>

                <Card title="balbal"
                info="pas cher"
                image="chanel.jpg"/>

                <Card title="balbal"
                info="pas cher"
                image="chanel.jpg"/>

                <Card title="balbal"
                info="pas cher"
                image="chanel.jpg"/>

            </div>
        </div>
    )
}
