import React from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'


export default () => {
  return (
    <React.Fragment>

      <Product>
      <TitlePage title="Produtos" sub="Conheça nossos produtos"/>

      <Container>
      <TabBox defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          heuheuhehuehehueh
        </Tab>
        <Tab eventKey="profile" title="Profile">
        heuheuhehuehehueh
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
        heuheuhehuehehueh
        </Tab>
      </TabBox>
      </Container>      
      </Product>

    </React.Fragment>
  )
}

const Product = styled.div`
height: 500px;
display: block;
.tab-content{
  background: #eee !important;
}

`

const TabBox = styled(Tabs)`
background: #fff;
`





