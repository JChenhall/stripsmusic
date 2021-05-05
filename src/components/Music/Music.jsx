import React from 'react'
import './Music.css';
import GoogleFontLoader from 'react-google-font-loader';
import {Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import backdrop from '../../assets/images/artcover.png';
import movingOn from '../../assets/images/movingOn.png';
import whereAreYou from '../../assets/images/whereAreYou.jpg';



const Music = () => {
    return (
<Container fluid className="musicContainer" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <GoogleFontLoader fonts={[{font: 'Roboto',weights: [400, '400i'],},{font: 'Roboto Mono',weights: [400, 700],},]}subsets={['cyrillic-ext', 'greek']}/>
<Row className="musicRow" style={{ paddingLeft: 0, paddingRight: 0 }}>
    <Col md={9} className="mainMusic" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <img src={backdrop} className="backdrop"/>
        <img src={whereAreYou} className="displayAlbum"/>
    </Col> 
    <Col md={3} className="sideBar" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div>album</div>
    </Col> 
</Row>

</Container>      
    )
}

export default Music
