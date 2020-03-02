import React from 'react';

export default function Navigation() {
  return (
        <div className="navigation-menu">

                <span className="nav-button"><img src="../picto-search.png" className="nav-picto" alt="picto" /><h6 className="picto-title">explorer</h6></span>
               
                <span className="nav-button"><img src="../picto-bag.png" className="nav-picto" alt="picto"/><h6 className="picto-title">mon panier</h6></span>
             
                <span className="nav-button"><img src="../picto-key.png" className="nav-picto" alt="picto"/><h6 className="picto-title">connexion</h6></span>
            
        </div>
    );
}