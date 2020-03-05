import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/Button';
import Text from '../components/Text';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import {Row, Col, Avatar} from 'antd';
// import {Link} from 'react-router-dom'

import { UserOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';

import '../App.css';

export default function Visit(){

return(

<div className="background">    
        <Header/>
          <div className="body-screen">

                        {/* SECTION SLIDER */}
<div>
    <p className="sliderTitle">-> à inserer BD props.id</p>
        <div className="scrolling-wrapper">
            <Col className="card_col" xs={24} md={12} lg={6}>
                <img className="card_img" alt="visit cover" src="/visit/1.jpg"/>
            </Col>
            <Col className="card_col" xs={24} md={12} lg={6}>
                <img className="card_img" alt="visit cover" src="/visit/2.jpg"/>
            </Col>
            <Col className="card_col" xs={24} md={12} lg={6}>
                <img className="card_img" alt="visit cover" src="/visit/5.jpg"/>
            </Col> 
            <Col className="card_col" xs={24} md={12} lg={6}>
                <img className="card_img" alt="visit cover" src="/visit/1.jpg"/>
            </Col>
            <Col className="card_col" xs={24} md={12} lg={6}>
                <img className="card_img" alt="visit cover" src="/visit/2.jpg"/>
            </Col>
            <Col className="card_col" xs={24} md={12} lg={6}>
                <img className="card_img" alt="visit cover" src="/visit/5.jpg"/>
            </Col> 
        </div>

</div>
                          {/* SECTION DESCRIPTION VISIT  */}

            <Row justify="space-between" className="text-visit">
                <Col >
                    <img className="card_rate" alt="note" src='/note.png'/><img className="card_rate" alt="note" src='/note.png'/><img className="card_rate" alt="note" src='/note.png'/><img className="card_rate" alt="note" src='/noteG.png'/><img className="card_rate" alt="note" src='/noteG.png'/>
                    <Title title="Hotel MALLET" />
                    <Text text="Paris, France" />
                </Col>

                {/* start partie remplacé par className=fixed-menu-visit  */}
                <Row align="middle" className="menu-visit">
                    <Text  text="A partir de 69 €" />
                    <Button lien="/book" buttonTitle="Voir les dates" />
                </Row>
                
            </Row>
               {/* end partie remplacé fixed-menu-visit  */} 

                          {/* SECTION TEXT VISIT  */}

            <Row gutter={[32, 32]} className="visite-lieu text-visit">
                <Col lg={{span:12}}>
                    <Subtitle subtitle="La Visite" />
                    <Text text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet." />
                </Col >
                <Col lg={{span:12}}>
                    <Subtitle subtitle="Le lieu" />
                    <Text text="Lorem ipsum dolor sit amet, consectetuerCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                            Donec pede justo,  imperdiet." />  
                </Col>
            </Row>

            <Row gutter={[112, 112]} className="votre-hote">
                <Col lg={{span:112}}>
                    <Avatar className="avatar-hote" size={100} icon={<UserOutlined />} />
                    <Subtitle subtitle="Votre Hôte" />
                    <Text  text="Lorem ipsum dolor sit amet, consectetuerCum sociis natoque penatibus et 
                                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa 
                                quis enim. Donec pede justo,  imperdiet." />
                </Col>     
            </Row> 

          </div>

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