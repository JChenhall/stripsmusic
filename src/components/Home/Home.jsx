import React from 'react';
import Logo from "../../assets/images/blueStrips.png";
import Right from "../../assets/images/rightArrow.png";
import Left from "../../assets/images/leftArrow.png";
import DownArrow from "../../assets/images/downArrow.png";
import './Home.css';
import GoogleFontLoader from 'react-google-font-loader';
import {Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <Container fluid className="homeScreenContainer">
                    <GoogleFontLoader fonts={[{font: 'Roboto',weights: [400, '400i'],},{font: 'Roboto Mono',weights: [400, 700],},]}subsets={['cyrillic-ext', 'greek']}/>
                <Row className="topRow">
                    <Col md={5}>
                        <img src={Logo} className="Logo"/>
                    </Col>
                </Row>
                <Row xs={2} className="middleRow">
                    <Col lg={true} className="leftCol">
                        <div  className="Left" style={{ fontFamily: 'Roboto Mono, monospaced' }}>
                            <Link to="/about"><img src={Left} className="ArrowLeft"/></Link>
                            <Link to="/about"><h2 className="pageLink">about us</h2></Link>
                        </div>
                    </Col>
                    <Col lg={true} className="rightCol">
                        <div className="Right" style={{ fontFamily: 'Roboto Mono, monospaced' }}>
                            <Link to="/contact"><h2 className="pageLink">contact us</h2></Link>
                            <Link to="/contact"><img src={Right} className="ArrowRight"/></Link>
                        </div>
                    </Col>
                </Row>
                <Row className="bottomRow">
                    <Col lg={true} className="bottomCol">
                        <div className="Down" style={{ fontFamily: 'Roboto Mono, monospaced' }}>
                            <Link to="/music"><h2 className="pageLink">music</h2></Link>
                            <Link to="/music"><img src={DownArrow} className="DownArrow"/></Link>
                        </div>
                    </Col>
                </Row>
                <Row className="adminRow">
                    <Link to="/adminlogin" className="admin">Admin</Link>
                </Row>
        </Container>
    )
}

export default Home
