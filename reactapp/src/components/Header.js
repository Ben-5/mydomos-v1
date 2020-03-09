import React from 'react';
import { Select, Tooltip} from 'antd';

import {Link} from 'react-router-dom'

const { Option } = Select;

export default function Header() {
  return (
        <header className="header-container">
                
                    <div className="header-logo">
                        <Link to='/home'>
                        <img src="../logo.png" className="logo" alt="logo" />
                        </Link>
                        <Link to='/home'>
                        <div className="header-title">MYDOMOS</div>
                        </Link>
                    </div>
                    <div className="header-lang-menu">
                        <div className="header-lang">
                            <Select defaultValue="fr" style={{ width: 77, marginRight:'3vmin' }} bordered={false}>
                                <Option value="fr">FR</Option>
                                <Option value="en">EN</Option>
                            </Select>
                        </div>
                        <div className="header-menu">
                            <Link to='/results'>
                            <Tooltip placement="bottomRight" title="recherche">
                            <span className="picto-background"><img src="../picto-search.png" className="picto" alt="picto" /></span>
                            </Tooltip>
                            </Link>
                            <Link to='/basket'>
                            <Tooltip placement="bottomRight" title="mon panier">
                            <span className="picto-background"><img src="../picto-bag.png" className="picto" alt="picto"/></span>
                            </Tooltip>
                            </Link>
                            <Link to='/signin'>
                            <Tooltip placement="bottomRight" title="connexion">
                            <span className="picto-background"><img src="../picto-key.png" className="picto" alt="picto"/></span>
                            </Tooltip>
                            </Link>
                        </div>
                    </div>
        </header>
    );
}
