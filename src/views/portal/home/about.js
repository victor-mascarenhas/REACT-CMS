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
                <h1>Sobre nós</h1>
                <p>Fornecemos uma completa imersão na cultura mexicana, com ambiente temático e culinária típica do país.</p>
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
color: #FFB43E;
font-weight: 600;
font-size: 20px;
margin: 1rem 0 1rem 0 ;


.description{
    padding: 20px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
}

h1{
margin-bottom: 5rem;
}

img{
    max-height: 400px;
}
`
