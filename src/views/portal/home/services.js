import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import {SiIfood} from 'react-icons/si'
import { GiTacos } from 'react-icons/gi'
import { ImHeart } from 'react-icons/im'


const ServicesHome = () => {
    return (
        <Services>
            <Container className="py-5">
                <h2 className="text-center"> Sobre nossos serviços </h2>
                <Row>
                    <ItemServ>
                        <Icons>
                        <SiIfood/>
                        </Icons>
                        <p>Delivery via aplicativo</p>
                    </ItemServ>
                    <ItemServ>
                        <Icons>
                        <GiTacos/>
                        </Icons>
                        <p>Receitas originais</p>
                    </ItemServ>
                    <ItemServ>
                        <Icons>
                        <ImHeart/>
                        </Icons>
                        <p>Atendimento caloroso</p>
                    </ItemServ>
                </Row>
            </Container>
        </Services>
    )
}

export default ServicesHome

const Services = styled.div`
height: 400px;
width: 100%;
color: #FFB43E;

h2{
    padding-bottom: 2rem;
}
`

const ItemServ = styled(Col)`
width: 100%;
height: 300px;
display: flex;
justify-content: center;
align-items: center;
margin: 0 10px;
border-style: solid;
p{
    margin-top: 70%; 
    font-weight: 600;
}
`

const Icons = styled.div`
font-size: 110px;
position: absolute;
margin-bottom: 20%;
`
