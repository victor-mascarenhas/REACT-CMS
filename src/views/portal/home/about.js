import React from 'react'
import styled from 'styled-components'
import {Row, Col, Container} from 'react-bootstrap'
import AboutImg from '../../../assets/images/papa-felipe-s-mexican.jpg'




const AboutHome = () => {
    return (
        <About>
            <Container>
            <Row>
                <Col>
                <img src={AboutImg} alt=""/>
                </Col>
                <Col>
                <div className="description"> 
                <h1>About description</h1>
                <p> lorem imdfasiufhuasifhasifhuaifhfasuifhsisfuhauhfaufhsuifaiu </p>
                </div>
                </Col>
            </Row>
            </Container>
        </About>
    )
}

export default AboutHome

const About = styled.div`
min-height: 370px;
width: 100%;
background: #ffbe76;
color: #eee;

.description{
    padding: 20px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
}

img{
    max-height: 400px;
}
`
