import React from 'react'
import styled from 'styled-components'
import {Row, Col, Container} from 'react-bootstrap'




const InfoHome = () => {
    return (
        <Info>
            <Container>
            <Row>
                <Col><ItemInfo>
                    <h4>(21) 0000-0000</h4>
                    </ItemInfo></Col>
                <Col><ItemInfo>2</ItemInfo></Col>
                <Col><ItemInfo>3</ItemInfo></Col>
            </Row>
            </Container>
        </Info>
    )
}

export default InfoHome

const Info = styled.div`
height: 150px;
width: 100%;
color: #eee;
//background: #ff4757;
`

const ItemInfo = styled.div`
background: red;
width: 100%;
height: 150px;
display: flex;
justify-content: center;
align-items: center;
`