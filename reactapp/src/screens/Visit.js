import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/Button';
import Text from '../components/Text';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';

import {Row, Col, Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Table } from 'antd';

import 'antd/dist/antd.css';

import '../App.css';

export default function Visit(prop){

    const columns = [
        {
          title: 'Durée',
          dataIndex: 'duree',
          key: 'duree',
          render: text => <span>{text}</span>,
        },
        {
          title: 'Inclu',
          dataIndex: 'inclu',
          key: 'inclu',
        },
        {
          title: 'Taille du groupe',
          dataIndex: 'groupe',
          key: 'groupe',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <span>
               {tags.map(tag => {
                 let url = tag.length > 2 ? '../breakfirst.png' : '../drink.png';
                 if (tag === 'Apero') {
                   url = '../drink.png';
                 }
                 return (
                     <Avatar className="background-wig"  src={url} key={tag}>{tag.toUpperCase()}</Avatar>
                 );
               })}
             </span> 
          ),
        },
      ];
      
      const data = [
        {
          key: '1',
          duree: '1h',
          inclu: "Apero",
          groupe: 'New York No. 1 Lake Park',
          tags: ['Apero', 'Collation'],
        },
      ];

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
                <Col>
                    <Title title="Hotel MALLET" />
                    <Text text="Paris, France" />
                    <img className="card_rate" alt="note" src='/note.png'/><img className="card_rate" alt="note" src='/note.png'/><img className="card_rate" alt="note" src='/note.png'/><img className="card_rate" alt="note" src='/noteG.png'/><img className="card_rate" alt="note" src='/noteG.png'/>
                </Col>

                {/* start partie remplacé par className=fixed-menu-visit  */}
                <Col align="middle" className="menu-visit">
                    <Text  text="A partir de 69 €" />
                    <Button lien="/book" buttonTitle="Voir les dates" />
                </Col>
            </Row>
            <Row className="text-visit" >
            <Col>
           
            <Text text="Apéro" />
            </Col>

            <Col>
            <Text text="Apéro" />
            <Text text="Apéro" />
            </Col>
            </Row>
            <Table columns={columns} dataSource={data} />

                <Row style={{justifyContent:"space-evenly"}} className="text-visit">
                    <Col align="middle" >
                        <Avatar className="background-wig"  src="../drink.png" /> <Text text="Apéro" />
                    </Col>
                    <Col align="middle">
                        <Avatar className="background-wig"  src="../breakfast.png" /> <Text text="Colation" />
                    </Col>
                </Row>

               {/* end partie remplacé fixed-menu-visit  */} 


                          {/* SECTION TEXT VISIT  */}
            <Row gutter={[32, 32]} className="text-visit">
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