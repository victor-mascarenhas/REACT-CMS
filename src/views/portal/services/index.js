import React from 'react'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'
import { Container, Row, Col} from 'react-bootstrap'


export default () => {
  return (
    <React.Fragment>

      <Services>
      <TitlePage title="Serviços" sub="Conheça nossos serviços"/>

      <Container>
        <Row>
          <ServiceItem>First</ServiceItem>
          <ServiceItem>Second</ServiceItem>
          <ServiceItem>Third</ServiceItem>
          <ServiceItem>Fourth</ServiceItem>
        </Row>
      </Container>

      </Services>

    </React.Fragment>
  )
}

const Services = styled.div`
height: 500px;
display: block;
`
const ServiceItem = styled(Col)`
width: 20%;
background: red;
height: 200px;
margin:10px;
`







