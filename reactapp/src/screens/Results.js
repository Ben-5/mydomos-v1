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
        const findResults = async() => {
        const response = await fetch('/results/')
        const data = await response.json()
        setResultList(data) 
        }
        findResults()  
    },[])

    //Afficher par recherche
    var getSearch = () => {
        const findResults = async() => {
        const response = await fetch(`/results/${props.match.params.id}`)
        const data = await response.json()
        setResultList(data) 
        }

        findResults()  
    }
    
  
    return (

        <div>
    
            <Header/>

            <div className="body-screen">


                <div style={{marginLeft: '2vmin'}}>
                    <Title title="Trouvez des visites"/>
                </div>

                <div style={{display:'flex', marginLeft: '6vmin', alignItems:'center', marginTop:'4vmin', marginBottom:'4vmin'}}>

                    <div style={{width:'60vw'}}>
                        <Input 
                            placeholder="essayer 'Paris'"
                            type="text"
                            onChange={e=>setContent(e)}
                            value={content}
                            />
                    </div>
                    <div style={{width:'75px', marginLeft: '3vmin'}}>
                        <Button 
                        buttonTitle="Valider"
                        onClick={()=> {getSearch()}}/>
                    </div>

                </div>
            

                <Row className="card_row">

                {resultList.map((visit, i) => (
                    <Card
                        key={i}
                        info={visit.info}
                        image={visit.image}
                        title={visit.title}
                        price={visit.price}/>
                ))}
                    
                </Row>

                

            </div>
            
            <Footer/>

      </div>
    )
  }


export default Results;