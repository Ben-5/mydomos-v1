import React, {useState, useEffect} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/Button';
import Text from '../components/Text';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';

import {Row, Col, Avatar, Tag} from 'antd';
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
  
  //map de toutes les infos via BDD
const visitSelected = visit.map((data, i) => {    
    const dataOptList = data.info[0].opt;
    let optList = dataOptList.map((opt, j) => (
             <Text text={opt} key={j} />    
    )
    )
    console.log(optList)

    return(
<div key={i} className="body-screen">

{/* SECTION SLIDER */}

<div >

    <div className="scrolling-visit">
        <Col className="visit_col" >
            <img className="visit_img" alt="visit cover" src={data.pics[0]}/>
        </Col>
        <Col className="visit_col" >
            <img className="visit_img" alt="visit cover" src={data.pics[1]}/>
        </Col>
        <Col className="visit_col" >
            <img className="visit_img" alt="visit cover" src={data.pics[2]}/>
        </Col> 
        <Col className="visit_col" >
            <img className="visit_img" alt="visit cover" src={data.pics[3]}/>
        </Col>
        <Col className="visit_col" >
            <img className="visit_img" alt="visit cover" src={data.pics[4]}/>
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
    
    <Row className="text-visit" >
        <Col xs ={{span:12}} sm ={{span:12}} md ={{span:12}} lg ={{span:12}} >
          <Subtitle subtitle="Durée" />
          <Text text={data.info[0].duration} />
        </Col>
        <Col xs ={{span:12}} sm ={{span:12}} md ={{span:12}} lg ={{span:12}}>
          <Subtitle subtitle="Taille du groupe" /> 
          <Text text={`Jusqu'à ${data.info[0].maxStock} personnes`} /> 
        </Col>
    </Row> 
    <Row className="text-visit">
       <Col xs ={{span:12}} sm ={{span:12}} md ={{span:12}} lg ={{span:12}}>
         <Subtitle subtitle=" Inclu" /> 
         {optList}
       </Col>
       <Col xs ={{span:12}} sm ={{span:12}} md ={{span:12}} lg ={{span:12}}>
         <Subtitle subtitle="Language" />
         <Text text={data.info[0].lang} />
       </Col>
    </Row>
    
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

                  {/* SECTION TEXT VISIT  */}
    <Row gutter={[32, 32]} className="text-visit">
        <Col lg={{span:12}}>
            <Subtitle subtitle="La visite" />
            <Text text={data.desc}/></Col >
        <Col lg={{span:12}}>
            <Subtitle subtitle="Le lieu" />
            <Text text={data.place}/>  
        </Col>
    </Row>

    <Row gutter={[32, 32]} className="votre-hote">
        <Col lg={{span:112}}>
            <Avatar className="avatar-hote" size={100} icon={<UserOutlined />} />
            <Subtitle subtitle="Votre hôte"/>
            <Text  text={data.host}/>
        </Col>     
    </Row> 
  </div>
)
}) 


return(
 
    <div className="background">    
        <Header/>
        {visitSelected}
        
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