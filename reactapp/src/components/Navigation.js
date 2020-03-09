import React from 'react';
import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
        <div className="navigation-menu">
                <Link to='/results'>
                  <span className="nav-button"><img src="../picto-search.png" className="nav-picto" alt="picto" /><h6 className="picto-title">explorer</h6></span>
                </Link>
                <Link to='/basket'>
                  <span className="nav-button"><img src="../picto-bag.png" className="nav-picto" alt="picto"/><h6 className="picto-title">mon panier</h6></span>
                </Link>
                <Link to='/signin'>
                  <span className="nav-button"><img src="../picto-key.png" className="nav-picto" alt="picto"/><h6 className="picto-title">connexion</h6></span>
                </Link>
        </div>
    );
}