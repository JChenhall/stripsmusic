import React from 'react';
import Logo from "../../assets/images/blueStrips.png";
import Right from "../../assets/images/rightArrow.png";
import Left from "../../assets/images/leftArrow.png";
import DownArrow from "../../assets/images/downArrow.png";
import './Home.css';
import GoogleFontLoader from 'react-google-font-loader';
import {Container, Row, Col } from 'react-bootstrap'

const Home = () => {
    return (
        <Container fluid className="homeScreenContainer">
                    <GoogleFontLoader fonts={[{font: 'Roboto',weights: [400, '400i'],},{font: 'Roboto Mono',weights: [400, 700],},]}subsets={['cyrillic-ext', 'greek']}/>
                <Row className="topRow">
                    <Col md={4}>
                        <img src={Logo} className="Logo"/>
                    </Col>
                </Row>

                <Row xs={2} className="middleRow">
                    <Col lg={true} className="leftCol">
                        <div  className="Left" style={{ fontFamily: 'Roboto Mono, monospaced' }}>
                            <img src={Left} className="ArrowLeft"/>
                            <h2 className="pageLink">ABOUT US</h2>
                        </div>
                    </Col>
                    <Col lg={true} className="rightCol">
                        <div className="Right" style={{ fontFamily: 'Roboto Mono, monospaced' }}>
                            <h2 className="pageLink" >MESSAGE US</h2>
                            <img src={Right} className="ArrowRight"/>
                        </div>
                    </Col>
                </Row>
                <Row className="bottomRow">
                    <Col lg={true} className="bottomCol">
                        <div className="Down">
                            <h2 className="pageLink" style={{ fontFamily: 'Roboto Mono, monospaced' }}>MUSIC</h2>
                            <img src={DownArrow} className="DownArrow"/>
                        </div>
                    </Col>
                </Row>
                <Row className="adminRow">
                    <p className="admin">Admin</p>
                </Row>
        </Container>
    )
}

export default Home
