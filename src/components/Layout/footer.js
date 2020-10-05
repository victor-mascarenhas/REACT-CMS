import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import {FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <Container>
                <FooterInfo>
                    <Row>
                        <Col md={3}>
                            <div className="title">Sobre Nós</div>
                            <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat lorem diam, sed consequat ligula elementum sed. Mauris lacus purus, ultricies id facilisis eget, blandit vel massa.
                            </div>

                        </Col>
                        <Col md={4}>
                        <div className="title">Endereço</div>
                            <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat lorem diam, sed consequat ligula elementum sed. Mauris lacus purus, ultricies id facilisis eget, blandit vel massa.
                            </div>
                        </Col>
                        <Col md={2}>
                        <div className="title">Serviços</div>
                            <ul>
                                <li></li>
                            </ul>
                        </Col>
                        <Col md={3}>
                        <div className="title">Contatos</div>                            
                            <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat lorem diam, sed consequat ligula elementum sed. Mauris lacus purus, ultricies id facilisis eget, blandit vel massa.
                            </div>
                        </Col>
                    </Row>
                </FooterInfo>
                <Row>
                    <FooterSocial>
                    <FaFacebook/>
                    <FaInstagram/>
        </FooterSocial>
                    <FooterCopy>
                    © 2020 All Rights Reserved | Managed By Victor Mascarenhas
        </FooterCopy>
                </Row>
            </Container>
        </>
    )
}

export default Footer

const FooterInfo = styled.div`
.title{
    font-size: 25px;
    font-weight: 600;
    padding: 5px 0;
    border-bottom: thin solid;
    color: yellow;
}
`
const FooterSocial = styled.div`
width: 100%;
`

const FooterCopy = styled.div`
width: 100%;
`
