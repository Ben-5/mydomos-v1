import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/Button';
import Text from '../components/Text';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';

import '../App.css';

export default function Visit(){

return(

  <div>
    <Header/>

      <div className="body-screen">
            <div class="container-visit">
                <Row>
                    <Row className="img-visit">
                        <Col >
                        <img  class="img-row-visit" src="/visit/1.jpg" />
                        </Col>
                    
                    </Row>
                    <Row >
                    <Col >
                        <img  class="img-column-visit" src="/visit/2.jpg" />
                        </Col>
                        <Col  >
                        <img  class="img-column-visit" src="/visit/5.jpg" />
                        </Col>
                        <Col  >
                        <img  class="img-column-visit" src="/visit/4.jpg" />
                        </Col>
                    </Row>
                </Row>

               
        <Row class="votre-visite">
            <Title title="Hotel MALLET" />
             <Button lien="/" buttonTitle="blablablablablabla" />
        </Row> 
        <Row gutter={[16, 16]} class="visite-lieu">
            <Col md={{span:12}}>
             <Subtitle subtitle="La Visite" />
            <Text text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
    Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet." />
            </Col >
            <Col md={{span:12}}>
            <Subtitle subtitle="Le lieu" />
        <Text text="Lorem ipsum dolor sit amet, consectetuerCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
    Donec pede justo,  imperdiet." />  
            </Col>
       
        </Row>

        <Row gutter={[16, 16]} class="votre-hote">
            <Col >
            <Subtitle subtitle="Votre Hôte" />
        <Text text="Lorem ipsum dolor sit amet, consectetuerCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
    Donec pede justo,  imperdiet." />
            </Col>
       
        </Row> 
        </div>
      </div>
    <Footer/>
  </div>

        );
    }