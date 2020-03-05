import React from 'react';
import { Select, Tooltip, Col, Row } from 'antd';

import {Link} from 'react-router-dom'

const { Option } = Select;

export default function Header() {
  return (
        <header className="header-container">
            <Row>
            <Col className="header-logo" xs={12} sm={12} md={6} lg={6} xl={6}>
            <Link to='/home'>
            <img src="../logo.png" className="logo" alt="logo" />
            </Link>
            <div className="header-title">MYDOMOS</div>
            </Col>
            <Col className="header-lang" xs={12} sm={12} md={12} lg={12} xl={12}>
            <Select className="header-lang" defaultValue="fr" style={{ width: 66, marginRight:'4vmin' }} bordered={false}>
                <Option value="fr">FR</Option>
                <Option value="en">EN</Option>
            </Select>
            </Col>
            <Col className="header-menu" md={5} lg={6} xl={6}>
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
            </Col>
            </Row>
            
        </header>
    );
}
