import React, {useState, useEffect} from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

import {Row} from 'antd'

function Results(props) {

  const [content, setContent] = useState('')
  const [resultList, setResultList] = useState([])
  
  //Récupérer les visites de la BDD
    useEffect(() => {
        window.scrollTo(0, 0)
        const getlist = async() => {
        const response = await fetch('/visit/results')
        const data = await response.json()
        setResultList(data.list) 
        }
        getlist()  
    },[])


    return (

        <div className="background">
    
            <Header/>

            <div className="body-screen">


                <div style={{marginLeft: '2vmin', marginTop:'4vmin'}}>
                    <Title title="Trouvez des visites"/>
                </div>

                <div style={{display:'flex', marginLeft: '2vmin', marginRight: '2vmin', alignItems:'center', marginTop:'6vmin', marginBottom:'10vmin'}}>

                    <div style={{width:'100vw'}}>
                        <Input 
                            placeholder="essayer 'Paris'"
                            type="text"
                            onChange={e=>setContent(e)}
                            value={content}
                            />
                    </div>
                    <div style={{ marginLeft: '10vmin'}}>
                        <Button 
                        buttonTitle="Valider"
                        />
                    </div>

                </div>
            
                
                    <Row className="card_row">

                    {resultList.map((visit, i) => (
                        <Card
                            key={i}
                            id={visit._id}
                            info={visit.address.city}
                            image={visit.cover}
                            title={visit.title}
                            price={visit.info[0].price}/>
                     ))}
                    
                    </Row>

            </div>
            
            <Footer/>

      </div>
    )
  }


export default Results;