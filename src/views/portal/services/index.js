import React from 'react'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'


export default () => {
  return (
    <React.Fragment>

      <Services>
      <TitlePage title="Serviços" sub="Conheça nossos serviços"/>
      </Services>

    </React.Fragment>
  )
}

const Services = styled.div`
height: 500px;
display: block;
`








