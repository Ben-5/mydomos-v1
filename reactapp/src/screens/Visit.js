import React, {useState, useEffect} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/Button';
import Text from '../components/Text';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import {Row, Col, Avatar} from 'antd';

import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import '../App.css';

export default function Visit(props){

    const [visit, setVisit] = useState([])

//Récupérer la visite
  useEffect(() => {
    window.scrollTo(0, 0)
    const getVisit = async() => {
      const data = await fetch(`/visit/visitpage/${props.match.params._id}`)
      const body = await data.json()
      setVisit(body.visit)
    }
    getVisit()  
  },[])



return(

    <div className="background">    
        <Header/>
        
        {visit.map((data, i) => (

          <div className="body-screen">

        {/* SECTION SLIDER */}

        <div>
        
            <div className="scrolling-wrapper">
                <Col className="card_col" xs={24} md={12} lg={6}>
                    <img className="card_img" alt="visit cover" src={data.pics[0]}/>
                </Col>
                <Col className="card_col" xs={24} md={12} lg={6}>
                    <img className="card_img" alt="visit cover" src={data.pics[1]}/>
                </Col>
                <Col className="card_col" xs={24} md={12} lg={6}>
                    <img className="card_img" alt="visit cover" src={data.pics[2]}/>
                </Col> 
                <Col className="card_col" xs={24} md={12} lg={6}>
                    <img className="card_img" alt="visit cover" src={data.pics[3]}/>
                </Col>
                <Col className="card_col" xs={24} md={12} lg={6}>
                    <img className="card_img" alt="visit cover" src={data.pics[4]}/>
                </Col>
          
            </div>

        </div>

            {/* SECTION DESCRIPTION VISIT  */}

            <Row justify="space-between" className="text-visit">

                <Col >
                    <img className="card_rate" alt="note" src='/note.png'/><img className="card_rate" alt="note" src='/note.png'/><img className="card_rate" alt="note" src='/note.png'/><img className="card_rate" alt="note" src='/noteG.png'/><img className="card_rate" alt="note" src='/noteG.png'/>
                    <Title title={data.title}/>
                    <Text text={`${data.address.city}, ${data.address.country}`}/>
                </Col>

                {/* start partie remplacé par className=fixed-menu-visit  */}
                <Row align="middle" className="menu-visit">
                    <Text text={`À partir de ${data.info[0].price} €`}/>
                    <Button lien="/book" buttonTitle="Voir les dates" />
                </Row>
                
            </Row>
                {/* end partie remplacé fixed-menu-visit  */} 

            {/* SECTION TEXT VISIT  */}

            <Row gutter={[32, 32]} className="visite-lieu text-visit">
                <Col lg={{span:12}}>
                    <Subtitle subtitle="La visite" />
                    <Text text={data.desc}/></Col >
                <Col lg={{span:12}}>
                    <Subtitle subtitle="Le lieu" />
                    <Text text={data.place}/>  
                </Col>
            </Row>

            <Row gutter={[112, 112]} className="votre-hote">
                <Col lg={{span:112}}>
                    <Avatar className="avatar-hote" size={100} icon={<UserOutlined />} />
                    <Subtitle subtitle="Votre hôte"/>
                    <Text  text={data.host}/>
                </Col>     
            </Row> 
           

          </div>
        ))}
        <Footer/>

        {/*  start partie mobile-fixed qui remplace className=menu-visit  */}
        <Row align="middle" justify="space-around"  className="fixed-menu-visit">
            <Text text="A partir de 69 €" />
            <Button lien="/book" buttonTitle="Voir les dates" />
        </Row>
        {/*  end partie mobile-fixed qui remplace className=menu-visit  */}

    </div>

  );
}