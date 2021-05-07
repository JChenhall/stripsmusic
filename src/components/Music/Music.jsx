import React from 'react'
import './Music.css';
import GoogleFontLoader from 'react-google-font-loader';
import {Container, Row, Col } from 'react-bootstrap'

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
        <img src={backdrop} alt="backdrop" className="backdrop"/>
        <img src={defaultAlbum} alt="defaultalbum" className="displayAlbum"/>
    </Col> 
    <Col md={3} className="sideBar" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="logoBox">
            <img src={logoBlue} alt="logo" className="logoMusic"/>
        </div>
        <h3 className="searchHeader"> Search for EP here</h3>
        <div className="searchBarDiv">
        <input type="text" placeholder="  search for an EP" className="searchBar"/>
        </div>
            <div className="albumDiv">
            <img src={movingOn} alt="album list" className="albumList"/>
                <img src={whereAreYou} alt="whereAreYou" className="albumList"/>
                <img src={movingOn} alt="movingOn" className="albumList"/>
                <img src={whereAreYou} alt="whereAreYou" className="albumList"/>
            </div>
    </Col> 
</Row>
</Container>      
    )
}

export default Music
