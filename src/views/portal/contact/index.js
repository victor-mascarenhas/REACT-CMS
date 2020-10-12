import React from 'react'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'
import { Container, Row, Col} from 'react-bootstrap'


export default () => {
  return (
    <React.Fragment>

      <Contact>
      <TitlePage title="Contatos" sub="Entre em contato conosco"/>

      <Container>
        <Row>
          <Info md={4} >First</Info>
          <Form md={8} >Second</Form>
        </Row>
      </Container>
      </Contact>

    </React.Fragment>
  )
}

const Contact = styled.div`
height: 500px;
display: block;
`

const Info = styled(Col)`
width: 100%;
background: red;
height: 300px;
`
const Form = styled(Col)`
width: 100%;
background: blue;
height: 300px;
`









