import React from 'react'
import styled from 'styled-components'
import { BiHome } from 'react-icons/bi'
import Layout from '../../components/Layout'

const Home = () => {
  return (
    <React.Fragment>
      <Layout>
        <HomeContainer>
          <IconHome />Pagina Inicial
        </HomeContainer>
      </Layout>
    </React.Fragment>
  )
}


export default Home

const HomeContainer = styled.div`
background: #ccc;
`

const IconHome = styled(BiHome)`
color: red
`


