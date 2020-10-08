import React from 'react'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'


export default () => {
  return (
    <React.Fragment>

      <Product>
      <TitlePage title="Produtos" sub="Conheça nossos produtos"/>
      </Product>

    </React.Fragment>
  )
}

const Product = styled.div`
height: 500px;
display: block;
`








