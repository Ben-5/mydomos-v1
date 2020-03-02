import React from 'react';


export default function Footer() {
    return (

        <footer className= "footer-container">
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
        </footer>

        );
    }