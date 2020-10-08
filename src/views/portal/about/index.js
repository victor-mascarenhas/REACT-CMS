import React from 'react'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'


export default () => {
  return (
    <React.Fragment>

      <About>
        <TitlePage title="Sobre" sub="Conheça nossa história"/>
      </About>

    </React.Fragment>
  )
}

const About = styled.div`
height: 500px;
display: block;
`








