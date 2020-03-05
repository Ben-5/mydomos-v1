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

                        {/* SECTION GALLERY A REVOIR DANS LE DETAIL */}
<div>

<p className="sliderTitle">votre visite</p>
<div className="scrolling-wrapper">
    <Col className="card_col" sm={8} md={6} lg={4}>
            <img className="card_img" alt="visit cover" src="/visit/2.jpg"/>
        <div className="card_pricerate">
        </div>
    </Col>

</div>

</div>

            {/* <Row gutter={[16, 16]} className="img-visit">
                <Col xs={{span:24}} md={{span:18}} lg={{span:16}} xl={{span:10}}>
                    <img  className="img-row-visit" src="/visit/1.jpg" />
                </Col>
                <Col xs={{span:24}} md={{span:18}}  lg={{span:16}} xl={{span:14}}>
                    <img  className="img-column-visit" src="/visit/2.jpg" />
                    <img  className="img-column-visit" src="/visit/5.jpg" />
                    <img  className="img-column-visit" src="/visit/4.jpg" />
                    <img  className="img-column-visit" src="/visit/3.jpg" />
                </Col>
            </Row> */}

                          {/* SECTION DESCRIPTION VISIT  */}

            <Row justify="space-between" className="desc-visit">
                <Col >
                    <img className="card_rate" alt="note" src='/note.png'/><img className="card_rate" alt="note" src='/note.png'/><img className="card_rate" alt="note" src='/note.png'/><img className="card_rate" alt="note" src='/noteG.png'/><img className="card_rate" alt="note" src='/noteG.png'/>
                    <Title title="Hotel MALLET" />
                    <Text text="Paris, France" />
                </Col>

                {/* start partie remplacé par className=fixed-menu-visit  */}
                <Row className="menu-visit">
                    <Text  text="A partir de 49 €" />
                    <Button lien="/book" buttonTitle="Voir les dates" />
                </Row>
                
            </Row>
               {/* end partie remplacé fixed-menu-visit  */} 

                          {/* SECTION TEXT VISIT  */}

            <Row gutter={[32, 32]} className="visite-lieu">
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

            <Row gutter={[16, 16]} className="votre-hote">
                <Col lg={{span:16}}>
                    <Avatar size={64} icon={<UserOutlined />} />
                    <Subtitle subtitle="Votre Hôte" />
                    <Text text="Lorem ipsum dolor sit amet, consectetuerCum sociis natoque penatibus et 
                                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa 
                                quis enim. Donec pede justo,  imperdiet." />
                </Col>     
            </Row> 

          </div>

        <Footer/>

                      {/*  start partie mobile-fixed qui remplace className=menu-visit  */}
    <Row align="middle" justify="space-around"  className="fixed-menu-visit">
        <Text text="A partir de 49 €" />
        <Button lien="/book" buttonTitle="Voir les dates" />
    </Row>
                     {/*  end partie mobile-fixed qui remplace className=menu-visit  */}
</div>
        );
    }