import React from 'react'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <HeaderContainer >
                <Header />
            </HeaderContainer >
            <Content>
                {children}
            </Content>
            <FooterContainer>
                <Footer/>
            </FooterContainer >
        </React.Fragment>
    )
}

export default Layout

const HeaderContainer = styled.div`

width: 100%
`

const Content = styled.div`
background: pink;
min-height: 500px;
`


const FooterContainer = styled.div`
background: green;
width: 100%;

`