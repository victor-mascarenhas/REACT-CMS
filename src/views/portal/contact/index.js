import React from 'react'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'


export default () => {
  return (
    <React.Fragment>

      <Contact>
      <TitlePage title="Contatos" sub="Entre em contato conosco"/>
      </Contact>

    </React.Fragment>
  )
}

const Contact = styled.div`
height: 500px;
display: block;
`








