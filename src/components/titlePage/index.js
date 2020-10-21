import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

export default ({ title, sub }) => {
    return (
        <ContainerTitle>
            <Container>
            <Title> {title} </Title>
            <Sub> {sub} </Sub>
            </Container>
        </ContainerTitle>
    )
}

const ContainerTitle = styled.div`
background: #6BB38E;
padding: 10px;
//border-bottom: 1px solid #f3ba15;
width: 100%;
`
const Title = styled.div`
color: #541E35;
font-family: 'Poppins', sans-serif;
font-size: 30px;
font-weight: 600;
`
const Sub = styled.div`
color: #541E35;
font-family: 'Josefin Sans', sans-serif;
`