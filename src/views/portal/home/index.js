import React from 'react'
import styled from 'styled-components'

import Banner from './banner'
import About from './about'
import Services from './services'
import Products from './products'
import Info from './info'







const Home = () => {
  return (
    <React.Fragment>      
        <HomeContainer>
          <Banner/>
          <Info />
          <About/>
          <Services/>
          <Products/>
        </HomeContainer>      
    </React.Fragment>
  )
}


export default Home

const HomeContainer = styled.div`
`



