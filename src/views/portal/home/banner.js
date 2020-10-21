import React from 'react'
import styled from 'styled-components'
import BgBanner from '../../../assets/images/mexican-texture-2.jpg'
import Carousel from 'react-bootstrap/Carousel'
import { Button, Row, Col } from 'react-bootstrap'

import Item1 from '../../../assets/images/kisspng-taco-mexican-cuisine-salsa-breakfast-jack-keaton-s-tacos-5abd4e91d32e57.459498511522355857865.png'
import Item2 from '../../../assets/images/kisspng-korean-taco-carnitas-mexican-cuisine-al-pastor-mexican-tacos-5b413fe1a4b456.9206978415310028496746.png'



const BannerHome = () => {
    return (
        <Banner>
            <div className="bg">
                <BannerItem>
                    <Carousel controls={false}>
                        <Carousel.Item>
                            <Row className="mt-5 py-3 justify-content-center align-items-center">
                                <Col md={3} sm={3}>
                                    <img src={Item2} className="img-fluid" alt="" />
                                </Col>
                                <Col md={3} sm={3} className="mb-4">
                                    <div className="tag">Promoção</div>
                                    <h2 className="mb-4 title">Tacos Aleatórios</h2>
                                    <div className="mb-4 desc">ehuehehueuheuhehueubuguigftdtrdrtdtrdtrtrdrdrdtrtdrdrdr</div>
                                    <Button variant="danger"> Comprar ! </Button>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row className="mt-5 py-3 justify-content-center align-items-center">
                                <Col md={3} sm={3}>
                                    <img src={Item1} className="img-fluid" alt="" />
                                </Col>
                                <Col md={3} sm={3} className="mb-4">
                                    <div className="tag">Promoção</div>
                                    <h2 className="mb-4 title">Outro taco qualquer</h2>
                                    <div className="mb-4 desc">ehuehehueuheuhehueubuguigftdtrdrtdtrdtrtrdrdrdtrtdrdrdr</div>
                                    <Button variant="danger"> Comprar ! </Button>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </BannerItem>
            </div>
        </Banner>
    )
}

export default BannerHome

const Banner = styled.div`
height: 500px;
width: 100%;
background-image: url(${BgBanner});
background-size: 60% 100%;
overflow: hidden;

.bg{
    background: rgba(0,0,0,0.5);
    height: 500px;
}`

const BannerItem = styled.div`
color: #eee;
`