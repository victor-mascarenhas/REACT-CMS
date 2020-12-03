import React from 'react'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'
import { Container} from 'react-bootstrap'


export default () => {
  return (
    <React.Fragment>

      <Services>
      <TitlePage title="Serviços" sub="Conheça nossos serviços"/>

      <Container>
      <Description>
        <h1>Em Breve!!!</h1>
      </Description>
      </Container>

      </Services>

    </React.Fragment>
  )
}

const Services = styled.div`
height: 500px;
display: block;
`

const Description = styled.div`

height: 200px;
background: #fff4;
width: 100%;

h1{
  color: #FFB43E;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: 40px;
}
`







