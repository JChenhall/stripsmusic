import React from 'react'
import './Music.css';
import GoogleFontLoader from 'react-google-font-loader';
import {Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import backdrop from '../../assets/images/artcover.png';
import movingOn from '../../assets/images/movingOn.png';
import whereAreYou from '../../assets/images/whereAreYou.jpg';
import defaultAlbum from '../../assets/images/defaultAlbum.png';
import logoBlue from '../../assets/images/blueStrips.png'

const Music = () => {
    return (
<Container fluid className="musicContainer" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <GoogleFontLoader fonts={[{font: 'Roboto',weights: [400, '400i'],},{font: 'Roboto Mono',weights: [400, 700],},]}subsets={['cyrillic-ext', 'greek']}/>
<Row className="musicRow" style={{ paddingLeft: 0, paddingRight: 0 }}>
    <Col md={9} className="mainMusic" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <img src={backdrop} className="backdrop"/>
        <img src={defaultAlbum} className="displayAlbum"/>
    </Col> 
    <Col md={3} className="sideBar" style={{ paddingLeft: 0, paddingRight: 0 }}>
        
    <img src={logoBlue} className="logoMusic"/>

        <h1> Search for EP here</h1>

        <div className="albumDiv">
        <img src={movingOn} className="albumList"/>
            <img src={whereAreYou} className="albumList"/>
            <img src={movingOn} className="albumList"/>
            <img src={whereAreYou} className="albumList"/>
        </div>
    </Col> 
</Row>

</Container>      
    )
}

export default Music
