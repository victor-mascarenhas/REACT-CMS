import React from 'react'
import styled from 'styled-components'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Content>
                {children}
            </Content>
            <Footer />
        </React.Fragment>
    )
}

export default Layout

const Header = styled.div`
background: blue;
height: 200px;
width: 100%
`

const Content = styled.div`
background: pink;
min-height: 500px;
`


const Footer = styled.div`
background: green;
height: 200px;
width: 100%

`