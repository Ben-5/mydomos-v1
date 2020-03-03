import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Slider from '../components/Slider';

function App() {
    return (
      <div className="background">
        <Header/>
        <div className= "body-screen">
            <div className= "main-caption">
                <div className= "main-caption-text">
                <Title title="Voulez-vous visiter ?"/>
                <Subtitle subtitle="Résérvéz des visites exclusives de maison historiques privées animées par des propriétaires passionés"/>
                </div>
                <div className="main-caption-image">
                    <img src="../hand.png" className="hand" alt="hand" />  
                </div>
            </div>
            <div className="breaking-visits">
                <Slider sliderTitle="Visites à la une"/>
            </div>
        </div>

        {/* <Footer/> */}
      </div>
    )
  }

export default App;