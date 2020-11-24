import React from 'react'
import styled from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap'
import { MdLocationOn, MdEmail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'




const InfoHome = () => {
    return (
        <Info>
            <Container>
                <Row>
                    <Col>
                        <ItemInfo>
                            <Icons>
                            <FaWhatsapp/>
                            </Icons>
                            +55 (21) 7777-8888
                    </ItemInfo>
                    </Col>
                    <Col>
                        <ItemInfo>
                            <Icons>
                                <MdLocationOn />
                            </Icons>
                    Av. das Américas, 500 - Barra da Tijuca, Rio de Janeiro - RJ, 22640-100</ItemInfo>
                    </Col>
                    <Col>
                        <ItemInfo>
                            <Icons>
                            <MdEmail/>
                            </Icons>
                            contato@chidotacos.com
                        </ItemInfo>
                    </Col>
                </Row>
            </Container>
        </Info>
    )
}

export default InfoHome

const Info = styled.div`
height: 150px;
width: 100%;
color: #FFB43E;
font-weight: 600;
margin: 1rem 0 1rem 0 ;
`

const ItemInfo = styled.div`
width: 100%;
height: 150px;
display: flex;
justify-content: center;
align-items: center;
border-style: solid;
`

const Icons = styled.div`
font-size: 30px;
padding: 1rem;
`