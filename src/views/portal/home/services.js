import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'


const ServicesHome = () => {
    return (
        <Services>
            <Container className="py-5">
                <h2 className="text-center"> Serviços </h2>
                <Row>
                    <ItemServ>
                        <h4>koe parceiro</h4>
                    </ItemServ>
                    <ItemServ>
                        <h4> suco de abacate </h4>
                    </ItemServ>
                    <ItemServ>
                        <h4>zé otario</h4>
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
background: #dff9fb;
`

const ItemServ = styled(Col)`
background: gray;
width: 100%;
height: 300px;
display: flex;
justify-content: center;
align-items: center;
margin: 0 10px;
`
