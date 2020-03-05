import React from 'react';
import Input from '../components/Input';
import OkButton from '../components/OkButton';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';

export default function Footer() {
    return (
    <footer>
        <div className="newsletter-container">
            <div className="newsletter">
                <Title title="Soyez exclusifs !"/>
                <Subtitle subtitle="N'attendez plus ! Abbonez-vous à notre newsletter pour découvrir les nouvelles visites et offres exclusives en priorité !"/>
                <div className="newsletter-form">
                    <Input/>
                    <div>
                        <OkButton/> 
                    </div>
                </div>
            </div>
            <div className="legs-container">
                <img src="../legs.png" className="newsletter-legs" alt="legs" />  
            </div>
        </div>    
        <div className= "footer-container">
            <div className= "socials-container">
                <img src="../facebook.png" className="socials-button" alt="facebook" />
                <img src="../instagram.png" className="socials-button" alt="instagram" />
                <img src="../linkedin.png" className="socials-button" alt="flinkedin" />
            </div>
            <div className="footer-links">
                <h3 className="footer-title">À propos</h3>
                <h3 className="footer-title">Contact</h3>
                <h3 className="footer-title">CGU/CGV</h3>
            </div>
            <div className="copyright">
                <img src="../sleeping.png" className="sleep" alt="sleep" />
                <h4 className="footer-title">© MYDOMOS</h4>
            </div>
        </div>
        <div className="navigation-menu-padding"></div>
    </footer>
        );
    }