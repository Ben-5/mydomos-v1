import React from 'react';
import { Select, Tooltip } from 'antd';

const { Option } = Select;

export default function Header() {
  return (
        <header className="header-container">
            <img src="../logo.png" className="header-logo" alt="logo" />
            <h1 className="header-title">MYDOMOS</h1>
            <Select className="header-lang" defaultValue="fr" style={{ width: 66, marginRight:'4vmin' }} bordered={false}>
                <Option value="fr">FR</Option>
                <Option value="en">EN</Option>
            </Select>
            <div className="header-menu">
                <Tooltip title="recherche">
                <span className="picto-background"><img src="../picto-search.png" className="picto" alt="picto" /></span>
                </Tooltip>
                <Tooltip title="mon panier">
                <span className="picto-background"><img src="../picto-bag.png" className="picto" alt="picto"/></span>
                </Tooltip>
                <Tooltip title="connexion">
                <span className="picto-background"><img src="../picto-key.png" className="picto" alt="picto"/></span>
                </Tooltip>
            </div>
        </header>
    );
}
