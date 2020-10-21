import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default () => {
    return (
        <Footer>
            <Container>
                <FooterInfo>
                    <Row>
                        <Col md={4}>
                            <div className="title">Sobre Nós</div>
                            <div className="aboutUs">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat lorem diam, sed consequat ligula elementum sed. Mauris lacus purus, ultricies id facilisis eget, blandit vel massa.
                            </div>

                        </Col>
                        <Col md={4}>
                            <div className="title">Nossos Destaques</div>
                            <div className="menu">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat lorem diam, sed consequat ligula elementum sed. Mauris lacus purus, ultricies id facilisis eget, blandit vel massa.
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="title">Onde estamos</div>
                            <div className="address">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat lorem diam, sed consequat ligula elementum sed. Mauris lacus purus, ultricies id facilisis eget, blandit vel massa.
                            </div>
                        </Col>
                    </Row>
                </FooterInfo>
                <Row>
                    <FooterSocial>
                        <FaFacebook />
                        <FaInstagram />
                    </FooterSocial>
                    <FooterCopy>
                        © 2020 All Rights Reserved | Managed By Victor Mascarenhas
        </FooterCopy>
                </Row>
            </Container>
        </Footer>
    )
}


const Footer = styled.div`
background-color: #541E35;
padding: 10px 0;
color: #FFB43E;
`

const FooterInfo = styled.div`
.title{
    font-size: 25px;
    font-weight: 600;
    padding: 5px 0;
    border-bottom: thin solid;
    color: #541E35;
    margin-bottom: 10px;
    font-family: 'Poppins', sans-serif; 
}
`
const FooterSocial = styled.div`
width: 100%;
border-bottom: 1px dotted #ccc;
padding: 5px;
svg {
    font-size: 30px;
margin: 5px;
&:hover{
    color: #DF5D2E;
    cursor: pointer;
}}
`

const FooterCopy = styled.div`
width: 100%;
padding: 10px;
text-align: center;
`
